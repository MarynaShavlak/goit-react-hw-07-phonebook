import { IoMdContact } from 'react-icons/io';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { RiContactsFill } from 'react-icons/ri';
import { BsTelephoneFill } from 'react-icons/bs';
import { RiEdit2Fill } from 'react-icons/ri';
import { ImCancelCircle } from 'react-icons/im';
import { GiConfirmed } from 'react-icons/gi';
import { FaRegSadCry } from 'react-icons/fa';

export function renderIcons(param, size) {
  switch (param) {
    case 'contact':
      return <IoMdContact size={size} />;
    case 'delete':
      return <RiDeleteBin6Fill size={size} />;
    case 'person':
      return <RiContactsFill size={size} className="contact-form__icon" />;
    case 'number':
      return <BsTelephoneFill size={size} className="contact-form__icon" />;
    case 'edit':
      return <RiEdit2Fill size={size} className="contact-form__icon" />;
    case 'cancel':
      return <ImCancelCircle size={size} className="contact-form__icon" />;
    case 'confirm':
      return <GiConfirmed size={size} className="contact-form__icon" />;
    case 'error':
      return <FaRegSadCry size={size} className="contact-form__icon" />;
    default:
      return <span>icon</span>;
  }
}
