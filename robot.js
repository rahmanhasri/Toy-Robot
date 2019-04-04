class Robot {
  constructor() {
    this.position = undefined
    this.facing = undefined
  }

  place(input) {
    input = input.split(',')
    this.position = {
      x: +input[0],
      y: +input[1],
    }
    this.facing = input[2]
  }

  move() {
    let compassValue = {
      'NORTH': [0,1],
      'WEST': [-1,0],
      'EAST': [1,0],
      'SOUTH': [0,-1]
    }
    this.position.x += compassValue[this.facing][0]
    this.position.y += compassValue[this.facing][1]
  }

  faceTo(input) {
    let compassValue = {
      'NORTH': ['WEST', 'EAST'],
      'EAST': ['NORTH', 'SOUTH'],
      'SOUTH': ['EAST', 'WEST'],
      'WEST': ['SOUTH', 'NORTH'],
    }
    if(input === 'LEFT') {
      this.facing = compassValue[this.facing][0]
    } else if(input === 'RIGHT') {
      this.facing = compassValue[this.facing][1]
    }
  }

  positionFixer() {
    
  }

  report() {
    return `${this.position.x},${this.position.y},${this.facing}`
  }
}

module.exports = new Robot()