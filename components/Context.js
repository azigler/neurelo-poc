import React from "react"
import api from "@utils/api"

const Context = React.createContext({})
export default Context

const ContextProvider = ({ children }) => {
  React.useEffect(() => {
    async function update() {
      const actors = await api.read("actor")
      const films = await api.read("film")
      const categories = await api.read("category")
      const filmCategories = await api.read("film_category")
      const filmActors = await api.read("film_actor")

      updateMbContext({ actors, films, categories, filmCategories, filmActors })
    }

    update()
  }, [])

  const [mbContext, updateMbContext] = React.useState({})
  const context = {
    mbContext,
    updateMbContext,
  }
  return <Context.Provider value={context}>{children}</Context.Provider>
}

export { ContextProvider }
