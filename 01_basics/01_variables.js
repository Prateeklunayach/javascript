const accountId = 144553
let accountEmail = "prateek@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountID = 2 // not allowed

accountEmail = "xyz@gmail.com"
accountPassword = "12121"
accountCity="BENGALURU"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])