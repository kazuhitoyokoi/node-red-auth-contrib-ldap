# node-red-auth-contrib-ldap
LDAP authentication module for Node-RED

## Configration to use LDAP authentication

(1) Install LDAP authentication module
```
sudo npm install -g node-red-auth-contrib-ldap
```

(2) Add LDAP server information into settings.js
```
vi ~/.node-red/settings.js
```
Add adminAuth block in module.exports block as follows.
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
You can modify dn(distinguished name) which corresponds with your LDAP server.
%username% is reserved word which dn string has as user name.

(3) Run Node-RED
```
node-red
```

