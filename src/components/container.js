import React from "react"
import * as containerStyles from "./container.module.scss"

export default function Container({ children }) {
  return <div className={containerStyles.container}>{children}</div>
}