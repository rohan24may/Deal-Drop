# 💸 DealDrop — Smart Product Price Tracker

DealDrop is a full-stack web application that allows users to track product prices from e-commerce websites and monitor changes over time.  
It is built with a focus on real-world architecture, clean UI, and scalable full-stack practices.

Built using **Next.js App Router**, **Supabase**, and **Tailwind CSS**.

---

## ✨ Features

- 🔎 Add and track product URLs
- 🔐 Supabase authentication (Sign in / Sign out)
- ⚡ Next.js Server Actions for secure backend logic
- 🗂️ Price history tracking with Supabase database
- 🧩 Component-based scalable architecture
- 🎨 Clean, responsive UI with Tailwind + shadcn
- 🚀 App Router based modern Next.js setup

---

## 🛠 Tech Stack

**Frontend**
- Next.js (App Router)
- React
- Tailwind CSS
- shadcn/ui
- Lucide Icons

**Backend**
- Supabase Authentication
- Supabase PostgreSQL Database
- Next.js Server Actions

---

## 📂 Project Structure

```
app/
  auth/
    callback/
      route.js          # Supabase OAuth callback
  actions.js            # Server actions (auth, products, DB)
  globals.css           # Global styles
  layout.js             # Root layout
  page.jsx              # Main landing + product view

components/
  AddProductForm.jsx    # Add product URL
  AuthButton.jsx        # Sign in / Sign out logic
  AuthModal.jsx         # Login modal UI
  ProductCard.jsx       # Tracked product display
  PriceChart.jsx        # Price history graph
  ui/                   # shadcn components

utils/
  supabase/
    client.js           # Browser Supabase client
    server.js           # Server Supabase client
    middleware.js       # Session refresh

public/
  deal-drop-logo.png

middleware.js           # Next.js middleware
next.config.js
package.json
README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone repository

```bash
git clone https://github.com/YOUR_USERNAME/Deal-Drop.git
cd Deal-Drop
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
FIRECRAWL_API_KEY=your_firecrawl_key
```

### 4️⃣ Run project

```bash
npm run dev
```

Open:
```
http://localhost:3000
```

---

## 🔐 Authentication Flow

- User logs in using Supabase
- Middleware refreshes session
- Server components receive authenticated user
- UI updates dynamically (Sign in → Sign out)

---

## 🧠 Architecture Highlights

- Server Actions handle DB writes securely
- Supabase manages auth + data layer
- UI remains client-light and fast
- Feature-based component structure

This mirrors real production full-stack apps.

---

## 🧪 Current Status

- ✅ Authentication system complete
- ✅ Product tracking DB schema
- ✅ Add / delete products
- ✅ Price history tracking
- 🔄 Product scraping engine (in progress)
- 🔔 Alert system (planned)
- 📊 Dashboard analytics (planned)

---

## 🗺 Roadmap

- Automated price scraping
- Email / push alerts
- Dashboard view
- Watchlist system
- Deployment (Vercel)

---

## 🤝 Contributing

1. Fork the repo  
2. Create feature branch  
3. Commit changes  
4. Open pull request  

---

## 📄 License

MIT License

---

## 👨‍💻 Author

Built with ❤️ by **Rohan**
