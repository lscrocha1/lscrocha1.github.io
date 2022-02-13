const fs = require('fs');

fs.copyFile('.\\src\\app\\env\\env-dev.ts', '.\\src\\app\\env\\env.ts', (err) => {
  if (err) throw err;
});
