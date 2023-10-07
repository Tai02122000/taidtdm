const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, __dirname + "../../public/file");
  },
  filename: function (req, file, callback) {
    const test = file.originalname.split(".");
    const filename = "file_" + uuidv4() + "." + test?.[test.length - 1];
    callback(null, filename);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fieldSize: 1048576,
  },
});
module.exports = {
  upload,
};
