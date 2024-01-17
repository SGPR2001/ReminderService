const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const {createChannel,subscribeMessage}=require("./utils/messageQueue")
const{REMINDER_BINDING_KEY}=require("./config/serverConfig")

const jobs=require('./utils/job')
const TicketController=require('./controllers/ticket-controller')
const EmailService =require("./services/email-service")
const app = express();
const prepareAndStartServer = async() => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  const channel=await createChannel()
  subscribeMessage(channel,EmailService.subscribeEvents,REMINDER_BINDING_KEY)
  app.post('/api/v1/tickets',TicketController.create)
  app.listen(PORT, async () => {
    console.log(`Server Started on Port:${PORT}`);
    // jobs();
    
   
  });
};
prepareAndStartServer();
