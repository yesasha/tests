function toAlpha (argument) {
  var number = +argument;
  if (number !== number) return 0;
  if (number <= 0) return 0;
  if (number >= 1) return 1;
  return number;
}

function hexToAlpha (argument) {
  var number = ToUint8Clamp(argument);
  return number / 255;
}

function toHexComponent (c) {
  return ('0' + ToUint8Clamp(c).toString(16)).slice(-2);
}

function toHexColor (r, g, b) {
  return '#' + toHexComponent(r) + toHexComponent(g) + toHexComponent(b);
}

function toRGB (r, g, b) {
  return 'rgb(' + ToUint8Clamp(r) + ', ' + ToUint8Clamp(g) + ', ' + ToUint8Clamp(b) + ')';
}

function toRGBA (r, g, b, a) {
  return 'rgba(' + ToUint8Clamp(r) + ', ' + ToUint8Clamp(g) + ', ' + ToUint8Clamp(b) + ', ' + toAlpha(a) + ')';
}

function isEqualFPU (a, b, epsilon) {
  epsilon = toFloat(epsilon);

  epsilon = Math.abs(epsilon);

  if (epsilon < Number.EPSILON) {
    epsilon = Number.EPSILON;
  }

  return Math.abs(b - a) <= epsilon;
}

function clampZero (x, epsilon) {
  x = +x;
  return isEqualFPU(x, 0, epsilon) ? Math.sign(x) * 0 : x;
}


function clampMinMax (x, min, max) {
  x = +x;
  if (x !== x) return 0;
  min = +min;
  if (min !== min) min = -Infinity;
  max = +max;
  if (max !== max) max = Infinity;
  if (x < min) return min;
  if (x > max) return max;
  return x;
  // return Math.max(Math.min(max, x), min);
}

function clampMinMaxZero (x, min, max, epsilon) {
  return clampZero(clampMinMax(x, min, max), epsilon);
}

function dist (x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
