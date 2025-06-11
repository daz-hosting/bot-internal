const util = require('util');

module.exports = {
  name: '∆',
  description: 'Evaluasi kode JavaScript async',
  async execute(args) {
    const code = args.join(' ');
    try {
      let evaled = await eval(`(async () => { ${code} })()`);
      if (typeof evaled !== 'string') evaled = util.inspect(evaled);
      console.log('[eval response]', util.format(evaled));
    } catch (e) {
      console.log('[eval error]', util.format(e));
    }
  }
};
