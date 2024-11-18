import { FC } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

type MenuProps = {
  isOpen: boolean;
  className: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const Menu: FC<MenuProps> = ({ isOpen, className, setIsOpen }) => {
  return isOpen ? (
    <IoMdClose className={className} onClick={() => setIsOpen(false)} />
  ) : (
    <RiMenu3Fill className={className} onClick={() => setIsOpen(true)} />
  );
};

export default Menu;
