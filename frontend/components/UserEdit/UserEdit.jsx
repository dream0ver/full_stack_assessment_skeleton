import { useDispatch, useSelector } from "react-redux"
import { useGetAllUsersQuery, useGetUsersByHomeIdQuery } from "../../api/api"
import { setInterestedBy } from "../../src/features/currentHomeSlice"
import "./UserEdit.css"
import { useEffect } from "react"

export default function UserEdit() {
  const dispatch = useDispatch()
  const { data: allUsers = [] } = useGetAllUsersQuery()
  const { selectedUser } = useSelector(state => state.currentUserSlice)
  const { selectedHome, interestedBy } = useSelector(
    state => state.currentHomeSlice
  )
  const { data: usersByHome } = useGetUsersByHomeIdQuery(
    selectedHome?.home_id,
    {
      skip: !selectedHome?.home_id,
    }
  )

  const onCheck = (e, uid) => {
    if (e.target.checked) {
      dispatch(setInterestedBy([...interestedBy, uid]))
    } else {
      dispatch(setInterestedBy(interestedBy.filter(i => i != uid)))
    }
  }

  useEffect(() => {
    if (Array.isArray(usersByHome)) {
      dispatch(setInterestedBy(usersByHome))
    }
  }, [usersByHome])

  return (
    <section className="useredit_container">
      <h2>{selectedHome.street_address}</h2>
      <ul className="useredit_list">
        {allUsers.map(user => (
          <li key={user.user_id}>
            <input
              id={`checkbox_${user.user_id}`}
              type="checkbox"
              checked={interestedBy.includes(user.user_id)}
              onChange={e => onCheck(e, user.user_id)}
            />{" "}
            <label htmlFor={`checkbox_${user.user_id}`}>
              {user.username +
                `${user.user_id == selectedUser ? " (Current User)" : ""}`}
            </label>
          </li>
        ))}
      </ul>
    </section>
  )
}
