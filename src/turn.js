const { Dir } = require('./utils')

exports.turn = input => {
  return state => {
    const { snake } = state
    return {
      ...state,
      snake: {
        ...snake,
        dir: input ? validateTurn(snake.dir, input) : snake.dir,
      },
    }
  }
}

function validateTurn(currDir, input) {
  if (
    (currDir === Dir.RIGHT && input === Dir.LEFT) ||
    (currDir === Dir.LEFT && input === Dir.RIGHT) ||
    (currDir === Dir.UP && input === Dir.DOWN) ||
    (currDir === Dir.DOWN && input === Dir.UP)
  ) {
    return currDir
  }
  return input
}
