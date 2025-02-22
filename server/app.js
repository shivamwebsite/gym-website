require("dotenv").config();
const express=require("express")
const cors=require("cors")
const cookieParser = require("cookie-parser")
const mongoose=require("mongoose")
const app=express()


app.use(express.json());
app.use(cookieParser(""));
app.use(cors())

const port=process.env.PORT || 7000;
const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("Database is connected")
    // insertdata()
}).catch((error)=>{
    console.log("database is not connected :- "+ error.message)
})



const userSchema=new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        minlength:10,
        maxlength : 13
    },
    messg:{
        type: String,
        required: true
    }
})

const USER=mongoose.model('feedbacks',userSchema)
// const user=mongoose.modelNames('users')

const insertdata = async()=>{
    try{
        const savedata=new User({
            fname:"shivam shaw",
            email:"shivam@gmail.com",
            mobile:"9903124575",
            messg:"it is a very good website"
        });
        await savedata.save();
        console.log("data inserted");
    }catch(error){
        console.log("error while inserting data ",error)
    }
}



app.post("/feed", async (req, res) => {
    console.log(req.body);

    const { fname,email,mobile,messg } = req.body;

    if (!fname || !email || !mobile || !messg) {
        res.status(422).json({ error: "fill the all details" });
        console.log("no data available");
    }

    try {

        // const preuser = await User.findOne({ email: email });
        // console.log(preuser)
        // const prefname = await User.findOne({ fname: fname });
        
        if (email !== `${fname}@gmail.com`) {
            res.status(425).json({ error: "This email doesn't exist,register with this email id" })
        } 
        //else if (!prefname) {
        //     res.status(422).json({ error: "this name is not register" })
        // }
         else {
            console.log(req.body);
            const finalUser = new USER({
                fname, email, mobile, messg
            });

            // yaha pe hasing krenge

            const storedata = await finalUser.save();
            console.log(storedata);
            res.status(201).json(storedata);
        }

    } catch(error) {
        // console.log("error the bhai catch ma for registratoin time" + error.message);
        res.status(424).send(error);
    }

});



app.listen(port,()=>{
    console.log("server is running at port "+port)
})
