export default {
  setWheel: function(degrees) {
    return { type: 'SET_WHEEL', degrees };
  },

  setTarget: function() {
    const degrees = (Math.random() * 360).toFixed(0);
    return { type: 'SET_TARGET', degrees };
  }
};
