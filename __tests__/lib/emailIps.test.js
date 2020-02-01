const emailIps = require('../../lib/emailIps')
jest.mock('@sendgrid/mail')
const sgMail = require('@sendgrid/mail')

describe('emailIps', () => {
  afterEach(() => {

  })
  test('its defined and is a function', () => {
    expect(emailIps).toBeDefined()
    expect(emailIps).toBeInstanceOf(Function)
  })
  test('it takes 1 param', () => {
    expect(emailIps.length).toBe(1)
  })
  test('send an email out', () => {
    emailIps({ abc: 'xyz' })
    expect(sgMail.send).toHaveBeenCalled()
  })
  it('sends the ip hash in the email', () => {
    const ipsHash = { public: '1.2.3.4', private: { en0: '1.1.1.1' } }
    emailIps(ipsHash)
    const expectedParam = {
      to: expect.anything(),
      from: expect.anything(),
      subject: expect.anything(),
      text: JSON.stringify(ipsHash)
    }
    expect(sgMail.send).toHaveBeenCalledWith(expectedParam)
  })
})
