# Aprendiendo Claude Code desde cero

> Una guía práctica en español para aprender a trabajar con Claude Code de forma profesional: desde instalarlo hasta configurar proyectos, contexto, GitHub, MCP, Skills, reglas, hooks y flujos de trabajo seguros.

## ¿Para quién es este repo?

Para alguien que:

- nunca ha usado Claude Code;
- sabe poco o nada de agentes de programación;
- quiere aprender **cómo pedir trabajo**, no solo “chatear”;
- quiere conectar Claude con GitHub y otras herramientas;
- quiere entender qué son `CLAUDE.md`, `.claude/`, MCP, Skills, Rules, Hooks y Subagents;
- quiere tener una referencia rápida para volver cuando olvide algo.

## Ruta recomendada

No leas todo de una vez. Sigue este orden:

1. [`docs/00-EMPIEZA-AQUI.md`](docs/00-EMPIEZA-AQUI.md)
2. [`docs/01-INSTALACION.md`](docs/01-INSTALACION.md)
3. [`docs/02-COMO-PIENSA-CLAUDE-CODE.md`](docs/02-COMO-PIENSA-CLAUDE-CODE.md)
4. [`docs/03-CONFIGURAR-UN-PROYECTO.md`](docs/03-CONFIGURAR-UN-PROYECTO.md)
5. [`docs/04-CLAUDE-MD.md`](docs/04-CLAUDE-MD.md)
6. [`docs/05-CONTEXTO.md`](docs/05-CONTEXTO.md)
7. [`docs/06-GITHUB.md`](docs/06-GITHUB.md)
8. [`docs/07-MCP-Y-CONECTORES.md`](docs/07-MCP-Y-CONECTORES.md)
9. [`docs/08-SKILLS-RULES-HOOKS-AGENTS.md`](docs/08-SKILLS-RULES-HOOKS-AGENTS.md)
10. [`docs/09-COMO-PEDIR-TRABAJO.md`](docs/09-COMO-PEDIR-TRABAJO.md)
11. [`docs/10-FLUJO-PROFESIONAL.md`](docs/10-FLUJO-PROFESIONAL.md)
12. [`docs/11-SEGURIDAD.md`](docs/11-SEGURIDAD.md)
13. [`docs/12-SOLUCION-DE-PROBLEMAS.md`](docs/12-SOLUCION-DE-PROBLEMAS.md)
14. [`docs/13-CHEATSHEET.md`](docs/13-CHEATSHEET.md)
15. [`docs/14-GLOSARIO.md`](docs/14-GLOSARIO.md)
16. [`docs/15-REFERENCIAS-OFICIALES.md`](docs/15-REFERENCIAS-OFICIALES.md)
17. [`docs/16-AGENT-LOOPS-Y-AUTOMATIZACION.md`](docs/16-AGENT-LOOPS-Y-AUTOMATIZACION.md) — avanzado
18. [`docs/17-PATRONES-DE-AGENTES.md`](docs/17-PATRONES-DE-AGENTES.md) — avanzado

Después prueba el mini laboratorio de [`playground/`](playground/README.md).

Cuando domines lo básico, entra a **Agent loops y automatización**. Ahí aprenderás a diseñar agentes que iteran, se validan, coordinan workers y escalan al humano solo cuando hace falta.

---

## La idea más importante

Claude Code funciona mejor cuando le das un **entorno bien preparado**.

```text
TU OBJETIVO
   ↓
CLAUDE.md       → reglas permanentes del proyecto
.claude/rules/  → reglas específicas por área o tipo de archivo
Skills          → procedimientos reutilizables
MCP             → acceso a servicios externos
Hooks           → automatización determinista
Subagents       → trabajo especializado / contexto aislado
Git             → historial, ramas, revisión y respaldo
Tests           → evidencia de que el cambio funciona
```

No necesitas configurar todo el primer día. Empieza con:

1. Git funcionando.
2. Claude Code instalado.
3. Un repositorio.
4. Un buen `CLAUDE.md`.
5. Un flujo claro: **entender → planificar → implementar → probar → revisar → commit**.

---

## Estructura de este repo

```text
aprendiendo-claude/
├── README.md
├── CLAUDE.md
├── .claude/
│   ├── settings.json
│   ├── rules/
│   │   ├── git.md
│   │   └── seguridad.md
│   └── skills/
│       └── revisar-codigo/
│           └── SKILL.md
├── ejemplos/
│   ├── CLAUDE.md.ejemplo
│   ├── CLAUDE.local.md.ejemplo
│   ├── mcp.json.ejemplo
│   └── prompt-bueno.md
├── docs/
│   └── ...
└── playground/
    └── ...
```

## Regla de oro

**No le entregues a Claude autoridad que tú no entiendes todavía.**

Primero úsalo leyendo, explicando y proponiendo. Luego deja que edite. Después automatiza. Al final, cuando entiendas bien los riesgos, conecta herramientas externas y permisos más amplios.

## Documentación oficial

Este repositorio resume y explica conceptos, pero Claude Code cambia rápido. Cuando algo no coincida con lo que ves instalado, revisa siempre la documentación oficial:

- https://code.claude.com/docs/
- https://code.claude.com/docs/llms.txt

