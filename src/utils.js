const Dir = {
  UP: 'UP',
  DOWN: 'DOWN',
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
}

function pipe(seed) {
  return (...fns) => fns.reduce((state, fn) => fn(state), seed)
}

module.exports = {
  Dir,
  pipe,
}
