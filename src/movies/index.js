const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: process.env.BUCKET_KEY,
  secretAccessKey: process.env.BUCKET_SECRET,
});

const s3 = new AWS.S3();

async function getObject(key) {
  try {
    const data = await s3
      .getObject({
        Bucket: 'xmas-movies-2018',
        Key: key,
      })
      .promise();
    return data.Body.toString('utf8');
  } catch (error) {
    throw error;
  }
}

module.exports = async function getMovies() {
  try {
    return JSON.parse(await getObject('movies.json'));
  } catch (err) {
    throw err;
  }
};
