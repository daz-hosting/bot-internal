const readline = require('readline');
const commands = {
  eval: require('./commands/eval')
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

function listen() {
  console.log('🤖 Bot internal aktif. Ketik "help" untuk daftar perintah.');
  rl.prompt();

  rl.on('line', async (line) => {
    const input = line.trim();
    let [cmd, ...args] = input.split(' ');
    cmd = cmd.trim();


    if (commands[cmd]) {
      await commands[cmd].execute(args);
    } else {
      console.log(`❓ Perintah "${cmd}" tidak dikenal. Ketik "help" untuk bantuan.`);
    }


    rl.prompt();
  });

  rl.on('close', () => {
    console.log('👋 Bot dimatikan.');
    process.exit(0);
  });
}

module.exports = { listen };
