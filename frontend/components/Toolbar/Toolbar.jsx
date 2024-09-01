import { useDispatch, useSelector } from "react-redux"
import { useGetAllUsersQuery, useGetHomesByUserIdQuery } from "../../api/api"
import { setSelectedUser } from "../../src/features/currentUserSlice"
import { setPage } from "../../src/features/filterSlice"
import "./Toolbar.css"

export default function Toolbar() {
  const dispatch = useDispatch()

  const { data: allUsers } = useGetAllUsersQuery()
  const { page } = useSelector(state => state.filterSlice)
  const { selectedUser } = useSelector(state => state.currentUserSlice)
  const { data: { totalCount: totalHomeCount } = { totalCount: 0 } } =
    useGetHomesByUserIdQuery(
      { user_id: selectedUser, page },
      {
        skip: !selectedUser,
      }
    )

  const getPageOptions = () => {
    const noOfPages = Math.ceil(totalHomeCount / 50)
    const options = []
    for (let i = 1; i <= noOfPages; i++) {
      options.push(<option value={i}>{i}</option>)
    }
    return options
  }

  return (
    <section className="toolbar-container">
      <div>
        <label>Select User: </label>
        <select
          onChange={e => {
            dispatch(setSelectedUser(e.target.value))
            dispatch(setPage(1))
          }}
          value={selectedUser}
        >
          <option value="" disabled>
            Please Select
          </option>
          {allUsers?.map(user => (
            <option value={user.user_id} key={user.user_id}>
              {user.username}
            </option>
          ))}
        </select>
      </div>
      {totalHomeCount > 0 && (
        <>
          <div>
            <label>Page: </label>
            <select
              onChange={e => {
                dispatch(setPage(e.target.value))
              }}
              value={page}
            >
              {getPageOptions()}
            </select>
          </div>
          <div>
            <label>
              Total Records: {totalHomeCount} (Each Page Displays 50 Records)
            </label>
          </div>
        </>
      )}
    </section>
  )
}
