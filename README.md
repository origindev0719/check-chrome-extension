## Check if user installed an Chrome extension

To check if user installed our Chrome extension. We will send an event to that extension, if we receive response, that means that extension is installed
## Files
### manifest.json
`externally_connectable` is required. We have to declare domains to check if extension is installed

### background.js
Listener which sends event back to app when receives event from app
## Demo
- Change value of `_EXTENSION_ID` to your extension ID in demo/script.js
- Run following command
`serve demo`
If you haven't had `serve` installed. Install by `npm install -g serve`

You can paste code inside `send-message.js` to Chrome DevTools. It will work too. (Remember to change your extension id also)