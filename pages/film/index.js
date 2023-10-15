import Context from "@components/Context"
import Card from "@components/Card"
import React from "react"

export default function AllFilmsPage() {
  const { mbContext } = React.useContext(Context)

  const html = []
  for (const film in mbContext.films) {
    html.push(<Card key={film} data={mbContext.films[film]} />)
  }
  return html
}
