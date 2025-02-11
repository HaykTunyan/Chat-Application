# 💬 Chat-Application

This project is a **Chat Application** built with a **Flask** backend and a **Next.js (TypeScript)** frontend. The application integrates the **Bard AI API** to enable AI-powered chatbot interactions.

## 🚀 Features

- **Flask Backend** (`flask-back/`)
  - Built with **Python**
  - Integrates **Bard AI API**
  - Handles API requests for AI chat responses
- **Next.js Frontend** (`next-front/`)
  - Built with **Next.js & TypeScript**
  - Communicates with the Flask API
  - Provides a chat UI for users

## 💂️ Installation  

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/chat-application.git
cd chat-application
```

### 2. Setup Backend (`flask-back/`)
```sh
cd flask-back
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
```

### 3. Setup Frontend (`next-front/`)
```sh
cd ../next-front
npm install
```

## 💪 Running the Project  

### Start Flask Backend
```sh
cd flask-back
source venv/bin/activate
python app.py
```
- Runs on **`http://localhost:5000`**

### Start Next.js Frontend
```sh
cd ../next-front
npm run dev
```
- Runs on **`http://localhost:3000`**

## 🛠️ API Integration  

### Flask API (`flask-back/app.py`)
```python
```

### Next.js Frontend (`next-front/pages/index.tsx`)
```tsx
```

## 📁 Folder Structure  

```
chat-application/
│── 📁 flask-back/
│
│── 📁 next-front/
│
│── README.md
```

## 🌟 License  
This project is open-source and available under the **MIT License**.  

---

🚀 Now you have a fully functional Chat Application with Bard AI integration! Let me know if you need enhancements. 🚀

