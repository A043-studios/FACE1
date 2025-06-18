# 🎭 FACE1 - Advanced Facial Emotion Detector with AI Art Generation

A cutting-edge real-time facial emotion recognition system with **140 unique AI art prompts** and professional robot-themed artwork generation.

![Facial Emotion Detector](https://img.shields.io/badge/AI-Emotion%20Detection-blue) ![Robot Art](https://img.shields.io/badge/AI%20Art-140%20Prompts-purple) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow) ![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-Face%20API-orange) ![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Live Demo

**[Try it now!](https://whynas.github.io/FACE1)**

## ✨ Revolutionary Features

### 🎯 **Advanced Emotion Detection**
- **Real-time facial emotion recognition** using Face-API.js
- **7 emotions supported**: Happy, Sad, Angry, Fearful, Disgusted, Surprised, Neutral
- **Smart confidence-weighted averaging** for accurate detection
- **Professional dark UI** with Apple-inspired design

### 🤖 **140 Unique Robot Art Prompts**
- **20 prompts per emotion** with distinct cinematic themes
- **Smart rotation system** - no repeats until all prompts used
- **Real-time prompt preview** in dedicated emotion panel
- **Motion blur & cinematic lighting** in every prompt
- **16:9 widescreen format** for professional artwork

### 🎨 **AI Art Generation** (Backend Required)
- **Replicate API integration** with Flux-Schnell model
- **Emotion-specific robot artwork** generated in real-time
- **High-quality image generation** based on detected emotions
- **Professional overlay display** with loading states

## 🎯 How It Works

### 🧠 **Emotion Detection Pipeline**
1. **Face-API.js Models**: Advanced TensorFlow.js models for face detection and emotion recognition
2. **Real-time Analysis**: Processes facial expressions 10 times per second
3. **Smart Confidence Weighting**: Uses 3-second averaging windows for accuracy
4. **Instant Updates**: Immediate emotion changes for strong expressions
5. **Professional UI**: Equal-height columns with responsive design

### 🤖 **Robot Art Prompt System**
1. **Emotion Detection**: System identifies your current emotion
2. **Smart Selection**: Randomly picks from 20 unused prompts for that emotion
3. **Prompt Preview**: Shows detailed robot description in emotion panel
4. **API Generation**: Sends prompt to Replicate for AI artwork creation
5. **Rotation Logic**: Resets after all 20 prompts used, ensuring variety

## 🎭 Emotion Themes & Robot Prompts

| Emotion | Theme | Prompt Examples | Count |
|---------|-------|-----------------|-------|
| **😀 Happy** | Joyful robots in flower fields | "Joyful humanoid robot in sunlit meadow..." | 20 |
| **😥 Sad** | Lonely robots in rain | "Melancholic robot in heavy rain..." | 20 |
| **😠 Angry** | Furious robots with destruction | "Angry robot with glowing red eyes..." | 20 |
| **😨 Fearful** | Terrified robots in darkness | "Terrified robot crouched behind debris..." | 20 |
| **🤢 Disgusted** | Repulsed robots with bio-tech | "Disgusted robot recoiling from organic matter..." | 20 |
| **😲 Surprised** | Wide-eyed robots discovering | "Surprised robot with glowing eyes in cave..." | 20 |
| **😐 Neutral** | Sleek minimalist robots | "Single robot in glossy white armor..." | 20 |

**Total: 140 unique cinematic robot prompts with motion blur and professional lighting**

## 🚀 Quick Start

### 🌐 **Frontend-Only Mode** (GitHub Pages)
1. **Visit**: [https://whynas.github.io/FACE1](https://whynas.github.io/FACE1)
2. **Wait for models**: AI models load automatically (30-60 seconds)
3. **Start camera**: Click "Start Camera" and grant permissions
4. **Express emotions**: Make facial expressions to see detection
5. **View prompts**: See unique robot prompts in the emotion panel

### 🎨 **Full AI Art Mode** (With Backend)
1. **Clone repository**: `git clone https://github.com/WHYNAS/FACE1.git`
2. **Install dependencies**: `npm install`
3. **Setup environment**: Add `REPLICATE_API_TOKEN` to `.env` file
4. **Start servers**: `npm start` (runs both frontend and backend)
5. **Generate art**: Watch AI create robot artwork based on emotions

## 💡 Pro Tips for Best Results

- **💡 Optimal lighting**: Ensure your face is well-lit and clearly visible
- **👤 Face positioning**: Keep face centered and at comfortable distance
- **🎭 Clear expressions**: Make expressions slightly more dramatic than normal
- **⏱️ Expression duration**: Hold expressions for 2-3 seconds for best detection
- **📊 Monitor confidence**: Watch debug panel - green numbers (>30%) indicate strong detection
- **🤖 Prompt variety**: Try different emotions to see all 140 unique robot prompts

## 🔒 Privacy & Security

- **🚫 No recording**: Video never leaves your device
- **💻 Local processing**: All AI runs in your browser
- **🔐 No data collection**: Nothing is stored or transmitted
- **🔒 HTTPS required**: Camera access needs secure connection
- **📖 Open source**: All code is visible and auditable

## 🛠️ Technical Architecture

### 🎨 **Frontend Stack**
- **Core**: Single HTML file with embedded CSS/JavaScript
- **AI Framework**: Face-API.js with TensorFlow.js models
- **UI Design**: Professional dark theme with Apple-inspired aesthetics
- **Layout**: CSS Grid with equal-height responsive columns
- **Models**: ~15MB loaded from CDN (cached after first load)

### ⚙️ **Backend Stack** (Optional)
- **Runtime**: Node.js with Express server
- **AI Service**: Replicate API with Flux-Schnell model
- **Image Generation**: High-quality 16:9 robot artwork
- **API Endpoints**: RESTful design with health checks
- **Environment**: Configurable with .env support

### 🎯 **Prompt Management System**
- **Database**: 140 unique prompts stored in JavaScript arrays
- **Selection Logic**: Smart rotation preventing repeats
- **Tracking**: Used prompt indices per emotion
- **Reset Logic**: Automatic cycling after all prompts used
- **Preview**: Real-time display in emotion panel

## 📱 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 60+ | ✅ Fully Supported |
| Firefox | 55+ | ✅ Fully Supported |
| Safari | 11+ | ✅ Fully Supported |
| Edge | 79+ | ✅ Fully Supported |
| Mobile | Latest | ✅ Fully Supported |

## 🎨 Customization

The application can be easily customized by modifying the single HTML file:
- **🎨 Colors**: Change styling in the CSS section
- **😀 Emotions**: Modify emojis in the `statusIcons` object
- **⚙️ Sensitivity**: Adjust detection thresholds
- **🔧 Features**: Add new functionality in JavaScript

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Models not loading | Check internet connection, wait longer |
| Camera not working | Ensure HTTPS and camera permissions |
| No face detected | Improve lighting, face the camera |
| Slow performance | Try different device/browser |
| Stuck on neutral | Make more exaggerated expressions |

## 📊 Performance

- **📦 Model size**: ~15MB total (loaded once)
- **🎯 Detection rate**: 10 FPS
- **⚡ Update frequency**: Real-time with smart averaging
- **💾 Memory usage**: ~50-100MB
- **⚙️ CPU usage**: Low to moderate

## 🚀 Deployment Options

### 🌐 **GitHub Pages** (Frontend Only)
```bash
# Enable in repository settings
1. Go to Settings → Pages
2. Select "Deploy from branch"
3. Choose "main" branch
4. Site live at: https://yourusername.github.io/FACE1
```

### 🎨 **Full Stack Deployment**

#### **Heroku** (Recommended)
```bash
# Deploy backend to Heroku
1. Create Heroku app
2. Add REPLICATE_API_TOKEN to config vars
3. Deploy server.js
4. Update apiBaseUrl in index.html
```

#### **Vercel/Netlify** (Frontend + Serverless)
```bash
# Frontend deployment
1. Connect GitHub repository
2. Auto-deploy on push
3. Add serverless functions for API
```

#### **Local Development**
```bash
git clone https://github.com/WHYNAS/FACE1.git
cd FACE1
npm install
# Add REPLICATE_API_TOKEN to .env
npm start
# Frontend: http://localhost:8000
# Backend: http://localhost:3001
```

## 📊 Performance Metrics

| Metric | Frontend Only | Full Stack |
|--------|---------------|------------|
| **Load Time** | 30-60 seconds (model loading) | 30-60 seconds + API |
| **Detection Rate** | 10 FPS | 10 FPS |
| **Memory Usage** | 50-100MB | 50-100MB + Server |
| **Prompt Database** | 140 prompts | 140 prompts |
| **Art Generation** | Preview only | Full AI artwork |

## 🔧 Configuration

### **Environment Variables**
```bash
# .env file for backend
REPLICATE_API_TOKEN=your_token_here
PORT=3001
FRONTEND_URL=http://localhost:8000
```

### **Customization Options**
- **Prompts**: Modify `emotionPrompts` object in index.html
- **UI Theme**: Update CSS variables for colors and spacing
- **Detection Sensitivity**: Adjust confidence thresholds
- **API Endpoints**: Configure backend URLs for deployment

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### **🎨 Prompt Contributions**
- Add new robot prompts for existing emotions
- Suggest new emotion categories
- Improve prompt descriptions and themes

### **🔧 Technical Contributions**
- Bug fixes and performance improvements
- New features and UI enhancements
- Documentation and setup guides
- Testing and browser compatibility

### **📝 Documentation**
- Setup guides for different platforms
- Troubleshooting and FAQ sections
- Video tutorials and demos

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **[Face-API.js](https://github.com/justadudewhohacks/face-api.js)** - Powerful face detection and emotion recognition
- **[TensorFlow.js](https://www.tensorflow.org/js)** - Machine learning framework for the web
- **[Replicate](https://replicate.com/)** - AI model hosting and API platform
- **[Flux-Schnell](https://replicate.com/black-forest-labs/flux-schnell)** - High-quality image generation model

## 📈 Repository Stats

![GitHub stars](https://img.shields.io/github/stars/WHYNAS/FACE1?style=social)
![GitHub forks](https://img.shields.io/github/forks/WHYNAS/FACE1?style=social)
![GitHub issues](https://img.shields.io/github/issues/WHYNAS/FACE1)
![GitHub license](https://img.shields.io/github/license/WHYNAS/FACE1)

---

## 🎯 What Makes FACE1 Special

✨ **140 Unique Robot Prompts** - Most comprehensive emotion-based prompt system
🎨 **Professional UI Design** - Apple-inspired dark theme with responsive layout
🤖 **Advanced AI Integration** - Real-time emotion detection + AI art generation
🔒 **Privacy-First** - All emotion detection runs locally in your browser
📱 **Universal Compatibility** - Works on desktop, mobile, and tablets
⚡ **Smart Prompt Rotation** - Never see the same prompt twice until all are used

**Built with ❤️ for the AI art community**

*Experience the future of emotion-driven AI art generation!*

### 🌟 Star this repository if you found it helpful!
