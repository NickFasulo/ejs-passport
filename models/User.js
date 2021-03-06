const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, lowercase: true },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String }
});

module.exports = mongoose.model("user", UserSchema);
