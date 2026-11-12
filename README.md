```markdown
# ToolSnippets

Библиотека сниппетов для **WebStorm** и **Visual Studio Code** (Angular/TypeScript).

## Установка

```bash
npm install -D tool-snippets
```

После установки выполните команду для нужной IDE:

### WebStorm

```bash
npm run SNIPPETS:webstorm
```

Скрипт находит все установленные версии WebStorm и копирует файл `_tool-frontend.xml` в папку `templates` каждой из них.

> ⚠️ После установки перезапустите WebStorm, чтобы сниппеты применились.

### VS Code

```bash
npm run SNIPPETS:vscode
```

Скрипт копирует файл `tool-frontend.code-snippets` в пользовательскую папку сниппетов VS Code:
- **Windows:** `%APPDATA%\Code\User\snippets\`
- **macOS:** `~/Library/Application Support/Code/User/snippets/`
- **Linux:** `~/.config/Code/User/snippets/`

> ⚠️ После установки перезагрузите окно VS Code: `Ctrl+Shift+P` → **Developer: Reload Window**.

## Использование

В редакторе начните вводить префикс сниппета (например `tool-global-debugger`, `tool-global-forEach`, `tool-watch-subscribe`) — IntelliSense предложит подстановку.

## Структура пакета

```
tool-snippets/
├── webstorm/
│   ├── _tool-frontend.xml
│   └── install-snippets.js
├── vscode/
│   ├── tool-frontend.code-snippets
│   └── install-snippets.js
├── package.json
└── README.md
```

## Разработка

```bash
# сборка
ng build tool-snippets

# публикация
cd dist/tool-snippets
npm publish
```

## Требования

- Node.js (для скриптов установки)

## Схема префиксов

Префикс = `tool-<группа>-<действие>`.

### Группы

**1. `tool-type-*` — объявления типов (`type`, `interface`)**
- `tool-type-pickPartialOmit`, `tool-type-keyof`, `tool-type-nullable`, `tool-type-partial`, `tool-type-never`, `tool-type-readonly`

**2. `tool-ng-*` — Angular (DI, ViewChild, get/set)**
- `tool-ng-injector`, `tool-ng-viewChild`, `tool-ng-viewChildEl`, `tool-ng-getset`, `tool-ng-getset-input`

**3. `tool-hook-*` — хуки жизненного цикла Angular**
- `tool-hook-onChanges`, `tool-hook-onInit`, `tool-hook-afterViewInit`, `tool-hook-onDestroy`

**4. `tool-watch-*` — подписки и наблюдение (Observable, Proxy)**
- `tool-watch-subscribe`, `tool-watch-proxy`

**5. `tool-const-*` — константы и типизированные объекты (`as const`, `Record`, `satisfies`)**
- `tool-const-asConst`, `tool-const-record`, `tool-const-recordSatisfies`

**6. `tool-comm-*` — общие конструкции (try/catch, await-try)**
- `tool-comm-try`, `tool-comm-try-await`

**7. `tool-width-*` — ширина страницы (`--tool-page-width`)**
- `tool-width-wrapper`, `tool-width-css`, `tool-width-state`

**8. `tool-theme-*` — темизация (`ThemeModule`)**
- `tool-theme-send`, `tool-theme-directive`, `tool-theme-module`

**9. `tool-global-*` — общее (массивы, ветвления, глобальные объекты, глобальные ошибки)**
- `tool-global-forEach`, `tool-global-switch`, `tool-global-switch-never`, `tool-global-window`, `tool-global-errors`, `tool-global-debugger`


## Примеры сниппетов

| Префикс                      | Описание |
|------------------------------|---|
| `tool-hook-onChanges`        | хук `ngOnChanges` |
| `tool-hook-onInit`           | хук `ngOnInit` |
| `tool-hook-afterViewInit`    | хук `ngAfterViewInit` |
| `tool-hook-onDestroy`        | хук `ngOnDestroy` |
| `tool-ng-injector`           | сервис через `Injector` |
| `tool-ng-viewChild`          | `@ViewChild` (компонент) |
| `tool-ng-viewChildEl`        | `@ViewChild` (ElementRef) |
| `tool-ng-getset`             | getter/setter |
| `tool-ng-getset-input`       | getter/setter с `@Input()` |
| `tool-type-pickPartialOmit`  | `Pick & Partial<Omit>` |
| `tool-type-keyof`            | `keyof` |
| `tool-type-nullable`         | `TNullable<T>` |
| `tool-type-partial`          | `Partial<T>` |
| `tool-type-never`            | `switch` + `never` (exhaustive check) |
| `tool-type-readonly`         | interface с `readonly` |
| `tool-const-asConst`         | объект `as const` |
| `tool-const-record`          | `Record<K, V>` + `as const` |
| `tool-const-recordSatisfies` | `as const satisfies Record` |
| `tool-comm-try`              | блок `try-catch-finally` |
| `tool-comm-try-await`        | tryCatch для promise |
| `tool-watch-subscribe`       | подписка на Observable с `takeUntil` |
| `tool-watch-proxy`           | Proxy-логирование изменений |
| `tool-global-forEach`        | forEach по массиву |
| `tool-global-switch`         | `switch` блок |
| `tool-global-switch-never`   | `switch` + `never` |
| `tool-global-window`         | declare global window |
| `tool-global-errors`         | global error listeners |
| `tool-global-debugger`       | `debugger;` |
| `tool-width-wrapper`         | привязка `wrapperRef` для `--tool-page-width` |
| `tool-width-css`             | CSS-правило с `var(--tool-page-width)` |
| `tool-width-state`           | подписка на `ToolScreenService.state$` |
| `tool-theme-send`            | `ThemeLighthouse.send$()` + подписка |
| `tool-theme-directive`       | HTML с `[themeClass]` |
| `tool-theme-module`          | импорт `ThemeModule` |
```
