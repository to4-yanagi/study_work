# React + Reduxで
# シンプルなWebアプリができるまで

----

# 目次

1. React.jsってなんだ
1. セットアップとHello World
1. ReactでWebページ作り
1. Reactの限界
1. Fluxの考え方とRedux
1. React + ReduxでWebページ作り
1. まとめ

----

# React.jsってなんだ

----

# React.jsってなんだ

<img src="img/react.png" width="980" height="250">

公式サイト:
https://reactjs.org/

React.jsはUIのパーツ（構成部品）を作るためのJavascriptライブラリ
主にフロントエンドエンジニア向け

----

# React.jsってなんだ

## 特徴

以下が分かりやすい

https://html5experts.jp/hokaccha/13301/

要するに
- コンポネント指向を実現しやすくする
=> テストしやすい、ソースコード全体としての見通しが良くなる
- データが更新されると自動的に画面を再描画
- Virtual DOMという仕組みで差分だけの再描画を実現
- jsxという独自シンタックスを使う
=> babel等で変換が必要

これだけわかったらもう書いていこう（体育会系）

----

# セットアップとHello World

----

# セットアップとHello World

### Reactのセットアップには壁が多い

必要なこと
- node.jsの環境とnpm
=> nodistやnodebrewもあった方が良い
- babelなどを用いたトランスパイル
- webpackなどを用いたビルド（モジュール化）
- reactのインストール

必須ではないけどこれらもあった方が良い
- ESLint
- テスト用のフレームワーク
- 変更のウォッチなど細かい設定

## ここまでやってようやくスタートライン

----

# セットアップとHello World

<img src="img/pingu.jpg" width="980" height="600">

----

# セットアップとHello World

## create-react-app

Reactを作ったfacebook製（要するに公式だ！）
Reactの環境構築をコマンド一発で出来るようにしてくれる神ツール

GitHub:
https://github.com/facebook/create-react-app

わかりやすい日本語解説（ありがたい）
https://qiita.com/chibicode/items/8533dd72f1ebaeb4b614

----

# セットアップとHello World

## create-react-appを使う

1. create-react-appを入れる
```
npm install -g create-react-app
```

2. hello worldしたいディレクトリでcreate-react-appを使う
```
create-react-app hello-world
```

以上

----

# セットアップとHello World

<img src="img/mikami.jpeg" width="500" height="600">

----

# セットアップとHello World

### できあがったページを確認する

1. create-react-appを実行したディレクトリ下にhello-worldディレクトリができているので移動
```
cd hello-world
```

2. アプリケーションを起動
```
// package.jsonに記載されているscript
npm start
```

3. http://localhost:3000 にアクセスする

----

# セットアップとHello World

かっちょいい
<img src="img/hello-world.png" width="1000" height="500">

----

# セットアップとHello World

## Q. でも結局コイツ何使ってるかわからんの怖くない？
## A. package.jsonから辿れば良いでしょ

package.json
```
{
  "dependencies": {
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-scripts": "1.1.1"
  }
}
```

----

# セットアップとHello World

<img src="img/bikkuri.jpg" width="1000" height="500">

----

# セットアップとHello World

### Q. 誰だお前(react-scripts)は！
### A. 情け無用の男! s(ry

色々隠してくれちゃってます。
依存モジュール以外に、スクリプト類も隠れています。

以下のコマンドで使っているものを全部見えるようになります。
（一度やったら元に戻せないので注意）
```
npm run eject
```

[私のGitHubコミットログで差分が見られます。](https://github.com/to4-yanagi/study_work/commit/b921a1be3665a31e146c526a7fbe102faccab14c)

遊びでReactを動かす分にはやらなくても良いけどプロジェクトで使ったりする場合には忘れずにやりましょう。
（隠れているものの細かい解説は時間の都合上割愛）

----

# ReactでWebページ作り

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