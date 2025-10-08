// Exception-free nested nullable attribute accessor.
// Vendored from https://github.com/burakcan/mb?tab=readme-ov-file on 2025-10-08
var mb=p=>o=>p.map(c=>o=(o||{})[c])&&o

// Usage: var getHello = mb(["a", "b", 0, "hello"]);
