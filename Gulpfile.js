const gulp = require("gulp");
const AWS = require("aws-sdk");
const path = require("path");
const fs = require("fs");
const s3 = new AWS.S3();

const upload = function (filePath, newName) {
  const fileName = path.join(__dirname, filePath);
  const fileContent = fs.readFileSync(fileName);

  const params = {
    Bucket: "fec-zayers-proxy",
    Key: newName, // File name you want to save as in S3
    Body: fileContent,
  };
  // Uploading files to the bucket
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};

gulp.task("publish", function (done) {
  upload("./campaign/client/dist/bundle.js", "campaign.js");
  upload("./navbar/client/dist/bundle.js", "navbar.js");
  upload("./pledge-rewards/client/dist/bundle.js", "rewards.js");
  upload("./pledge-rewards/client/dist/main.css", "rewards.css");
  upload("./tab-bar/client/dist/bundle.js", "tabbar.js");
  upload("./VA-Service/dist/bundle.js", "banner.js");
  upload("./WWL---Service/dist/main.js", "updates.js");
  upload("./proxy-server/public/style.css", "proxy.css");
  done();
});
