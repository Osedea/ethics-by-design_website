import React from "react"

import Layout from "../layouts/layout"
import Section from "../components/section"
import Speaker from "../components/speaker"
import Title from "../components/title"

const speakers = [
]

export default () => (
    <Layout>
        <Section>
            <Title>Intervenants</Title>
            <div>
                {speakers.map((speaker) => (
                    <Speaker {...speaker} />
                ))}
            </div>
        </Section>
    </Layout>
)
