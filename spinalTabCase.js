function spinalCase(str) {
  return str
  .split(/(?=[A-Z])|[ _-]+/)
  .join('-')
  .toLowerCase()
  ;
}
