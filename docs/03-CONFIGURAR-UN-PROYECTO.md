# 03 — Configurar un proyecto

## Paso 1: entra al repositorio

```bash
cd mi-proyecto
git status
claude
```

## Paso 2: haz que Claude conozca el proyecto

Primero pide exploración, no cambios:

```text
Explora este repositorio sin modificar archivos.
Identifica stack, arquitectura, comandos de instalación, ejecución, tests y build.
Señala cualquier incertidumbre en vez de inventar.
```

## Paso 3: crea o mejora `CLAUDE.md`

Claude Code incluye `/init` para ayudarte a inicializar instrucciones de proyecto.

Pero no aceptes un archivo gigante generado ciegamente. Debe contener solo información que de verdad sea útil en casi todas las sesiones.

## Paso 4: define cómo se valida el proyecto

Claude debe conocer los comandos reales:

```text
Frontend tests: npm test
Lint: npm run lint
Build: npm run build
Backend tests: pytest
```

Adáptalo a tu stack.

## Paso 5: define límites

Ejemplos:

```text
- No modificar migraciones antiguas.
- No tocar .env.
- No hacer force push.
- Mantener compatibilidad con Node 22.
- No agregar dependencias sin justificar.
```

## Paso 6: configura permisos con calma

No autorices todo porque las confirmaciones te molestan.

Empieza permitiendo operaciones de lectura seguras como:

- `git status`
- `git diff`
- tests conocidos

Y conserva confirmación para acciones destructivas o externas.

## Paso 7: añade capas solo cuando exista una necesidad

No necesitas MCP, hooks, subagentes y diez Skills el primer día.

Añade una capa cuando aparezca un patrón repetido:

- Claude olvida una convención → `CLAUDE.md` o Rule.
- Repites el mismo prompt → Skill.
- Copias información de otra herramienta → MCP.
- Siempre ejecutas lo mismo después de editar → Hook.
- Una investigación ensucia demasiado tu sesión principal → Subagent.
