// Vercel Serverless Function for AI Art Generation
import Replicate from 'replicate';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { emotion, confidence, prompt } = req.body;

    if (!emotion) {
      return res.status(400).json({ error: 'Emotion is required' });
    }

    if (!process.env.REPLICATE_API_TOKEN) {
      return res.status(500).json({ error: 'REPLICATE_API_TOKEN not configured' });
    }

    // Initialize Replicate
    const replicate = new Replicate({
      auth: process.env.REPLICATE_API_TOKEN,
    });

    // Fallback prompts if none provided
    const defaultPrompts = {
      happy: "Joyful humanoid robot standing in a sunlit flower field — white glossy armor gleaming in the sunlight — one hand mid-wave with soft motion blur — surrounded by wildflowers in bloom — bright blue sky with fluffy clouds — warm and optimistic tone — 16:9",
      sad: "Lonely humanoid robot in matte grey armor, standing motionless in heavy rain — droplets trailing down smooth plating — blue hour lighting — soft motion blur in falling rain — moody urban background — 16:9",
      angry: "Angry humanoid robot with glowing red eyes and clenched fists — sparks flying from shoulder joints — dark industrial tunnel with flickering lights — high tension and motion blur in steam bursts — 16:9",
      fearful: "Terrified humanoid robot crouched behind debris, red eyes wide and flickering — subtle tremble blur in hands — giant shadow looming over in fog — hard side lighting and ambient dread — 16:9",
      disgusted: "Disgusted humanoid robot pulling its head back, hand raised in rejection — flickering red and green reflections on faceplate — leaking organic matter on the floor — motion blur on fingers — sterile lab setting — 16:9",
      surprised: "Surprised humanoid robot with wide-open glowing eyes — head tilted back slightly — standing in a glowing cave filled with bioluminescent tech flora — faint motion blur around fingers in reaction — 16:9",
      neutral: "Single humanoid robot in glossy white armor with gold neck accents — subtle motion blur in one extended arm — cinematic spotlight from above — black background with minimal reflections — futuristic, clean design — 16:9"
    };

    const selectedPrompt = prompt || defaultPrompts[emotion] || defaultPrompts.neutral;

    console.log(`Generating image for emotion: ${emotion} (confidence: ${confidence})`);
    console.log(`Using prompt: ${selectedPrompt.substring(0, 100)}...`);

    // Generate image using Replicate's Flux-Schnell model
    const output = await replicate.run(
      "black-forest-labs/flux-schnell",
      {
        input: {
          prompt: selectedPrompt,
          num_outputs: 1,
          aspect_ratio: "16:9",
          output_format: "webp",
          output_quality: 80
        }
      }
    );

    console.log('Image generated successfully');

    // Return the generated image URL
    res.json({
      success: true,
      emotion: emotion,
      confidence: confidence,
      imageUrl: output[0],
      prompt: selectedPrompt
    });

  } catch (error) {
    console.error('Error generating image:', error);
    res.status(500).json({ 
      error: 'Failed to generate image',
      details: error.message 
    });
  }
}
