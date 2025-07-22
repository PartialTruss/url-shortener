import cors from "cors"
import express from "express"
import { connectToDB } from "./config/db"
import route from "./routes/urlRoutes"

const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())

connectToDB()

app.use("/", route)

const PORT = process.env.PORT || 7000

const server = app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);

})