<div align="center">

# ✨ Spotlight App ✨

**🚀 A stunning React Native app built with Expo Router 🚀**

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>

---

## 🌟 Features

- 🎨 **Beautiful Tab Navigation** with custom icons
- 📱 **Cross-platform** (iOS, Android, Web)
- 🚀 **File-based routing** with Expo Router
- 💫 **Modern UI** with smooth animations
- 🔥 **Hot reload** for fast development

---

## 🚀 Quick Start

### 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to project directory
cd spotlight-app

# Install dependencies
npm install
```

### 🏃‍♂️ Run the App

```bash
# Start the development server
npx expo start
```

Choose your platform:
- 📱 **Press `i`** for iOS Simulator
- 🤖 **Press `a`** for Android Emulator
- 🌐 **Press `w`** for Web Browser
- 📲 **Scan QR code** with Expo Go app

---

## 📁 Project Structure

```
spotlight-app/
├── 📂 app/
│   ├── 📂 (tab)/
│   │   ├── 🏠 index.tsx        # Home Screen
│   │   ├── 🔖 bookmarks.tsx    # Bookmarks Screen
│   │   ├── ➕ create.tsx       # Create Screen
│   │   ├── 🔔 notification.tsx # Notification Screen
│   │   ├── 👤 profile.tsx     # Profile Screen
│   │   └── 📋 _layout.tsx      # Tab Layout
│   └── 📄 index.tsx            # Root Redirect
├── 📂 constants/
│   └── 🎨 theme.ts             # Theme Colors
└── 📜 README.md
```

---

## 🎨 Customization

### 🌈 Colors
Edit `constants/theme.ts` to customize your app colors:

```typescript
export const COLORS = {
  primary: "#your-color",
  grey: "#your-grey",
  // Add more colors...
};
```

### 🔗 Navigation
Modify `app/(tab)/_layout.tsx` to add or remove tabs:

```tsx
<Tabs.Screen
  name="your-screen"
  options={{ 
    title: "Your Title", 
    tabBarIcon: YourIcon 
  }}
/>
```

---

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `npm start` | 🚀 Start development server |
| `npm run android` | 🤖 Run on Android |
| `npm run ios` | 📱 Run on iOS |
| `npm run web` | 🌐 Run on Web |
| `npm run reset-project` | 🔄 Reset to blank project |

---

## 📚 Resources

- 📖 [Expo Documentation](https://docs.expo.dev/)
- 🎓 [Expo Router Guide](https://docs.expo.dev/router/introduction/)
- ⚛️ [React Native Docs](https://reactnative.dev/docs/getting-started)
- 🎨 [Expo Icons](https://icons.expo.fyi/)

---

## 🤝 Contributing

1. 🍴 Fork the project
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔃 Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**⭐ If you like this project, please give it a star! ⭐**

Made with ❤️ by [Your Name](https://github.com/your-profile)
