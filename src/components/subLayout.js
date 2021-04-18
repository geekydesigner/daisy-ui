import React from "react"
import { Link } from "gatsby"

export default function SubLayout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        <h4 style={{ display: `inline` }}>Sub Layout</h4>
        {children}
    </div>
  )
}