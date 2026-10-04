# 08 — Skills, Rules, Hooks y Subagents

Estos conceptos parecen parecidos al principio. No lo son.

## Rules

Guarda reglas especializadas en `.claude/rules/`.

Ejemplo:

```text
.claude/rules/
├── frontend.md
├── backend.md
└── seguridad.md
```

Sirven para separar reglas que no merecen estar todas juntas en `CLAUDE.md`.

## Skills

Una Skill contiene instrucciones reutilizables para una tarea o conocimiento especializado.

Estructura típica:

```text
.claude/skills/
└── revisar-codigo/
    └── SKILL.md
```

Úsala cuando notes que repites el mismo procedimiento.

Ejemplos:

- `/revisar-codigo`
- `/preparar-release`
- `/auditar-api`

Este repo incluye una Skill real en:

[`../.claude/skills/revisar-codigo/SKILL.md`](../.claude/skills/revisar-codigo/SKILL.md)

## Hooks

Los hooks ejecutan acciones ante eventos.

Ejemplo mental:

```text
Claude edita un archivo JS
        ↓
Hook PostToolUse
        ↓
Ejecutar formatter o linter
```

Usa hooks para comportamientos que deben ser **deterministas**, no “ojalá Claude se acuerde”.

Documentación:

https://code.claude.com/docs/en/hooks-guide

## Subagents

Un subagente trabaja con contexto aislado y devuelve un resultado resumido.

Útil para:

- investigar muchas partes del código;
- revisar seguridad;
- estudiar rendimiento;
- comparar hipótesis;
- evitar llenar la conversación principal con cientos de detalles.

Documentación:

https://code.claude.com/docs/en/sub-agents

## Plugins

Un plugin empaqueta capacidades reutilizables como Skills, hooks, subagentes y servidores MCP.

Úsalos cuando necesites instalar o compartir una solución completa, no solo una instrucción.

Documentación:

https://code.claude.com/docs/en/plugins/overview

## ¿Cuál elijo?

```text
¿Debe recordarlo siempre?        → CLAUDE.md
¿Aplica solo a una parte?        → Rule
¿Es un procedimiento reusable?   → Skill
¿Debe ejecutarse siempre?        → Hook
¿Necesita aislamiento?           → Subagent
¿Necesita un servicio externo?   → MCP
¿Quiero distribuir todo junto?   → Plugin
```
