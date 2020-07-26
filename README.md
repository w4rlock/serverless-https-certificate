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
    disabled: false                     # optional, disable this plugin
    disableLifecycleHooks: false        # optional, disable serverless lifecycle hook, util for call this plugin from another plugin
    domain: app.yourdomain.com.         # aws domain for create dns record for certificate validation
    name: "*.yourdomain.com"            # certificate name

```

## Command Line support
```bash
$ sls certificate --help
$ sls certificate create
```
