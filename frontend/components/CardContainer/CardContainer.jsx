import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchHomesByUserId } from "../../api/api"
import Card from "../Card/Card"
import { setHomesIntrested } from "../../src/features/currentUserSlice"
import Popup from "../Popup/Popup"
import UserEdit from "../UserEdit/UserEdit"

export default function CardContainer() {
  const { isModalOpen } = useSelector(state => state.modalSlice)
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
          ? homesIntrested.map(home => <Card key={home.home_id} {...home} />)
          : "Nothing to show."}
      </div>
      <Popup isOpen={isModalOpen}>
        <UserEdit />
      </Popup>
    </>
  )
}
