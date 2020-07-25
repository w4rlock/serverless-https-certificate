## Serverless Https Certificate Creator/Validation Plugin
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
[![npm version](https://badge.fury.io/js/serverless-https-certificate.svg)](https://badge.fury.io/js/serverless-https-certificate)
[![npm downloads](https://img.shields.io/npm/dt/serverless-https-certificate.svg?style=flat)](https://www.npmjs.com/package/serverless-https-certificate)

### Installation
```bash
npm i -E serverless-https-certificate
```

### Usage
```yaml
# serverless.yml

custom:
  certificate:
    disabled: false                     # optional
    disableLifecycleHooks: false        # optional
    domain: app.yourdomain.com
    name: "*.yourdomain.com"

```

## Command Line support
```bash
$ sls certificate --help
$ sls certificate create
```
