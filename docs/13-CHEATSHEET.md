# 13 — Cheatsheet

## Terminal

```bash
claude                 # abrir Claude Code
claude --version       # versión
claude doctor          # diagnóstico
claude -c              # continuar sesión reciente
claude --resume        # recuperar sesión
claude mcp             # configuración MCP desde CLI
```

La sintaxis puede evolucionar. Confirma siempre con:

```bash
claude --help
```

## Dentro de Claude Code

```text
/help          ayuda
/init          inicializar instrucciones de proyecto
/memory        gestionar memoria/instrucciones
/mcp           revisar conexiones MCP
/permissions   revisar permisos
/context       inspeccionar contexto
/doctor        diagnóstico
```

## Git

```bash
git status
git diff
git diff --check
git log --oneline -10
git switch -c feature/nombre
git add <archivo>
git commit -m "feat: descripción"
git push -u origin feature/nombre
```

## Prompt base

```text
Contexto:
...

Objetivo:
...

Alcance:
...

Restricciones:
...

Terminado cuando:
...

Primero investiga. No edites hasta entender la causa.
```

## ¿Dónde va cada cosa?

```text
Siempre recordar             → CLAUDE.md
Regla especializada          → .claude/rules/
Procedimiento reutilizable   → .claude/skills/
Servicio externo             → MCP
Automatización obligatoria   → Hook
Trabajo aislado              → Subagent
```
