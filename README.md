English | [简体中文](/README_zh.md)

# 🍪 Cookie Manager

<div align="center">
  <img src="./public/example.png" alt="Cookie Manager icon" width="600"/>
  <br>
  <br>
</div>

---

A lightweight Chrome/Edge extension for viewing and managing website cookies. It supports adding, editing, deleting, searching, JSON import/export, and domain-level filtering.

## Features

- 🍪 **Cookie Management**: View, add, edit, and delete cookies for any website
- 📥 **JSON Import**: Import cookies from a `.json` file or pasted JSON
- 📤 **JSON Export**: Export cookies for the selected domain to a reusable JSON file
- 🌍 **Internationalization**: English and Chinese with automatic browser-locale detection and manual switching
- 🔍 **Search Functionality**: Quickly find cookies by name
- 🌐 **Domain Support**: Manage cookies across different domains and subdomains
- ⚡ **Batch Operations**: Clear all cookies for the selected domain with one click
- 🎨 **Modern UI**: Compact popup UI with fixed modal headers and action bars
- 🔒 **Advanced Options**: Support for Secure, HttpOnly, and SameSite attributes
- 📅 **Expiration Control**: Set custom expiration dates for cookies
- 🔄 **Real-time Updates**: Refresh cookie list instantly

## Installation

### Chrome/Edge
1. Download or clone this repository
2. Open Chrome/Edge and navigate to `chrome://extensions/` or `edge://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select either the project root or the generated `dist/cookie-manager/` directory
5. The extension icon will appear in your browser toolbar

To create a distribution package first, follow the [Build](#build) instructions below.

## Usage

1. **Open the Extension**: Click the cookie icon in your browser toolbar
2. **View Cookies**: The popup will show all cookies for the current website
3. **Switch Language**: Click "中文 / EN" in the header to switch language
4. **Search Cookies**: Use the search box to filter cookies by name
5. **Add New Cookie**: Click "Add Cookie" and fill in the details
6. **Import Cookies**: Click "Import", select a JSON file or paste JSON content, then confirm
7. **Export Cookies**: Click "Export" to download cookies for the selected domain
8. **Edit Cookie**: Click the edit button next to a cookie
9. **Delete Cookie**: Click the delete button next to a cookie
10. **Clear All**: Click the trash icon to remove all cookies for the selected domain
11. **Refresh**: Click the refresh icon to reload the cookie list

## JSON Format

Import accepts an array of cookie objects. `name` and `value` are required; other properties are optional:

```json
[
  {
    "name": "session_id",
    "value": "example-value",
    "domain": ".example.com",
    "path": "/",
    "secure": true,
    "httpOnly": true,
    "sameSite": "lax",
    "session": false,
    "expirationDate": 1798761600
  }
]
```

Exported files use the same format and can be imported directly.

## Cookie Properties

When adding or editing cookies, you can configure:

- **Name**: Cookie identifier (required)
- **Value**: Cookie data (required)
- **Domain**: Cookie domain scope
- **Path**: URL path where cookie is valid
- **Expires**: Expiration date and time
- **Secure**: Only transmit over HTTPS
- **HttpOnly**: Prevent client-side access
- **SameSite**: CSRF protection level (None/Lax/Strict)
- **Session Cookie**: Create session-only cookie

## Permissions

The extension requires the following permissions:

- `cookies`: Access and modify browser cookies
- `activeTab`: Access current tab information
- `*://*/*` host permission: Access cookies across websites selected in the popup

## Development

### File Structure
```
cookie-manager-extension/
├── manifest.json          # Extension manifest
├── background.js          # Background service worker
├── popup.html            # Popup interface
├── popup.css             # Popup styles
├── popup.js              # Popup functionality
├── locales/
│   ├── en.js             # English locale
│   └── zh.js             # Chinese locale
├── package.json          # npm scripts and dev dependencies
├── scripts/
│   └── build.js          # Node.js build script (packages the extension into dist/)
└── public/
    └── icon.png          # Transparent extension icon
```

### Build
Requires Node.js 22 or later.

```bash
npm ci
npm run build
```

Outputs an unpacked extension at `dist/cookie-manager/` and a distributable zip at `dist/cookie-manager-v<version>.zip`.

### Technologies Used
- HTML5, CSS3, JavaScript (ES6+)
- Chrome Extension Manifest V3
- Browser Cookies API

## Browser Support

- ✅ Chrome (Manifest V3)
- ✅ Edge (Manifest V3)
- ⚠️ Other Chromium-based browsers may work but are not explicitly tested

## Privacy & Security

- All cookie operations are performed locally in your browser
- No data is sent to external servers
- Imported and exported JSON files are processed locally
- Follows browser extension security best practices

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Note**: This extension is designed for developers and advanced users who need to manage cookies for testing and development purposes. Always be cautious when modifying cookies on production websites.
