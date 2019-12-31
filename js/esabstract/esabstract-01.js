function ToInteger (n) {
  n = +n;
  return n !== n ? 0 : Math.trunc(n);
}

// https://tc39.es/ecma262/#sec-tointeger
function ToInteger2 (argument) {
  var number = +argument;

  if (isNaN(number)) {
    return 0;
  }

  if (number === 0) {
    return number;
  }

  if (number === Infinity || number === -Infinity) {
    return number;
  }

  return Math.sign(number) * Math.floor(Math.abs(number));
}

function ToInteger3 (argument) {
  var number = +argument;

  if (isNaN(number)) {
    return 0;
  }

  if (number === 0 || !isFinite(number)) {
    return number;
  }

  return Math.sign(number) * Math.floor(Math.abs(number));
}

function SameValueZero (x, y) {
  return x === y || (x !== x && y !== y);
}

function SameValueZero2 (x, y) {
  return (x === y) || (Number.isNaN(x) && Number.isNaN(y));
}


// https://tc39.es/ecma262/#sec-tolength
function ToLength (argument) {
  var len = ToInteger(argument);

  if (len <= 0) {
    return 0;
  }

  return Math.min(len, Number.MAX_SAFE_INTEGER);
}

function ToLength2 (len) {
  return Math.max(Math.min(Number.MAX_SAFE_INTEGER, ToInteger(len)), 0);
}

function ToLength3 (len) {
  // return Math.max(Math.min(Number.MAX_SAFE_INTEGER, ToInteger(len)), 0);
  return Math.min(Math.max(ToInteger(len), 0), Number.MAX_SAFE_INTEGER);
}

function ToUint8Clamp (argument) {
  var number = +argument;
  if (number !== number) return 0;
  if (number <= 0) return 0;
  if (number >= 255) return 255;
  return roundHalfToEven(number);
}

function ToUint8Clamp2 (n) {
  // var buffer = new ArrayBuffer(1);
  var arr = new Uint8ClampedArray(1);
  arr[0] = n;
  return arr[0];
}
