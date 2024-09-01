import { useDispatch } from "react-redux"
import { toggleModal } from "../../src/features/modalSlice"
import "./Popup.css"
export default function Popup({ children, isOpen, onSave }) {
  const dispatch = useDispatch()
  if (!isOpen) return null
  return (
    <div className="popup_overlay">
      <div className="popup_modal">
        <div className="popup_children">{children}</div>
        <div className="popup_buttons">
          <button className="btn" onClick={() => dispatch(toggleModal(false))}>
            Close
          </button>
          <button className="btn primary" onClick={onSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
