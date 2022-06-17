const { getRange, Dir, isOverlap } = require('./utils')

exports.seekFood = state => {
  const { snake, food, view } = state
  if (isOverlap(snake.body[0], food)) {
    return {
      ...state,
      snake: grow(snake),
      food: respawnFood(view),
    }
  }
  return state
}

function grow(snake) {
  return {
    ...snake,
    body: [...snake.body, getNewTail(snake)],
  }
}

function getNewTail(snake) {
  const { body, dir } = snake

  const tail = body[0]

  const toAx = {
    [Dir.DOWN]: 'y',
    [Dir.UP]: 'y',
    [Dir.LEFT]: 'x',
    [Dir.RIGHT]: 'x',
  }

  const toValue = {
    [Dir.DOWN]: 1,
    [Dir.UP]: -1,
    [Dir.RIGHT]: -1,
    [Dir.LEFT]: 1,
  }

  return {
    ...tail,
    // @ts-ignore
    [toAx[dir]]: tail[toAx[dir]] + toValue[dir],
  }
}

function respawnFood(view) {
  return {
    x: getRange(3, view.width - 3),
    y: getRange(3, view.height - 3),
  }
}
