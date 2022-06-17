const Dir = {
  UP: 'UP',
  DOWN: 'DOWN',
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
}

function pipe(seed) {
  return (...fns) => fns.reduce((state, fn) => fn(state), seed)
}

function getRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function isOverlap(obj1, obj2) {
  return obj1.x == obj2.x && obj1.y == obj2.y
}

module.exports = {
  Dir,
  pipe,
  getRange,
  isOverlap,
}
