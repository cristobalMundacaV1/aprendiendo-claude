# 10 — Flujo profesional recomendado

Este flujo funciona muy bien para casi cualquier tarea de ingeniería.

## 1. Estado inicial

```bash
git status
git branch --show-current
```

## 2. Entender

```text
Analiza el problema y el código relacionado. No edites aún.
```

## 3. Planificar

Claude debe poder explicarte:

- causa;
- archivos a tocar;
- estrategia;
- riesgos;
- pruebas necesarias.

## 4. Crear rama

```bash
git switch -c fix/nombre-del-problema
```

## 5. Implementar

```text
Implementa el plan. Mantén el cambio acotado al problema.
```

## 6. Valida

ejecuta los gates reales del proyecto:

```bash
# ejemplos
npm test
npm run lint
npm run build
pytest
```

No ejecutes comandos inventados: mira primero `package.json`, `pyproject.toml`, README, Makefile, etc.

## 7. Revisar diff

```bash
git diff --check
git diff
git status
```

Pide una revisión:

```text
Revisa tu propio cambio como si fueras un reviewer crítico.
Busca regresiones, casos límite y problemas de seguridad.
```

## 8. Commit

```bash
git add <archivos>
git commit -m "fix: describe el propósito"
```

## 9. Push / PR

```bash
git push -u origin fix/nombre-del-problema
```

## 10. Cierre

Un buen cierre debería incluir:

```text
- Qué cambió
- Por qué
- Tests ejecutados
- Resultado de build/lint
- Archivos tocados
- Riesgos pendientes
- Rama y SHA
```
