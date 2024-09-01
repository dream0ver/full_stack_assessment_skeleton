import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import {
  useEditUsersMutation,
  useGetHomesByUserIdQuery,
  useGetUsersByHomeIdQuery,
} from "../../api/api"
import { toggleModal } from "../../src/features/modalSlice"
import Card from "../Card/Card"
import Popup from "../Popup/Popup"
import UserEdit from "../UserEdit/UserEdit"

export default function CardContainer() {
  const dispatch = useDispatch()
  const [editUsers] = useEditUsersMutation()

  const { isModalOpen } = useSelector(state => state.modalSlice)
  const { selectedUser } = useSelector(state => state.currentUserSlice)
  const { selectedHome, interestedBy } = useSelector(
    state => state.currentHomeSlice
  )
  const { data: { homes: homesByUserId } = { homes: [] } } =
    useGetHomesByUserIdQuery(selectedUser, {
      skip: !selectedUser,
    })

  const { data: usersByHome } = useGetUsersByHomeIdQuery(
    selectedHome?.home_id,
    {
      skip: !selectedHome?.home_id,
    }
  )

  const onSave = () => {
    if (interestedBy < 1) return toast.error("Please select atleast one user.")
    if (interestedBy.toSorted().toString() == usersByHome.toSorted().toString())
      return toast.info("Make some changes before saving.")

    editUsers({
      latest: interestedBy,
      initial: usersByHome,
      home_id: selectedHome?.home_id,
    })
      .unwrap()
      .then(res => {
        toast.success(res.msg)
        dispatch(toggleModal(false))
      })
      .catch(err => {
        console.error("Error occurred while editing users.", err)
      })
  }

  return (
    <>
      <div className="card-container">
        {!!homesByUserId?.length
          ? homesByUserId?.map(home => <Card key={home.home_id} {...home} />)
          : "Nothing to show."}
      </div>
      <Popup isOpen={isModalOpen} onSave={onSave}>
        <UserEdit />
      </Popup>
    </>
  )
}
