

const Header: React.FC = () => {
  return (
    <div
      className={`fixed left-0 right-0 bg-white py-6 flex justify-center w-full text-xl transition-opacity duration-300 `}
    >
      <ul className="flex gap-x-8 text-black">
        <li className="hover:opacity-65 cursor-pointer">HOME</li>
        <li className="hover:opacity-65 cursor-pointer">ABOUT</li>
        <li className="hover:opacity-65 cursor-pointer">PROJECTS</li>
        <li className="hover:opacity-65 cursor-pointer">CONTACTS</li>
      </ul>
    </div>
  );
};

export default Header;
