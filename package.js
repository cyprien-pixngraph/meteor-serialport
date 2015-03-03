Package.describe({
  name: 'spectrum:serialport',
  version: '0.0.1',
  summary: 'serialport library for Meteor',
  git: 'https://github.com/acidsound/meteor-serialport.git',
  documentation: 'README.md'
});

Npm.depends({
  "serialport": "1.4.6"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('serialport.js', 'server');
  api.export('SerialPort');
});
