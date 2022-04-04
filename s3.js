import aws from "aws-sdk";
import crypto, { randomBytes } from "crypto";

const region = "us-east-1";
const bucketName = "epicure-bucket-db";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

export const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
});

export const generateUploadURL = async () => {
  const rawBytes = randomBytes(16);
  const imageName = rawBytes.toString("hex") + ".png";

  const params = {
    Bucket: bucketName,
    Key: imageName,
    Expires: 60,
  };

  const uploadURL = await s3.getSignedUrlPromise("putObject", params);
  return uploadURL;
};
