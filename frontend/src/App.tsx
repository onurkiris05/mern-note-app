import React, { useEffect, useState } from "react";
import { NoteModel } from "./models/note";
import Note from "./components/Note/Note";

function App() {
  const [notes, setNotes] = useState<NoteModel[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/notes", { method: "get" });
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("An error occurred while fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App container">
      <div className="row my-5">
        {notes.map((note) => (
          <Note key={note._id} note={note} />
        ))}
      </div>
    </div>
  );
}

export default App;
