function info() {
  const m = new Map();
  m.set('name', 'ajs');
  m.set('version', '1.0.0');
  return m;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = info;
} else if (typeof define === 'function' && define.amd) {
  define([], function() { return info; });
} else {
  window.ajs = info;
}