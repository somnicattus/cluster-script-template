# cluster-script-template

[Cluster Script](https://docs.cluster.mu/creatorkit/world/cluster-script/) を TypeScript + Bun で開発するためのテンプレートです。

### 依存関係のインストール

```bash
bun install
```

### ビルド

`scripts` ディレクトリに配置した `.ts` ファイルがビルドされます。
ビルド成果物には `import` したモジュールもバンドルされます。

```bash
bun build.ts
```

### Cluster Script の型定義について

公式の npm パッケージは長期間メンテナンスされていないため、[公式リファレンスサイトの型定義ファイル](https://docs.cluster.mu/script/#%E5%9E%8B%E5%AE%9A%E7%BE%A9%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB) をスクリプトでダウンロードして使用します。詳細については[`types/README.md`](./types/README.md) を参照してください。
