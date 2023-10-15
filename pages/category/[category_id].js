import Context from "@components/Context"
import Card from "@components/Card"
import NotFound from "@components/NotFound"
import { useRouter } from "next/router"
import React from "react"

export default function CategoryPage() {
  const router = useRouter()
  const { mbContext } = React.useContext(Context)

  if (mbContext.categories[router.query.category_id]) {
    return <Card data={mbContext.categories[router.query.category_id - 1]} />
  } else return <NotFound type="category" />
}
