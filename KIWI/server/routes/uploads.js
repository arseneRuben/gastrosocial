const uploadFile = (req, res) => {
    const file = req.file
    if (file) {
        res.json(file)
    } else {
        throw new Error('Unsuccessful file upload')
    }
}

export default uploadFile
