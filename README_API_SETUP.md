# 🎨 Emotion Art Generator API Setup

This guide will help you set up the backend API for generating AI images based on detected emotions using Replicate's Flux-Schnell model.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Get Replicate API Token
1. Go to [Replicate.com](https://replicate.com)
2. Sign up or log in to your account
3. Go to your [API tokens page](https://replicate.com/account/api-tokens)
4. Create a new token or copy your existing token

### 3. Configure Environment Variables
```bash
# Copy the example environment file
cp .env.example .env

# Edit the .env file and add your Replicate API token
REPLICATE_API_TOKEN=your_actual_token_here
```

### 4. Start the Server
```bash
# Development mode (with auto-restart)
npm run dev

# Or production mode
npm start
```

The API will be available at `http://localhost:3001`

## 🎭 Available Emotions & Prompts

The system supports the following emotions with unique AI art prompts:

- **Happy**: Cheerful cat in a colorful meadow with butterflies
- **Sad**: Melancholic cat on a misty dock during twilight
- **Angry**: Fierce cat on a cliff during a thunderstorm
- **Fearful**: Trembling cat hiding in a foggy forest
- **Disgusted**: Refined cat showing disdain in a Victorian parlor
- **Surprised**: Wide-eyed cat in a magical garden with floating orbs
- **Neutral**: Serene cat in a zen garden

## 📡 API Endpoints

### Generate Image
```http
POST /api/generate-image
Content-Type: application/json

{
  "emotion": "happy",
  "confidence": 0.85
}
```

### Health Check
```http
GET /api/health
```

### Get Available Emotions
```http
GET /api/emotions
```

## 🔧 Configuration

### Environment Variables
- `REPLICATE_API_TOKEN`: Your Replicate API token (required)
- `PORT`: Server port (default: 3001)
- `FRONTEND_URL`: Frontend URL for CORS (default: http://localhost:8000)
- `NODE_ENV`: Environment mode (development/production)

### CORS Configuration
The server is configured to accept requests from `http://localhost:8000` by default. Update `FRONTEND_URL` in your `.env` file if your frontend runs on a different port.

## 🚨 Troubleshooting

### Common Issues

1. **"REPLICATE_API_TOKEN not set" warning**
   - Make sure you've created a `.env` file
   - Verify your API token is correctly set in the `.env` file

2. **CORS errors**
   - Check that `FRONTEND_URL` matches your frontend's URL
   - Ensure both frontend and backend are running

3. **Image generation fails**
   - Verify your Replicate API token is valid
   - Check your Replicate account has sufficient credits
   - Review server logs for detailed error messages

## 💰 Replicate Pricing

Flux-Schnell model pricing (as of 2024):
- ~$0.003 per image generation
- Very fast generation (usually 1-2 seconds)
- High quality results

## 🔗 Next Steps

After setting up the API:
1. Start your frontend application (FACE1)
2. The frontend will automatically connect to this API
3. Test emotion detection and watch AI images generate in real-time!

## 📝 Development Notes

- The server uses Express.js with CORS enabled
- Images are generated using Replicate's Flux-Schnell model
- Each emotion has a carefully crafted prompt for consistent, high-quality results
- The API includes proper error handling and logging
