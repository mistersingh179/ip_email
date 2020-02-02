require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: process.env.EMAIL_ADDRESS,
  from: process.env.EMAIL_ADDRESS,
  subject: 'IP information',
  text: 'IP information'
}

const emailIps = (ipsHash) => {
  msg.text = JSON.stringify(ipsHash)
  console.log('msg package is: ', msg)
  return sgMail.send(msg)
}

module.exports = emailIps
