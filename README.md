# Google Auth with Clerk

Full-stack authentication app menggunakan **Next.js 16**, **Express**, dan **Clerk**.

## Struktur Project

```
GoogleAuth/
├── next-app/   # Frontend - Next.js 16 + Clerk
└── server/     # Backend - Express + TypeScript + Clerk
```

---

## Tech Stack

**Frontend (`next-app`)**
- Next.js 16 (App Router + Turbopack)
- React 19
- Clerk (Authentication)
- Tailwind CSS v4
- shadcn/ui
- next-themes (Dark mode)

**Backend (`server`)**
- Express 5
- TypeScript
- Clerk Express SDK
- dotenv
- nodemon + ts-node

---

## Prerequisites

- Node.js 18+
- Akun [Clerk](https://clerk.com) dengan app yang sudah dibuat

---

## Setup

### 1. Clone & Install

```bash
# Install dependencies frontend
cd next-app
npm install

# Install dependencies backend
cd ../server
npm install
```

### 2. Environment Variables

**`next-app/.env`**
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
```

**`server/.env`**
```env
CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

> Ambil keys dari [Clerk Dashboard](https://dashboard.clerk.com/~/api-keys)

### 3. Jalankan

```bash
# Terminal 1 - Frontend
cd next-app
npm run dev

# Terminal 2 - Backend
cd server
npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## API Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| GET | `/` | Health check |
| GET | `/google-auth` | Google Auth endpoint |

---

## Flow Autentikasi

1. User mengakses `/` → redirect ke `/sign-in` jika belum login
2. User login via Clerk (support Google OAuth)
3. Setelah login → redirect ke dashboard `/`
4. Tombol **Log out** → kembali ke `/sign-in`
