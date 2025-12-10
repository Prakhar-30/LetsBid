'use client';

import { useState, useEffect } from 'react';

interface Bid {
  id: number;
  itemName: string;
  amount: string;
  bidder: string;
  timestamp: number;
  status: 'active' | 'winning' | 'outbid';
}

// Mock data - you'll replace this with real blockchain data
const mockBids: Bid[] = [
  {
    id: 1,
    itemName: 'Vintage NFT Collection',
    amount: '2.5',
    bidder: '0x742d...4c2f',
    timestamp: Date.now() - 300000,
    status: 'winning',
  },
  {
    id: 2,
    itemName: 'Digital Artwork #42',
    amount: '1.8',
    bidder: '0x8f3a...9d1e',
    timestamp: Date.now() - 600000,
    status: 'active',
  },
  {
    id: 3,
    itemName: 'Rare Gaming Item',
    amount: '0.5',
    bidder: '0x1a2b...3c4d',
    timestamp: Date.now() - 900000,
    status: 'outbid',
  },
  {
    id: 4,
    itemName: 'Limited Edition Token',
    amount: '3.2',
    bidder: '0x9e8d...7f6a',
    timestamp: Date.now() - 1200000,
    status: 'winning',
  },
];

export function BidsList() {
  const [bids, setBids] = useState<Bid[]>(mockBids);
  const [filter, setFilter] = useState<'all' | 'winning' | 'active'>('all');

  const filteredBids = bids.filter((bid) => {
    if (filter === 'all') return true;
    return bid.status === filter;
  });

  const formatTimestamp = (timestamp: number) => {
    const minutes = Math.floor((Date.now() - timestamp) / 60000);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'winning':
        return 'text-green-400';
      case 'outbid':
        return 'text-red-400';
      default:
        return 'text-white/70';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'winning':
        return '🏆 Winning';
      case 'outbid':
        return '❌ Outbid';
      default:
        return '⏳ Active';
    }
  };

  return (
    <div className="chalk-card h-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-3">
        <h3 className="chalk-title text-2xl md:text-3xl">Current Bids</h3>
        <div className="flex gap-1.5 sm:gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`chalk-button text-xs sm:text-sm py-1 px-2 sm:px-3 ${
              filter === 'all' ? 'bg-white/20' : 'bg-white/5'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('winning')}
            className={`chalk-button text-xs sm:text-sm py-1 px-2 sm:px-3 ${
              filter === 'winning' ? 'bg-white/20' : 'bg-white/5'
            }`}
          >
            Winning
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`chalk-button text-xs sm:text-sm py-1 px-2 sm:px-3 ${
              filter === 'active' ? 'bg-white/20' : 'bg-white/5'
            }`}
          >
            Active
          </button>
        </div>
      </div>

      <div className="space-y-3 md:space-y-4 max-h-[500px] md:max-h-[600px] overflow-y-auto pr-1 md:pr-2">
        {filteredBids.length === 0 ? (
          <div className="chalk-card bg-white/5 p-8 text-center">
            <p className="chalk-text text-xl text-white/60">No bids found</p>
          </div>
        ) : (
          filteredBids.map((bid, index) => (
            <div
              key={bid.id}
              className="chalk-card bg-white/5 hover:bg-white/10 transition-all"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex justify-between items-start mb-2 md:mb-3">
                <div className="flex-1 min-w-0">
                  <h4 className="chalk-text text-lg sm:text-xl md:text-2xl font-bold mb-1 truncate">
                    {bid.itemName}
                  </h4>
                  <p className="chalk-text text-xs sm:text-sm text-white/50">
                    {formatTimestamp(bid.timestamp)}
                  </p>
                </div>
                <span className={`chalk-text text-xs sm:text-sm font-bold ml-2 whitespace-nowrap ${getStatusColor(bid.status)}`}>
                  {getStatusBadge(bid.status)}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-0">
                <div className="min-w-0 flex-1">
                  <p className="chalk-text text-xs sm:text-sm text-white/60 mb-1">Bidder</p>
                  <p className="chalk-text text-base sm:text-lg font-mono truncate">{bid.bidder}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="chalk-text text-xs sm:text-sm text-white/60 mb-1">Amount</p>
                  <p className="chalk-title text-xl sm:text-2xl">{bid.amount} ETH</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-white/20">
        <div className="flex justify-between items-center">
          <p className="chalk-text text-base md:text-lg text-white/70">
            Total: <span className="font-bold">{filteredBids.length}</span>
          </p>
          <button className="chalk-button text-xs sm:text-sm py-2 px-3 sm:px-4">
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
