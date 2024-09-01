import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchHomesByUserId } from "../../api/api"
import { setUserHomes } from "../../src/features/stateSlice"
import Card from "../Card/Card"

export default function CardContainer() {
  const stateSlice = useSelector(state => state.stateSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchHomesByUserId(stateSlice.user)?.then(res => {
      dispatch(setUserHomes(res))
    })
  }, [stateSlice.user])

  return (
    <>
      <div className="card-container">
        {stateSlice.userHomes.length > 0
          ? stateSlice.userHomes.map(home => <Card {...home} />)
          : "Nothing to show."}
      </div>
    </>
  )
}
