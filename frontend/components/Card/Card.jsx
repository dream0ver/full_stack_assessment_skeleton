import "./Card.css"

export default function Card({
  baths,
  beds,
  home_id,
  list_price,
  sqft,
  state,
  street_address,
  zip,
  setShowPopup,
}) {
  return (
    <section className="card">
      <h2 title={street_address}>{street_address}</h2>
      <span>List Price : {list_price}</span>
      <span>State : {state}</span>
      <span>Zip : {zip}</span>
      <span>Sqft : {sqft}</span>
      <span>Beds : {beds}</span>
      <span>Baths : {baths}</span>
      <button className="btn primary" onClick={() => setShowPopup(true)}>
        Edit Users
      </button>
    </section>
  )
}
