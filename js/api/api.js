const URL = 'https://jsonplaceholder.typicode.com'
const USER_ID = 4

const fetchingData = async (route = 'posts') => {
    const urlRoute = URL + `/${route}`

    const response = await fetch(urlRoute)
    const transformJson = await response.json()
    return await transformJson
}

export {
    URL,
    USER_ID,
    fetchingData
}
