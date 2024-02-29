const { BookApi } = require("./book")
const { UserApi } = require("./user")

export const BackendApi = {
  book: BookApi,
  user: UserApi,
}

// module.exports = { BackendApi }
