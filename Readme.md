## Overview: 

Sends an email out with the external and internal ip of the computer it ran on.

## Pre-requisites:

`SENDGRID_API_KEY` & `EMAIL_ADDRESS` must be available as an environment variables.

## Usage:

```
const ipEmail = require('ip_email')
ipEmail()
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
- from within package directory do `npm link`
 
## Todo:

- executable which can be run globally as well