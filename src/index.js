const { run } = require('loop')
const { pipe } = require('./utils')
const { move } = require('./move')

const renderMap = { head: 'X', body: 'x' }
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
  view: { width: 20, height: 10 },
  isGameOver: false,
}

function toCommon(state) {
  const { snake } = state

  return [
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
    move,
  )
}

run({
  initialState,
  update,
  toCommon,
  renderMap,
})
