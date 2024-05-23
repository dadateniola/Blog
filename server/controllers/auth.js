import db from "../db.js";
// import bcrypt from "bcryptjs";

export const register = (req, res) => {
    console.log("run");
  const { email, username, password } = req.body;

  //CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.query(q, [email, username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("Usr already exists.");

    //HASH password AND CREATE USER
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(password, salt);

    const q = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
    const values = {
      username,
      email,
      password,
    };

    db.query(q, [values], (err, data) => {
        console.log(data);
        if(err) return res.json(err);
        return res.status(200).json("User has been created.");
    })
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
