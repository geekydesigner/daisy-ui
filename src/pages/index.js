import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

export default function Home() {
  return (
    <Layout>
      <Header headerText="Hello Gatsby!" />
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </Layout>
  )
}