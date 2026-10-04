# 02 — Cómo “piensa” Claude Code

No necesitas conocer la teoría de IA para usarlo bien. Solo entiende este ciclo:

```text
OBJETIVO DEL USUARIO
      ↓
OBSERVAR EL PROYECTO
      ↓
RAZONAR / PLANIFICAR
      ↓
USAR HERRAMIENTAS
      ↓
LEER RESULTADOS
      ↓
EDITAR / EJECUTAR / PROBAR
      ↓
REPETIR HASTA TERMINAR
```

Claude no “sabe” automáticamente todo tu repositorio. Tiene que leer lo necesario.

## Herramientas incorporadas

Según la superficie y configuración, Claude puede tener acceso a capacidades como:

- leer y editar archivos;
- buscar texto y símbolos;
- ejecutar comandos;
- usar Git;
- consultar la web;
- conectarse a servicios vía MCP;
- delegar trabajo a subagentes.

## El contexto es limitado

Todo lo que Claude necesita considerar ocupa contexto:

- conversación;
- `CLAUDE.md`;
- archivos leídos;
- resultados de comandos;
- herramientas;
- documentación cargada.

Por eso un proyecto bien configurado supera a pegar 500 líneas de instrucciones en cada prompt.

## ¿Qué configuración usar para qué?

| Necesidad | Herramienta adecuada |
|---|---|
| Regla que siempre debe recordar | `CLAUDE.md` |
| Regla para una carpeta o tecnología | `.claude/rules/` |
| Procedimiento repetible | Skill |
| Conectar GitHub, DB, Slack, navegador, etc. | MCP / Connector |
| Ejecutar algo automáticamente ante un evento | Hook |
| Investigación o trabajo especializado aislado | Subagent |
| Historial y reversión | Git |

## Error clásico

Meter absolutamente todo en `CLAUDE.md`.

Un `CLAUDE.md` gigantesco cuesta contexto en cada turno y mezcla reglas realmente importantes con documentación que solo se necesita de vez en cuando.

La documentación oficial recomienda mantenerlo conciso y mover material especializado a reglas o Skills.
