const express = require("express");
const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

table = [
  { name: "pallav", email: "pallavbh23@gmail.com", phone: "9671876007" },
  { name: "pallav", email: "pallavb.it18@nsut.ac.in", phone: "7015957964" },
  { name: "Yash", email: "yashk.it18@nsut.ac.in", phone: "9434382812" },
  { name: "Siddharth", email: "siddharths.co18@nsut.ac.in", phone: "" },
  { name: "Abc", email: "abc.gmail.com", phone: "1231231231" },
];

app.get("/", (req, res) => {
  res.render("home.ejs", { table: table });
});

app.get("/search", (req, res) => {
  console.log("Query searched by client: ", req.query);
  var curval = req.query.value;
  let newtable = table.filter(
    (info) =>
      info.name == curval || info.email == curval || info.phone == curval
  );
  res.render("home.ejs", { table: newtable });
});

app.listen("5000", function () {
  console.log("App running on port 5000");
});
