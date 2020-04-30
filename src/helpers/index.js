export function debounce(fn, delay) {
  var timedout;
  return function (...args) {
    if (timedout) {
      clearTimeout(timedout);
    }
    timedout = setTimeout(() => fn(...args), delay);
  };
}

export function createFont(num) {
  if (num && num !== "unknown") {
    const arr = Number(num).toExponential().split("+");
    const font = Number(arr[0].slice(0, -1)) + Number(arr[1]);
    return font + 10;
  } else {
    return 10;
  }
}
