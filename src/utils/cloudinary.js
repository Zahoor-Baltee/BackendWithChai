import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"
// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});


const uploadOnClouninary = async (loacalFilePath) => {
    try {
        if (!loacalFilePath) return null
        //upload file
        const response = await cloudinary.uploader.upload(loacalFilePath, {
            resource_type: "auto"
        })
        //after upload
        console.log("File uploaded on cloudinay ", response.url)
        return response
    } catch (error) {
        //Remove the local saved temp file as the upload operation got failed 
        fs.unlinkSync(loacalFilePath)
        return null
    }
}
export { uploadOnClouninary }