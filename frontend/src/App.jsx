import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { fetchAllUsers } from "../api/api"
import { Cards } from "../components/Card/Card"

function App() {
  const [user, setUser] = useState("")

  const { isPending, error, data } = useQuery({
    queryKey: ["allUsers"],
    queryFn: fetchAllUsers,
  })

  if (isPending) return "Loading..."

  if (error) return "An error has occurred: " + error.message

  return (
    <div className="app-container">
      <div>
        <label>Select User: </label>
        <select onChange={e => setUser(e.target.value)} value={user}>
          <option value="" disabled>
            Please Select
          </option>
          {data.users.map(user => (
            <option value={user.user_id} key={user.user_id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>
      <Cards user={user} />
    </div>
  )
}

export default App
