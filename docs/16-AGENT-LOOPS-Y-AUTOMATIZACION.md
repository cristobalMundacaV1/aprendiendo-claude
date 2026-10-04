# 16 — Agent loops y automatización de flujos

Esta sección es para cuando ya domines lo básico y quieras que Claude trabaje de forma iterativa con **muy poca intervención humana**.

La idea correcta no es darle libertad infinita al agente. Es construir **loops controlados** con objetivo, estado, herramientas, validación, presupuesto, trazabilidad y condiciones de salida.

## 1. El loop fundamental

~~~text
OBJETIVO
   ↓
OBSERVAR
   ↓
ENTENDER EL ESTADO
   ↓
ELEGIR SIGUIENTE ACCIÓN
   ↓
ACTUAR
   ↓
VALIDAR
   ↓
¿OBJETIVO CUMPLIDO?
 ┌───────┴────────┐
 sí               no
 ↓                ↓
CIERRE          CORREGIR
                  ↓
               REPETIR
~~~

Forma compacta:

~~~text
observe → decide → act → verify → repeat
~~~

La parte que vuelve confiable al sistema no es act, sino **verify**.

## 2. Todo loop necesita salida

Nunca diseñes “trabaja hasta que quede perfecto”.

Diseña criterios objetivos:

- tests objetivo pasan;
- lint y build pasan;
- no quedan hallazgos críticos;
- el diff sigue dentro del alcance;
- existe evidencia de cierre.

Un agente sin definición de terminado puede iterar de más o ampliar el alcance.

## 3. Loop mínimo de ingeniería

~~~text
1. inspeccionar estado
2. identificar siguiente bloqueo
3. aplicar cambio mínimo
4. ejecutar prueba relevante
5. interpretar resultado
6. si falla → corregir
7. si pasa → gates superiores
8. revisar diff
9. cerrar
~~~

## 4. Presupuesto

Todo loop debe tener límites:

- máximo de iteraciones;
- máximo de archivos;
- límite de llamadas API;
- límite de costo/tiempo;
- máximo de hipótesis fallidas;
- acciones prohibidas.

Si alcanza un límite, debe detenerse y entregar evidencia, intentos realizados, causa probable y siguiente acción recomendada.

## 5. Estado explícito

~~~text
DISCOVERED
→ PLANNED
→ IMPLEMENTING
→ TESTING
→ REVIEWING
→ READY
→ DONE
~~~

Excepciones:

~~~text
BLOCKED
NEEDS_HUMAN
FAILED_RETRYABLE
FAILED_FINAL
~~~

Para workflows largos, persiste estado fuera del chat: JSON, DB, issue, job table o checkpoint.

## 6. Human-in-the-loop

Escala al humano cuando haya:

- decisiones de negocio;
- cambios irreversibles;
- dinero real;
- producción;
- datos sensibles;
- conflicto entre requisitos;
- riesgo legal o reputacional.

La autonomía buena reduce intervención humana, no elimina el juicio humano.

## 7. Retry inteligente

Retry no significa repetir lo mismo.

~~~text
falló
→ clasificar fallo
→ cambiar hipótesis/estrategia
→ volver a intentar
~~~

Clasificación útil:

~~~text
TRANSIENT   → retry + backoff
VALIDATION  → corregir entrada
LOGIC       → investigar causa
DEPENDENCY  → comprobar servicio
PERMISSION  → autenticar/escalar
UNKNOWN     → reunir evidencia
~~~

## 8. Backoff y circuit breaker

Para servicios externos, aumenta la espera entre intentos.

~~~text
1s → 2s → 4s → 8s
~~~

Si un servicio falla repetidamente, abre un circuit breaker temporal para evitar una cascada de errores.

## 9. Idempotencia

Antes de automatizar una escritura externa pregunta:

> ¿Qué pasa si esta acción se ejecuta dos veces?

Cobros, facturas, emails, creación de recursos y cambios de estado deben tolerar retries sin duplicar efectos cuando sea posible.

## 10. Planner → executor → verifier

Para tareas complejas separa roles:

~~~text
PLANNER
  ↓
PLAN ESTRUCTURADO
  ↓
EXECUTOR
  ↓
RESULTADO
  ↓
VERIFIER
~~~

El planner diseña.  
El executor actúa.  
El verifier puede rechazar.

**DONE lo decide la evidencia, no la confianza del builder.**

## 11. Supervisor + workers

~~~text
                 ┌→ Worker frontend
SUPERVISOR ──────┼→ Worker backend
                 ├→ Worker tests
                 └→ Worker docs
                         ↓
                    resultados
                         ↓
                    SUPERVISOR
                         ↓
                  integración final
~~~

Cada worker debería recibir un contrato:

~~~text
ROLE:
OBJECTIVE:
SCOPE:
INPUTS:
MAY MODIFY:
MUST NOT MODIFY:
VALIDATION:
STOP CONDITIONS:
OUTPUT FORMAT:
~~~

## 12. Researcher → builder → reviewer

~~~text
RESEARCHER
  ↓
BUILDER
  ↓
REVIEWER ADVERSARIAL
  ↓
