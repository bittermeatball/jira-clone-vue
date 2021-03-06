export const auth = (to, from, next) => {
  const auth = localStorage.getItem('auth')
  // Check if authentication is not require
  if (to.meta?.authNotRequired) {
    // Then redirect user to dashboard if they're authenticated
    if (auth) {
      return next({ name: 'dashboard' })
    }
  }
  // If require authentication, check for auth
  if (to.meta.auth) {
    if (auth) {
      next()
    } else {
      next({ name: 'auth-signin' })
    }
    // If not, proceed
  } else {
    next()
  }
}
