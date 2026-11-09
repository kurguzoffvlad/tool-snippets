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

В редакторе начните вводить префикс сниппета (например `tool-ts-debugger`, `tool-global-forEach`, `tool-ng-subscribe`) — IntelliSense предложит подстановку.

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

**1. `tool-hook-*` — хуки жизненного цикла Angular**
- `tool-hook-onChanges`, `tool-hook-onInit`, `tool-hook-afterViewInit`, `tool-hook-onDestroy`

**2. `tool-ng-*` — Angular (DI, подписки, ViewChild, get/set)**
- `tool-ng-subscribe`, `tool-ng-injector`, `tool-ng-viewChild`, `tool-ng-viewChildEl`, `tool-ng-getset`, `tool-ng-getset-input`

**3. `tool-type-*` — объявления типов (`type`, `interface`)**
- `tool-type-pickPartialOmit`, `tool-type-keyof`, `tool-type-nullable`, `tool-type-partial`, `tool-type-never`, `tool-type-readonly`

**4. `tool-ts-*` — значения/выражения TS (`as const`, `Record`, `satisfies`, try, отладка)**
- `tool-ts-asConst`, `tool-ts-record`, `tool-ts-recordSatisfies`, `tool-ts-try`, `tool-ts-try-await`, `tool-ts-debugger`, `tool-ts-proxy-log`

**5. `tool-global-*` — общее (массивы, ветвления, глобальные объекты, глобальные ошибки)**
- `tool-global-forEach`, `tool-global-switch`, `tool-global-switch-never`, `tool-global-window`, `tool-global-errors`

## Примеры сниппетов

| Префикс | Описание |
|---|---|
| `tool-hook-onChanges` | хук `ngOnChanges` |
| `tool-hook-onInit` | хук `ngOnInit` |
| `tool-hook-afterViewInit` | хук `ngAfterViewInit` |
| `tool-hook-onDestroy` | хук `ngOnDestroy` |
| `tool-ng-subscribe` | подписка на Observable с `takeUntil` |
| `tool-ng-injector` | сервис через `Injector` |
| `tool-ng-viewChild` | `@ViewChild` (компонент) |
| `tool-ng-viewChildEl` | `@ViewChild` (ElementRef) |
| `tool-ng-getset` | getter/setter |
| `tool-ng-getset-input` | getter/setter с `@Input()` |
| `tool-type-pickPartialOmit` | `Pick & Partial<Omit>` |
| `tool-type-keyof` | `keyof` |
| `tool-type-nullable` | `TNullable<T>` |
| `tool-type-partial` | `Partial<T>` |
| `tool-type-never` | `switch` + `never` (exhaustive check) |
| `tool-type-readonly` | interface с `readonly` |
| `tool-ts-asConst` | объект `as const` |
| `tool-ts-record` | `Record<K, V>` + `as const` |
| `tool-ts-recordSatisfies` | `as const satisfies Record` |
| `tool-ts-try` | блок `try-catch-finally` |
| `tool-ts-try-await` | tryCatch для promise |
| `tool-ts-debugger` | `debugger;` |
| `tool-ts-proxy-log` | Proxy-логирование изменений |
| `tool-global-forEach` | forEach по массиву |
| `tool-global-switch` | `switch` блок |
| `tool-global-switch-never` | `switch` + `never` |
| `tool-global-window` | declare global window |
| `tool-global-errors` | global error listeners |
```

Изменения:
- В «Использование» примеры префиксов заменены на новые.
- Блок «Группы» переписан под `tool-hook-*`, `tool-ng-*`, `tool-type-*`, `tool-ts-*`, `tool-global-*` (5 групп вместо 9).
- Таблица примеров пересобрана под новые префиксы, порядок совпадает с группами.
- Добавлено короткое пояснение схемы `tool-<группа>-<действие>`.
