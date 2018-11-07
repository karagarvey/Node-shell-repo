const fs = require('fs')

const lsFunc = function(){
  console.log('about to do fs.readdir')
  fs.readdir('./', 'UTF-8', (err, files) => {
    console.log('ls callback running')
    if (err){
      throw err
    } else {
      process.stdout.write(files.join('\n'))
      process.stdout.write('\nprompt > ')
    }
  })
  console.log('just fs.readdir')

  let thing = 1  for (var i = 1; i < 1000000000; i++) {
    thing = thing * i
  }

  console.log('finished!', thing)
}

module.exports = lsFunc
