// const mongoose = require("mongoose");
// mongoose.connect(
//   "mongodb://localhost:27017/",
//   {
//     dbName: "erpcluster",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   },
//   (err) =>
//     err ? console.log(err) : console.log("Connected to yourDB-name database")
// );

// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });
// const User = mongoose.model("users", UserSchema);
// User.createIndexes();

// const express = require("express");
// const app = express();
// const cors = require("cors");
// console.log("App listen at port 5000");
// app.use(express.json());
// app.use(cors());
// app.get("/", (req, resp) => {
//   resp.send("App is Working");
// });

// app.post("/register", async (req, resp) => {
//   try {
//     const user = new User(req.body);
//     let result = await user.save();
//     result = result.toObject();
//     if (result) {
//       delete result.password;
//       resp.send(req.body);
//       console.log(result);
//     } else {
//       console.log("User already register");
//     }
//   } catch (e) {
//     resp.send("Something Went Wrong");
//   }
// });
// app.listen(5000);



const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://gautham:S0CFr1PuV9sbWUnl@erpcluster.unw5f.mongodb.net/?retryWrites=true&w=majority&appName=erpcluster", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Item = require("./Model/Item"); // Create the Item model

app.get("/api/items", async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});