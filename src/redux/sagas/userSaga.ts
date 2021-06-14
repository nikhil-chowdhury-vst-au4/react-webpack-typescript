import { call, put, takeEvery } from 'redux-saga/effects'
import * as contentful from 'contentful'

export interface user {
  id: string
  name: string
  number: number
  isEmployed: boolean
  profileImage: string
}
export interface Users {
  id: { content: [{ content: [{ value: string }] }] }
  name: { content: [{ content: [{ value: string }] }] }
  number: number
  isEmployed: boolean
  profileImage: { fields: { file: { url: string } } }
}

export interface Response {
  user: user[]
}
export const client = contentful.createClient({
  space: process.env.REACT_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.REACT_CONTENTFUL_ACCESS_TOKEN || '',
})

function getApi() {
  return client
    .getEntries<Users>()
    .then((response) => {
      const result: Users[] = response.items.map((x) => x.fields)
      const arr = []

      for (const user of result) {
        const result = {
          id: user.id.content[0].content[0].value,
          isEmployed: user.isEmployed,
          name: user.name.content[0].content[0].value,
          profileImage: user.profileImage.fields.file.url,
          number: user.number,
        }
        arr.push(result)
      }
      return arr
    })
    .catch((error) => {
      throw error
    })
}

function* fetchUsers(): Generator<unknown, void, user[]> {
  try {
    const users = yield call(getApi)
    console.log('users', users)
    yield put({ type: 'GET_USERS_SUCCESS', users: users })
  } catch (e) {
    yield put({ type: 'GET_USERS_FAILED', message: e.message })
  }
}

function* userSaga() {
  yield takeEvery('GET_USERS_REQUESTED', fetchUsers)
}

export default userSaga
