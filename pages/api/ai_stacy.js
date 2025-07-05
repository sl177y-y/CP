import Replicate from "replicate";

const replicate = new Replicate();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const output = await replicate.run(
      "abiruyt/text-extract-ocr:a524caeaa23495bc9edc805ab08ab5fe943afd3febed884a4f3747aa32e9cd61",
      {
        input: {
          image: req.body.image,
        }
      }
    );
    res.status(200).json(output);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Image Could not be processed, please try again , or use different image!' });
  }
}
