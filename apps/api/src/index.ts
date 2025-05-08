import { defineAbilityFor } from '@sass/auth'

const ability = defineAbilityFor({ role: 'ADMIN' })

const userCanDeleteUsers = ability.can('delete', 'User')

const userCannotDeleteUsers = ability.cannot('delete', 'User')

console.log({
  userCanDeleteUsers,
  userCannotDeleteUsers,
})
