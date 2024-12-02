import { Home, User, Gavel } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <Gavel className="w-6 h-6" />
          <h1 className="text-2xl font-bold">NFT Auction</h1>
        </div>
        <nav className="flex items-center space-x-8">
          <a href="#" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
            <Gavel className="w-4 h-4" />
            <span>My Bids</span>
          </a>
          <a href="#" className="flex items-center space-x-2 hover:text-gray-200 transition-colors">
            <User className="w-4 h-4" />
            <span>Profile</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
