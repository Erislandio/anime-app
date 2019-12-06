const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: "Email address is required",
      validate: [validateEmail, "Please fill a valid email address"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address"
      ]
    },
    tel: {
      type: String
    },
    img: { data: Buffer, contentType: String },
    genre: {
      type: String
    },
    zipcode: {
      type: String
    },
    password: {
      type: String
    },
    birth: {
      type: String
    },
    favorites: [
      {
        data: {
          type: String
        },
        id: {
          type: Number
        }
      }
    ]
  },
  { timestamps: true }
);

UserSchema.pre("save", async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

module.exports = model("User", UserSchema);

// how to send image data to mongodb Schemna
// app.post(‘/api/photo’,function(req,res){
//   var newItem = new Item();
//   newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//   newItem.img.contentType = ‘image/png’;
//   newItem.save();
//  });
