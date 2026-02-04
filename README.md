# 💸 DealDrop — Smart Product Price Tracker

DealDrop is a modern web application that allows users to track product prices from e-commerce websites and get notified when prices change.  
It focuses on clean UI, scalable architecture, and real-world full-stack practices.

Built with **Next.js App Router**, **Supabase**, and **Tailwind CSS**.

---

## ✨ Features

- 🔎 Add and track product URLs
- 🔐 Authentication with Supabase
- ⚡ Server Actions for secure mutations
- 🗂️ Price history storage (Supabase DB)
- 🎨 Clean, responsive landing page UI
- 🧩 Modular component architecture
- 🚀 Optimized Next.js App Router setup

---

## 🛠 Tech Stack

- **Next.js** — App Router, Server Actions
- **React** — Component-based UI
- **Supabase** — Authentication & Database
- **Tailwind CSS** — Styling
- **shadcn/ui** — UI components
- **Lucide Icons** — Icons

---

## 📂 Project Structure

```
app/
  auth/
    callback/
      route.js          # Supabase auth callback
  actions.js            # Server actions (auth, product logic)
  globals.css           # Global styles
  layout.js             # Root layout
  page.jsx              # Landing page

components/
  AddProductForm.jsx    # Product URL input form
  AuthButton.jsx        # Sign in / Sign out logic
  AuthModal.jsx         # Authentication modal
  ui/                   # shadcn/ui components
    alert.jsx
    badge.jsx
    button.jsx
    card.jsx
    dialog.jsx
    input.jsx
    sonner.jsx

utils/
  supabase/
    client.js           # Browser Supabase client
    server.js           # Server Supabase client
    middleware.js       # Auth session refresh

public/
  deal-drop-logo.png

middleware.js           # Next.js middleware
next.config.js
package.json
README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/Deal-Drop.git
cd Deal-Drop
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 4️⃣ Run development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## 🔐 Authentication Flow

- User signs in via Supabase
- Session is refreshed using middleware
- Server Components receive authenticated user
- UI switches between **Sign In / Sign Out** automatically

---

## 🧪 Current Status

- ✅ Authentication working
- ✅ Product add & update logic
- ✅ Price history table support
- 🔄 Product scraping logic (in progress)
- 🔔 Price alerts (planned)
- 📊 Dashboard view (planned)

---

## 🗺 Roadmap

- Product scraping service
- Price change alerts
- User dashboard
- Watchlist management
- Deployment to production

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repo
2. Create a feature branch
3. Commit your changes
4. Open a pull request

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Built with ❤️ by **Rohan**
