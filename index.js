const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

// app.get('/', function (req, res) {
// 	console.log(req);
//   res.send('<h1>Hello World!!!</h1>');
// })

app.get('/about', function (req, res) {
	res.send('about');
})

app.post('/api/v1/quiz', function (req, res) {
	const answer = req.body.answer;
	if(answer === "2"){
		// res.send("true");
		res.redirect("/correct.html");
	}else{
		// res.send("false");
		res.redirect("/wrong.html");
	}
})

app.get('/api/v1/users', function (req, res) {
	res.send({
		name: "Mike",
		age: 30,
	});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
	console.log("running");
})
