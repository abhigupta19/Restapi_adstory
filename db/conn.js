const mongoose= require("mongoose")
const uri = "mongodb+srv://abhi:1234@cluster0.k8lzd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    // If it connects log the following
    console.log("Connected to MongoDB database.");
}).catch((e) => {
    // If it doesn't connect log the following
    console.log("Unable to connect to MongoDB database. Error:" + e.stack);
});

