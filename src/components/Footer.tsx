
const Footer = () => {
  return (
    <footer className="mt-12 py-8 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} NFT Auction Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
