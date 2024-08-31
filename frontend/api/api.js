const baseUrl = `${import.meta.env.VITE_API_BASE_URL}`

export const fetchAllUsers = () => {
    return fetch(baseUrl + "/user/find-all").then(res =>
        res.json()
    )
}

export const fetchHomesByUserId = (user_id) => {
    if (!user_id) return null
    return fetch(baseUrl + `/home/find-by-user?user_id=${user_id}`).then((res) => res.json())
}