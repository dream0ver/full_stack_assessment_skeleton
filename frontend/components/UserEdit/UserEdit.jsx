import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersByHomeId } from "../../api/api"
import {
  mutateInrestedBy,
  setHomeInrestedBy,
} from "../../src/features/currentHomeSlice"
import "./UserEdit.css"

export default function UserEdit() {
  const dispatch = useDispatch()

  const { users } = useSelector(state => state.usersSlice)
  const { selectedUser } = useSelector(state => state.currentUserSlice)
  const { selectedHome, interestedBy } = useSelector(
    state => state.currentHomeSlice
  )

  const onCheck = (e, uid) => {
    if (e.target.checked) {
      dispatch(mutateInrestedBy([...interestedBy, uid]))
    } else {
      dispatch(mutateInrestedBy(interestedBy.filter(i => i != uid)))
    }
  }

  useEffect(() => {
    fetchUsersByHomeId(selectedHome?.home_id)?.then(res => {
      const result = res.users.map(u => u.user_id)
      dispatch(setHomeInrestedBy(result))
    })
  }, [])

  return (
    <section className="useredit_container">
      <h2>{selectedHome.street_address}</h2>
      <ul className="useredit_list">
        {users.map(user => (
          <li key={user.user_id}>
            <input
              type="checkbox"
              checked={interestedBy.includes(user.user_id)}
              onChange={e => onCheck(e, user.user_id)}
            />
            &nbsp;
            {user.username +
              `${user.user_id == selectedUser ? " (Current User)" : ""}`}
          </li>
        ))}
      </ul>
    </section>
  )
}
