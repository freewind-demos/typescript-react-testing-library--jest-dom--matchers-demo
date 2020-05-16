TypeScript React "react-testing-library" jest-dom Matchers Demo
=============================================

关键是:

```
setupFilesAfterEnv: [
  '@testing-library/jest-dom',
]
```

注意：旧版本的@testing-library/jest-dom好像不能这么写，比较麻烦

```
npm install
npm run test
```
