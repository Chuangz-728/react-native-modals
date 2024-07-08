import {
  DragEvent,
  SwipeDirection,
  ModalProps,
  ModalFooterProps,
  ModalFooterActionList,
  ModalButtonProps,
  ModalTitleProps,
  ModalContentProps,
  BackdropProps,
} from './type';
import ModalPortal from './ModalPortal';
import Modal from './Modal';
import BottomModal from './BottomModal';
import DraggableView from './components/DraggableView';
import Backdrop from './components/Backdrop';
import ModalTitleOther from './components/ModalTitle';
import ModalTitleHarmony from './components/ModalTitle.harmony';
import ModalFooter from './components/ModalFooter';
import ModalButtonOther from './components/ModalButton';
import ModalButtonHarmony from './components/ModalButton.harmony';
import ModalContent from './components/ModalContent';
import Animation from './animations/Animation';
import FadeAnimation from './animations/FadeAnimation';
import ScaleAnimation from './animations/ScaleAnimation';
import SlideAnimation from './animations/SlideAnimation';
import {Platform} from 'react-native'
const isHarmony = Platform.OS === 'harmony';

const ModalTitle = (isHarmony ? ModalTitleHarmony : ModalTitleOther);
const ModalButton = (isHarmony ? ModalButtonHarmony : ModalButtonOther);

export {
  ModalPortal,
  Modal,
  BottomModal,
  Backdrop,
  DraggableView,
  ModalButton,
  ModalContent,
  ModalTitle,
  ModalFooter,
  Animation,
  FadeAnimation,
  ScaleAnimation,
  SlideAnimation,
  DragEvent,
  SwipeDirection,
  ModalProps,
  ModalFooterProps,
  ModalFooterActionList,
  ModalButtonProps,
  ModalTitleProps,
  ModalContentProps,
  BackdropProps,
};

export default Modal;
