'use client';

import { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { SpotlightEffect } from '../components/SpotlightEffect';
import { BidsList } from '../components/BidsList';
import { PlaceBidForm } from '../components/PlaceBidForm';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="blackboard min-h-screen relative">
      <SpotlightEffect />

      <div className="content-wrapper">
        {/* Header */}
        <header className="border-b-2 border-white/20 p-4 md:p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
            <h1 className="chalk-title text-3xl sm:text-4xl md:text-5xl">LetsBid</h1>
            <div className="connect-button-wrapper scale-90 sm:scale-100">
              <ConnectButton
                showBalance={false}
                accountStatus="address"
                chainStatus="icon"
              />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
          {/* Welcome Section */}
          <section className="text-center mb-8 md:mb-12 fade-in-up px-2">
            <h2 className="chalk-title text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4">
              Welcome to the Blackboard Bidding Platform
            </h2>
            <p className="chalk-text text-lg sm:text-xl md:text-2xl text-white/80">
              Experience bidding like never before - with chalk and spotlight!
            </p>
          </section>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Left Column - Place Bid */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <PlaceBidForm />
            </div>

            {/* Right Column - Current Bids */}
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <BidsList />
            </div>
          </div>

          {/* Info Section */}
          <section className="mt-8 md:mt-12 text-center fade-in-up px-2" style={{ animationDelay: '0.6s' }}>
            <div className="chalk-card inline-block max-w-full">
              <p className="chalk-text text-lg md:text-xl text-white/70">
                <span className="hidden sm:inline">Move your mouse around to reveal the spotlight effect</span>
                <span className="sm:hidden">Tap and drag to see the spotlight effect</span>
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t-2 border-white/20 p-4 md:p-6 mt-8 md:mt-12">
          <div className="max-w-7xl mx-auto text-center px-2">
            <p className="chalk-text text-base md:text-lg text-white/60">
              Built with chalk, blackboard, and blockchain magic
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
