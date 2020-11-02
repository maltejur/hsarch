export function checkFile(url) {
  return new Promise((resolve) => {
    fetch(url, {
      method: "HEAD",
    })
      .catch(() => resolve(false))
      .then(() => resolve(true));
  });
}

export function downloadFile(sUrl: string) {
  var link = document.createElement("a");
  link.href = sUrl;

  if (link.download !== undefined) {
    //Set HTML5 download attribute. This will prevent file from opening if supported.
    var fileName = sUrl.substring(sUrl.lastIndexOf("/") + 1, sUrl.length);
    link.download = fileName;
  }

  //Dispatching click event.
  if (document.createEvent) {
    var e = document.createEvent("MouseEvents");
    e.initEvent("click", true, true);
    link.dispatchEvent(e);
    return true;
  }
}
