import { defineAbilityFor } from '@sass/auth'

const ability = defineAbilityFor({ role: 'ADMIN' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteUsers = ability.can('delete', 'User')

const userCannotDeleteUsers = ability.cannot('delete', 'User')

console.log({
  userCanInviteSomeoneElse,
  userCanDeleteUsers,
  userCannotDeleteUsers,
})
