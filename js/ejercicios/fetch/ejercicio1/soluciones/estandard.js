import { USER_ID, fetchingData } from "../../../../api/api.js";

const allPosts = await fetchingData('users')
const postsByUserId = async (id) => await fetchingData(`posts?userId=${id}`)

const getImportantInfo = async (posts) => {
    return posts?.map(({ id, userId, title }) => {
        return {
            id: id,
            userId: userId,
            postTitle: title,
            key: Math.floor(Math.random() * 100)
        }
    })
}

const cleanPosts = await getImportantInfo(await postsByUserId(USER_ID))

console.log(cleanPosts)