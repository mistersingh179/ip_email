const execute = require('../index')

const getPublicAndPrivateIp = require('../lib/getPublicAndPrivateIp')
jest.mock('../lib/getPublicAndPrivateIp')
getPublicAndPrivateIp.mockImplementation(() => Promise.resolve({ foo: 'bar' }))

const emailIps = require('../lib/emailIps')
jest.mock('../lib/emailIps')
emailIps.mockImplementation(() => Promise.resolve())

describe('execute', () => {
  it('is defined and a function', () => {
    expect(execute).toBeDefined()
    expect(execute).toBeInstanceOf(Function)
  })
  it('asks for ip address', async () => {
    await execute()
    expect(getPublicAndPrivateIp).toHaveBeenCalled()
  })
  it('makes call to sends an email', async () => {
    await execute()
    expect(emailIps).toHaveBeenCalled()
  })
  test('call to send is passed in the IP\'s it got', async () => {
    await execute()
    expect(emailIps).toHaveBeenCalledWith({ foo: 'bar' })
  })
})
