chrome.runtime.onMessageExternal.addListener(
  function (request, sender, sendResponse) {
    if (request) {
      if (request.message) {
        if (request.message == "version") {
          console.log('received event')
          sendResponse({ version: 1.0 });
        }
      }
    }
    return true;
  });