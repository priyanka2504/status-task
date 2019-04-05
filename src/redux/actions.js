export const FETCH_USERS = 'FETCH_USERS';
export const RECEIVE_USERS = 'RECEIVE_USERS';

export const FETCH_RECORDS = 'FETCH_RECORDS';
export const RECEIVE_RECORDS = 'RECEIVE_RECORDS';

function fetchUsers() {
  return { type: 'FETCH_USERS' }
}

function receiveUsers(users) {
  return { type: RECEIVE_USERS, users: users }
}

function fetchRecords() {
  return { type: 'FETCH_RECORDS' }
}

function receiveRecords(records) {
  return { type: RECEIVE_RECORDS, records: records }
}

export function getUsers() {
  return dispatch => {
    dispatch(fetchUsers())
    fetch('http://localhost:1234/users-list')
      .then(response => response.json())
      .then(response => {
        dispatch(receiveUsers(response))
      })
      .catch((error) => {
        // console.log(error)
        alert('Unable to retrieve list of users')
      })
  }
}

export function getRecords() {
  return dispatch => {
    dispatch(fetchRecords())
    fetch('http://localhost:1234/all-records')
      .then(response => response.json())
      .then(response => {
        dispatch(receiveRecords(response))
      })
      .catch((error) => {
        console.log(error)
        alert('Unable to retrieve list of records')
      })
  }
}

export const userArray = userArray => {
  return {
    type: 'userArray',
    ...userArray
  }
}