# 11 — Seguridad

Claude puede ejecutar comandos y conectarse a servicios. Trátalo como una herramienta con capacidad real de cambiar cosas.

## Nunca pongas secretos en prompts o repos públicos

No compartas:

- contraseñas;
- tokens GitHub;
- API keys;
- claves SSH privadas;
- cookies de sesión;
- credenciales de producción.

## Archivos sensibles

Normalmente:

```text
.env
.env.production
*.pem
*.key
credentials.json
```

Deben estar protegidos e ignorados por Git cuando corresponda.

## Permisos

No uses permisos máximos por defecto.

Buena práctica:

- permitir lectura frecuente;
- revisar ediciones;
- pedir aprobación para acciones externas o destructivas;
- denegar explícitamente comandos peligrosos si tiene sentido.

## Producción

Antes de permitir acciones en producción, exige:

1. explicación de impacto;
2. backup o rollback;
3. comando exacto;
4. validación del objetivo;
5. confirmación humana.

## Prompt injection y contenido externo

Si Claude lee contenido externo, ese contenido podría intentar darle instrucciones maliciosas.

No asumas que una página, issue, archivo descargado o comentario es confiable solo porque Claude puede leerlo.

## Plugins y MCP

Instalar una integración equivale a ampliar lo que Claude puede ver o hacer.

Revisa permisos y procedencia antes de instalar.

## Git como control de daños

Antes de cambios grandes:

```bash
git status
git diff
```

Trabaja con commits frecuentes y ramas. No es burocracia: es reversibilidad.
