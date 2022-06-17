const { isInRange, isOverlap } = require('./utils')

const BORDER_OFFSET = 1

exports.isGameOver = state => {
  const { snake, view, isGameOver } = state
  const [head, ...body] = snake.body

  return {
    ...state,
    isGameOver:
      isCollidedWithWalls(head, view, isGameOver) ||
      isSnakeBitesItself(head, body, isGameOver),
  }
}

function isCollidedWithWalls(head, view, isGameOver) {
  const left = 0
  const bottom = 0
  const right = view.width - BORDER_OFFSET
  const top = view.height - BORDER_OFFSET

  return isGameOver
    ? true
    : !isInRange(left, head.x, right) || !isInRange(bottom, head.y, top)
}

function isSnakeBitesItself(head, body, isGameOver) {
  return body.reduce(
    (acc, bodyPart) => (acc ? true : isOverlap(head, bodyPart)),
    isGameOver,
  )
}
