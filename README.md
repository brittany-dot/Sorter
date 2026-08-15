# Sorter · Semantic file intelligence

A production-minded browser prototype for indexing, searching, clustering, and automating large personal file collections. The interface is dependency-free and runs as a static Vite application.

## Run

```bash
npm install
npm run dev
```

Drag files or a directory onto the source drop zone (directory drops work in Chromium), then run an index. Files stay local; the prototype generates metadata, hashes, inferred topics, entities, and confidence scores in the browser.

## Capabilities

- Folder and file ingestion with streaming progress
- Content-aware categorization and smart destination paths
- Search syntax for exact phrases, `AND`, `OR`, `NOT`, fuzzy terms, and proximity expressions
- Type, size, date, confidence, and source facets
- SHA-256 duplicate grouping and similarity signals
- Automation recipes, watch-folder controls, and dry-run safety
- Paginated results and a semantic-cluster visualization
