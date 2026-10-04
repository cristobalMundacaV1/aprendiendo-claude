# 06 — GitHub

Git y GitHub no son “extras”. Son lo que permite trabajar con un agente sin convertir cada cambio en una apuesta.

## Configuración mínima de Git

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

Comprueba:

```bash
git config --global --list
```

## Conecta tu cuenta de GitHub

Puedes usar HTTPS, SSH o GitHub CLI. Para principiantes, GitHub Desktop también es válido.

Guía oficial de GitHub:

https://docs.github.com/en/get-started

## Integración de Claude con GitHub

Claude Code dispone de integración oficial con GitHub Actions.

Dentro de Claude Code puedes revisar si tu versión ofrece:

```text
/install-github-app
```

Esta integración permite flujos donde Claude responde a menciones en issues/PRs y puede trabajar siguiendo las instrucciones del repositorio.

Documentación oficial:

https://code.claude.com/docs/en/github-actions

## Flujo seguro para una tarea

```bash
git status
git switch -c feature/mi-cambio
```

Luego Claude trabaja, prueba y revisas:

```bash
git diff
git status
```

Después:

```bash
git add .
git commit -m "feat: describe el cambio"
git push -u origin feature/mi-cambio
```

Y abres un Pull Request.

## Qué pedirle a Claude antes de un commit

```text
Antes de commitear:
1. muéstrame los archivos cambiados,
2. resume el diff,
3. corre las pruebas pertinentes,
4. indica cualquier riesgo restante,
5. no hagas commit hasta que todo lo anterior esté claro.
```

## Nunca normalices esto

```bash
git reset --hard
git clean -fd
git push --force
```

Son comandos válidos, pero pueden destruir trabajo. Claude no debería usarlos por comodidad.
