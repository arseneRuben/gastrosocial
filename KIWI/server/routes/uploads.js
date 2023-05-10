export const uploadFile = (req, res) => {
    const file = req.file
    if (file) {
        res.json(file)
    } else {
        throw new Error('Unsuccessful file upload')
    }
}

export const uploadFiles = (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: 'failed',
                message: 'No file'
            })
        } else {
            const file = req.files.file
            // console.log(req.files)
            // file.mv('./uploads/' + file.name)
            res.send({
                status: 'success',
                message: 'File successfully uploaded',
                data: {
                    name: file.name,
                    mimetype: file.mimetype,
                    size: file.size
                }
            })
        }
    } catch (err) {
        res.status(500).send(err)
    }
}
