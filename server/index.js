const express = require("express");
const axios = require("axios");
const app = express();

const PORT = process.env.PORT || 5000;
const path = require("path");
const mongoose = require("mongoose");

const uri = "mongodb+srv://admin:srini224@cluster0.kewcd.mongodb.net/Orgo_App?retryWrites=true&w=majority"
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(error => console.log(error));

const Datas_Carousel = mongoose.model('Datas_Carousel', {
  Title: { type: String },
  datas: [{
    image: { type: String },
    title: { type: String },
    price: { type: String },
    rating: { type: String },
    type: {type: String},
    discription: { type: String },
    Category: { type: String },
    exp_Date: { type: String },
    manufacture_date: { type: String }
  }]
}
);

var new_item = new Datas_Carousel({
  Title: "Todays Offers !",
  datas: [{
    image: "https://lh5.googleusercontent.com/SygCN1TfvxtSdaALMpHxA83XnJVBGP4N2C16B-lAsfbNEiUiaa7t-VzITYzX3O-Afd4=w2400",
    title: "Apple",
    price: "150",
    rating: "4.5",
    type: "apple",
    discription: "Deal on! Shopping on!",
    Category: "Fruits",
    exp_Date: "24/11/2022",
    manufacture_date: "26/11/2022"
  },
  {
    image: "https://lh5.googleusercontent.com/SygCN1TfvxtSdaALMpHxA83XnJVBGP4N2C16B-lAsfbNEiUiaa7t-VzITYzX3O-Afd4=w2400",
    title: "Mango",
    price: "200",
    rating: "4.5",
    type: "mango",
    discription: "Deal on! Shopping on!",
    Category: "Fruits",
    exp_Date: "24/11/2022",
    manufacture_date: "26/11/2022"
  },
  {
    image: "https://lh5.googleusercontent.com/SygCN1TfvxtSdaALMpHxA83XnJVBGP4N2C16B-lAsfbNEiUiaa7t-VzITYzX3O-Afd4=w2400",
    title: "Banana",
    price: "5",
    rating: "4.5",
    type: "banana",
    discription: "Deal on! Shopping on!",
    Category: "Fruits",
    exp_Date: "24/11/2022",
    manufacture_date: "26/11/2022"
  },
  {
    image: "https://lh5.googleusercontent.com/SygCN1TfvxtSdaALMpHxA83XnJVBGP4N2C16B-lAsfbNEiUiaa7t-VzITYzX3O-Afd4=w2400",
    title: "Orange",
    price: "5",
    rating: "4.5",
    type: "orange",
    discription: "Deal on! Shopping on!",
    Category: "Fruits",
    exp_Date: "24/11/2022",
    manufacture_date: "26/11/2022"
  },
  {
    image: "https://lh5.googleusercontent.com/SygCN1TfvxtSdaALMpHxA83XnJVBGP4N2C16B-lAsfbNEiUiaa7t-VzITYzX3O-Afd4=w2400",
    title: "Pomegranate",
    price: "5",
    rating: "4.5",
    type: "pomegranate",
    discription: "Deal on! Shopping on!",
    Category: "Fruits",
    exp_Date: "24/11/2022",
    manufacture_date: "26/11/2022"
  },
  {
    image: "https://lh5.googleusercontent.com/SygCN1TfvxtSdaALMpHxA83XnJVBGP4N2C16B-lAsfbNEiUiaa7t-VzITYzX3O-Afd4=w2400",
    title: "Water Mellon",
    price: "5",
    rating: "4.5",
    type: "watermellon",
    discription: "Deal on! Shopping on!",
    Category: "Fruits",
    exp_Date: "24/11/2022",
    manufacture_date: "26/11/2022"
  }]
});

// new_item.save();


const User = mongoose.model('User', {
  Username:  { type: String },
  email: { type: String },
  password: { type: String }
}
);

var user_save = new User({
  Username: "srinivash",
  email: "srinivasang.22mca@kongu.edu",
  password: "123456"
});


// user_save.save();





var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + "/public")));

app.get("/Datas_Carousel", function (req, res) {
  Datas_Carousel.find({}, function (err, Datas) {
    if (err) {
      console.log(err);
    } else {
      res.send(Datas);
    }

  });
});
app.get("/Save", function (req, res) {
  new_item.save(err => {
    if (err) {
      console.log(err);
    } else {
      console.log("Saved");
    }
  });
});

app.get("/register", function (req, res) {

  const getBreeds = async () => {
    try {
      return await axios.get('/register');
    } catch (error) {
      console.error(error)
    }
  }
  const data = getBreeds();
  console.log(data);
})

app.get("/login", function( req, res){

  User.find({ email: data.email}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        if(docs){
          // code here
        }else{
            console.log("Already Exists");
        };
    }
});

});

app.post("/AddUser", (req, res, user) => {
  const data = req.body.user;
  if (data) {
    var new_user = new User({
      Username: data.Username,
      email: data.email,
      password: data.password
    });
    User.find({ email: data.email}, function (err, docs) {
      if (err){
          console.log(err);
      }
      else{
          if(docs){
            new_user.save(err => {
              if (err) {
                console.log(err);
              } else {
                console.log("Saved");
              }
            });
          }else{
              console.log("Already Exists");
          };
      }
  });
   
  }
});



app.listen(PORT, () => {
  console.log(`The App listening on port ${PORT}`);
});
