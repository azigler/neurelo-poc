import Context from "@components/Context"
import Card from "@components/Card"
import React from "react"

export default function AllActorsPage() {
  const { mbContext } = React.useContext(Context)

  const html = []
  for (const actor in mbContext.actors) {
    html.push(<Card key={actor} data={mbContext.actors[actor]} />)
  }
  return html
}
