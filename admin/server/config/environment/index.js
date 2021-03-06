'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),
  public_config: {env:process.env.NODE_ENV||'development'},
  // Server port
  port: process.env.PORT || 9001,

  // Should we populate the DB with sample data?
  seedDB: false,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'mean-secret'
  },

  // List of user roles
  userRoles: ['guest', 'user', 'provider', 'admin'],

  // MongoDB connection options
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  },

  facebook: {
    clientID:     process.env.FACEBOOK_ID || 'id',
    clientSecret: process.env.FACEBOOK_SECRET || 'secret',
    callbackURL:  process.env.DOMAIN + '/auth/facebook/callback'
  },

  twitter: {
    clientID:     process.env.TWITTER_ID || 'id',
    clientSecret: process.env.TWITTER_SECRET || 'secret',
    callbackURL:  process.env.DOMAIN + '/auth/twitter/callback'
  },

  google: {
    clientID:     process.env.GOOGLE_ID || 'id',
    clientSecret: process.env.GOOGLE_SECRET || 'secret',
    callbackURL:  process.env.DOMAIN + '/auth/google/callback'
  }
};
console.log(process.env.NODE_ENV);
// Export the config object based on the NODE_ENV
// ==============================================

var env = require('./' + process.env.NODE_ENV + '.js') || {};
if (env.prototype) {
  env = env(all);
}

module.exports = _.merge(all,env);