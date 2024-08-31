import { useQuery } from "@tanstack/react-query"
import { fetchHomesByUserId } from "../../api/api"
import styles from "./Card.module.css"

export default function Card({
  baths,
  beds,
  home_id,
  list_price,
  sqft,
  state,
  street_address,
  zip,
}) {
  return (
    <section className={styles.container} key={home_id}>
      <h2 title={street_address}>{street_address}</h2>
      <span>List Price : {list_price}</span>
      <span>State : {state}</span>
      <span>Zip : {zip}</span>
      <span>Sqft : {sqft}</span>
      <span>Beds : {beds}</span>
      <span>Baths : {baths}</span>
      <button>Edit Users</button>
    </section>
  )
}

export function Cards({ user }) {
  const { isPending, error, data } = useQuery({
    queryKey: ["userHomes", user],
    queryFn: () => fetchHomesByUserId(user),
  })

  if (isPending) return "Loading..."

  if (error) return "An error has occurred: " + error.message

  return (
    <div className="card-container">
      {Array.isArray(data?.homes)
        ? data.homes.map(home => <Card {...home} />)
        : "Nothing to show."}
    </div>
  )
}
