import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editUsers, fetchHomesByUserId } from "../../api/api"
import { setHomesIntrested } from "../../src/features/currentUserSlice"
import Card from "../Card/Card"
import Popup from "../Popup/Popup"
import UserEdit from "../UserEdit/UserEdit"
import { toggleModal } from "../../src/features/modalSlice"
import { clearHomeSlice } from "../../src/features/currentHomeSlice"
import { toast } from "react-toastify"

export default function CardContainer() {
  const dispatch = useDispatch()

  const { isModalOpen } = useSelector(state => state.modalSlice)
  const { selectedUser, homesIntrested } = useSelector(
    state => state.currentUserSlice
  )
  const { selectedHome, interestedBy, interestedByInitial } = useSelector(
    state => state.currentHomeSlice
  )

  const fetchHomes = () => {
    fetchHomesByUserId(selectedUser)?.then(res => {
      dispatch(setHomesIntrested(res))
      dispatch(clearHomeSlice())
    })
  }

  useEffect(() => fetchHomes(), [selectedUser])

  const onSave = () => {
    if (interestedBy < 1) return toast.error("Please select atleast one user")
    if (
      JSON.stringify(interestedBy.toSorted()) ==
      JSON.stringify(interestedByInitial.toSorted())
    )
      return toast.info("Make some changes before saving")
    editUsers({
      interestedBy,
      interestedByInitial,
      home_id: selectedHome?.home_id,
    })
      ?.then(res => {
        fetchHomes()
        dispatch(toggleModal(false))
      })
      .catch(err => {
        console.error("Error occurred while editing users.")
      })
  }

  return (
    <>
      <div className="card-container">
        {homesIntrested.length > 0
          ? homesIntrested.map(home => <Card key={home.home_id} {...home} />)
          : "Nothing to show."}
      </div>
      <Popup isOpen={isModalOpen} onSave={onSave}>
        <UserEdit />
      </Popup>
    </>
  )
}
