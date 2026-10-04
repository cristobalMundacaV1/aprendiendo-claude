# 17 — Patrones de agentes reutilizables

Esta sección convierte los principios de loops en diseños que puedes copiar y adaptar.

## A. Debugger autónomo acotado

~~~text
bug
→ reproducir
→ formular hipótesis
→ probar hipótesis barata
→ identificar causa
→ cambio mínimo
→ test de regresión
→ suite relacionada
→ review
~~~

Stop conditions: bug no reproducible, requiere cambiar contrato, faltan datos críticos o se agotó el presupuesto de hipótesis.

## B. Implementador hasta gates verdes

~~~text
plan → incremento pequeño → test focal → corregir → suite → lint → build → review → DONE
~~~

## C. Research loop

~~~text
pregunta → fuente → hechos → incertidumbre principal → nueva evidencia → actualizar conclusión → repetir
~~~

Termina cuando las incertidumbres restantes ya no cambian la decisión.

## D. Supervisor + especialistas

~~~text
SUPERVISOR
├─ arquitectura
├─ backend
├─ frontend
├─ tests
└─ seguridad
~~~

El supervisor conserva objetivo global, dependencias, estado e integración.

## E. Reviewer adversarial

~~~text
No asumas que la implementación es correcta.
Busca regresiones, carreras, errores de permisos, estados imposibles,
casos límite, entradas maliciosas y supuestos no demostrados.
~~~

## F. Cola de tickets

~~~text
NEW → TRIAGED → READY → CLAIMED → IN_PROGRESS → VERIFYING → DONE
~~~

Alternativas: BLOCKED, RETRY, NEEDS_HUMAN, REJECTED.

## G. Generador + juez

~~~text
Generator A ─┐
Generator B ─┼→ Judge → mejor opción
Generator C ─┘
~~~

Úsalo cuando la calidad de la decisión justifique el costo adicional.

## H. Map → Reduce

~~~text
muchos elementos → workers paralelos → resultados estructurados → reducer → resultado global
~~~

Ideal para auditorías, clasificación, migraciones repetitivas y análisis masivo.

## I. Plan → Execute → Replan

~~~text
crear plan → ejecutar → observar → ¿sigue válido? → continuar o replanificar
~~~

El agente debe explicar por qué cambia el plan.

## J. State machine

~~~text
DRAFT → REVIEW → APPROVED → PUBLISHED
          ↓
       REJECTED
~~~

## K. Saga / compensación

~~~text
acción A → acción B → acción C falla → compensar B → compensar A
~~~

## L. Canary autonomy

~~~text
5% jobs → medir → 10% → medir → 25% → 50% → 100%
~~~

Amplía autonomía con evidencia.

## Contrato universal para un agente

~~~text
NAME:
MISSION:
INPUT:
OUTPUT:
TOOLS:
ALLOWED ACTIONS:
FORBIDDEN ACTIONS:
STATE:
LOOP:
VALIDATION:
STOP CONDITIONS:
RETRY POLICY:
ESCALATION POLICY:
BUDGET:
OBSERVABILITY:
~~~

Guarda esta plantilla. Sirve para diseñar casi cualquier agente serio.
