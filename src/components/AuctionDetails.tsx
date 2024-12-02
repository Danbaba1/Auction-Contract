import React from 'react';
import { Clock, Coins } from 'lucide-react';

interface AuctionDetailsProps {
  contractAddress: string;
}

const AuctionDetails: React.FC<AuctionDetailsProps> = ({ contractAddress }) => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Auction Details</h2>
      <div className="bg-gray-50 p-4 rounded-lg mb-8 border border-gray-100">
        <p className="text-sm text-gray-600 flex items-center flex-wrap">
          Contract Address:
          <span className="ml-2 font-mono bg-white px-3 py-1 rounded text-xs border border-gray-200">
            {contractAddress}
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
          <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center">
            <Coins className="w-4 h-4 mr-2 text-green-600" />
            Current Bid
          </label>
          <div className="flex items-baseline">
            <span className="text-3xl font-extrabold text-green-600">0.05</span>
            <span className="ml-2 text-green-600 font-semibold">ETH</span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-lg border border-red-100">
          <label className="block text-sm font-medium text-gray-600 mb-2 flex items-center">
            <Clock className="w-4 h-4 mr-2 text-red-500" />
            Time Remaining
          </label>
          <span className="text-2xl font-bold text-red-500">2d 5h 30m</span>
        </div>
      </div>
    </section>
  );
};

export default AuctionDetails;