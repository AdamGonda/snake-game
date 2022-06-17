function pipe(seed) {
  return (...fns) => fns.reduce((state, fn) => fn(state), seed)
}

module.exports = {
  pipe,
}
