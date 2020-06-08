const jwt = require("jsonwebtoken");

class Jwt {
  static async getToken(ToEncrypt) {
    try {
      let token = jwt.sign({
        data: ToEncrypt
      }, "secret", {
        expiresIn: "24h"
      });
      return token;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async validToken(token) {
    try {
      jwt.verify(token, 'secret');
      return true;
    } catch (err) {
      throw new Error(err);
    }
  }

  static async decodeToken(token) {
    let decodedToken = jwt.decode(token);
    console.log(decodedToken);
  }
}

module.exports = Jwt;