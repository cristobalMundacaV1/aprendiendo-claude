# 07 — MCP y conectores

## ¿Qué es MCP?

MCP significa **Model Context Protocol**.

Permite que Claude se conecte de forma estandarizada a herramientas y fuentes externas.

Piensa en MCP como un “puerto” mediante el cual Claude puede recibir herramientas nuevas.

## Ejemplos

Con un MCP apropiado Claude podría:

- consultar GitHub;
- leer documentación interna;
- interactuar con una base de datos;
- consultar un sistema de tickets;
- usar un navegador;
- enviar información a una herramienta empresarial.

## Regla mental

```text
CLAUDE.md = qué debe saber siempre
Skill     = cómo realizar un procedimiento
MCP       = a qué sistema externo puede acceder
```

## Configuración

Claude Code puede manejar servidores MCP a nivel usuario o proyecto. La ubicación exacta depende de la modalidad y versión.

Comandos útiles:

```text
/mcp
```

Y desde terminal:

```bash
claude mcp
```

Documentación oficial:

https://code.claude.com/docs/en/mcp-quickstart
https://code.claude.com/docs/en/mcp

## `.mcp.json`

Para configuraciones compartibles de proyecto puede existir un archivo `.mcp.json`.

Revisa [`../ejemplos/mcp.json.ejemplo`](../ejemplos/mcp.json.ejemplo).

## Nunca subas credenciales

Malo:

```json
{
  "token": "ghp_TOKEN_REAL"
}
```

Mejor:

- variables de entorno;
- gestores de secretos;
- autenticación OAuth cuando esté disponible.

## ¿Qué MCP instalar primero?

No instales diez “por si acaso”.

Empieza con una integración que resuelva un dolor real. GitHub suele ser útil si trabajas constantemente con repositorios, issues y pull requests.

## Cómo evaluar un MCP o plugin

Pregúntate:

1. ¿Quién lo mantiene?
2. ¿Qué permisos pide?
3. ¿Puede ejecutar acciones o solo leer?
4. ¿Dónde guarda credenciales?
5. ¿Qué datos puede ver?
6. ¿Realmente lo necesito?

Una integración poderosa amplía capacidades **y superficie de riesgo**.