BUILDER CORRIGE
  ↓
FINAL GATES
~~~

El reviewer debe buscar regresiones, carreras, permisos incorrectos, estados imposibles, casos límite y supuestos no demostrados.

## 13. Cola de trabajo

~~~text
QUEUE
  ↓
CLAIM JOB
  ↓
LOAD CONTEXT
  ↓
EXECUTE LOOP
  ↓
VALIDATE
  ↓
STORE RESULT
  ↓
DONE / RETRY / ESCALATE
~~~

Cada job debe incluir objetivo, alcance, restricciones, aceptación y máximo de intentos.

## 14. Dead-letter queue

Si un job supera el máximo de retries, envíalo a una cola de fallos para diagnóstico. Nunca pierdas tareas silenciosamente.

## 15. Memoria de trabajo vs permanente

Memoria de trabajo:

- hipótesis;
- logs;
- intento actual;
- resultados temporales.

Memoria permanente:

- decisión arquitectónica;
- requisito estable;
- convención;
- procedimiento reusable.

Solo promueve lo duradero.

## 16. Observabilidad

Registra:

- workflow/job ID;
- estado;
- iteración;
- acciones;
- herramientas;
- tests;
- errores;
- escalaciones;
- commits/PRs;
- costo si aplica.

Sin observabilidad, “autónomo” puede convertirse en “imposible de depurar”.

## 17. Gates jerárquicos

~~~text
cambio
 ↓
test focal
 ↓
tests del módulo
 ↓
suite completa
 ↓
lint
 ↓
build
 ↓
review
~~~

Falla barato y temprano.

## 18. Artefactos como interfaz entre agentes

Usa artefactos explícitos:

~~~text
research.md
plan.md
implementation-report.md
test-report.json
review.md
release-checklist.md
~~~

Un agente produce y otro consume. Es más robusto que depender solo de mensajes.

## 19. Concurrencia

Si varios agentes escriben, usa:

- una rama por tarea;
- worktree por worker;
- locks;
- job claim exclusivo;
- optimistic locking.

Nunca dejes varios workers escribiendo en main al mismo tiempo sin coordinación.

## 20. Git como protocolo de coordinación

Cada worker:

1. parte de main actualizado;
2. crea rama/worktree;
3. trabaja y valida;
4. commitea;
5. devuelve SHA o PR;
6. supervisor revisa;
7. integra;
8. verifica que main contiene el commit esperado.

Git se vuelve versionado + aislamiento + coordinación + rollback.

## 21. State machines

En procesos de negocio define transiciones permitidas:

~~~text
DRAFT → REVIEW → APPROVED → PUBLISHED
          ↓
       REJECTED
~~~

El agente decide acciones; la máquina de estados impide estados ilegales.

## 22. Saga / compensación

Si un workflow toca varios servicios:

~~~text
crear pedido
→ cobrar
→ reservar inventario
→ crear despacho
~~~

Si falla despacho:

~~~text
liberar inventario
→ reembolsar
→ cancelar pedido
~~~

Diseña compensaciones para operaciones que no pueden formar una sola transacción.

## 23. Automatización por eventos

Ejemplos:

~~~text
nuevo issue → triage agent
PR creado → reviewer
CI falla → diagnostic agent
release tag → release agent
nuevo documento → classifier
~~~

Es mejor disparar agentes por eventos que mantener loops consultando sin necesidad.

## 24. Arquitectura casi autónoma de ingeniería

~~~text
GitHub Issue
    ↓
TRIAGE AGENT
    ↓
PLANNER
    ↓
SUPERVISOR
    ↓
IMPLEMENTER
    ↓
TESTER
    ↓
REVIEWER
    ↓
¿PASS?
 ├─ no → corregir
 └─ sí → PR
            ↓
      HUMAN CHECKPOINT
            ↓
          merge
~~~

## 25. Niveles de autonomía

**Nivel 0 — asesor:** lee → recomienda.

**Nivel 1 — ejecutor supervisado:** propone → humano aprueba → ejecuta.

**Nivel 2 — ejecutor con gates:** ejecuta cambios seguros y escala acciones importantes.

**Nivel 3 — workflow autónomo acotado:** procesa jobs, valida, crea artefactos/PRs y escala excepciones.

**Nivel 4 — sistema multiagente:** supervisor + especialistas + colas + estado + observabilidad + policies.

Sube de nivel según evidencia de confiabilidad, no entusiasmo.

## Principio central

> **Automatiza decisiones repetibles. Escala decisiones ambiguas. Verifica acciones importantes.**

## Checklist antes de operar solo

- [ ] objetivo verificable;
- [ ] definición de terminado;
- [ ] límites de iteración/costo;
- [ ] retries clasificados;
- [ ] idempotencia;
- [ ] alcance de herramientas;
- [ ] política de escalación;
- [ ] observabilidad;
- [ ] rollback;
- [ ] secretos protegidos;
- [ ] checkpoints críticos;
- [ ] recuperación después de crash;
- [ ] reanudación sin duplicar efectos.

Si varias respuestas son “no”, el loop aún no está listo para operar sin supervisión.
