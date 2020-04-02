import React from "react"

import Layout from "../layouts/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import Title from "../components/title"
import Address from "../components/address"
import JourProgramme from "../components/jour-programme"
import NumberedList from "../components/numbered-list"

const programmeJeudi = [
]
const programmeVendredi = [
]

export default () => (
    <Layout>
        <Section>
            <Title />
            <NumberedList />
        </Section>
        <Section>
            <Title>Evènement ouvert au public</Title>
            <Hero />
        </Section>
        <Section>
            <JourProgramme talks={programmeJeudi} />
        </Section>
        <Section>
            <JourProgramme talks={programmeVendredi} />
        </Section>
        <Section dark>
            <Hero />
            <Address />
        </Section>
    </Layout>
)
