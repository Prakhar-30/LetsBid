'use client';

import { useState } from 'react';
import { useAccount } from 'wagmi';

export function PlaceBidForm() {
  const { address, isConnected } = useAccount();
  const [itemName, setItemName] = useState('');
  const [bidAmount, setBidAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isConnected) {
      alert('Please connect your wallet first!');
      return;
    }

    if (!itemName || !bidAmount) {
      alert('Please fill in all fields!');
      return;
    }

    setLoading(true);

    // Simulate bid placement (you'll replace this with actual smart contract call)
    setTimeout(() => {
      console.log('Bid placed:', { itemName, bidAmount, address });
      alert(`Bid placed successfully! Item: ${itemName}, Amount: ${bidAmount} ETH`);
      setItemName('');
      setBidAmount('');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="chalk-card h-full">
      <h3 className="chalk-title text-3xl mb-6">Place Your Bid</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="chalk-text text-xl block mb-2">Item Name</label>
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            placeholder="Enter item name..."
            className="chalk-input w-full"
            disabled={loading}
          />
        </div>

        <div>
          <label className="chalk-text text-xl block mb-2">Bid Amount (ETH)</label>
          <input
            type="number"
            step="0.01"
            value={bidAmount}
            onChange={(e) => setBidAmount(e.target.value)}
            placeholder="0.00"
            className="chalk-input w-full"
            disabled={loading}
          />
        </div>

        {!isConnected ? (
          <div className="chalk-card bg-white/5 p-4 text-center">
            <p className="chalk-text text-lg text-white/70">
              Connect your wallet to place bids
            </p>
          </div>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="chalk-button w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Placing Bid...' : 'Place Bid'}
          </button>
        )}

        {isConnected && (
          <div className="chalk-card bg-white/5 p-3">
            <p className="chalk-text text-sm text-white/60">
              Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
            </p>
          </div>
        )}
      </form>

      <div className="mt-8 pt-6 border-t border-white/20">
        <h4 className="chalk-text text-xl mb-3 text-white/80">How it works:</h4>
        <ul className="chalk-text text-lg space-y-2 text-white/70">
          <li>1. Connect your MetaMask wallet</li>
          <li>2. Enter the item name you want to bid on</li>
          <li>3. Enter your bid amount in ETH</li>
          <li>4. Submit and confirm the transaction</li>
        </ul>
      </div>
    </div>
  );
}
