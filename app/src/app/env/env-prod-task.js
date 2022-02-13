const fs = require('fs');

fs.copyFile('.\\src\\app\\env\\env-prod.ts', '.\\src\\app\\env\\env.ts', (err) => {
  if (err) throw err;
});
