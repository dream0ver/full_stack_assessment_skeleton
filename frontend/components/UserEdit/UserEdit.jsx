import { useSelector } from "react-redux"
import "./UserEdit.css"

export default function UserEdit() {
  const { users } = useSelector(state => state.usersSlice)
  const { selectedUser } = useSelector(state => state.currentUserSlice)
  const { selectedHome } = useSelector(state => state.currentHomeSlice)

  return (
    <section className="useredit_container">
      <h2>{selectedHome.street_address}</h2>
      <ul className="useredit_list">
        {users.map(user => (
          <li key={user.user_id}>
            <input type="checkbox" disabled={user.user_id == selectedUser} />
            &nbsp;{user.username}
          </li>
        ))}
      </ul>
    </section>
  )
}
