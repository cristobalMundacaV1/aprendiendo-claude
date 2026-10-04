# 01 — Instalación

> Claude Code evoluciona rápido. Si un comando de instalación cambia, revisa https://code.claude.com/docs/en/setup

## Requisitos básicos

Necesitas:

- una cuenta compatible con Claude Code;
- Git;
- una terminal;
- un editor como VS Code (recomendado, no obligatorio);
- acceso a Internet.

## Verifica Git

```bash
git --version
```

Si el comando no existe, instala Git desde:

https://git-scm.com/

## Instalar Claude Code

La documentación oficial ofrece métodos de instalación según sistema operativo. Empieza siempre por:

https://code.claude.com/docs/en/setup

Después verifica:

```bash
claude --version
claude doctor
```

## Iniciar Claude dentro de un proyecto

```bash
cd ruta/al/proyecto
claude
```

No abras Claude desde cualquier carpeta si quieres que trabaje sobre un proyecto específico. La carpeta de trabajo importa porque determina qué código y configuración de proyecto encuentra.

## Primeros comandos internos que debes conocer

Dentro de Claude Code, escribe `/` para ver los comandos disponibles.

Los más útiles al comenzar son:

```text
/help
/init
/memory
/mcp
/permissions
/context
/doctor
```

Las capacidades exactas pueden variar por versión, así que usa `/help` como fuente local.

## VS Code

Claude Code tiene integración oficial con VS Code. Revisa:

https://code.claude.com/docs/en/vs-code

Úsala si prefieres ver diffs y archivos desde una interfaz gráfica mientras Claude trabaja.

## Checklist

Antes de continuar deberías poder ejecutar:

```bash
git --version
claude --version
claude doctor
```

Y abrir Claude dentro de una carpeta de proyecto.
