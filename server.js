const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Replicate = require('replicate');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Replicate
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8000',
  credentials: true
}));
app.use(express.json());

// Emotion-specific prompts for AI image generation
const emotionPrompts = {
  happy: "A cheerful, fluffy cat with a soft golden-orange coat sits peacefully in a vast meadow bursting with colorful wildflowers — daisies, poppies, cornflowers, and buttercups dancing in a gentle breeze. The cat's eyes are wide with joy, its ears perked, basking in golden sunlight. Butterflies flit around, and a few petals rest on its fur. The background reveals soft green hills under a bright blue sky with fluffy clouds. Shot from a low angle, capturing the cat's happy expression and the dreamy floral landscape around it. Cinematic lighting, shallow depth of field, vibrant and whimsical mood.",
  
  sad: "A melancholic gray cat sitting alone on a weathered wooden dock by a misty lake during twilight. Rain droplets gently fall, creating ripples on the dark water surface. The cat's posture is drooped, looking down with sorrowful eyes. Bare willow trees with drooping branches frame the scene. The sky is overcast with deep purple and gray clouds. Soft, diffused lighting creates a somber atmosphere. The scene evokes solitude and contemplation. Cinematic composition, muted color palette, emotional depth.",
  
  angry: "A fierce orange tabby cat with an intense, determined expression standing on a rocky cliff during a dramatic thunderstorm. Lightning illuminates the dark, turbulent sky filled with heavy storm clouds. The cat's fur is slightly ruffled by strong winds, ears back, eyes blazing with intensity. Jagged rocks and sparse, wind-bent trees surround the scene. The lighting is dramatic with stark contrasts between light and shadow. The overall mood is powerful and tempestuous. Epic cinematic style, high contrast, dynamic composition.",
  
  fearful: "A small, trembling calico cat hiding behind tall, dark forest trees during a foggy night. Mysterious shadows dance between the ancient oak trees, and moonlight barely penetrates the thick canopy. The cat's eyes are wide with concern, ears alert, crouched low in a defensive position. Mist swirls around the forest floor covered with fallen leaves. The atmosphere is eerie yet not threatening, more mysterious than scary. Soft, ethereal lighting with blue and silver tones. Atmospheric perspective, mysterious mood.",
  
  disgusted: "A pristine white Persian cat with an expression of refined disdain, sitting elegantly on a marble pedestal in an opulent Victorian parlor. The cat's nose is slightly wrinkled, one paw delicately raised as if avoiding something unpleasant. Rich velvet curtains, ornate furniture, and crystal chandeliers create a luxurious backdrop. The lighting is warm and golden, highlighting the cat's immaculate fur. The scene conveys aristocratic displeasure with sophisticated elegance. Classical portrait style, rich textures, refined composition.",
  
  surprised: "A wide-eyed tabby cat caught mid-leap, frozen in a moment of pure astonishment in a magical garden filled with floating, glowing orbs of light. The cat's expression shows complete wonder, mouth slightly open, paws spread wide. Enchanted flowers seem to sparkle and shimmer around the scene. Fairy lights dance in the air, and everything has a dreamlike, ethereal quality. The lighting is soft and magical with warm, golden tones mixed with cool blues. Whimsical fantasy style, dynamic pose, magical realism.",
  
  neutral: "A serene, contemplative cat sitting peacefully in a zen garden with carefully raked sand patterns and smooth river stones. The cat has a calm, meditative expression, sitting in perfect balance. Minimalist composition with clean lines, a few carefully placed bamboo plants, and soft natural lighting. The scene evokes tranquility and mindfulness. The color palette is muted and harmonious with earth tones. The overall mood is peaceful and centered. Minimalist aesthetic, balanced composition, serene atmosphere."
};

// API endpoint to generate image based on emotion
app.post('/api/generate-image', async (req, res) => {
  try {
    const { emotion, confidence, prompt } = req.body;

    if (!emotion) {
      return res.status(400).json({ error: 'Emotion is required' });
    }

    // Use the prompt from frontend, or fallback to default
    const selectedPrompt = prompt || emotionPrompts[emotion] || emotionPrompts.neutral;

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
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Emotion Art Generator API is running',
    timestamp: new Date().toISOString()
  });
});

// Get available emotions and their prompts
app.get('/api/emotions', (req, res) => {
  const emotions = Object.keys(emotionPrompts).map(emotion => ({
    emotion,
    prompt: emotionPrompts[emotion].substring(0, 100) + '...'
  }));
  
  res.json({
    emotions,
    total: emotions.length
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Emotion Art Generator API running on port ${PORT}`);
  console.log(`📡 Frontend URL: ${process.env.FRONTEND_URL || 'http://localhost:8000'}`);
  console.log(`🎨 Available emotions: ${Object.keys(emotionPrompts).join(', ')}`);
  
  if (!process.env.REPLICATE_API_TOKEN) {
    console.warn('⚠️  WARNING: REPLICATE_API_TOKEN not set. Please add it to your .env file');
  }
});
