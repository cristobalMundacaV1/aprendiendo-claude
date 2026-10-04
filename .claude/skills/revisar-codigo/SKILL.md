---
name: revisar-codigo
description: Revisa cambios del repositorio buscando errores, regresiones, problemas de seguridad y ausencia de pruebas.
---

# Revisar código

Cuando se invoque esta skill:

1. Lee primero `git status` y `git diff`.
2. Identifica el objetivo del cambio.
3. Busca errores funcionales antes que problemas de estilo.
4. Revisa seguridad, manejo de errores y casos límite.
5. Comprueba si hay pruebas suficientes.
6. No modifiques nada a menos que el usuario también pida corregir.
7. Entrega hallazgos ordenados por severidad y cita archivo/línea cuando sea posible.
