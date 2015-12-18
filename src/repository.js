import mysql from 'mysql';

export default class Repository {

  static test(configuration) {
    return new Promise(resolve => {
      const connection = mysql.createConnection({
        host: configuration.host,
        user: configuration.user,
        password: configuration.password
      });

      const callbackConnect = error => {
        if (error) {
          resolve({
            configuration: configuration,
            error: error
          });
        } else {
          resolve({
            configuration: configuration,
            error: null
          });
        }
      };

      connection.connect(callbackConnect);
    });
  }
}
