const cloudinary = require('cloudinary');

cloudinary.config(
    {
        cloud_name: "dgd3z6ukf",
        api_key: "873355211677572",
        api_secret: "Jny_8SpFDbe-S_ufi3ZeCKy7Xgk"
    }
);
const cloudinaryUploadImg = async (fileToUploads) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(fileToUploads, (result) => {
            resolve(
                {
                    url: result.secure_url,
                    asset_id: result.asset_id,
                    public_id: result.public_id,
                },
                {
                    resource_type: "auto",
                }
            )
        })
    })
}
const cloudinaryDeleteImg = async (fileToDelete) => {
    return new Promise((resolve) => {
        cloudinary.uploader.destroy(fileToDelete, (result) => {
            resolve(
                {
                    url: result.secure_url,
                    asset_id: result.asset_id,
                    public_id: result.public_id,
                },
                {
                    resource_type: "auto",
                }
            )
        })
    })
}
module.exports = {cloudinaryUploadImg,cloudinaryDeleteImg};
