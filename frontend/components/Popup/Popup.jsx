import "./Popup.css"
export default function Popup({ isOpen, onClose }) {
  const close = () => {
    onClose()
  }
  if (!isOpen) return null
  return (
    <div className="popup_container">
      <div>
        <button className="btn primary" onClick={close}>
          Close
        </button>
      </div>
    </div>
  )
}
