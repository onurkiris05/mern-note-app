import { RequestHandler } from "express";
import NoteModel from "../models/note";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import assertIsDefined from "../utils/assertIsDefined";

export const getNotes: RequestHandler = async (req, res, next) => {
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);

    const notes = await NoteModel.find({ userId: authenticatedUserId });
    res.status(200).json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNote: RequestHandler = async (req, res, next) => {
  const { noteId } = req.params;
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);

    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid Note Id");
    }

    const note = await NoteModel.findById(noteId);

    if (!note) {
      throw createHttpError(404, "Note not found");
    }

    if (!note.userId.equals(authenticatedUserId)) {
      throw createHttpError(401, "You not authorized to access this note");
    }

    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
};

interface CreateNoteBody {
  title?: string;
  text?: string;
}

export const createNote: RequestHandler<unknown, unknown, CreateNoteBody, unknown> = async (
  req,
  res,
  next
) => {
  const { title, text } = req.body;
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);

    if (!title) {
      throw createHttpError(400, "Note title is required");
    }

    const newNote = await NoteModel.create({
      userId: authenticatedUserId,
      title: title,
      text: text,
    });
    res.status(201).json(newNote);
  } catch (error) {
    next(error);
  }
};

interface UpdateNoteParams {
  noteId: string;
}

interface UpdateNoteBody {
  title?: string;
  text?: string;
}

export const updateNote: RequestHandler<
  UpdateNoteParams,
  unknown,
  UpdateNoteBody,
  unknown
> = async (req, res, next) => {
  const { noteId } = req.params;
  const newTitle = req.body.title;
  const newText = req.body.text;
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);

    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid Note Id");
    }

    if (!newTitle) {
      throw createHttpError(400, "Note title is required");
    }

    const note = await NoteModel.findById(noteId);

    if (!note) {
      throw createHttpError(404, "Note not found");
    }

    if (!note.userId.equals(authenticatedUserId)) {
      throw createHttpError(401, "You not authorized to edit this note");
    }

    note.title = newTitle;
    note.text = newText;

    const updatedNote = await note.save();
    res.status(200).json(updatedNote);
  } catch (error) {
    next(error);
  }
};

export const deleteNote: RequestHandler = async (req, res, next) => {
  const { noteId } = req.params;
  const authenticatedUserId = req.session.userId;

  try {
    assertIsDefined(authenticatedUserId);

    if (!mongoose.isValidObjectId(noteId)) {
      throw createHttpError(400, "Invalid Note Id");
    }

    const note = await NoteModel.findById(noteId);

    if (!note) {
      throw createHttpError(404, "Note not found");
    }

    if (!note.userId.equals(authenticatedUserId)) {
      throw createHttpError(401, "You not authorized to delete this note");
    }

    await note.deleteOne();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
