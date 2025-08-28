import express from "express";
import router from "./Routes/router.js";
import dbConected from "./Connection.js";
import cors from "cors";
import bodyParser from "body-parser";

dbConected();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(express.json({ limit: "20mb" }));
app.use(express.json());

// Routes
app.use("/api", router);

// PORT handling (important for Render/Heroku)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server Started at PORT ${PORT}`);
});
