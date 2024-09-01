const baseUrl = `${import.meta.env.VITE_API_BASE_URL}`

export const fetchAllUsers = () => {
    return fetch(baseUrl + "/user/find-all").then(res =>
        res.json()
    )
}

export const editUsers = ({ interestedBy = [], interestedByInitial = [], home_id }) => {
    if (JSON.stringify(interestedBy.toSorted()) == JSON.stringify(interestedByInitial.toSorted())) return
    return fetch(baseUrl + "/home/update-users", {
        method: "PATCH",
        body: JSON.stringify({
            interestedBy,
            interestedByInitial,
            home_id
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())

}

export const fetchUsersByHomeId = (home_id = null) => {
    if (!home_id) return null
    return fetch(baseUrl + `/user/find-by-home?home_id=${home_id}`).then(res => res.json())
}

export const fetchHomesByUserId = (user_id = null) => {
    if (!user_id) return null
    return fetch(baseUrl + `/home/find-by-user?user_id=${user_id}`).then((res) => res.json())
}