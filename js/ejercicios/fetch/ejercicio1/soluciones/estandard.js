import { fetchingData } from "../../../../api/api.js"

const allUsers = await fetchingData('users')

console.log(await allUsers)
