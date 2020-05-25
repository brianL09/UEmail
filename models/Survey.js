const mongoose = require("mongoose");
const { Schema } = mongoose;
const RecipientSchema = require("./Recipient");
// RecipientSchema is a mongoose SUB-document collection

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: "User" },
  // Sets up a userId and ref refers to the User Collection
  // _ in _user is convention to say that this is a reference field
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model("surveys", surveySchema);
