const os = require('os')
const mem = os.freemem() / os.totalmem()

console.log(mem)
