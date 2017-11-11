import bcrypt from 'bcrypt'
import config from '../../config'
import { Auth } from '../../models'

async function loadAuth () {
  const saltRounds = 12
  const promises = []

  // Patients
  let password = await bcrypt.hash('pencil', saltRounds)
  promises.push(createAuth({ emailAddress: 'pencilvester@test.com', password }))
  password = await bcrypt.hash('jessica', saltRounds)
  promises.push(createAuth({ emailAddress: 'morty@test.com', password }))
  password = await bcrypt.hash('schwifty', saltRounds)
  promises.push(createAuth({ emailAddress: 'rick@test.com', password }))
  password = await bcrypt.hash('horses', saltRounds)
  promises.push(createAuth({ emailAddress: 'beth@test.com', password }))
  password = await bcrypt.hash('apples', saltRounds)
  promises.push(createAuth({ emailAddress: 'jerry@test.com', password }))

  return Promise.all(promises)
}

async function createAuth ({ emailAddress, password }) {
  return Auth.create({ emailAddress, password })
}

export default async () => {
  return Promise.all([loadAuth()])
}
