import Context from "@components/Context"
import Card from "@components/Card"
import NotFound from "@components/NotFound"
import { useRouter } from "next/router"
import React from "react"

export default function FilmPage() {
  const router = useRouter()
  const { mbContext } = React.useContext(Context)

  if (mbContext.films[router.query.film_id]) {
    return <Card data={mbContext.films[router.query.film_id - 1]} />
  } else return <NotFound type="film" />
}
