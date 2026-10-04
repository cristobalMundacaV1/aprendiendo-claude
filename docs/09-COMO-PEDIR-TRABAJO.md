# 09 — Cómo pedir trabajo

El prompt perfecto no existe. Un buen encargo sí.

## Fórmula simple

```text
1. CONTEXTO
2. OBJETIVO
3. ALCANCE
4. RESTRICCIONES
5. DEFINICIÓN DE TERMINADO
```

## Ejemplo malo

```text
arregla el login
```

Claude tiene que adivinar:

- cuál es el fallo;
- qué flujo importa;
- si puede cambiar backend;
- qué cuenta como resuelto.

## Ejemplo bueno

```text
Contexto:
El login funciona con contraseña correcta, pero si el backend devuelve 401 la UI queda cargando indefinidamente.

Objetivo:
Corregir el manejo del 401.

Alcance:
Solo frontend. No cambies la API.

Restricciones:
Mantén los componentes actuales y no agregues dependencias.

Terminado cuando:
- aparece un mensaje entendible,
- el loading vuelve a false,
- existe un test del caso 401,
- tests y lint pasan.

Primero investiga y dime la causa. No edites hasta haberla identificado.
```

## Para proyectos desconocidos

```text
Antes de modificar nada:
1. explora el código relacionado,
2. identifica el flujo de datos,
3. localiza tests existentes,
4. explícame la causa probable,
5. propón el cambio mínimo.
```

## Para tareas grandes

Divide en fases:

```text
Fase 1: auditoría
Fase 2: diseño
Fase 3: implementación
Fase 4: pruebas
Fase 5: revisión del diff
Fase 6: commit
```

## Para evitar falsa seguridad

Añade:

```text
No me digas que está resuelto solo porque el código compila.
Dame la evidencia que ejecutaste y cualquier limitación que permanezca.
```
