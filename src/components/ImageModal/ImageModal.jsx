import Modal from "react-modal";

const ImageModal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <Modal isOpen={!!image} onRequestClose={onClose} ariaHideApp={false}>
      <div>
        <img src={image.urls.regular} alt={image.alt_description} />{" "}
        {/* Використовуємо regular версію для модального вікна */}
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
};

export default ImageModal;
