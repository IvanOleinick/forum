import dotenv from 'dotenv';

dotenv.config();
const config = {
    port: process.env.PORT,
    mongodb:{
        uri: process.env.MONGO_URI || 'mongodb://Rabbit:Lisa26062013/localhost:27017/java61?authSource=admin',
        db: {
            dbName:process.env.DB_NAME || 'java61'
        }
    }
}
export default config;
