const Express = require('express')
const app = new Express()

app.get('/', function(req, res) {
  res.send("Hello World!")
})

app.listen(3000, function() {
  console.log("Express listening on port 3000")
})
