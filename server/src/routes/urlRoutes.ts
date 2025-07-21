import express from "express"
import { createUrl, deleteByUrl, getUrl, redirectToOriginalUrl, updateByUrl } from "../controllers/urlControllers"

const route = express.Router()

route.post("/shorten", createUrl)
route.get("/shorten", getUrl)
route.put("/shorten/:shortCode", updateByUrl)
route.delete("/shorten/:shortCode", deleteByUrl)
route.get("/shorten/:shortCode", redirectToOriginalUrl)

export default route;