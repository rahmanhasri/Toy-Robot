class Robot {
  constructor() {
    this._position = {
      x: null,
      y: null,
    }
    this._facing = null
    this._isPlaced = false
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

  get isPlaced() {
    return this._isPlaced
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
  set isPlaced(input) {
    this._isPlaced = input
  }

  place(input) {
    input = input.split(',')
    this.isPlaced = true
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
    this.positionFixer()
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
    this.x = this.x < 0 ? 0 : this.x
    this.x = this.x > 4 ? 4 : this.x

    this.y = this.y < 0 ? 0 : this.y
    this.y = this.y > 4 ? 4 : this.y
  }

  report() {
    if(!this.isPlaced) {
      return 'silakan input place terlebih dahulu'
    }
    return `${this.x},${this.y},${this.facing}`
  }
}

module.exports = new Robot()