const validateMovieData = (req, res, next) => {
    const { title, director, year, duration, genre, poster, rate, description, trailer } = req.body;
    const requiredFields = ['title', 'director', 'year', 'duration', 'genre', 'poster', 'rate', 'description', 'trailer'];
  
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ 
          message: `El campo ${field} es requerido`,
        });
      }
    }
    if (isNaN(year)) {
      return res.status(400).json({ 
        message: 'El campo año debe ser un número válido',
      });
    }
    if (year.toString().length !== 4 || year < 1900 || year > new Date().getFullYear()) {
      return res.status(400).json({ 
        message: 'El año debe ser un número de 4 dígitos y debe ser mayor a 1900 y menor al año actual',
      });
    }
    if (isNaN(rate) || rate < 0 || rate > 10) {
      return res.status(400).json({ 
        message: 'La calificación debe ser un número entre 0 y 10',
      });
    }
  
    next();  
  };
  
  module.exports = validateMovieData;
  