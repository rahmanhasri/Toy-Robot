const readline = require('readline')
let robot = require('./robot')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Toy-Robot > ',
})

rl.prompt()
rl.on('line', function(input) {
  input = input.trim().toUpperCase().split(' ')
  let command = input[0]
  console.clear()

  switch(command) {
    case 'PLACE':
      // console.log('mulai game');
      break;
    case 'MOVE':

      break;

    default:
      let info = `Selamat datang di dunia Toy_Robot!`
      info += '\nPilihanlah input berikut:'
      console.log(info);
  }
})