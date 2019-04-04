const Robot = require('../robot')

const chai = require('chai')
const expect = chai.expect

let robot;

describe('Test Case Robot Movement', function() {

  beforeEach(function() {
    robot = new Robot()
  })
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

  // Other examples
  it('Expected output 0,0,SOUTH', function(done) {
    robot.place('0,0,SOUTH')
    expect(robot.report()).to.equal('0,0,SOUTH')
    done()
  })

  it('Expected output robot belum diposisikan', function(done) {
    expect(robot.move()).to.equal('robot belum diposisikan')
    done()
  })

  it('Expected output 4,0,EAST (robot only moves within 5x5 dimensions)', function(done) {
    robot.place('0,0,EAST')
    robot.move()
    robot.move()
    robot.move()
    robot.move()
    robot.move()
    robot.move()
    expect(robot.report()).to.equal('4,0,EAST')
    done()
  })

  it('Expected output 0,4,NORTH (robot only moves within 5x5 dimensions)', function(done) {
    robot.place('0,0,NORTH')
    robot.move()
    robot.move()
    robot.move()
    robot.move()
    robot.move()
    robot.move()
    expect(robot.report()).to.equal('0,4,NORTH')
    done()
  })

  it('Expected output silahkan input place terlebih dahulu', function(done) {
    expect(robot.report()).to.equal('silakan input place terlebih dahulu')
    done()
  })
})