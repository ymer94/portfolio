import { base } from '$app/paths'

export default (() => {
    return {
        addBase: (link: string) => `${base}${link}`
    }
})()