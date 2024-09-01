import { toggleModal } from "../../src/features/modalSlice"
import { setSelectedHome } from "../../src/features/currentHomeSlice"
import { useDispatch } from "react-redux"
import "./Card.css"

export default function Card({
  baths,
  beds,
  list_price,
  sqft,
  state,
  street_address,
  zip,
  home_id,
}) {
  const dispatch = useDispatch()
  return (
    <section className="card">
      <h2 title={street_address}>{street_address}</h2>
      <span>List Price : {list_price}</span>
      <span>State : {state}</span>
      <span>Zip : {zip}</span>
      <span>Sqft : {sqft}</span>
      <span>Beds : {beds}</span>
      <span>Baths : {baths}</span>
      <button
        className="btn primary"
        onClick={() => {
          dispatch(setSelectedHome({ home_id, street_address }))
          dispatch(toggleModal(true))
        }}
      >
        Edit Users
      </button>
    </section>
  )
}
