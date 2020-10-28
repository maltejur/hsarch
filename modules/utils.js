export function checkFile(url) {
  return new Promise((resolve) => {
    fetch(url, {
      method: "HEAD",
    })
      .catch(() => resolve(false))
      .then(() => resolve(true));
  });
}
