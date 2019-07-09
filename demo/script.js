let _EXTENSION_ID = 'bckeimbecpnddkmfmhdiaifjfcpjlggm';

let _hasExtension = false;
const _checkInstalled = () => new Promise(function (resolve, reject) {
  chrome.runtime.sendMessage(_EXTENSION_ID, { message: "version" },
    function (reply) {
      if (reply) {
        if (reply.version) {
          _hasExtension = true;
        }
      }
      else {
        _hasExtension = false;
      }
      resolve(_hasExtension)
    });
})

const _check = async () => {
  const _isInstalled = await _checkInstalled();
  let copy = 'The extension is not installed';
  if (_isInstalled) {
    copy = 'The extension is installed';
  }
  let elem = document.createElement('div');
  elem.innerHTML = copy
  document.body.appendChild(elem)
}