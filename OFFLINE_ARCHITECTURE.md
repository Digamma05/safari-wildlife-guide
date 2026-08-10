# Offline architecture — Safari Wildlife Guide V5

This patch changes the guide from a service-worker-cache-only approach to a layered offline model:

1. **Service Worker** caches the application shell and serves same-origin GET requests cache-first once cached.
2. **IndexedDB** stores every verified local application asset and photograph as a Blob.
3. **Explicit Offline Download/Verify** downloads and verifies the complete asset set before declaring Safari Mode ready.
4. **Image hydration** creates local Blob URLs from IndexedDB when the verified offline package is available, so species pages can display photographs without requiring a network request.
5. **localStorage** continues to store sightings independently of connectivity.
6. Repeated transitions between online/offline do not clear the verified offline package. Going online is only needed when you intentionally update the package.

## Important integration note

This handoff contains the files changed/added for the offline layer. It assumes the existing project still supplies `index.html`, `styles.css`, `icons/`, and the local `images/` directory. Keep the existing image paths and filenames exactly as defined by `species.js`.

Before the trip:

- Deploy the complete project over HTTPS (e.g. GitHub Pages).
- Open the app online.
- Open **Offline & About**.
- Choose **Download for Offline Use**.
- Wait for **Safari Mode ready**.
- Choose **Verify now**.
- Turn on Airplane Mode.
- Close/reopen the Home Screen app and test Browse, Identify, species photographs and sightings.
