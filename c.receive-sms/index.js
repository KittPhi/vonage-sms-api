const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000);

app.post('/webhooks/inbound-sms', (req, res) => {
  console.log(req.body);
  res.status(204).end();
});
