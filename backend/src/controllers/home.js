const { In } = require("typeorm");
const { AppDataSource } = require("../data-source")
const interestsRepository = AppDataSource.getRepository("Interests");
const homeRepository = AppDataSource.getRepository("Home")


const findByUser = async (req, res) => {
    const { user_id, page = 1 } = req.query
    if (!user_id) {
        res.status(400).json({ msg: "Missing required params user_id" })
    }
    let valid_homes = await interestsRepository.find({
        where: {
            user_id
        }
    })
    valid_homes = valid_homes.map((home) => home.home_id)
    const homes = await homeRepository.find({
        take: 50,
        skip: 50 * (page - 1),
        where: {
            home_id: In(valid_homes),
        }
    })
    const totalCount = await homeRepository.count({
        where: {
            home_id: In(valid_homes),
        }
    });
    res.json({
        homes,
        totalCount
    })
}


const updateUsers = async (req, res) => {
    res.json({})
}

module.exports = {
    updateUsers,
    findByUser
}