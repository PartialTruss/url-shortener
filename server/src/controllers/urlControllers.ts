import { Request, Response } from "express"
import { Url } from "../model/Url"


export const createUrl = async (req: Request, res: Response) => {

    try {
        const newUrl = new Url(req.body)
        const url = newUrl.url

        const isUrlExisted = await Url.findOne({ url })
        if (isUrlExisted) {
            throw new Error("Url already existed!")
        }

        const saveUrl = await newUrl.save()
        res.status(201).json({
            status: "Successful",
            data: saveUrl
        })

    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ errorMessage: error.message })
        }

    }
}

export const getUrl = async (req: Request, res: Response) => {

    try {
        const urls = await Url.find()
        if (!urls || urls.length === 0) {
            res.status(404).json("No urls found!")
        }

        return res.status(200).json({
            status: "Successfull",
            data: urls
        })


    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ errorMessage: error.message })
        }
    }

}

export const updateByUrl = async (req: Request, res: Response) => {

    try {
        const { shortCode } = req.params
        const { url } = req.body
        if (!url) {
            res.status(400).json({ errorMessage: "url is required!" })
        }
        const UpdatedUrl = await Url.findOneAndUpdate({ shortCode }, { url }, { new: true, runValidators: true })

        if (!UpdatedUrl) {
            return res.status(404).json({ errorMessage: "URL not found" });
        }

        res.status(200).json({
            status: "Successful",
            data: UpdatedUrl
        })


    } catch (error) {

        if (error instanceof Error) {
            res.status(500).json({ errorMessage: error.message })
        }
    }

}

export const deleteByUrl = async (req: Request, res: Response) => {

    try {

        const { shortCode } = req.params

        if (!shortCode) {
            res.status(400).json("Shortcode is required!")
        }

        const deletedUrl = await Url.findOneAndDelete({ shortCode })

        if (!deletedUrl) {
            return res.status(404).json({ errorMessage: "No URL found with this shortcode" });
        }

        res.status(200).json({
            status: "Successful",
            data: deletedUrl
        })


    } catch (error) {

        if (error instanceof Error) {
            res.status(500).json({ errorMessage: error.message })
        }

    }



}