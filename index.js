require('dotenv')
const getPublicAndPrivateIp = require('./lib/getPublicAndPrivateIp')
const emailIps = require('./lib/emailIps')

const execute = async () => {
  if (process.env.EMAIL_ADDRESS === undefined || process.env.SENDGRID_API_KEY === undefined) {
    console.error('missing env variables! You need to set EMAIL_ADDRESS & SENDGRID_API_KEY env variables')
    console.error('optionally you can also pass then as arguments like: ip_email xx@yy.com 12345')
    throw new Error('missing env variables for ip_email to function!')
  }
  const ipsHash = await getPublicAndPrivateIp()
  console.log('got ips: ', ipsHash)
  emailIps(ipsHash)
    .then(res => console.log(`sendgrid response code: ${res[0].statusCode} and statusMessage: ${res[0].statusMessage}`) )
    .catch(err => console.error(err))
}

module.exports = execute
