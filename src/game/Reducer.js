const initialState = {
  hit: false,
  wheel: 0,
  target: 250,
  tolerance: 1
};

const inRange = (x, min, max) => {
  return (x - min) * (x - max) <= 0;
};

function reducer(state = initialState, action) {
  let nextState = { ...state };

  switch (action.type) {
    case 'SET_WHEEL':
      nextState.wheel = action.degrees;
      nextState.hit = inRange(
        nextState.wheel,
        state.target - state.tolerance,
        state.target + state.tolerance
      );
      break;

    case 'SET_TARGET':
      nextState.hit = false;
      nextState.target = action.degrees;
      break;
  }

  return nextState;
}

export default reducer;
