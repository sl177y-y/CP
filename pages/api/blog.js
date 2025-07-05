// pages/api/getblog/[blogID].js

import { MongoClient, ObjectId } from 'mongodb';

const cluster_uri = 'mongodb+srv://mostuselessboy:iSyoN7VUAwcAnQL5@clusterblog.elmvpst.mongodb.net/?retryWrites=true&w=majority';

export default async function handler(req, res) {
  const blogID = req.query.blogID;

  const client = new MongoClient(cluster_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db('cluster');
    const collection = db.collection('blogs');

    const result = await collection.findOne({ blog_id: blogID });

    if (result) {
      delete result._id;
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}
