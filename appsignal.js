require('dotenv').config();
const { Appsignal } = require("@appsignal/nodejs");


exports.appsignal = new Appsignal({
  active: process.env.APPSIGNAL_ACTIVE,
  name: process.env.APPSIGNAL_APP_NAME,
  pushApiKey: process.env.APPSIGNAL_PUSH_API_KEY, // Note: renamed from `apiKey` in version 2.2.5
  debug: true, // Enables debug mode for the Node.js environment
});


