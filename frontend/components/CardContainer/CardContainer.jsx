import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchHomesByUserId } from "../../api/api"
import Card from "../Card/Card"
import { setHomesIntrested } from "../../src/features/currentUserSlice"

export default function CardContainer() {
  const { selectedUser, homesIntrested } = useSelector(
    state => state.currentUserSlice
  )
  const dispatch = useDispatch()

  useEffect(() => {
    fetchHomesByUserId(selectedUser)?.then(res => {
      dispatch(setHomesIntrested(res))
    })
  }, [selectedUser])

  return (
    <>
      <div className="card-container">
        {homesIntrested.length > 0
          ? homesIntrested.map(home => <Card {...home} key={home.home_id} />)
          : "Nothing to show."}
      </div>
    </>
  )
}
