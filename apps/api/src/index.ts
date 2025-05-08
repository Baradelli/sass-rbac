import { ability } from '@sass/auth'

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteUsers = ability.can('delete', 'User')

const userCannotDeleteUsers = ability.cannot('delete', 'User')

console.log({
  userCanInviteSomeoneElse,
  userCanDeleteUsers,
  userCannotDeleteUsers,
})
