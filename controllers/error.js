exports.getError404 = (req, res, send) => {
    res
    .status(404)
    .send('You entered a wrong route');
};