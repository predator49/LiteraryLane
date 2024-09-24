export const protect = (req, res, next) => {
    // Example middleware logic for authentication
    if (req.isAuthenticated()) {  // Replace with your authentication logic
      next();
    } else {
      res.status(401).json({ message: "Not authorized" });
    }
  };
  