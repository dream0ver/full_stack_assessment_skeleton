import { useDispatch, useSelector } from "react-redux"
import { useGetAllUsersQuery } from "../../api/api"
import { setSelectedUser } from "../../src/features/currentUserSlice"

export default function Toolbar() {
  const { data: allUsers } = useGetAllUsersQuery()
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
          {allUsers?.map(user => (
            <option value={user.user_id} key={user.user_id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}
