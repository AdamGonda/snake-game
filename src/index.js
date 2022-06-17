const { run } = require('loop')
const { pipe } = require('./utils')

const renderMap = { head: 'X', body: 'x' }
const initialState = {
  snake: {
    body: [
      {
        x: 10,
        y: 5,
      },
    ],
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
    // features...
  )
}

run({
  initialState,
  update,
  toCommon,
  renderMap,
})
