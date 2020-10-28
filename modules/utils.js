export function checkFile(url) {
  return new Promise((resolve) => {
    fetch(url)
      .catch(() => resolve(false))
      .then(() => resolve(true));
  });
}
