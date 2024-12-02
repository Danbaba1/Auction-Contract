import React from 'react';
import Navbar from '../components/Navbar';
import AuctionDetails from '../components/AuctionDetails';
import NFTCard from '../components/NFTCard';
import Footer from '../components/Footer';

interface AuctionPageProps {
  contractAddress: string;
}

const AuctionPage: React.FC<AuctionPageProps> = ({ contractAddress }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <AuctionDetails contractAddress={contractAddress} />
          </div>
          <div>
            <NFTCard />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AuctionPage;