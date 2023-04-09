import axios from axios;

const getData = async(user_id) => {
    const {user} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id)
    const {post} = await axios("https://jsonplaceholder.typicode.com/posts/" + user_id)

    const userInfo = Object.assign({}, user, post);
    return userInfo;
}
export default getData;