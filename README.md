# EvidenceBoard

An original, local-first visual research board for iPad. It is a Progressive Web App (PWA), not a LiquidText clone and not an App Store app.

## What this build already does

- Imports one or more text-based PDFs from the iPad Files picker.
- Renders a source document with page navigation and zoom.
- Searches imported sources and board notes.
- Turns selected PDF text into movable, source-linked excerpt cards.
- Creates editable notes, multiple boards, card-to-card labeled connections drawn directly between cards, and simple freehand ink.
- Highlights selected text and creates source-linked comments.
- Imports RIS/BibTeX reference exports from Zotero or Mendeley into the current board.
- Runs optional on-device OCR on the visible PDF page and adds the recognized text to a board note.
- Provides a PDF page editor for hiding, restoring, reordering, and exporting the resulting page sequence.
- Opens an excerpt’s source page on double-tap.
- Persists projects in the browser’s local storage (IndexedDB) and exports a Markdown outline.

## What is deliberately not claimed yet

- Word/PowerPoint conversion, document replacement, visual document compression, cloud drive import, cross-device sync, collaborative editing, private-sharing controls, push notifications, DOCX project export, direct Zotero/Mendeley OAuth synchronization, and iPad-as-desktop-display are later releases.
- The app uses public browser libraries for PDF rendering, OCR, and PDF export. First use of those functions requires internet access. Do not count on offline use until their libraries are bundled locally in a deployment build.
- Browser-local storage can be removed when Safari website data is cleared. Export important work routinely; a portable project backup/import feature is the next essential addition.

## Put it on an iPad without a Mac

1. From Windows, create a free account with a static-site host such as Cloudflare Pages, GitHub Pages, or Netlify.
2. Upload the **contents** of this `evidenceboard` folder as one static website. No server or database is needed for the local-first build.
3. Open the resulting HTTPS address in Safari on the iPad.
4. Tap Share, then **Add to Home Screen**. Launch EvidenceBoard from its new icon.
5. Add a PDF using **Add PDF** and use it in landscape for the two-pane reader/board layout.

After updating a hosted copy, refresh the browser page once before opening the Home Screen version. If it still shows the old interface, remove the old Home Screen icon and add it again; installed web apps may retain the prior service-worker cache.

Do not open `index.html` directly from the iPad Files app: Safari’s local-file mode blocks important browser storage and install features. Hosting over HTTPS is required for the installable/offline parts.

## How to use

1. Add a PDF, select a text passage, and tap **Make excerpt**.
2. Drag excerpt cards around the board; create typed notes with **New note**.
3. Tap a card, then Shift-tap a second card (or use a hardware keyboard) and choose **Connect**. On touch-only iPad interaction, card selection remains intentionally simple in this prototype; a multi-select mode is planned.
4. Double-tap an excerpt to return to its source page.
5. Tap the project name to rename it; export a Markdown outline from **Export outline**.

## Privacy

All project data and imported files remain in this browser on this device unless the user exports a file. This version has no login, telemetry, or cloud synchronization.
