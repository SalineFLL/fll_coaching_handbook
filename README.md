# Book Project using `bookmd`

This repository contains the source and configuration to compile the Theobotics guide book using the mdbook Rust crate.

## Structure

- `fll-coach-book/src/` — Markdown source files for each chapter/section.
- `fll-coach-book/src/SUMMARY.md` — Sets up organization of book's chapters and sections.
- `fll-coach-book/book.toml` — Configuration file for mdbook.

## Usage

1. Install:

   ```sh
   cargo install mdbook
   ```

2. Build the book:

   ```sh
   cd fll-coach-book
   mdbook serve --open
   ```

Your browser should open a tab to the compiled book. Updates you make to md files should render each time you save the md file.

