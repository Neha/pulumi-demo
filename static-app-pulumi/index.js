const aws = require("@pulumi/aws");
const pulumi = require("@pulumi/pulumi");
const dotenv = require("dotenv");

dotenv.config();

const bucketName = process.env.BUCKET_NAME;

const siteBucket = new aws.s3.Bucket(bucketName, {
    website: { indexDocument: "index.html", errorDocument: "404.html" }
});

const bucketPolicy = new aws.s3.BucketPolicy("bucketPolicy", {
    bucket: siteBucket.bucket,
    policy: siteBucket.arn.apply(arn => JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
            Effect: "Allow",
            Principal: "*",
            Action: ["s3:GetObject"],
            Resource: [`${arn}/*`]
        }]
    }))
});

const bucketObject = new aws.s3.BucketObject("index.html", {
    bucket: siteBucket.id,
    source: new pulumi.asset.FileAsset("./index.html"),
    contentType: "text/html" 
});

exports.bucketName = siteBucket.bucket;
exports.websiteUrl = siteBucket.websiteEndpoint;
