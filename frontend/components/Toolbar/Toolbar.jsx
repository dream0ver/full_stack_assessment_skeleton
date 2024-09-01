import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllUsers } from "../../api/api"
import { setUsers } from "../../src/features/usersSlice"
import { setSelectedUser } from "../../src/features/currentUserSlice"

export default function Toolbar() {
  useEffect(() => {
    fetchAllUsers().then(res => {
      dispatch(setUsers(res))
    })
  }, [])

  const { users } = useSelector(state => state.usersSlice)
  const { selectedUser } = useSelector(state => state.currentUserSlice)
  const dispatch = useDispatch()
  return (
    <section>
      <div>
        <label>Select User: </label>
        <select
          onChange={e => {
            dispatch(setSelectedUser(e.target.value))
          }}
          value={selectedUser}
        >
          <option value="">Please Select</option>
          {users.map(user => (
            <option value={user.user_id} key={user.user_id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}
