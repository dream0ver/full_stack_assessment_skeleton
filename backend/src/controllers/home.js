const { AppDataSource } = require("../data-source")
const interestsRepository = AppDataSource.getRepository("Interests");


const findByUser = async (req, res) => {
    const { user_id, page = 1 } = req.body
    if (!user_id) {
        res.status(400).json({ msg: "Missing required params user_id" })
    }
    const homes = await interestsRepository.find({
        take: 50,
        skip: 50 * (page - 1),
        where: {
            user_id,
        }
    })
    res.json({
        homes,
        totalCount: homes.length
    })
}


const updateUsers = async (req, res) => {
    res.json({})
}

module.exports = {
    updateUsers,
    findByUser
}