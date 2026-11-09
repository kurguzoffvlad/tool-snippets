Для WebStorm и VS Code:

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

В редакторе начните вводить префикс сниппета (например `tool_deb`, `tool#forEach`, `tool___subscribe`) — IntelliSense предложит подстановку.

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

### Группы:

**1. Массивы / циклы**
- `tool#forEach`, `tool#switch`, `tool#switch_NEVER`

**2. Angular хуки**
- `tool_comp_1_ngOnChanges`, `tool_comp_2_ngOnInit`, `tool_comp_3_ngAfterViewInit`, `tool_comp_4_ngOnDestroy`

**3. Angular подписки / DI / ViewChild**
- `tool___subscribe`, `tool___Injector`, `tool____ViewChild_Child`, `tool____ViewChild_Element`

**4. Angular getter/setter**
- `tool____get_set`, `tool____get_set@Input()`

**5. TypeScript типы**
- `tool--typePickPartialOmit`, `tool--type_keyof`, `tool--typeTNullable`, `tool--typePartial`, `tool#type_never`, `tool--Interface with readonly`

**6. TypeScript const / Record**
- `tool-as_const_1`, `tool-as_const_2_Record`, `tool-as_const_3_satisfies_Record`

**7. try/catch**
- `tool__tryCatch`, `tool__tryCatch.await`

**8. Отладка**
- `tool_deb`, `tool---globalErrorListeners`, `tool---Proxy_Логирование`

**9. Глобальные объекты**
- `tool----windowГлобальный_объект`

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
