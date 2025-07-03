import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote, getNoteById } from "../controllers/notesController.js"

const router = express.Router()

// Endpoint to access a note
router.get("/:id", getNoteById)

// Endpoint to access all note
router.get("/", getAllNotes)

// Endpoint to create a note
router.post("/", createNote)

// Endpoint to update a note
router.put("/:id", updateNote)

// Endpoint to delete a note
router.delete("/:id", deleteNote)


export default router




