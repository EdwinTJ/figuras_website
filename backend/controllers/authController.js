const USER_DUMMY = [
  {
    id: 1,
    name: "John Doe",
    email: "email@test.com",
    password: "123456",
    role: "admin"
  }
];

//Get all users
exports.getUsers = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, USER_DUMMY });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Create a user (signup)
exports.signup = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const newUser = {
    name,
    email,
    password,
    role
  };
  try {
    const user = await USER_DUMMY.push(newUser);
    res.status(201).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Login a user
exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = USER_DUMMY.find(p => p.email === email);
    if (user.password === password) {
      res.status(200).json({ success: true, user });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Logout a user
exports.logout = async (req, res, next) => {
  try {
    res.status(200).json({ success: true, message: "Logged out" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Get a single user
exports.getSingleUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = USER_DUMMY.find(p => p.id === userId);
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//Delete a user
exports.deleteUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    // const user = USER_DUMMY.find(p => p.id === userId);
    // USER_DUMMY.splice(user, 1);
    res.status(200).json({ success: true, userId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
