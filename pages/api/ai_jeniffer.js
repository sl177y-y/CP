import Replicate from "replicate";

const replicate = new Replicate();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const output = await replicate.run(
      "fofr/face-to-many:35cea9c3164d9fb7fbd48b51503eabdb39c9d04fdaef9a68f368bed8087ec5f9",
      {
        input: {
          image: req.body.image,
          style: req.body.style,
          prompt: req.body.prompt,
          lora_scale: req.body.lora_scale,
          negative_prompt: req.body.negative_prompt,
          prompt_strength: req.body.prompt_strength,
          denoising_strength: req.body.denoising_strength,
          instant_id_strength: req.body.instant_id_strength,
          control_depth_strength: req.body.control_depth_strength
        }
      }
    );
    res.status(200).json(output);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
