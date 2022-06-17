const { run } = require('loop')
const { pipe } = require('./utils')
const { move } = require('./move')
const { turn } = require('./turn')
const { seekFood } = require('./seekFood')
const { isGameOver } = require('./isGameOver')

const renderMap = { food: 'o', head: 'X', body: 'x' }
const initialState = {
  snake: {
    body: [
      {
        x: 10,
        y: 5,
        pX: 9,
        pY: 5,
      },
    ],
    dir: 'RIGHT',
  },
  food: { x: 9, y: 5 },
  view: { width: 20, height: 10 },
  isGameOver: false,
}

function toCommon(state) {
  const { snake, food } = state

  return [
    { ...food, tag: 'food' },
    ...snake.body.map((part, i) => ({
      x: part.x,
      y: part.y,
      tag: i == 0 ? 'head' : 'body',
    })),
  ]
}

// prettier-ignore
function update(state, input) {
  return pipe(state)(
    turn(input),
    move,
    seekFood,
    isGameOver
  )
}

run({
  initialState,
  update,
  toCommon,
  renderMap,
})
