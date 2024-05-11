function ceil(num) {
  return num - (num % 1) + (num < 0 ? 0 : 1);
}
function floor(num) {
  return num - (num % 1) + (num < 0 ? -1 : 0);
}
