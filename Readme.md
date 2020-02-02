## Overview: 

Sends an email out with the external and internal ip of the computer it ran on.

## Pre-requisites:

`SENDGRID_API_KEY` & `EMAIL_ADDRESS` must be available as environment variables.

## Usage:

From Within your application:

```
const ipEmail = require('ip_email')
ipEmail()
```

### From Command Line:

```
ip_email xxx@yyy.com 12345
```

### From `Crontab`:

```
@reboot ~/.nvm/versions/node/v13.2.0/bin/ip_email xxx@yyy.com 12345
```

The code above will result an email being send to `process.env.EMAIL_ADDRESS` with `body` which looks like:

```
{
    public: '1.2.3.4',
    private: {
        en0: '1.1.1.1'
    }
}
```

 
## Development Setup

- git clone the package
 
## Troubleshooting

- ensure that you have EMAIL_ADDRESS & SENDGRID env variables set up
- .env files are looked up in current working directory(cwd)
- from cron jobs cwd is your home directory, so .env file there would do the trick

## Todo

- add toggle for debug logs