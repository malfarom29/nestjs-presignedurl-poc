import * as aws from 'aws-sdk';
import { nanoid } from 'nanoid';
require('dotenv').config();

const s3 = new aws.S3({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  region: process.env.AWS_BUCKET_REGION,
});

export const preSignedPutURL = (): {
  key: string;
  url: string;
} => {
  const key = nanoid();
  const url = s3.getSignedUrl('putObject', {
    Bucket: process.env.AWS_BUCKET,
    Key: key,
    Expires: parseInt(process.env.PRESIGNED_EXPIRES_IN),
    ContentType: 'image/jpeg',
  });
  return { key, url };
};

export const preSignedGetURL = (key: string): string => {
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Key: key,
    Expires: parseInt(process.env.PRESIGNED_EXPIRES_IN),
  };
  return s3.getSignedUrl('getObject', params);
};
