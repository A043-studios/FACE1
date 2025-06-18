# 🎨 Emotion Art Generator - Complete Setup Guide

This guide will help you set up the complete emotion detection and AI art generation system.

## 🚀 Quick Start

### 1. Install Backend Dependencies
```bash
# Install Node.js dependencies
npm install
```

### 2. Configure Replicate API
1. Sign up at [Replicate.com](https://replicate.com)
2. Get your API token from [API tokens page](https://replicate.com/account/api-tokens)
3. Create environment file:
```bash
cp .env.example .env
```
4. Edit `.env` and add your token:
```
REPLICATE_API_TOKEN=your_actual_token_here
```

### 3. Start the Backend Server
```bash
# Development mode (recommended)
npm run dev

# Or production mode
npm start
```
The API will run on `http://localhost:3001`

### 4. Start the Frontend
```bash
# Navigate to FACE1 directory
cd FACE1

# Start a simple HTTP server
python3 -m http.server 8000

# Or use Node.js http-server
npx http-server -p 8000
```
The frontend will be available at `http://localhost:8000`

## 🎭 How It Works

1. **Emotion Detection**: The frontend uses Face-API.js to detect emotions from your camera
2. **API Communication**: When a strong emotion is detected, it sends the data to the backend
3. **AI Art Generation**: The backend uses Replicate's Flux-Schnell model to generate emotion-specific artwork
4. **Real-time Display**: Generated images appear in the AI Art panel next to the camera view

## 🎨 Emotion-Specific Art Prompts

Each emotion triggers a unique artistic style:

- **😀 Happy**: Cheerful cat in a colorful meadow with butterflies
- **😢 Sad**: Melancholic cat on a misty dock during twilight  
- **😠 Angry**: Fierce cat on a cliff during a thunderstorm
- **😨 Fearful**: Trembling cat hiding in a foggy forest
- **🤢 Disgusted**: Refined cat showing disdain in a Victorian parlor
- **😲 Surprised**: Wide-eyed cat in a magical garden with floating orbs
- **😐 Neutral**: Serene cat in a zen garden

## 🔧 Configuration

### Backend Configuration (.env)
```
REPLICATE_API_TOKEN=your_token_here
PORT=3001
FRONTEND_URL=http://localhost:8000
NODE_ENV=development
```

### Frontend Configuration
The frontend automatically connects to `http://localhost:3001/api`. If you change the backend port, update the `apiBaseUrl` variable in `FACE1/index.html`.

## 🧪 Testing the System

### 1. Test Backend API
```bash
# Check if API is running
curl http://localhost:3001/api/health

# Test image generation (requires valid API token)
curl -X POST http://localhost:3001/api/generate-image \
  -H "Content-Type: application/json" \
  -d '{"emotion": "happy", "confidence": 0.8}'
```

### 2. Test Frontend
1. Open `http://localhost:8000` in your browser
2. Click "Start Camera" and allow camera permissions
3. Make exaggerated facial expressions
4. Watch for emotion detection in the left panel
5. AI art should generate automatically in the right panel

### 3. Performance Tips
- **Strong Expressions**: Make exaggerated expressions and hold for 2-3 seconds
- **Good Lighting**: Ensure your face is well-lit
- **Stable Position**: Keep your face centered in the camera view
- **Wait for Generation**: Allow 3-5 seconds for each image to generate

## 🚨 Troubleshooting

### Common Issues

**"API Not Available" in AI Art panel**
- Ensure backend server is running on port 3001
- Check that your `.env` file has the correct API token
- Verify CORS settings allow frontend URL

**Camera not working**
- Ensure you're using HTTPS or localhost
- Grant camera permissions when prompted
- Try refreshing the page

**Images not generating**
- Check browser console for error messages
- Verify your Replicate API token is valid
- Ensure you have sufficient Replicate credits
- Make stronger facial expressions (>30% confidence)

**Slow image generation**
- This is normal - Flux-Schnell typically takes 1-3 seconds
- Check your internet connection
- Verify Replicate service status

### Debug Mode
Enable detailed logging by opening browser console (F12) to see:
- Emotion detection confidence levels
- API request/response details
- Image generation status

## 💰 Cost Information

**Replicate Pricing** (as of 2024):
- Flux-Schnell: ~$0.003 per image
- Very fast generation (1-2 seconds)
- High quality 1024x1024 images

**Estimated Usage**:
- ~10-20 images per testing session
- Cost: $0.03-$0.06 per session

## 🔄 Development Workflow

1. **Backend Changes**: Restart with `npm run dev`
2. **Frontend Changes**: Refresh browser (no restart needed)
3. **New Emotions**: Add to `emotionPrompts` in `server.js`
4. **UI Changes**: Modify `FACE1/index.html`

## 📱 Browser Compatibility

**Fully Supported**:
- Chrome 60+ (recommended)
- Firefox 55+
- Safari 11+
- Edge 79+

**Mobile Support**:
- iOS Safari
- Chrome Mobile
- Samsung Internet

## 🎯 Next Steps

After successful setup:
1. Experiment with different emotions
2. Try various lighting conditions
3. Test on different devices
4. Customize emotion prompts in `server.js`
5. Modify UI styling in `FACE1/index.html`

## 📞 Support

If you encounter issues:
1. Check this troubleshooting guide
2. Review browser console for errors
3. Verify all setup steps were completed
4. Check Replicate API status and credits

---

**🎉 Enjoy creating emotion-based AI art!**
