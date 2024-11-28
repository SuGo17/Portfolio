import { FC } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

type MenuProps = {
  isOpen: boolean;
  className: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Menu: FC<MenuProps> = ({ isOpen, className, setIsOpen }) => {
  return (
    <button className={className} onClick={() => setIsOpen((prev) => !prev)}>
      {isOpen ? <IoMdClose /> : <RiMenu3Fill />}
    </button>
  );
};

export default Menu;
