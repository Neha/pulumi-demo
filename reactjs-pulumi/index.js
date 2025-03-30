import * as aws from "@pulumi/aws";
import * as pulumi from "@pulumi/pulumi";
import * as fs from "fs";
import * as path from "path";
import dotenv from "dotenv";

dotenv.config();

// eslint-disable-next-line no-undef
const bucketNameS3 = process.env.BUCKET_NAME;

function uploadDirectory(bucket, dirPath, s3Prefix = "") {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const fileStat = fs.statSync(filePath);

    if (fileStat.isDirectory()) {
      uploadDirectory(bucket, filePath, `${s3Prefix}${file}/`);
    } else {
      new aws.s3.BucketObject(path.join(s3Prefix, file), {
        bucket: bucket,
        source: new pulumi.asset.FileAsset(filePath),
        contentType: getContentType(file),
      });
    }
  });
}

function getContentType(file) {
  const extname = path.extname(file).toLowerCase();
  const contentTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".ttf": "font/ttf",
    ".eot": "application/vnd.ms-fontobject",
  };

  return contentTypes[extname] || "application/octet-stream";
}

const siteBucket = new aws.s3.Bucket(bucketNameS3, {
  website: { indexDocument: "index.html", errorDocument: "404.html" },
});

const bucketPolicy = new aws.s3.BucketPolicy("bucketPolicy", {
  bucket: siteBucket.bucket,
  policy: siteBucket.arn.apply((arn) =>
    JSON.stringify({
      Version: "2012-10-17",
      Statement: [
        {
          Effect: "Allow",
          Principal: "*",
          Action: ["s3:GetObject"],
          Resource: [`${arn}/*`],
        },
      ],
    })
  ),
});

uploadDirectory(siteBucket.bucket, "./dist");

export const bucketName = siteBucket.bucket;
export const websiteUrl = siteBucket.websiteEndpoint;
