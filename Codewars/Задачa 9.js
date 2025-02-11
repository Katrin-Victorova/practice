// аудификация как санта то хохо то true иначе false

function Sleigh() {
  Sleigh.prototype.authenticate = function(name, password) {
    return name === 'Santa Claus' && password === 'Ho Ho Ho!';
  }
};