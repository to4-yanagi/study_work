# React + Reduxで
# シンプルなCRUDアプリができるまで

----

# 目次

1. React.jsってなんだ
1. セットアップとHello World
1. ReactでWebページ作り
1. Fluxの考え方とRedux
1. React + ReduxでCRUD可能なWebページ作り
1. まとめ

----

# React.jsってなんだ

----

# React.jsってなんだ

React.jsはUIのパーツ（構成部品）を作るためのJavascriptライブラリ
主にフロントエンドエンジニア向け

----

# セットアップとHello World

----

# セットアップとHello World

Reactのセットアップには壁が多い

jsxをブラウザが解釈するためにbabelやwebpackの設定が必要だ
実際にプロジェクトで使うならESLintやテストも必要だ

----

# セットアップとHello World

## create-react-app

あああ

----

# ReactでWebページ作り

## 要件

あああ

----

# ReactでWebページ作り

## 作る

あああ

----

# ReactでWebページ作り

## 自動テストツール

jestを使っている

jestの説明を書く

----

# ReactでWebページ作り

## 自動テストツール


package.json
```
"testMatch": [
      "<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}",
      "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"
    ],
```

例：テストしたいコンポネントが
src/components/table/table.jsxである場合
以下のいずれかにテストコードを配置することで、テストを実行することができる

<!-- __がうまく表示されなかったのでやむなく<p>タグを使用 -->

1. <p>src/__test__/table.spec.js</p>
1. <p>src/components/table/table.spac.js</p>

---