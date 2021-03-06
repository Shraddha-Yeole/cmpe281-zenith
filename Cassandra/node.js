// Connecting to cassandra through nodejs app

var cassandra = require('cassandra-driver');
var async = require('async');
 //Connect to the cluster
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'doordash'});
Now that you are connected to the “demo” keyspace, let’s insert a user into the “users” table:

// Read users and print to console
   function (callback) {
       client.execute("SELECT user_id FROM user_doordash WHERE restaurant_id='Starbucks001'", function (err, result) {
           if (!err){
               if ( result.rows.length > 0 ) {
                   var user = result.rows[0];
                   console.log("user_id = %s", user.user_id);
               } else {
                   console.log("No results");
               }
           }
 
           // Run next function in series
           callback(err, null);
       });
   },
  function (callback) {
       client.execute("SELECT * FROM user_doordash WHERE user_id='Sachin'", function (err, result) {
           if ( result.rows.length > 0 ) {
               var user = result.rows[0];
               console.log("user_id = %s, timestamp=%d", user.user_id, user.timestamp);
           } else {
               console.log("No records");
           }
 
           // Run next function in series
           callback(err, null);
       });
   },
      function (callback) {
       client.execute("SELECT * FROM user_doordash WHERE order_id='111'", function (err, result) {
           if ( result.rows.length > 0 ) {
               var user = result.rows[0];
               console.log("user_id = %s, timestamp=%d", user.user_id, user.timestamp);
           } else {
               console.log("No records");
           }
 
           // Run next function in series
           callback(err, null);
       });
   },
], function (err, results) {
   // All finished, quit
   process.exit();
});
