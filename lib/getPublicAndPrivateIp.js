const { v4 } = require('public-ip')
const getLocalIp = require('./getLocalIps')
const getPublicAndPrivateIp = async () => {
  const publicIp = await v4()
  const privateIpHash = getLocalIp()
  return { public: publicIp, private: privateIpHash }
}

module.exports = getPublicAndPrivateIp
