Вот README.md, адаптированный под библиотеку сниппетов с установкой для WebStorm и VS Code:

```markdown
# ToolSnippetsWs

Библиотека сниппетов для **WebStorm** и **Visual Studio Code** (Angular/TypeScript).

## Установка

```bash
npm install -D tool-snippets-ws
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

В редакторе начните вводить префикс сниппета (например `tool_deb`, `tool#forEach`, `tool___subscribe`) — IntelliSense предложит подстановку.

### Примеры сниппетов

| Префикс | Описание |
|---|---|
| `tool#forEach` | forEach по массиву |
| `tool_deb` | `debugger;` |
| `tool_comp_1_ngOnChanges` | хук `ngOnChanges` |
| `tool_comp_2_ngOnInit` | хук `ngOnInit` |
| `tool_comp_3_ngAfterViewInit` | хук `ngAfterViewInit` |
| `tool_comp_4_ngOnDestroy` | хук `ngOnDestroy` |
| `tool___subscribe` | подписка на Observable с `takeUntil` |
| `tool__tryCatch` | блок `try-catch-finally` |
| `tool__tryCatch.await` | tryCatch для promise |
| `tool-as_const_1` | объект `as const` |
| `tool-as_const_2_Record` | `Record<K, V>` + `as const` |
| `tool-as_const_3_satisfies_Record` | `as const satisfies Record` |
| `tool--typePickPartialOmit` | `Pick & Partial<Omit>` |
| `tool--type_keyof` | `keyof` |
| `tool--typeTNullable` | `TNullable<T>` |
| `tool--typePartial` | `Partial<T>` |
| `tool--Interface with readonly` | interface с `readonly` |
| `tool___Injector` | сервис через `Injector` |
| `tool____ViewChild_Child` | `@ViewChild` (компонент) |
| `tool____ViewChild_Element` | `@ViewChild` (ElementRef) |
| `tool____get_set` | getter/setter |
| `tool____get_set@Input()` | getter/setter с `@Input()` |
| `tool---Proxy_Логирование` | Proxy-логирование изменений |
| `tool#type_never` | `switch` + `never` (exhaustive check) |
| `tool#switch` | `switch` блок |
| `tool#switch_NEVER` | `switch` + `never` |
| `tool----windowГлобальный_объект` | declare global window |
| `tool---globalErrorListeners` | global error listeners |

## Структура пакета

```
tool-snippets-ws/
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
ng build tool-snippets-ws

# публикация
cd dist/tool-snippets-ws
npm publish
```

## Требования

- Node.js (для скриптов установки)
