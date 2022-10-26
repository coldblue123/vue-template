const getters = {
  token: ({ user }) => user.token,
  userInfo: ({ user }) => user.userInfo
}
export default getters
