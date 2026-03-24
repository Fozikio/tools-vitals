# @fozikio/tools-vitals

> **Built into cortex-engine v1.0.0+**
> These tools are now included in [`@fozikio/cortex-engine`](https://github.com/Fozikio/cortex-engine) core � no separate install needed. This package remains available for use with cortex-engine **v0.x only**. If you're on v1.0.0+, just install `@fozikio/cortex-engine`.


Vitals tracking plugin for cortex-engine. Monitor five cognitive dimensions -- curiosity, connection, confidence, creative energy, and frustration -- with automatic behavioral trigger evaluation.

## Install

```
npm install @fozikio/tools-vitals
```

## Tools

| Tool | Description |
|------|-------------|
| `vitals_get` | Read all current vitals with decay-aware values and behavioral trigger evaluation |
| `vitals_set` | Update a single vital dimension with a new value and optional note |

## Usage

```yaml
# cortex-engine config
plugins:
  - package: "@fozikio/tools-vitals"
```

```typescript
import vitalsPlugin from "@fozikio/tools-vitals";
import { CortexEngine } from "@fozikio/cortex-engine";

const engine = new CortexEngine({
  plugins: [vitalsPlugin],
});
```

## Documentation

- **[Wiki](https://github.com/Fozikio/cortex-engine/wiki)** — Guides, architecture, and full tool reference
- **[Plugin Authoring](https://github.com/Fozikio/cortex-engine/wiki/Plugin-Authoring)** — Build your own plugins
- **[Contributing](https://github.com/Fozikio/.github/blob/main/CONTRIBUTING.md)** — How to contribute

## License

MIT
