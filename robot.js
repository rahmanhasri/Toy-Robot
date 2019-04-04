class Robot {
  constructor() {
    this._position = {
      x: null,
      y: null,
    }
    this._facing = null
  }

  get x() {
    return this._position.x
  }

  get y() {
    return this._position.y
  }

  get facing() {
    return this._facing
  }

  set x(input) {
    this._position.x = input
  }

  set y(input) {
    this._position.y = input
  }

  set facing(input) {
    this._facing = input
  }

  place(input) {
    input = input.split(',')
    this.x = +input[0]
    this.y = +input[1]
    this.facing = input[2]
  }

  move() {
    let compassValue = {
      'NORTH': [0,1],
      'WEST': [-1,0],
      'EAST': [1,0],
      'SOUTH': [0,-1]
    }
    this.x = this.x + compassValue[this.facing][0]
    this.y = this.y + compassValue[this.facing][1]
  }

  faceTo(input) {
    let direction = {
      'NORTH': ['WEST', 'EAST'],
      'EAST': ['NORTH', 'SOUTH'],
      'SOUTH': ['EAST', 'WEST'],
      'WEST': ['SOUTH', 'NORTH'],
    }
    if(input === 'LEFT') {
      this.facing = direction[this.facing][0]
    } else if(input === 'RIGHT') {
      this.facing = direction[this.facing][1]
    }
  }

  positionFixer() {
    
  }

  report() {
    return `${this.x},${this.y},${this.facing}`
  }
}

module.exports = new Robot()