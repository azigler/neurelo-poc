import Context from "@components/Context"
import Card from "@components/Card"
import React from "react"

export default function AllCategoriesPage() {
  const { mbContext } = React.useContext(Context)

  const html = []
  for (const category in mbContext.categories) {
    html.push(<Card key={category} data={mbContext.categories[category]} />)
  }
  return html
}
