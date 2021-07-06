const Nexmo = require('nexmo');
require('dotenv').config();

const nexmo = new Nexmo({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET,
});

let text = '👋 Hello from Vonage!';

nexmo.message.sendSms(
  process.env.FROM_NUMBER,
  process.env.TO_NUMBER,
  text,
  {
    type: 'unicode',
  },
  (err, responseData) => {
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
  }
);
