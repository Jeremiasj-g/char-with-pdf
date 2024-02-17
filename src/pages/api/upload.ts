import type { APIRoute } from "astro";

import {
    v2 as cloudinary,
} from 'cloudinary'
        
cloudinary.config({ 
  cloud_name: 'dj3fgr1rl', 
  api_key: '866878427149485', 
  api_secret: 'Vyt_8jBueOCZHaXAwB5Kr2OryLk' 
});


// Ver como solucionar este error

// https://youtu.be/GEfPFLbCXPc?t=3258

const uploadStream = async (buffer: Uint8Array, options: {
    folder: string
}) => {
    return new Promise((resolve, reject) => {
        cloudinary
            .uploader
            .upload_stream(options, (error, result) => {
                if (result) return resolve (result)
                reject(error)
            }).end(buffer)
    })
}

export const POST: APIRoute = async ({ request }) => {
    const formData = await request.formData()
    const file = formData.get('file')

    console.log(file);
    
    // Simulate dilay
    await new Promise((resolve) => setTimeout(resolve, 3000))


    return new Response("Hello world!")
}