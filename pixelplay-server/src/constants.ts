import dotenv from "dotenv"

dotenv.config()

export const port = process.env.PORT || 8080;
export const appName = process.env.APP_NAME
export const appFps: number = Number(process.env.FRAMES_PER_SECOND || 1)