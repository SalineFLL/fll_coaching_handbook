# Repository for FLL Coach handbook

This repository contains the source and configuration to compile the coaching handbook using the mdbook and github workflows.

The compiled book can be found at [https://salinefll.github.io/fll\_coaching\_handbook](https://salinefll.github.io/fll\_coaching\_handbook).

## Structure

- `src/` — Markdown source files for each section of the book. The md files here and in direcories within `src/` are the pages of the book. Edit the md files' contents to make changes to the book.
- `src/SUMMARY.md` — Sets up organization of book's sections.
- `book.toml` — Configuration file for mdbook.

## Contributing

Pull requests are welcome! I *think* that when I accept them, the book should be automatically updated using the workflow this repository has set up. The workflow should compile the book, including the changes in the PR, and publish the book to [https://salinefll.github.io/fll\_coaching\_handbook](https://salinefll.github.io/fll\_coaching\_handbook).
