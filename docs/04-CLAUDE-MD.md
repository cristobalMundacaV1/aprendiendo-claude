# 04 — `CLAUDE.md`

`CLAUDE.md` es una de las piezas más importantes de Claude Code.

Su función es guardar **instrucciones persistentes del proyecto** que Claude debe conocer al trabajar allí.

## Qué SÍ poner

### Propósito

```md
## Producto
API de reservas para clínicas veterinarias.
```

### Arquitectura esencial

```md
## Arquitectura
- backend/: FastAPI
- frontend/: React
- db/: migraciones PostgreSQL
```

### Comandos importantes

```md
## Validación
- tests: `pytest`
- lint: `ruff check .`
- frontend: `npm test`
```

### Reglas duraderas

```md
- No modificar migraciones ya desplegadas.
- Nuevos endpoints requieren tests.
- No introducir dependencias sin justificar.
```

### Flujo Git

```md
- Revisar `git status` antes de editar.
- No hacer force push.
- No descartar cambios ajenos.
```

## Qué NO poner

Evita:

- conversaciones completas;
- documentación de 30 páginas;
- secretos;
- instrucciones contradictorias;
- detalles de una única tarea;
- información obsoleta;
- “sé inteligente”, “hazlo perfecto” y frases sin criterio verificable.

## Plantilla recomendada

```md
# CLAUDE.md

## Producto
Qué hace el sistema y para quién.

## Stack
Tecnologías realmente usadas.

## Arquitectura
Carpetas y límites principales.

## Comandos
Cómo instalar, ejecutar, testear, lint y build.

## Convenciones
Reglas que deben cumplirse siempre.

## Seguridad
Archivos o acciones sensibles.

## Git
Forma de trabajar y restricciones.

## Definición de terminado
Qué debe comprobar Claude antes de cerrar una tarea.
```

## `CLAUDE.local.md`

Úsalo para preferencias locales que no deben compartirse con todo el equipo.

Por ejemplo:

```md
# CLAUDE.local.md

- En mi máquina el backend corre en el puerto 8010.
- Prefiero que no hagas commits automáticamente.
```

Normalmente conviene ignorarlo en Git.

## Archivos anidados

En repositorios grandes puedes usar instrucciones más específicas en subdirectorios o reglas dentro de `.claude/rules/`.

Esto evita contaminar todo el proyecto con reglas que solo importan en una parte.
