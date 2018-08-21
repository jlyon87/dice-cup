export default function ({ req, store, redirect }) {
  if (process.server && !req) return

  if (!store.getters.user) {
    redirect('/')
  }
}
