# LetsBid - Blackboard Bidding Platform

A unique bidding platform with a chalk-on-blackboard aesthetic and interactive spotlight effect, inspired by animated classics.

## Features

- **Chalk & Blackboard Theme**: Authentic blackboard aesthetic with chalk-style typography
- **Mouse-Following Spotlight**: Interactive spotlight effect that illuminates content as you move your mouse
- **Wallet Integration**: MetaMask wallet connection using RainbowKit
- **Real-time Bidding**: Place and view bids in real-time
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom chalk-style CSS
- **Wallet Connection**: RainbowKit + Wagmi
- **Web3 Library**: Viem
- **State Management**: React Query

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MetaMask browser extension

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd LetsBid
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Get a WalletConnect Project ID:
   - Go to https://cloud.walletconnect.com/
   - Create a new project
   - Copy your Project ID
   - Add it to `.env.local`:
     ```
     NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
     ```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment on Vercel

### Quick Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variable:
   - `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
5. Deploy!

### Manual Configuration

The project includes automatic Vercel configuration. Just ensure your environment variables are set in the Vercel dashboard.

## Project Structure

```
LetsBid/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main page
│   ├── globals.css         # Global styles and chalk theme
│   └── providers.tsx       # Web3 providers setup
├── components/
│   ├── SpotlightEffect.tsx # Mouse-following spotlight
│   ├── BidsList.tsx        # Display current bids
│   └── PlaceBidForm.tsx    # Bid placement form
├── lib/
│   └── wagmi.ts            # Wagmi configuration
└── public/                 # Static assets
```

## Features Explained

### Spotlight Effect

The spotlight effect creates an illuminated circular area that follows your mouse cursor, revealing content on the dark blackboard background. It uses CSS gradients and smooth transitions for a realistic spotlight feel.

### Wallet Connection

RainbowKit provides a beautiful, customizable wallet connection experience supporting:
- MetaMask
- WalletConnect
- Coinbase Wallet
- And many more...

### Bidding System

Currently uses mock data for demonstration. The infrastructure is ready for smart contract integration:
- Place bids with item name and ETH amount
- View all active bids
- Filter bids by status
- Real-time updates

## Next Steps

- [ ] Integrate smart contracts for actual bidding
- [ ] Add bid history and user profiles
- [ ] Implement auction timers
- [ ] Add notifications for outbid alerts
- [ ] Include NFT image displays
- [ ] Add transaction history

## Customization

### Changing Colors

Edit `app/globals.css` to customize the chalk and blackboard colors:
- Background: `.blackboard { background-color: #1a1a1a; }`
- Text: `.chalk-text { color: #f5f5f5; }`

### Adjusting Spotlight

Modify spotlight size and opacity in `components/SpotlightEffect.tsx`:
- Size: Change `circle 350px` to your desired radius
- Opacity: Adjust `rgba(255, 255, 255, 0.15)` values

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## License

MIT License - feel free to use this project for your own bidding platform!

## Support

For questions or issues, please open an issue on GitHub.

---

Built with ❤️ using Next.js, RainbowKit, and creative inspiration from animated classics.
