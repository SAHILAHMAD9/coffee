const mongoose = require('mongoose');


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const url = `mongodb+srv://${username}:${password}@cluster0.sqtpm.mongodb.net/`;
const dbConnect = async () => {
    try {
        await mongoose.connect(url,{
            dbName : 'coffee',
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.log("db connection failed");
        // process.exit(1);
    }
}

export default dbConnect;