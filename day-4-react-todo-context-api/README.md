# TODO 애플리케이션 with React, Redux

주요 기능

- [x] TODO 애플리케이션
  - [x] TODO create
  - [x] TODO edit (상태, 텍스트)
  - [x] TODO delete
  
- [x] redux 적용
  - [x] 디렉터리 구조 설계
  - [x] Fetch API 제작
  - [x] todo slice

- [x] `json-server` mock server
  - [x] GET /todo
  - [x] POST /todo
  - [x] PUT /todo/{id}
  - [x] DELETE /todo/{id}
  
```bash
./src
├── App.jsx
├── App.module.css
├── Layout.jsx
├── Layout.module.css
├── assets
│   └── react.svg
├── components
│   ├── ItemHeader.jsx
│   ├── ItemHeader.module.css
│   ├── ItemInput.jsx
│   ├── ItemInput.module.css
│   ├── SumFooter.jsx
│   └── SumFooter.module.css
├── features
│   ├── api.mjs
│   └── todo
│       ├── api
│       │   ├── createOneTodo.mjs
│       │   ├── deleteOneTodo.mjs
│       │   ├── getAllTodos.mjs
│       │   ├── getOneTodo.mjs
│       │   └── updateOneTodo.mjs
│       └── todo.reducer.js
├── index.css
├── main.jsx
├── store.mjs
└── util
    ├── debounce.ts
    └── timeAgo.ts
```