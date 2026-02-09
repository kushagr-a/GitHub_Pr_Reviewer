import { config as config } from "dotenv"
config()

const _config = {
    PORT: process.env.PORT,
    DB_URL: process.env.MONGO_URI,
    PRIVATE_KEY : process.env.IMAGE_KIT_PRIVATE
}


export const configs = Object.freeze(_config)