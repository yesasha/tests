function roundDown (x) {
  return Math.floor(x);
}

function roundUp (x) {
  return Math.ceil(x);
}

function roundToZero (x) {
  return Math.trunc(x);
}

function roundHalfUp (x) {
  return Math.round(x);
}

function roundHalfToEven (x) {
  x = +x;

  if (x === 0 || !isFinite(x)) {
    return x;
  }

  var f = Math.floor(x);
  if ((f + 0.5) < x) return f + 1;
  if (x < (f + 0.5)) return f;
  if (f % 2) return f + 1;
  return f;
}
