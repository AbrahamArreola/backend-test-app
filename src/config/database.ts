import mongoose from "mongoose";

(async () => {
    try {
        await mongoose.connect("mongodb://localhost/interviewAppDB", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });

        console.log("Database connected!");
    } catch (error) {
        console.log(error);
    }
})();
