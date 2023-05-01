import express from "express";
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
<<<<<<< HEAD
import { deleteHotel, getHotel, getHotels, updateHotel, createHotel } from "../controllers/hotel.js";
=======
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
>>>>>>> b9fd59e94e6380b9b413c8f738afd5e1079dcfa8

const router = express.Router();

//CREATE
router.post("/", createHotel);
//UPDATE
router.put("/:id", updateHotel);
//DELETE
router.delete("/:id", deleteHotel);
//GET

router.get("/:id", getHotel);
//GET ALL

router.get("/", getHotels);

export default router

