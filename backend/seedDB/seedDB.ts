import "dotenv/config";
import mongoose from "mongoose";
import NoteModel from "../src/models/note";
import fakeNotes from "./fakeNotes";

// Connect to the database
async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING!);
    console.log("Connected to MongoDB for seeding.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

async function seedDB() {
  try {
    await connectToDB();

    // Clear existing notes
    await NoteModel.deleteMany({});
    console.log("All existing notes have been deleted.");

    // Insert fake notes
    const insertedNotes = await NoteModel.insertMany(fakeNotes);
    console.log(`${insertedNotes.length} notes have been added to the database.`);

    // Close the connection
    mongoose.connection.close();
    console.log("Database connection closed.");
  } catch (error) {
    console.error("Error during the seeding process:", error);
    process.exit(1);
  }
}

seedDB();
