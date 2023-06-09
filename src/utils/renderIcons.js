import { RiContactsBook2Fill } from 'react-icons/ri';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { RiContactsFill } from 'react-icons/ri';
import { BsTelephoneFill } from 'react-icons/bs';
import { RiEdit2Fill } from 'react-icons/ri';
import { MdPersonAddAlt1 } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';
import { GiConfirmed } from 'react-icons/gi';
import { FaRegSadCry } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';
import { RiGroupFill } from 'react-icons/ri';
import { AiFillHome } from 'react-icons/ai';
import { FaSortAlphaDown } from 'react-icons/fa';
import { FaSortAmountUp } from 'react-icons/fa';
import { MdSettingsBackupRestore } from 'react-icons/md';

export function renderIcons(param, size) {
  switch (param) {
    case 'contact':
      return <RiContactsBook2Fill size={size} />;
    case 'add':
      return <MdPersonAddAlt1 size={size} />;
    case 'delete':
      return <RiDeleteBin6Fill size={size} />;
    case 'person':
      return <RiContactsFill size={size} className="contact-form__icon" />;
    case 'number':
      return <BsTelephoneFill size={size} className="contact-form__icon" />;
    case 'edit':
      return <RiEdit2Fill size={size} className="contact-form__icon" />;
    case 'restore':
      return (
        <MdSettingsBackupRestore size={size} className="contact-form__icon" />
      );
    case 'cancel':
      return <ImCancelCircle size={size} className="contact-form__icon" />;
    case 'confirm':
      return <GiConfirmed size={size} className="contact-form__icon" />;
    case 'error':
      return <FaRegSadCry size={size} className="contact-form__icon" />;
    case 'favourite':
      return <BsFillStarFill size={size} className="contact-form__icon" />;
    case 'group':
      return <RiGroupFill size={size} className="contact-form__icon" />;
    case 'home':
      return <AiFillHome size={size} className="contact-form__icon" />;
    case 'alphaDown':
      return <FaSortAlphaDown size={size} className="contact-form__icon" />;
    case 'dateUp':
      return <FaSortAmountUp size={size} className="contact-form__icon" />;
    default:
      return <span>icon</span>;
  }
}
