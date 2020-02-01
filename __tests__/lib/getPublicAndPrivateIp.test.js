const getPublicAndPrivateIp = require('../../lib/getPublicAndPrivateIp')
jest.mock('public-ip')
jest.mock('../../lib/getLocalIps')
const { v4 } = require('public-ip')

describe('getPublicAndPrivateIp', () => {
  beforeAll(() => {
    v4.mockReturnValue(Promise.resolve('123.123.123.123'))
  })
  it('is a function', () => {
    expect(getPublicAndPrivateIp).toBeInstanceOf(Function)
  })
  it('returns a hash', async () => {
    const hash = await getPublicAndPrivateIp()
    expect(hash).toMatchObject({})
  })
  describe('public key of hash', () => {
    test('returned hash has a key by the name of public in it', async () => {
      const hash = await getPublicAndPrivateIp()
      expect(Object.keys(hash)).toContain('public')
    })
    test('public key has an IP address as value', async () => {
      const hash = await getPublicAndPrivateIp()
      const ip = hash.public
      expect(ip).toMatch(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/)
    })
    test('gets the public ip from public-ip npm package', async () => {
      const hash = await getPublicAndPrivateIp()
      const ip = hash.public
      expect(ip).toBe('123.123.123.123')
    })
  })
  describe('private key of hash', () => {
    test('returned has has a key by the name of private in it', async () => {
      const hash = await getPublicAndPrivateIp()
      expect(Object.keys(hash)).toContain('private')
    })
    test('private has a hash for valuer', async () => {
      const hash = await getPublicAndPrivateIp()
      const privateHash = hash.private
      expect(privateHash).toBeInstanceOf(Object)
      expect(privateHash).toMatchObject({})
    })
    test('private hash has ip addresses in it', async () => {
      const hash = await getPublicAndPrivateIp()
      const privateHash = hash.private
      const ips = Object.values(privateHash)
      const ip = ips[0]
      expect(ip).toMatch(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/)
    })
    test('private hash has IP as given by getLocalIp module', async () => {
      const hash = await getPublicAndPrivateIp()
      const privateHash = hash.private
      const ips = Object.values(privateHash)
      const ip = ips[0]
      expect(ip).toBe('123.123.123.123')
    })
  })
})
