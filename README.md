# Bitcoin to Rupiah Converter

![Bitcoin Converter](https://img.shields.io/badge/Next.js-v13-blue) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3-blue) ![CoinGecko API](https://img.shields.io/badge/API-CoinGecko-orange)

Bitcoin to Rupiah Converter is a web-based application that allows users to convert Bitcoin (BTC) to Indonesian Rupiah (IDR) in real-time using data from the CoinGecko API.

## 🚀 Features

- Real-time Bitcoin to Rupiah conversion
- Simple and responsive UI with Tailwind CSS
- Optimized performance using Next.js
- Fetches data from the CoinGecko API

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) - React framework for web applications
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [CoinGecko API](https://www.coingecko.com/en/api) - API for real-time Bitcoin price data
- [Vercel](https://vercel.com/) - Deployment platform

## 🎯 Installation and Running the Project

### 1. Clone the Repository
```bash
git clone https://github.com/ikhwanhsn/btc-to-idr.git
cd btc-to-idr
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Create a `.env.local` File
Create a `.env.local` file in the root directory and add the CoinGecko API URL:
```env
NEXT_PUBLIC_COINGECKO_API=https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=idr
```

### 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
```
Access the app at `http://localhost:3000`

## 📦 Deployment
This project is configured for deployment on [Vercel](https://vercel.com/).

1. Log in to Vercel
2. Connect the repository to Vercel
3. Add environment variables in the Vercel dashboard
4. Deploy!

## 📜 Folder Structure
```
├── public/               # Static files (favicon, images, etc.)
├── src/
│   ├── components/       # React components
│   ├── pages/            # Application pages
│   ├── styles/           # Tailwind CSS files
│   ├── utils/            # Utility functions (API fetching, etc.)
├── .env.local            # API configuration file (ignored in Git)
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Dependencies and scripts
├── README.md             # Project documentation
```

## 🔥 Contributing
If you want to contribute:
1. Fork this repository
2. Create a new branch (`git checkout -b new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin new-feature`)
5. Create a Pull Request

## 📞 Contact
For any questions, reach out to me via:
- Email: ikhwanulhusna111@example.com
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/ikhwanhsn)

---

💡 **Bitcoin to Rupiah Converter** was built with ❤️ by [Ikhwan].
