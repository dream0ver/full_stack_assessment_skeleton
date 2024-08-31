const updateUsers = (req, res) => {
    res.json({ msg: "updateUsers" })
}

const findByUser = (req, res) => {
    res.json({ msg: "findByUser" })
}

module.exports = {
    updateUsers,
    findByUser
}