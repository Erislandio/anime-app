const GridFsStorage = require("multer-gridfs-storage");
const crypto = require("crypto");

const storage = new GridFsStorage({
  url: "mongodb://erislandio:Er1sl@ndio@ds241288.mlab.com:41288/app-eris01",
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = file.originalname;
        const fileInfo = {
          filename: filename,
          bucketName: "uploads"
        };
        resolve(fileInfo);
      });
    });
  }
});

module.exports = storage;
