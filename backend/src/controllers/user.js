const findAll = (req, res) => {
    res.json({ msg: "findAll" })
}

const findByHome = (req, res) => {
    res.json({ msg: "findByHome" })
}

module.exports = {
    findAll,
    findByHome
}