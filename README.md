# react-virtuoso SSR overlay repro

Minimal Next.js repro for `react-virtuoso` with `useWindowScroll`.

## Repro

1. Install dependencies:

   ```bash
   npm install
   ```

2. Launch the app:

   ```bash
   npm run dev
   ```

3. Open either page:

   - `http://localhost:3211/list`
   - `http://localhost:3211/grid`

4. Disable JavaScript in Chrome DevTools:

   - open DevTools
   - press `Cmd+Shift+P`
   - run `Disable JavaScript`

5. Reload the page.

6. Confirm that Virtuoso overlays the FAQ content that comes after the virtualized content.

The list page and grid page both use `useWindowScroll` and render FAQ cards after the virtualized content so the collapse is easy to spot.
