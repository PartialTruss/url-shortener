import express from "express"
import { createUrl, deleteByUrl, getUrl, updateByUrl } from "../controllers/urlControllers"

const route = express.Router()

route.post("/shorten", createUrl)
route.get("/shorten/:shortCode", getUrl)
route.put("/shorten/:shortCode", updateByUrl)
route.delete("/shorten/:shortCode", deleteByUrl)

export default route