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
