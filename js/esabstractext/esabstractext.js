function toFloat (n) {
  n = +n;
  return n !== n ? 0 : n;
}
