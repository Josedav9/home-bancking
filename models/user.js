class User {
  constructor(name, lastName, email, password) {
    this._name = name;
    this._lastName = lastName;
    this._email = email;
    this._password = password;
  }

  get name() {
    return this._name;
  }
  get lastName() {
    return this._lastName;
  }
  get email() {
    return this._email;
  }
  get password() {
    return this._password;
  }

  set name(name) {
    this._name = name;
  }
  set lastName(lastName) {
    this._lastName = lastName;
  }
  set email(email) {
    this._email = email;
  }
  set password(password) {
    this._password = password;
  }
}

module.exports = User;
