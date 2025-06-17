# 🎭 Facial Emotion Detector

A real-time AI-powered facial emotion recognition web application that runs entirely in your browser.

![Facial Emotion Detector](https://img.shields.io/badge/AI-Emotion%20Detection-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow) ![TensorFlow.js](https://img.shields.io/badge/TensorFlow.js-Face%20API-orange) ![License](https://img.shields.io/badge/License-MIT-green)

## 🚀 Live Demo

**[Try it now!](https://whynas.github.io/FACE1)**

## ✨ Features

- **🎯 Real-time emotion detection** using your camera
- **😀 7 different emotions** detected: Happy, Sad, Angry, Fearful, Disgusted, Surprised, Neutral
- **🎨 Live emoji feedback** that changes based on your facial expression
- **🌈 Dynamic backgrounds** that change color with detected emotions
- **📊 Face detection overlay** showing detected faces and confidence levels
- **🔒 Privacy-focused**: All processing happens locally in your browser
- **📱 Responsive design** that works on desktop and mobile
- **🔍 Debug panel** showing real-time emotion percentages

## 🎯 How It Works

1. **🤖 AI Models**: Uses Face-API.js with TensorFlow.js for face detection and emotion recognition
2. **⚡ Real-time Processing**: Analyzes your face 10 times per second for smooth feedback
3. **🧠 Smart Averaging**: Uses confidence-weighted averaging over 3-second windows
4. **🚀 Immediate Updates**: Changes emotions instantly when strong expressions are detected
5. **📹 Camera Auto-refresh**: Refreshes camera stream every 5 seconds for optimal quality

## 🎭 Detected Emotions

| Emotion | Emoji | Description |
|---------|-------|-------------|
| **Neutral** | 😐 | Default/calm expression |
| **Happy** | 😀 | Smiling, joyful expressions |
| **Sad** | 😥 | Frowning, downturned expressions |
| **Angry** | 😠 | Furrowed brow, intense expressions |
| **Fearful** | 😨 | Wide eyes, surprised/scared expressions |
| **Disgusted** | 🤢 | Wrinkled nose, disgusted expressions |
| **Surprised** | 😲 | Wide eyes, open mouth expressions |

## 🚀 Quick Start

1. **Open the application** in your web browser
2. **Wait for AI models to load** (30-60 seconds)
3. **Click "Start Camera"** and grant camera permissions
4. **Make facial expressions** and watch the emoji change!
5. **Check the debug panel** to see real-time emotion percentages

## 💡 Tips for Best Results

- **💡 Good lighting** - Make sure your face is well-lit
- **👤 Face the camera** - Keep your face centered and visible
- **🎭 Exaggerated expressions** - Make expressions more dramatic than normal
- **⏱️ Hold expressions** - Keep the expression for 2-3 seconds for best detection
- **📊 Watch debug panel** - Green numbers (>30%) indicate strong emotion detection

## 🔒 Privacy & Security

- **🚫 No recording**: Video never leaves your device
- **💻 Local processing**: All AI runs in your browser
- **🔐 No data collection**: Nothing is stored or transmitted
- **🔒 HTTPS required**: Camera access needs secure connection
- **📖 Open source**: All code is visible and auditable

## 🛠️ Technical Details

- **Frontend**: Pure HTML, CSS, JavaScript (Single file)
- **AI Framework**: Face-API.js with TensorFlow.js
- **Models**: Loaded from GitHub CDN (~15MB)
- **Browser Support**: Modern browsers with camera access
- **Mobile Support**: iOS Safari, Chrome Mobile

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

## 🚀 Deployment

This project is designed for easy deployment:

### GitHub Pages
1. Fork this repository
2. Enable GitHub Pages in Settings
3. Your site will be live at `https://yourusername.github.io/FACE1`

### Other Platforms
- **Netlify**: Drag and drop the `index.html` file
- **Vercel**: Connect your GitHub repository
- **Firebase**: Deploy to Firebase Hosting

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs and issues
- 💡 Suggest new features
- 🔧 Submit pull requests
- 📢 Share improvements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **[Face-API.js](https://github.com/justadudewhohacks/face-api.js)** - Amazing face detection library
- **[TensorFlow.js](https://www.tensorflow.org/js)** - Machine learning framework
- **[GitHub Pages](https://pages.github.com/)** - Free hosting platform

## 📈 Stats

![GitHub stars](https://img.shields.io/github/stars/WHYNAS/FACE1?style=social)
![GitHub forks](https://img.shields.io/github/forks/WHYNAS/FACE1?style=social)
![GitHub issues](https://img.shields.io/github/issues/WHYNAS/FACE1)

---

**Built with ❤️ using Face-API.js and TensorFlow.js**

*Try making different expressions and watch the AI detect your emotions in real-time!*

### 🌟 Star this repository if you found it helpful!
