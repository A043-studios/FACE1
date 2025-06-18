# 🎭 FACE1 - Facial Emotion Detector (GitHub Pages)

## 🌐 Live Demo
**https://whynas.github.io/FACE1/**

## ✨ Features
- **Real-time Facial Emotion Detection** using Face-API.js
- **140 Unique AI Art Prompts** (20 per emotion)
- **Smart Prompt Rotation** - No repeats until all prompts used
- **7 Emotions Supported**: Happy, Sad, Angry, Fearful, Disgusted, Surprised, Neutral
- **Professional Dark UI** with Apple-inspired design
- **Responsive Layout** with equal-height columns

## 🎨 AI Art Generation

### Frontend-Only Mode (Current)
The GitHub Pages version runs the emotion detection system without backend AI art generation. You'll see:
- ✅ Real-time emotion detection
- ✅ Prompt preview with robot descriptions
- ✅ Professional UI and animations
- ❌ AI art generation (requires backend)

### Full Experience (With Backend)
To enable AI art generation, you need to deploy the backend server:

#### Option 1: Deploy to Heroku
1. Fork this repository
2. Create a Heroku app
3. Add your `REPLICATE_API_TOKEN` to Heroku config vars
4. Deploy the `server.js` file
5. Update the `apiBaseUrl` in `index.html`

#### Option 2: Run Locally
```bash
git clone https://github.com/WHYNAS/FACE1.git
cd FACE1
npm install
# Add REPLICATE_API_TOKEN to .env file
npm start
# Open http://localhost:8000
```

## 🤖 Robot Art Prompts

Each emotion has 20 unique cinematic robot prompts:

- **HAPPY**: Joyful robots in flower fields with warm lighting
- **SAD**: Lonely robots in rain with melancholic themes
- **ANGRY**: Furious robots with red eyes and destruction
- **FEARFUL**: Terrified robots in dark, threatening environments
- **DISGUSTED**: Repulsed robots with bio-tech horror elements
- **SURPRISED**: Wide-eyed robots discovering unexpected things
- **NEUTRAL**: Sleek minimalist robots with clean aesthetics

## 🛠 Technical Details

### Frontend Stack
- **Face-API.js** for emotion detection
- **Vanilla JavaScript** for UI interactions
- **CSS Grid & Flexbox** for responsive layout
- **Backdrop filters** for glass morphism effects

### Backend Stack (Optional)
- **Node.js** with Express
- **Replicate API** for AI image generation
- **Flux-Schnell model** for high-quality robot artwork

## 📱 Browser Support
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers with camera access

## 🔒 Privacy
- All emotion detection runs locally in your browser
- No facial data is transmitted or stored
- Camera access required for real-time detection

## 🚀 Quick Start
1. Visit **https://whynas.github.io/FACE1/**
2. Click "Start Camera"
3. Allow camera permissions
4. Make facial expressions to see emotion detection
5. View unique robot prompts for each emotion

## 📄 License
MIT License - See LICENSE file for details

---
**Built with ❤️ for the AI art community**
