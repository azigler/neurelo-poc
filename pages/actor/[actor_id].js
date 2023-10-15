import Context from "@components/Context"
import Card from "@components/Card"
import NotFound from "@components/NotFound"
import { useRouter } from "next/router"
import React from "react"

export default function ActorPage() {
  const router = useRouter()
  const { mbContext } = React.useContext(Context)

  if (mbContext.actors[router.query.actor_id]) {
    return <Card data={mbContext.actors[router.query.actor_id - 1]} />
  } else return <NotFound type="actor" />
}
