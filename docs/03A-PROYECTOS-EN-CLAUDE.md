# 03A — Proyectos en Claude: nombre, descripción, instrucciones y conocimiento

Este capítulo habla de los **Projects de Claude (claude.ai)**, no de una carpeta Git ni de `CLAUDE.md`.

## Qué es un Project

Un Project es un espacio de trabajo separado para un tema, producto o área. Puede tener:

- chats propios;
- instrucciones de proyecto;
- una base de conocimiento con archivos y documentos;
- contexto específico que no necesitas repetir en cada conversación.

## La distinción más importante

Al crear un proyecto normalmente verás campos como **nombre** y **descripción**.

### Nombre

Úsalo para identificar rápidamente el proyecto.

Buenos ejemplos:

```text
Sistema veterinario — Desarrollo
Tesis — Ingeniería Informática
Aprender Python
Empresa — Marketing
```

Evita nombres genéricos como:

```text
Proyecto 1
Cosas
Trabajo
Claude
```

### Descripción

La descripción sirve principalmente para **organizar e identificar** el proyecto.

**No confíes en la descripción como contexto para Claude.** La documentación oficial indica que Claude no tiene acceso a esos detalles como instrucciones del proyecto.

Ejemplo de descripción útil para ti:

```text
Desarrollo y mantenimiento del SaaS para clínicas veterinarias.
```

Pero las reglas importantes deben ir en **Project Instructions**.

## Project Instructions

Aquí debes poner lo que Claude debe considerar en todos los chats de ese proyecto.

### Qué poner

- objetivo del proyecto;
- rol que debe asumir Claude;
- criterios de calidad;
- restricciones estables;
- forma de responder;
- decisiones importantes que siguen vigentes.

### Ejemplo

```text
Este proyecto corresponde al desarrollo de un SaaS para clínicas veterinarias.

Objetivo:
Construir un producto mantenible y fácil de operar por clínicas pequeñas y medianas.

Forma de trabajar:
- Prioriza soluciones simples antes que arquitectura innecesaria.
- Separa hechos, supuestos y recomendaciones.
- Cuando falte información, indícalo explícitamente.
- Para cambios técnicos, explica impacto, riesgos y validación.
- No inventes requisitos del negocio.

Stack principal:
- Backend: FastAPI + PostgreSQL
- Frontend: React

Calidad:
- Todo cambio funcional relevante debe incluir pruebas.
- No introducir dependencias sin justificar.
```

## Project Knowledge

La base de conocimiento contiene material que Claude puede consultar en los chats del proyecto.

Buenos candidatos:

- documentos de requisitos;
- arquitectura;
- manuales;
- decisiones técnicas;
- investigación;
- documentación de APIs;
- glosarios del negocio;
- archivos de referencia estables.

### Qué NO subir porque sí

No conviertas Project Knowledge en un basurero.

Evita:

- versiones duplicadas del mismo documento;
- archivos antiguos que contradicen el estado actual;
- logs gigantes sin valor permanente;
- credenciales;
- documentos que ya no aplican.

## Contexto entre chats

Un error común es pensar:

> “Si lo dije en otro chat del mismo proyecto, Claude ya lo sabe en todos.”

No dependas de eso.

Si una información debe estar disponible para todos los chats, colócala en:

- Project Instructions, si es una regla o guía;
- Project Knowledge, si es documentación o contenido de referencia.

## Proyecto de Claude vs `CLAUDE.md`

Son capas distintas:

```text
Project Instructions (Claude.ai)
→ guía general del espacio de trabajo y sus chats

Project Knowledge
→ documentos de referencia compartidos en el Project

CLAUDE.md (repositorio)
→ instrucciones técnicas que Claude Code carga al trabajar en ese código
```

Puedes usar las tres al mismo tiempo.

## Ejemplo completo

Supón que trabajas en una app veterinaria.

### Project name

```text
VetCloud — Producto
```

### Project description

```text
Diseño, desarrollo y estrategia del SaaS para clínicas veterinarias.
```

### Project Instructions

Incluye:

- objetivo del producto;
- forma de trabajar;
- decisiones duraderas;
- criterios de calidad;
- tono/formato esperado.

### Project Knowledge

Sube:

```text
PRD.md
ARQUITECTURA.md
MODELO-DE-DATOS.md
GLOSARIO-VETERINARIO.md
ROADMAP.md
```

### Repositorio

Dentro del repo mantén:

```text
CLAUDE.md
.claude/rules/
.claude/skills/
```

## Cuándo crear un Project nuevo

Créalo cuando el trabajo tenga contexto propio y vaya a durar más de una conversación.

Ejemplos:

- una empresa;
- un producto;
- una tesis;
- una certificación;
- una investigación larga.

No necesitas un Project nuevo para cada pregunta pequeña.

## Documentación oficial

- https://support.claude.com/es/articles/9519177-como-puedo-crear-y-gestionar-proyectos
- https://support.claude.com/es/articles/10185728-comprender-las-funciones-de-personalizacion-de-claude
