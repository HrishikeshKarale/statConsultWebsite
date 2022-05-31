
const machine = {
  state: 'DEFAULT',

  transitions: {
    DEFAULT: {
      async click () {
        this.changeState('CLICKED')
      }
    },

    CLICKED: {
      async process () {
        this.changeState('PROCESSING')
      }
    },

    PROCESSING: {
      async complete () {
        this.changeState('COMPLETE')
      }
    },

    COMPLETE: {
      async done () {
        console.log('Done')
      }
    }
  },

  async dispatch (actionName, ...payload) {
    const actions = this.transitions[this.state]
    const action = actions[actionName]

    if (action) {
      await action.apply(machine, ...payload)
    } else {
      // do nothing
    }
  },

  changeState (newState) {
    if (this.transitions[newState]) {
      this.state = newState
    } else {
      // do nothing
    }
  }
}

const buttonStateMachine = Object.create(machine, {
  name: {
    writable: false,
    enumerable: true,
    value: 'button'
  }
})

async function buttonState () {
  switch (buttonStateMachine.state) {
    case 'DEFAULT':
      await buttonStateMachine.dispatch('click')
      return 0
    case 'CLICKED':
      return 1
    case 'PROCESSING':
      return 2
    case 'COMPLETE':
      return 3
    default:
      return 4
  };
};

module.exports = buttonState
