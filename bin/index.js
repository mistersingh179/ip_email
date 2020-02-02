#!/usr/bin/env node

const args = process.argv.splice(2)
if (args[0]) process.env.EMAIL_ADDRESS = args[0]
if (args[1]) process.env.SENDGRID_API_KEY = args[1]

console.log(process.cwd())

const execute = require('../index')

execute()
