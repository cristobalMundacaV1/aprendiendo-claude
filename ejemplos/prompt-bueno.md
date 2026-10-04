# Ejemplo de prompt bien definido

~~~text
Contexto:
El endpoint POST /orders puede recibir retries del cliente cuando existe timeout.

Objetivo:
Hacer la creación de órdenes idempotente.

Alcance:
Backend del módulo orders y tests relacionados.

Restricciones:
- no cambiar el contrato HTTP;
- no agregar dependencias;
- no modificar migraciones antiguas.

Terminado cuando:
- existe un test que reproduce el doble envío;
- el test pasa con la solución;
- suite relacionada pasa;
- lint pasa;
- no hay cambios fuera del alcance.

Primero investiga y explícame la causa.
No edites hasta entender el flujo actual.
~~~
