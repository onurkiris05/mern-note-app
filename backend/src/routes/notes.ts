import * as NotesController from "../controllers/notes";
import express from "express";

const router = express.Router();

router
  .route("/")
  .get((req, res, next) => {
    console.log("GET /api/notes - Request Headers:", req.headers);
    console.log("GET /api/notes - Session Data:", req.session);
    NotesController.getNotes(req, res, next);
  })
  .post((req, res, next) => {
    console.log("POST /api/notes - Request Body:", req.body);
    console.log("POST /api/notes - Session Data:", req.session);
    NotesController.createNote(req, res, next);
  });

router
  .route("/:noteId")
  .get((req, res, next) => {
    console.log(`GET /api/notes/${req.params.noteId} - Request Headers:`, req.headers);
    console.log(`GET /api/notes/${req.params.noteId} - Session Data:`, req.session);
    NotesController.getNote(req, res, next);
  })
  .patch((req, res, next) => {
    console.log(`PATCH /api/notes/${req.params.noteId} - Request Body:`, req.body);
    console.log(`PATCH /api/notes/${req.params.noteId} - Session Data:`, req.session);
    NotesController.updateNote(req, res, next);
  })
  .delete((req, res, next) => {
    console.log(`DELETE /api/notes/${req.params.noteId} - Request Headers:`, req.headers);
    console.log(`DELETE /api/notes/${req.params.noteId} - Session Data:`, req.session);
    NotesController.deleteNote(req, res, next);
  });

export default router;
