# Google Chrome Website Blocker Extension

A simple and user-friendly Chrome extension that allows users to block access to websites they define in the settings. This project was originally an Android app and has been fully restructured as a Chrome extension.

## Features
- Block any website by specifying its domain (e.g., `facebook.com`, `example.com`).
- Block all subdomains and paths for each domain (e.g., `www.example.com`, `sub.example.com`).
- User-friendly options page to add or remove blocked sites.
- Popup for quick access to settings.
- All settings are stored using Chrome's sync storage.

## Limitations
- Due to Chrome security policies, some Google-owned domains (such as `youtube.com`) cannot be blocked by extensions. This is a browser restriction, not a bug in the extension.

## Installation
1. Clone or download this repository to your local machine.
2. Open Google Chrome and go to `chrome://extensions`.
3. Enable **Developer mode** (toggle in the top right).
4. Click **Load unpacked** and select the project folder (the one containing `manifest.json`).
5. The extension will appear in your extensions list and is ready to use.

## Usage
1. Click the extension icon in the Chrome toolbar.
2. Click **Settings** to open the options page.
3. Enter a domain (e.g., `facebook.com`) in the input field and click **Add**.
4. The site will be added to the block list and immediately blocked.
5. To remove a site, click the **Remove** button next to it in the list.

## How It Works
- The extension uses Chrome's `declarativeNetRequest` API to block requests to user-defined domains.
- All subdomains and paths for a blocked domain are also blocked.
- The list of blocked sites is stored in Chrome's sync storage, so it syncs across your devices.

## Project Structure
- `manifest.json` — Chrome extension manifest.
- `background.js` — Handles blocking logic and rule updates.
- `options.html` / `options.js` — Settings page for managing blocked sites.
- `popup.html` / `popup.js` — Popup UI for quick access.
- `styles.css` — Basic styling for the UI.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

## Acknowledgements
- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
- [MDN Web Docs: Chrome Extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)

---

**Note:** If you encounter issues blocking certain sites (especially Google-owned domains), this is due to Chrome's built-in protections and not a limitation of this extension.

