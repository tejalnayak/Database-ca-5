const express = require("express");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes");
const contactModels = require("./models/contactModels");
const userRoutes = require("./routes/userRoutes");
const userModels = require("./models/userModels");

const app = express();
dotenv.config();

app.use('/api', contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
