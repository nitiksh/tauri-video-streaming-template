# 🎬 Tauri Video Streaming Template

A modern **desktop video streaming server** template built with **Tauri v2**, **Rust (Axum)**, and **React**.  
This project enables **efficient streaming of local video files** (like `.mp4`, `.mkv`, `.mov`) from a Rust backend to a React-based frontend — without loading the full file into memory.

Perfect for:

- Building video players and media apps
- Local multimedia projects
- App templates for Tauri and Rust beginners
- Learning Rust web streams, React media playback, and desktop app development

---

## 🚀 Features

✅ **Local HTTP video streaming** — plays directly in `<video>` tag  
✅ **Cross-platform** — works on Windows, macOS, Linux  
✅ **Efficient** — streams in chunks instead of loading entire files  
✅ **Built with Axum 0.7** — modern async Rust web framework  
✅ **Clean Tauri v2 setup** — no outdated or deprecated APIs  
✅ **React frontend included** — use immediately  
✅ **CORS-ready** — play streams directly during development

---

## 📦 Project Structure

```py
video-streamer-tauri/
├── src-tauri/ # Rust backend (Axum + Tauri)
│ ├── src/
│ │ ├── lib.rs # Streaming server code
│ │ └── main.rs # Tauri app setup
│ └── Cargo.toml # Rust dependencies incl. Axum, tokio, Tauri v2
├── ui/  # React + Vite frontend
│ ├── src/
│ │ ├── App.jsx # Example React video player
│ │ └── components/
│ │ └── Player.jsx
│ └── package.json
├── README.md # You're here :)
└── LICENSE # MIT License
```

---

## 🛠️ Getting Started

### 1. Clone this repo

```bash
git clone https://github.com/nitiksh/tauri-video-streaming-template
cd tauri-video-streaming-template
```

### 2. Install frontend dependencies

```bash
cd ui
npm install
```

### 3. Run the app

```bash
cd ..            # Go back to the root directory
cargo tauri dev
```

Your Tauri app will launch with a frontend connected to a backend streaming server running at:

```
http://127.0.0.1:7878
```

Use `<video src={videoUrl} />` in React to play videos from local paths.

---

## 🎥 Example Frontend Usage

```js
const localPath = "C:\\Users\\john\\Videos\\sample.mp4";
const streamingUrl = `http://127.0.0.1:7878/?file=${encodeURIComponent(
  localPath
)}`;

return <video src={streamingUrl} controls width="100%" autoPlay />;
```

---

## 🧩 Tech Stack

| Tech        | Usage                               |
| ----------- | ----------------------------------- |
| ⚙️ Rust     | Streaming backend with Axum + Tokio |
| 🎯 Tauri v2 | Desktop webview runtime             |
| ⚛️ React JS | Frontend + video player UI          |
| 📦 Vite     | Fast dev & build tooling            |
| 🌐 Axum     | Modern async HTTP server framework  |

---

## 📝 License

This project is licensed under the [MIT License](./LICENSE).

Feel free to use, modify, and share it however you like — attribution encouraged, but not required.

---

## ⭐ Support

If this helped you, please ⭐ **star the repo** to help more developers find it!

---

## 👨‍💻 Author

Built with ❤️ by <a target="_blank" href="https://nitiksh.ntxm.org">Nitiksh</a>.
