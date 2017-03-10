var when = require("when");
var ldap = require('ldapjs');
var config;

module.exports = {
   init: function(_config) {
       config = _config;
       return this;
   },
   type: "credentials",
   users: function(username) {
       return when.promise(function(resolve) {
           var user = { username: username, permissions: "*" };
           resolve(user);
       });
   },
   authenticate: function(username,password) {
       return when.promise(function(resolve) {
           var client = ldap.createClient({ url: config.url });
           client.bind(config.dn.replace("%username%", username), password, function(err) {
               client.unbind();
               if (err === null) {
                   console.log('LDAP login success as ' + username);
                   var user = { username: username, permissions: "*" };
                   resolve(user);
               } else {
                   console.log('LDAP login failure as ' + username + ': ' + err.message);
                   resolve(null);
               }
           });
       });
   },
   default: function() {
       return when.promise(function(resolve) {
           resolve(null);
       });
   }
}

