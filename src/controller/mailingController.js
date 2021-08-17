const debug = require("debug")("app:mailingController");
const nodemailer = require("nodemailer");
const validator = require("email-validator");
const Msg = require('../model/message')
const Mailgen = require("mailgen");

const validateEmail = (emails) => {
  const emailList = emails.split(',');
  for (email of emailList) {
    if (!validator.validate(email))
      return false
  }
  return true;
}

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD,
  },
});

let mailGenerator = new Mailgen({
  theme: "default",
  product: {
    name: "HNG",
    link: process.env.HOST_URL,
    logo: `https://res.cloudinary.com/lollykrown/image/upload/v1629216593/uploaded/hngi.jpg`,
    copyright: "Copyright © 2021 HNGi. All rights reserved.",
  },
});


function mailingController() {
  function sendMail(req, res) {
    (async function auth() {
      try {
        let { name, email, message } = req.body;
        if (!name) {
          res.status(423).send({
            status: false,
            message: "Please provide your name",
          });
          return;
        }
        if (!email) {
          res.status(423).send({
            status: false,
            message: "Please provide your email address",
          });
          return;
        }
        if (!message) {
          res.status(400).send({
            status: false,
            message: "Pplease type in a message",
          });
          return;
        }
        debug(name, email, message);
        let valid = validateEmail(email);
        if (!valid) {
          req.flash('error',"Invalid Email address")
          res.redirect(302, '/')            

        }
        const emailContent = {
          body: {
            name: `${name}`,
            intro: "Thank you for sending us a message, your message has been received by the Zuri team.",
            greeting: "Hello",
            signature: "Sincerely",
            action: {
              instructions:
                `Sender's name: ${name}<br>
                 Sender's email: ${email}<br>
                 Message: ${message} 
                <br><br><br><br>

                To get started with Zuri, click the link below`,
              button: {
                color: "#00aeff",
                text: "Visit Zuri!",
                link: 'https://internship.zuri.team/',
              },
            },
            outro:
              `Need help, or have questions? Contact the Zuri team or visit the office at 8 Jubliee-CMD Road, Magodo,
              Lagos State, Nigeria.`,
          },
        };
        let emailBody = mailGenerator.generate(emailContent);
        const msg = new Msg({ name, email, message });
        msg
          .save()
          .then((newUser) => {
            debug(newUser);
            let from = `Zuri Form submissions <kay.nazirite@gmail.com>`;
            let mailOptions = {
              from: from,
              to: [process.env.SITE_OWNER_EMAIL, email],
              cc: [],
              bcc: [],
              subject: `Form submission from ${name}`,
              html: emailBody
            };

            transporter.sendMail(mailOptions, function (err, info) {
              if (err) {
                req.flash('error',"An unknown error occured!")
                res.render('indexx.ejs', {messages: req.flash('info'), err: req.flash('error')}) 
                debug(err);
              }
              debug(`Email sent: ${info.response}`);
            });
            req.flash('info',"Message sent successfully, you'd receive a copy")

            res.redirect(302, '/')            
          })
          .catch((err) => debug(err));
      } catch (err) {
        debug(err.stack);
        req.flash('error',"Internal Server Error!")
        res.redirect(302, '/') 
        
      }
    })();
  }
  return {
    sendMail,
  };
}

module.exports = mailingController;
