export const getPageName = (uri) => {
  const index = uri.lastIndexOf('/');
  return uri.substring(index  + 1);
}
