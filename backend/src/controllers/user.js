const { AppDataSource } = require("../data-source")
const userRepository = AppDataSource.getRepository("User");
const interestsRepository = AppDataSource.getRepository("Interests");


const findAll = async (req, res) => {
    const users = await userRepository.find();
    res.json({
        users,
        totalCount: users.length
    })
}

const findByHome = async (req, res) => {
    const { home_id } = req.query
    if (!home_id) {
        res.status(400).json({ msg: "Missing required param home_id" })
    }
    const users = await interestsRepository.find({
        where: {
            home_id
        }
    });
    res.json({
        users,
        totalCount: users.length
    })
}

module.exports = {
    findAll,
    findByHome
}