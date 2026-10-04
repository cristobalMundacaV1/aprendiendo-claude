# 12 — Solución de problemas

## Claude no encuentra el proyecto correcto

Comprueba:

```bash
pwd
git status
```

Asegúrate de haber iniciado Claude desde la carpeta correcta.

## Claude ignora CLAUDE.md

- confirma ubicación y nombre exacto;
- inicia una sesión nueva si acabas de cambiar configuración persistente;
- usa herramientas de diagnóstico como `/context` o `/doctor` si están disponibles en tu versión.

Documentación:

https://code.claude.com/docs/en/debug-your-config

## Un MCP no aparece

Prueba:

```text
/mcp
```

Comprueba:

- configuración;
- autenticación;
- alcance (usuario/proyecto/local);
- servidor en ejecución;
- variables de entorno.

## Claude quiere cambiar demasiadas cosas

Detén el trabajo y redefine alcance:

```text
No continúes editando.
Resume por qué necesitas tocar cada archivo.
Reduce la solución al cambio mínimo que resuelva el objetivo.
```

## Claude afirma que algo pasa pero no hay evidencia

Pide:

```text
Ejecuta ahora la prueba relevante y entrega únicamente el resumen del resultado.
No infieras que pasa por inspección visual.
```

## La sesión está desordenada

Cierra el ciclo actual:

1. `git status`;
2. revisar diff;
3. guardar o descartar conscientemente;
4. commit si corresponde;
5. nueva sesión para el siguiente objetivo.

## Claude repite siempre el mismo error

Si es una convención permanente, agrégala a `CLAUDE.md` o una Rule.

Si es un procedimiento repetido, crea una Skill.

Si debe bloquearse técnicamente, usa permisos o Hooks en vez de confiar solo en una frase.
