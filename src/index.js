const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
// const {sendBasicEmail}=require('./services/email-service')
const app = express();
const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server Started on Port:${PORT}`);
    // sendBasicEmail(
    //     'support@admin.com',
    //     'sgddsp@gmail.com',
    //     'This is a testing email',
    //     'Hey, how are you,I hope you like the support'
    // )
   
  });
};
prepareAndStartServer();
