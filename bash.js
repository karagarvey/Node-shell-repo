process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  const cmd = data.toString().trim();



  if (cmd === 'pwd'){
    console.log(__dirname);
    process.stdout.write('prompt > ');
  } else {
    process.stdout.write('You typed ' + cmd);
    process.stdout.write('prompt > ');
  }
})
