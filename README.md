# Safari Wildlife Guide

Mobile-first offline PWA for Victoria Falls, Chobe, Khwai and the Okavango Delta.

## Important
The bundled images are local field-guide illustrations/placeholders, not claimed wildlife photographs. Replace them with properly licensed photographs using the same filenames in `images/` if you want photographic images.

## iPhone installation
A PWA/service worker requires HTTPS. Upload this folder to an HTTPS static host (GitHub Pages, Cloudflare Pages, Netlify, Vercel, etc.), open it in Safari, choose Share → Add to Home Screen. Open it online once and press **Prepare for Offline Use**. Then test with Airplane Mode.

The Seen/Not Seen checklist is stored in localStorage on the phone.
