const express = require('express')
const app = express()
const port = 3000

app.use(function (_, response) {
    response.sendFile(__dirname + "/index.html");
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
