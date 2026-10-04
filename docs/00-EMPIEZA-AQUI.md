# 00 — Empieza aquí

## ¿Qué es Claude Code?

Claude Code es un agente de programación que puede trabajar directamente sobre un proyecto: leer archivos, buscar código, editar, ejecutar comandos, correr pruebas, usar Git y conectarse a herramientas externas.

La diferencia importante es esta:

> Un chatbot te responde. Un agente puede **hacer trabajo** dentro de un entorno.

Eso lo vuelve mucho más útil, pero también exige aprender a darle contexto, límites y una definición clara de “terminado”.

## Tu primera meta

No intentes dominar todo en un día. La primera meta es poder abrir un repositorio y decir algo como:

```text
Explora este proyecto sin modificar nada.
Explícame:
1. qué hace,
2. cómo está organizado,
3. cómo se ejecuta,
4. dónde están las pruebas,
5. cuáles son los archivos más importantes.
Después proponme un plan de aprendizaje del código.
```

Si Claude puede responder eso correctamente, ya tienes una base.

## Los 5 hábitos que más importan

### 1. Dale un objetivo observable

Malo:

```text
mejora esto
```

Mejor:

```text
Reduce la duplicación de este módulo sin cambiar su API pública.
Mantén todos los tests existentes pasando y agrega tests para los casos límite que descubras.
```

### 2. Separa investigar de modificar

Primero:

```text
Audita el problema. No edites nada todavía.
```

Luego:

```text
Implementa el plan aprobado.
```

### 3. Usa Git siempre

Git es tu red de seguridad. Antes de una tarea grande:

```bash
git status
```

Idealmente trabaja con una rama.

### 4. Pide evidencia

No basta con “listo”. Pide:

- tests ejecutados;
- build;
- lint;
- archivos cambiados;
- SHA del commit cuando corresponda.

### 5. No llenes el contexto con basura

Más texto no siempre significa más inteligencia. Claude rinde mejor con instrucciones relevantes, código necesario y documentación bien ubicada.

## Después de este capítulo

Ve a [`01-INSTALACION.md`](01-INSTALACION.md).
