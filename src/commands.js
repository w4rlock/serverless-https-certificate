const commands = {
  create: {
    usage: 'Create new acm certificate',
    lifecycleEvents: ['create'],
  },
};

module.exports = {
  certificate: {
    usage: 'certificate',
    commands,
  },
};
