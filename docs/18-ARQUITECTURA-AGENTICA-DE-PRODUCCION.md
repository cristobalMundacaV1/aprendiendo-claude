# 18 — Arquitectura agentic de producción

Esta es una referencia para el día en que quieras pasar de “uso Claude para programar” a **operar workflows de agentes como software real**.

## Arquitectura de referencia

~~~mermaid
flowchart TD
    E[Eventos / Scheduler / Usuario] --> Q[Job Queue]
    Q --> O[Orchestrator / Supervisor]
    O --> S[(State Store)]
    O --> P[Planner]
    O --> W1[Worker A]
    O --> W2[Worker B]
    O --> W3[Worker C]
    W1 --> G[Tool Gateway]
    W2 --> G
    W3 --> G
    G --> GH[GitHub]
    G --> DB[DB / APIs]
    G --> CI[CI / Tests]
    W1 --> V[Verifier]
    W2 --> V
    W3 --> V
    V --> O
    O --> H{Human checkpoint?}
    H -->|sí| U[Humano]
    H -->|no| R[Resultado]
    U --> O
    O --> L[Logs / Metrics / Traces]
~~~

## Componentes

### Event source
Dispara trabajo:

- webhook;
- cron;
- issue;
- mensaje;
- nueva fila;
- fallo de CI;
- evento del negocio.

### Job queue
Absorbe carga y desacopla el disparador del procesamiento.

Cada job debería tener ID, objetivo, prioridad, attempts y estado.

### Orchestrator
No hace todo el trabajo. Coordina.

Responsabilidades:

- reclamar job;
- cargar estado;
- decidir agentes necesarios;
- controlar presupuesto;
- resolver dependencias;
- pedir checkpoint humano;
- cerrar o reintentar.

### Planner
Convierte un objetivo grande en pasos verificables.

Su salida debería ser estructurada, no una conversación interminable.

### Workers
Especialistas con herramientas y alcance mínimo.

Ejemplos:

- repo-researcher;
- backend-builder;
- frontend-builder;
- test-runner;
- security-reviewer;
- docs-writer.

### Tool Gateway
En producción conviene centralizar las herramientas sensibles.

El agente no debería recibir automáticamente acceso directo a todo.

El gateway puede aplicar:

- allowlists;
- autenticación;
- rate limits;
- idempotency;
- auditoría;
- políticas por rol.

### State Store
Permite sobrevivir reinicios.

Guarda:

- estado del workflow;
- jobs;
- checkpoints;
- resultados;
- retries;
- decisiones humanas.

### Verifier
Evalúa contra criterios explícitos.

No debería aceptar “parece correcto”.

Debe utilizar tests, schemas, reglas, diffs, queries o evaluadores según el caso.

### Human checkpoint
Intervención humana selectiva.

Idealmente el sistema llega con una decisión compacta y evidencia, no con 40 páginas de logs.

### Observabilidad
Logs, métricas y traces.

Pregunta clave:

> Si mañana una automatización hace algo extraño, ¿puedo reconstruir exactamente por qué?

## Separar control plane y execution plane

~~~text
CONTROL PLANE
- objetivos
- políticas
- planificación
- estado
- presupuestos
- permisos
- escalaciones

EXECUTION PLANE
- ejecutar comandos
- editar archivos
- consultar APIs
- correr tests
- escribir resultados
~~~

Esta separación reduce riesgo.

## Policy layer

Antes de una herramienta sensible:

~~~text
AGENT
  ↓
POLICY CHECK
  ├─ allow
  ├─ deny
  └─ require_human
       ↓
TOOL
~~~

Ejemplos:

~~~text
leer repo                  → allow
crear branch               → allow
abrir PR                   → allow
mergear main               → require_human
borrar producción          → deny
transferir dinero          → require_human
mostrar secreto            → deny
~~~

## Recovery

Diseña para que el proceso pueda caer en cualquier punto.

Un workflow robusto debe poder responder:

1. ¿Qué ya ocurrió?
2. ¿Qué efectos externos ya se ejecutaron?
3. ¿Cuál fue el último checkpoint?
4. ¿Qué se puede repetir con seguridad?
5. ¿Qué debe compensarse?

## Versiona prompts y contratos

No trates prompts importantes como texto invisible.

Versiona:

- system instructions;
- worker contracts;
- schemas;
- evaluadores;
- policies;
- modelos seleccionados.

Así puedes asociar un resultado a la versión exacta del sistema que lo produjo.

## Evals

Antes de ampliar autonomía crea un conjunto de casos históricos.

Mide:

- tasa de éxito;
- errores críticos;
- falsos positivos;
- regresiones;
- costo por job;
- latencia;
- escalaciones humanas.

Un agente no debería recibir más autonomía solo porque una demo salió bien.

## Modelo de seguridad por capacidades

En vez de “este agente es de confianza”, piensa:

~~~text
¿qué capacidades necesita exactamente?
~~~

Un reviewer probablemente necesita leer y ejecutar tests, pero no desplegar producción.

Un release agent podría crear un tag, pero no modificar código arbitrario.

## Producción gradual

~~~text
shadow mode
→ advisory
→ supervised execution
→ safe writes
→ bounded autonomy
→ broader autonomy
~~~

### Shadow mode
El agente decide qué habría hecho, pero no actúa.

Compara sus decisiones con humanos.

### Advisory
Produce planes/recomendaciones.

### Supervised execution
Ejecuta después de aprobación.

### Safe writes
Puede realizar acciones reversibles de bajo riesgo.

### Bounded autonomy
Opera solo dentro de un dominio bien definido.

## Golden rule

> **La autonomía es un permiso que se gana con evidencia.**

Diseña primero para seguridad, recuperación y medición. Después reduce intervención humana.
