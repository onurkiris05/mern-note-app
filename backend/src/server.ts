import app from "./app";
import env from "./utils/validateEnv";
import mongoose from "mongoose";

const PORT = env.PORT || 5000;

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
