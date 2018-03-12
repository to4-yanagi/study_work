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

##  追加したモジュール

- prop-types
 → React.PropTypesでやろうとしたらESLintにイエローカード貰った

----

# ReactでWebページ作り

## 作る

あああ

----

# ReactでWebページ作り

## 自動テストツール

jestを使っている

以下にjestの説明を書く

全部mock化してる
　→ほんと？unmockしなうても動いた謎を追う

----

# ReactでWebページ作り

## 自動テストツール


package.json
```
"dependencies": {
  "jest": {
    "testMatch": [
      "<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}",
      "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}"
    ],
  }
}
```
---

# ReactでWebページ作り

## 自動テストツール


例：テストしたいコンポネントがsrc/components/table/index.jsxである場合
以下のいずれかのパスにテストコードを配置することで、テストを実行することができる（個人的には後者が好み）

<!-- __がうまく表示されなかったのでやむなく<p>タグを使用 -->

- <p>src/__tests__/table.js</p>
- <p>src/components/table/table.spac.js</p>

---