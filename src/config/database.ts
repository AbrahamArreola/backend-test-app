// import mongoose from "mongoose";
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('mysql://root@localhost/interview_db');

sequelize
    .sync()
    .then(() => {
        console.log("Database is sync!");
    })
    .catch((error) => {
        console.log(error);
    });








    /* (async () => {
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
 */
