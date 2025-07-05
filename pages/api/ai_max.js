import Replicate from "replicate";

const replicate = new Replicate();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const output = await replicate.run(
      "yorickvp/llava-13b:b5f6212d032508382d61ff00469ddda3e32fd8a0e75dc39d8a4191bb742157fb",
      {
        input: {
          image: req.body.image,
          prompt: req.body.prompt,
        }
      }
    );
    res.status(200).json(output);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
