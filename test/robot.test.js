let robot = require('../robot')

let chai = require('chai')
let expect = chai.expect

describe('Test Case Robot Movement', function() {

  // Example a
  it('Expected output 0,1,NORTH', function(done) {
    robot.place('0,0,NORTH')
    robot.move()
    expect(robot.report()).to.equal('0,1,NORTH')
    done()
  })

  // Example b
  it('Expected output 0,0,WEST', function(done) {
    robot.place('0,0,NORTH')
    robot.faceTo('LEFT')
    expect(robot.report()).to.equal('0,0,WEST')
    done()
  })

  // Example c
  it('Expected output 3,3,NORTH', function(done) {
    robot.place('1,2,EAST')
    robot.move()
    robot.move()
    robot.faceTo('LEFT')
    robot.move()
    expect(robot.report()).to.equal('3,3,NORTH')
    done()
  })

})