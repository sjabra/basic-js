const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.aSymbolUnicode = 65;
    this.zSymbolUnicode = 90;
    this.latinCharsCount = 26;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error(
        "'message' and 'key' parameters are mandatory for encrypt method, but at least one of them has not been given."
      );
    }
    let encryptedMessage = this.cypher(message, key, (msgSymbol, keySymbol) => (msgSymbol + keySymbol) % 26);
    return this.getFinalMessage(encryptedMessage);
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error(
        "'encryptedMessage' and 'key' parameters are mandatory for decrypt method, but at least one of them has not been given."
      );
    }

    let decryptedMessage = this.cypher(
      encryptedMessage,
      key,
      (msgSymbol, keySymbol) => (msgSymbol - keySymbol + 26) % 26
    );

    return this.getFinalMessage(decryptedMessage);
  }

  cypher(message, key, cypherChar) {
    let cypheredMsg = "";
    message = message.toUpperCase();
    key = this.getKey(message, key);

    for (let i = 0; i < message.length; i++) {
      let curSymbol = message.charCodeAt(i);
      if (curSymbol >= this.aSymbolUnicode && curSymbol <= this.zSymbolUnicode) {
        let encSymbol = cypherChar(message.charCodeAt(i), key.charCodeAt(i));
        cypheredMsg += String.fromCharCode(encSymbol + this.aSymbolUnicode);
      } else {
        cypheredMsg += message[i];
      }
    }
    return cypheredMsg;
  }

  getKey(message, key) {
    key = key.toUpperCase();
    const keyRepeatTimes = message.length / key.length + 1;
    key = key.repeat(keyRepeatTimes);
    for (let i = 0; i < key.length; i++) {
      if (message[i] === " ") {
        key = key.slice(0, i) + " " + key.slice(i);
      }
    }
    key = key.slice(0, message.length);
    return key;
  }

  getFinalMessage(message) {
    return this.isDirect ? message : message.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
