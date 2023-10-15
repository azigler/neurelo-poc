import styles from "@styles/Card.module.css"

export default function Card({ data }) {
  const keys = Object.keys(data)

  const rows = keys.map((key) => {
    return (
      <div className={styles.row} key={key}>
        <div className={styles.key}>{key}</div>
        <div className={styles.val}>{data[key]}</div>
      </div>
    )
  })

  return <div className={styles.card}>{rows}</div>
}
