/*
----- Problem description -----

Given a stream of input, if duplicates arrive within a certain time window of each other, only accept the first one.

For example, if the time window is 5 minutes and you have this stream:
"Harry" arrives at 12:01 --> accept
"Sam" arrives at 12:02 --> accept
"Rebecca" arrives at 12:05 --> accept
"Rebecca" arrives at 12:06 --> reject
"Harry" arrives at 12:06 –> accept
*/

const logger = {}

const timeWindow = (name) => {
  let currentTime = new Date().getTime()

  if (!logger[name]) {
    logger[name] = currentTime
    return true
  } else {
    // Check current time against last time logged
    const diff = (currentTime - logger[name]) / (1000 * 60)

    if (diff < 5) {
      return false
    } else {
      logger[name] = currentTime
      return true
    }
  }
}