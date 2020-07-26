const BaseServerlessPlugin = require('base-serverless-plugin');
const certificate = require('./src/certificate');
const route53 = require('./src/route53');
const awsUtils = require('./src/aws.utils');
const utils = require('./src/utils');

const LOG_PREFFIX = '[ServerlessHttpsCertificate] -';
const USR_CONF = 'certificate';

class ServerlessPlugin extends BaseServerlessPlugin {
  /**
   * Default Constructor
   *
   * @param {object} serverless the serverless instance
   * @param {object} options command line arguments
   */
  constructor(serverless, options) {
    super(serverless, options, LOG_PREFFIX, USR_CONF);
    Object.assign(this, certificate, route53, utils, awsUtils);

    this.hooks = {
      'before:deploy:deploy': this.dispatch.bind(this, this.beforeDeploy),
      'certificate:create:create': this.dispatch.bind(
        this,
        this.handleCert,
        undefined,
        true
      ),
    };

    this.commands = {
      certificate: {
        usage: 'certificate',
        commands: {
          create: {
            usage: 'Create new acm certificate',
            lifecycleEvents: ['create'],
          },
        },
      },
    };
  }

  /**
   * Before Deploy Hook
   *
   */
  async beforeDeploy() {
    await this.handleCert();
  }

  /**
   * Action Wrapper check plugin condition before perform action
   *
   * @param {function} funAction serverless plugin action
   */
  async dispatch(funAction, varResolver = undefined, fromCommand = false) {
    if (this.isPluginDisabled()) {
      this.log('warning: plugin is disabled');
      return '';
    }

    const disableHooks = this.getConf('disableLifecycleHooks', false);
    if (disableHooks && !fromCommand) {
      return '';
    }

    this.loadConfig();
    return funAction.call(this, varResolver);
  }

  /**
   * Load user config
   *
   */
  loadConfig() {
    this.cfg = {};
    this.cfg.domain = this.getConf('domain');
    this.cfg.certificate = this.getConf('name');
  }
}

module.exports = ServerlessPlugin;
