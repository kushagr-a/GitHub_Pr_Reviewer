import { config as config } from "dotenv"
config()

const _config = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL
}


export const configs = Object.freeze(_config)