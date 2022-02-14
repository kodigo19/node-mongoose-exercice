import app from "./app";
import dotenv from 'dotenv';
import dbConnection from "./config/config";

dotenv.config();

dbConnection(`${process.env.MONGO_URI}`)

app.listen(process.env.PORT, () => console.log(`Server started on ${process.env.PORT}`))

