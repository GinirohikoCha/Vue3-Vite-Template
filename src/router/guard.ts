import type { Router } from 'vue-router'

const title = import.meta.env.VITE_APP_TITLE || 'Vite App'

export function useGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    if (to.meta?.title) {
      document.title = getPageTitle(to.meta.title)
    }
    next()
  })
  router.afterEach(() => {
  })
}

export default function getPageTitle(pageTitle: any) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
