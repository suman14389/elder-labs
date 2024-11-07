const Header = () => {
  return (
    <div className="border-bottom w-full h-[60px] flex">
      <div className="text-2xl font-bold px-6 h-full flex items-center justify-center w-[15%] border-right">
        Initia Scan
      </div>
      <div className="w-[60%] flex items-center justify-center border-right">
        This is the search bar
      </div>
      <div className="w-[12%] border-right flex items-center justify-center">
        Select Network
      </div>
      <div className="w-[13%] flex items-center justify-center">
        Connect Wallet
      </div>
    </div>
  );
};

export default Header;
