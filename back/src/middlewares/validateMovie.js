const validateMovie = (req, res, next) => {
    const { year } = req.body;
    const requiredFields = ["title", "year", "director", "duration", "genre", "rate", "poster"];

    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).json({ message: `El campo ${field} es obligatorio` });
        }
    }
    const nextYear = new Date().getFullYear() + 1; 
    if (year.toString().length !== 4 || year < 1900 || year > nextYear) {
        return res.status(400).json({
            message: `El campo year debe ser un número de 4 dígitos válido y no mayor al año ${nextYear}.`
        });
    }

    next();
};

module.exports = validateMovie;
