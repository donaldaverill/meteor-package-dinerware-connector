var Tedious = Npm.require('tedious');
var TediousConnectionPool = Npm.require('tedious-connection-pool');

var dinerware = function(poolConfig, connectionConfig) {
var _poolConfig = poolConfig;
  var _connectionConfig = connectionConfig;
  this.connectionPool = null;
  if (!!_poolConfig && !!_connectionConfig) {
    this.connectionPool =
      new TediousConnectionPool(_poolConfig, _connectionConfig);
  } else if (Meteor.settings && Meteor.settings.dinerware) {
    this.connectionPool =
      new TediousConnectionPool(Meteor.settings.dinerware.connectionPool,
        Meteor.settings.dinerware.connection);
  }
};

Dinerware = new dinerware();

dinerware.prototype.config = function(poolConfig, connectionConfig) {
  try {
    if (!poolConfig && !connectionConfig) {
      throw new Meteor.Error('config-missing', 'ConnectionPool or Connection configs missing');
    }
    this.connectionPool =
      new TediousConnectionPool(poolConfig, connectionConfig);
  } catch (error) {
    console.log(error);
  }
};

dinerware.prototype.printQuery = function(query) {
  try {
    if (!this.connectionPool) {
      throw new Meteor.Error('connection-pool', 'There is no connectionPool');
    }
    this.connectionPool.acquire(function(err, connection) {
      var request = new Tedious.Request(query,
        function(
          err,
          rowCount) {

          if (err) {
            console.log(err);
          } else {
            console.log(rowCount + ' rows');
          }
          connection.release();
        });
      request.on('row', function(columns) {
        var r = '';
        columns.forEach(function(column) {
          r = r + ' ' + column.value;
        });
        console.log('\n ', r);
      });
      connection.execSql(request);
    });
  } catch (error) {
    console.log(error);
  }
};
