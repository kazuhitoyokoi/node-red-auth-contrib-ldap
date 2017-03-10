# node-red-auth-contrib-ldap
LDAP authentication module for Node-RED

## Configration to use LDAP authentication

(1) Add LDAP server information into settings.js file
- vi ~/.node-red/settings.js
```
module.exports = {
...
    adminAuth: require("node-red-auth-contrib-ldap").init({
        url: "ldap://<hostname>:389",
        dn: "uid=%username%,ou=people,o=example,c=jp"
    }),
...
}
```

(2) Install LDAP authentication module
- cd ~/.node-red/node_modules/
- npm install node-red-auth-contrib-ldap

(3) Run Node-RED
- node-red
