const logger = require('./logger')

const emitter = new logger.Logger()

logger.log(() => {
  console.log('doing something')
})
