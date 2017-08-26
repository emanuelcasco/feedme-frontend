const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback')
// ^ middleware to redirect all URLs to index.html

const app = express()
const staticFileMiddleware = express.static(path.join(__dirname))

app.use(staticFileMiddleware)
app.use(history())
app.use(staticFileMiddleware)
// ^ You should include the static middleware twice as shown below.
// The first usage of the static file middleware will catch the majority of the static file requests.
// Next, we include the connect-history-api-fallback which will rewrite requests to index.html when necessary.
// At last, we include the static file middleware again so that rewritten requests can be served.

app.get('/', function (req, res) {
  res.render(path.join(__dirname, '/index.html'))
})

const port = process.env.PORT || 5000

app.listen(port, function () {
  console.log(`Express serving on ${port}`)
})
