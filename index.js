require('dotenv').config()

const getPublicAndPrivateIp = require('./lib/getPublicAndPrivateIp')
const emailIps = require('./lib/emailIps')

const execute = async () => {
  if (process.env.EMAIL_ADDRESS === undefined || process.env.SENDGRID_API_KEY === undefined) {
    console.error('missing env variables for ip_email to function!')
    throw new Error('missing env variables for ip_email to function!')
  }
  const ipsHash = await getPublicAndPrivateIp()
  emailIps(ipsHash)
    .catch(err => console.error(err))
}

module.exports = execute
