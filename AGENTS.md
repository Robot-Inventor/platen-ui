# AGENTS.md

This is a library of styled Base UI components designed for building professional-grade tools, inspired by software such as Photoshop and DaVinci Resolve. For the latest Base UI documentation, refer to https://base-ui.com/llms.txt.

This project uses the React Compiler, so manual memoization is generally unnecessary. Avoid using syntax that is not supported by the React Compiler, as such code may not be automatically memoized; Oxlint will issue a warning if you use any such syntax.

After completing the task of editing the code, run the following verification commands:

- `bun run format`
- `bun run lint`
- `bun run build`
