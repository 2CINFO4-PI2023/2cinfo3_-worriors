const express = require("express");
const router = express.Router();
const bookController = require("../controllers/booksController");

const multer = require("multer");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/"); // Set the destination folder for uploaded files
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname); // Use the original filename
	},
});
const upload = multer({ storage: storage });

router.post("/", bookController.createBook);
router.post(
	"/meta",
	upload.fields([
		{ name: "coverPic", maxCount: 1 },
		{ name: "pdfVersion", maxCount: 1 },
	]),
	bookController.createBook
);
router.get("/search", bookController.searchBooks);
router.get("/search/filtre", bookController.searchByFilters);
router.get("", bookController.getAllBooks);
router.get("/latest", bookController.getLatestBooks);
router.get("/top-selling", bookController.getTopSellingBooks);

router.post("/favorites", bookController.addToFavorites);
router.get("/favorite/:userId", bookController.getUserFavorites);

router.get("/top-rated", bookController.getTopRatedBooks);
router.get("/purchased/:userId", bookController.getPurchasedBooksByUser);
router.get("/:id", bookController.getBookById);
router.put("/:id", bookController.updateBook);

router.delete("/:id", bookController.deleteBook);

module.exports = router;
