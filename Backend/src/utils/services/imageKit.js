import ImageKit from "@imagekit/nodejs";

import { configs } from "../config/config.js"

const imageKit = new ImageKit({
    privateKey: configs.PRIVATE_KEY
})

async function uploadFile(buffer) {
    const result = await imageKit.client.upload({
        file: buffer,
        fileName: "image.jpg"
    })

    return result
}

export default uploadFile