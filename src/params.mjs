class Params extends Object {
  /**
   * Get the url search params and assign them to the object.
   *
   * @param {string} url
   */
  constructor(url) {
    super()
    const u = new URL(url)
    for (const [key, value] of u.searchParams) {
      this[key] = value
    }
  }

  /**
   * Apply the params to the url.
   *
   * @param {string} url
   * @return {string}
   */
  apply(url) {
    const u = new URL(url)
    const keys = Object.keys(this)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      const value = this[key]
      if (value !== undefined) {
        u.searchParams.set(key, value)
      }
    }
    return u.toString()
  }
}

export default (url) => new Params(url)
