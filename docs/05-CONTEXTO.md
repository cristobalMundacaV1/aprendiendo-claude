# 05 — Contexto: cómo usarlo bien

Contexto no significa “pegarle toda la empresa a Claude”.

Significa darle **la información mínima suficiente para tomar una buena decisión**.

## Contexto permanente

Debe vivir en archivos del proyecto cuando sea estable:

- `CLAUDE.md`
- `.claude/rules/`
- Skills
- documentación técnica

## Contexto temporal

Va en el prompt:

```text
Estamos corrigiendo únicamente el checkout.
El bug aparece al aplicar dos cupones consecutivos.
No cambies la API pública.
```

## Contexto externo

Puede venir de MCP:

- GitHub;
- bases de datos;
- issue trackers;
- documentación;
- Slack;
- navegadores;
- servicios internos.

## Buen patrón: contexto → objetivo → restricciones → evidencia

```text
Contexto:
El endpoint POST /orders duplica pedidos cuando el cliente reintenta por timeout.

Objetivo:
Hazlo idempotente.

Restricciones:
No cambies el contrato HTTP ni el esquema de respuesta.

Evidencia de cierre:
Agrega tests del doble envío, corre la suite relacionada y muestra los resultados.
```

## Cuando una sesión se vuelve demasiado larga

Si mezclas muchas tareas, Claude puede perder foco.

Buenas opciones:

1. terminar la tarea actual;
2. hacer commit;
3. abrir una sesión nueva;
4. dejar el conocimiento permanente en archivos del repo;
5. usar subagentes para investigaciones aisladas.

## Reglas para ahorrar contexto

- No pegues logs completos si bastan 30 líneas relevantes.
- No hagas que Claude relea todo el repositorio por costumbre.
- No guardes documentación ocasional en `CLAUDE.md`.
- Usa Skills para procedimientos o conocimiento bajo demanda.
- Desconecta MCPs que no necesitas si agregan ruido.
- Resume resultados largos antes de continuar con otra fase.

## Pregunta útil

Si dudas de lo que Claude tiene cargado, pregunta:

```text
Antes de seguir, dime qué fuentes de contexto estás usando para esta decisión y qué información te falta.
```
