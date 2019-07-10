let hasExtension = false;
const EXTENSION_ID = 'bckeimbecpnddkmfmhdiaifjfcpjlggm'
const checkInstalled = () => new Promise(function(resolve, reject) {
  chrome.runtime.sendMessage(EXTENSION_ID, { message: "version" },
  function (reply) {
    if (reply) {
      if (reply.version) {
          hasExtension = true;
      }
    }
    else {
      hasExtension = false;
    }
    resolve(hasExtension)
  });
})

const isInstalled = await checkInstalled();
if (isInstalled) {
  console.log('Extension is installed.');
} else {
  console.log('Extension is not installed or not allowed on this domain.');
}
