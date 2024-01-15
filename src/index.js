const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
// const {sendBasicEmail}=require('./services/email-service')
const jobs=require('./utils/job')
const TicketController=require('./controllers/ticket-controller')
const app = express();
const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.post('/api/v1/tickets',TicketController.create)
  app.listen(PORT, async () => {
    console.log(`Server Started on Port:${PORT}`);
    jobs();
    // sendBasicEmail(
    //     'support@admin.com',
    //     'sgddsp@gmail.com',
    //     'This is a testing email',
    //     'Hey, how are you,I hope you like the support'
    // )
   
  });
};
prepareAndStartServer();
