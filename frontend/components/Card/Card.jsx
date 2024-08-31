import { useQuery } from "@tanstack/react-query"
import styles from "./Card.module.css"
import { fetchAllUsers, fetchHomesByUserId } from "../../api/api"

export default function Card({ info }) {
  return (
    <section className={styles.container}>
      <h1>House Title</h1>
      <span>List Price : </span>
      <span>State : </span>
      <span>Zip : </span>
      <span>Sqft : </span>
      <span>Beds : </span>
      <span>Baths : </span>
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

  if (data) console.log(data)

  return <div></div>
}
