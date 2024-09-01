import { useDispatch, useSelector } from "react-redux"
import { setAllUsers, setSelectedUser } from "../../src/features/stateSlice"
import { useEffect } from "react"
import { fetchAllUsers } from "../../api/api"

export default function Toolbar() {
  useEffect(() => {
    fetchAllUsers().then(res => {
      dispatch(
        setAllUsers({
          allUsers: res.users,
          allUsersCount: res.totalCount,
        })
      )
    })
  }, [])

  const stateSlice = useSelector(state => state.stateSlice)
  const dispatch = useDispatch()
  return (
    <section>
      <div>
        <label>Select User: </label>
        <select
          onChange={e => {
            dispatch(setSelectedUser(e.target.value))
          }}
          value={stateSlice.user}
        >
          <option value="" disabled>
            Please Select
          </option>
          {stateSlice.allUsers.map(user => (
            <option value={user.user_id} key={user.user_id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}
