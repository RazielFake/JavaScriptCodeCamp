function urlSlug(title) {
  return title
  .toLowerCase()
  .trim()
  .split(/[ ]+/)
  .join('-')
}
