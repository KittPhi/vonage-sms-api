const Nexmo = require('nexmo');
require('dotenv').config();

const nexmo = new Nexmo(
  {
    apiKey: process.env.API_KEY,
    apiSecret: process.env.API_SECRET,
    signatureSecret: process.env.SIGNATURE_SECRET,
    signatureMethod: 'md5hash',
  },
  {
    debug: true,
  }
);

const from = process.env.FROM_NUMBER;
const to = process.env.TO_NUMBER;
const text = 'A signed text message';

nexmo.message.sendSms(from, to, text, (err, responseData) => {
  if (err) {
    console.log(err);
  } else {
    if (responseData.messages[0]['status'] === '0') {
      console.log('Message sent successfully.');
    } else {
      console.log(
        `Message failed with error: ${responseData.messages[0]['error-text']}`
      );
    }
  }
});
