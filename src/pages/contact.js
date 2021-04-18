import React from "react"
import MainLayout from "../components/mainLayout"
import Header from "../components/header"

export default function Contact() {
  return (
    <MainLayout>
      <Header headerText="Contact" />
      <p>Send us a message!</p>
    </MainLayout>
  )
}