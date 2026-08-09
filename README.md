# Safari Wildlife Guide — final project

Offline-first personal PWA for Victoria Falls, Chobe, Khwai and the Okavango Delta.

## Included

- 131 species: 44 mammals, 65 birds, 13 reptiles, 9 amphibians.
- Fuzzy/ranked identification key with a location bonus.
- Browse, search, location filtering and “Likely to see here”.
- Seen / not-seen tracking with localStorage and reset confirmation.
- PWA manifest, iPhone-safe layout and service worker.
- Service worker cache includes the app shell and all local image assets.
- Offline preparation/verification screen.
- Photo-credit data structure and a dedicated credits document.

## Important image note

The current delivered build uses clearly labelled **local fallback plates**, not real species photographs. The build environment available for this task could not technically download and bundle licensed Wikimedia/Commons image files. No runtime image URL or external image API is used, so the app remains fully local/offline.

Before using this as a photographic field guide on safari, replace each file in `images/` with a suitably licensed photograph and update the corresponding `photo` credit fields in `species.js` / `PHOTO_CREDITS.md`.

## GitHub Pages / iPhone

Serve the project root over HTTPS (GitHub Pages is suitable), open it in Safari, add it to the Home Screen, then open **About → Prepare for Offline Use** while online. The app verifies its local cache before you test Airplane Mode.

## Optional real-photo acquisition

The build includes `download_photos.py`. Run it from the project root on a computer with internet access to search Wikimedia Commons, accept only explicitly recognised free/public-domain licences, download local photographs, update `species.js`, and regenerate `PHOTO_CREDITS.md`.

The delivered ZIP itself contains no remote image dependencies.
