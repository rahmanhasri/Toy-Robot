const readline = require('readline')
let robot = require('./robot')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Toy-Robot > ',
})

let info = `Selamat datang di dunia Toy_Robot!`
let commandInfo = 'Pilihlah salah satu input berikut:\n(place, move, left, right, report, close)' 
info += '\n' + commandInfo
console.log(info);

rl.prompt()
rl.on('line', function(input) {
  input = input.trim().toUpperCase().split(' ')
  let command = input[0]
  // console.clear()

  switch(command) {
    case 'PLACE':
      let compass = ['NORTH', 'EAST', 'SOUTH', 'WEST']
      let cek = true
      let placeInput = input.slice(1)
      if(placeInput[0] < 0 || placeInput[1] > 4) {
        cek = false
      }

      if(placeInput[1] < 0 || placeInput[1] > 4) {
        cek = false
      }

      if(!compass.includes(placeInput[2])) {
        cek = false
      }

      if(!cek) {
        console.log('input place salah');
        console.log('the right way = PLACE <0-4> <0-4> <north/east/west/south>')
      } else {
        robot.place(placeInput.join(','))
      }
      
      break;
    case 'MOVE':
      if(!robot.isPlaced) {
        console.log('input command place terlebih dahulu')
      } else {
        robot.move()
      }
      break;
    case 'REPORT':
        console.log(robot.report());
      break;
    case 'LEFT':
      robot.faceTo(command)
      break;
    case 'RIGHT':
      robot.faceTo(command)
      break;
    case "CLOSE":
      console.log(`Good Bye`);
      setTimeout(function() {
          console.clear()
          rl.close()
      }, 1000);
      break;
    default:
      console.log(commandInfo);
  }
})