export default {
  async create(type, data) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEURELO_URL}/rest/${type}`,
      {
        method: "POST",
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY,
        },
        body: JSON.stringify(data),
      }
    )
    const resp = await response.json()
    return resp.data
  },
  async read(type) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEURELO_URL}/rest/${type}`,
      {
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY,
        },
      }
    )
    const data = await response.json()
    return data.data
  },
  async update(type, data) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEURELO_URL}/rest/${type}/${data.id}`,
      {
        method: "PUT",
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY,
        },
        body: JSON.stringify(data),
      }
    )
    const resp = await response.json()
    return resp.data
  },
  async delete(type, id) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEURELO_URL}/rest/${type}/${id}`,
      {
        method: "DELETE",
        headers: {
          "X-API-KEY": process.env.NEXT_PUBLIC_NEURELO_KEY,
        },
      }
    )
    const data = await response.json()
    return data.data
  },
}
