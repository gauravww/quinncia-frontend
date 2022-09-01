import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${process.cwd()}/storage`)
  },
  filename: function (req, file, cb) {
    if (file) {
      cb(null, file.originalname);
    } else {
      cb(null, null);
    }
  },
});

const upload = multer({ storage });

export default upload;
