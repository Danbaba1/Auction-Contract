import { Wallet, Info } from 'lucide-react';

const NFTCard = () => {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=800&q=80"
          alt="NFT Artwork"
          className="w-full h-[300px] object-cover rounded-lg shadow-md mb-6"
        />
        <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full">
          <span className="text-white text-sm font-medium">#1234</span>
        </div>
      </div>
      
      <div className="space-y-4">
        <button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 px-4 rounded-lg shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
          <Wallet className="w-5 h-5" />
          <span className="font-semibold">Place Bid</span>
        </button>
        
        <button className="w-full border-2 border-violet-600 text-violet-600 py-3 px-4 rounded-lg hover:bg-violet-50 transition-colors flex items-center justify-center space-x-2">
          <Info className="w-5 h-5" />
          <span className="font-semibold">View Details</span>
        </button>
      </div>
    </section>
  );
};

export default NFTCard;
