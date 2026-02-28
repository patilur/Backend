const getUser = (req, res) => {
    res.send(`Fetching all users`);
}

const getUserWithId = (req, res) => {
    const id = req.params.id;
    res.send(`Fetching user with ID:${id}`);
}

const addUSer = (req, res) => {
    res.send(`Adding a new user`);
}

module.exports = {
    getUser,
    getUserWithId,
    addUSer
}