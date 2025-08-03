require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors({
  origin : "https://weather-app1-n41f.vercel.app",
  credentials : true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ Mongo Error:", err));

app.use("/api/auth", require("./routes/auth"));
app.get("/",(req,res)=>{
  res.send("Backend is woring")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
