const getLocalIp = require('../../lib/getLocalIps')

describe('getLocalIp', () => {
  test('it is a defined & a function', () => {
    expect(getLocalIp).toBeDefined()
    expect(getLocalIp).toBeInstanceOf(Function)
  })
  test('returns a hash', () => {
    expect(getLocalIp()).toMatchObject({})
  })
  test('returned hash has at least one key', () => {
    const hash = getLocalIp()
    expect(Object.keys(hash).length).toBeGreaterThan(0)
  })
  test('returned hash has IP\'s as values', () => {
    const hash = getLocalIp()
    const values = Object.values(hash)
    expect(values[0]).toMatch(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/)
  })
})
