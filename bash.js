const exportsFromPwd = require('./pwd.js');
const exportsFromLs = require('./ls.js');

process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  console.log('data event listener callback running')
  const cmd = data.toString().trim();

  if (cmd === 'pwd'){
    exportsFromPwd();
    process.stdout.write('\nprompt > ');
  } else if (cmd === 'ls'){
    exportsFromLs()
  } else {
    process.stdout.write('You typed ' + cmd);
    process.stdout.write('\nprompt > ');
  }
})


