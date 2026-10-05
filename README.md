# jest-expo: `import.meta.url` is `null`

Minimal reproduction for an expo/expo issue.

`babel-preset-expo` rewrites `import.meta` to `globalThis.__ExpoImportMetaRegistry`.
Under `jest-expo`, the registry's `url` getter returns `null`, so
`new URL("./file", import.meta.url)` throws `Invalid URL`.

```sh
npm install
npm test
```

Created with `npx create-expo-app@latest --template blank`, then
`npx expo install jest-expo jest -- --save-dev` and a `"jest": { "preset": "jest-expo" }` entry.
