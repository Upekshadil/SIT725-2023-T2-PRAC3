var express = require("express")
var app = express()


app.use(express.static(__dirname))
app.use(express.json);
app.use(express.urlencoded({ extends: false }))

const addNumbers = (num1, num2) => {
  var n1 = parseInt(num1)
  var n2 = parseInt(num2)
  var result = n1 + n2;
  return result;
}

app.get("/addnumbers", (req, res) => {
  var num1 = req.query.num1;
  var num2 = req.query.num2;
  var result = addNumbers(num1, num2)
  res.json({ statusCode: 200, data: result, message: 'Successful' })
})


var port = process.env.port || 3000;

app.listen(port, () => {
  console.log("App Connecting to Port: http://localhost:" + port)
})​