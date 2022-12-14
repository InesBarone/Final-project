exports.SECRET = "packagesarelookingforfounding";

const jwt = require("jsonwebtoken");

exports.validateJWT = (req, res, next) => {
  const token = req.headers["auth-token"];
  if (!token) {
    return res.status(401).json({ msg: "no token found in auth-token header" });
  }

  jwt.verify(token, exports.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: "invalid token" });
    }
    const tiempo = decoded.iat;
    var ahora = new Date();
    var tokenfecha = new Date(tiempo * 1000);
    var dif = (ahora.getTime() - tokenfecha.getTime()) / 1000;
    req.user_id = decoded.id;

    if (dif > 3000) {
      res.status(401).json({ msg: "token expirado" });
    }
  });
  next();
};
