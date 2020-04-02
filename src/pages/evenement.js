import React from "react"

import Layout from "../layouts/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import Title from "../components/title"
import Address from "../components/address"

export default () => (
    <Layout>
        <Section>
            <Title />
        </Section>
        <Section>
            <Hero />
        </Section>
        <Section dark>
            <Hero />
            <Address />
        </Section>
    </Layout>
)
