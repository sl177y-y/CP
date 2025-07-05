// pages/api/getblogpage/[pagination_index].js

import { MongoClient } from 'mongodb';

const cluster_uri = 'mongodb+srv://mostuselessboy:iSyoN7VUAwcAnQL5@clusterblog.elmvpst.mongodb.net/?retryWrites=true&w=majority';

export default async function handler(req, res) {
  const paginationIndex = parseInt(req.query.pagination_index);
  const blogsPerPage = 1000;
  const skipValue = Math.max(0, (paginationIndex - 1) * blogsPerPage);

  const client = new MongoClient(cluster_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db('cluster');
    const collection = db.collection('blogs');

    const projection = { title: 1, thumbnail: 1, description: 1, blog_id: 1 };
    const result = await collection
      .find({})
      .project(projection)
      .sort({ _id: -1 })
      .skip(skipValue)
      .limit(blogsPerPage)
      .toArray();

    const countDocuments = await collection.countDocuments({});
    const hasNextPage = countDocuments > skipValue + blogsPerPage;

    res.status(200).json({ blogs: result, has_next_page: hasNextPage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await client.close();
  }
}
