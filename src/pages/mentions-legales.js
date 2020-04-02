import React from "react"

import Layout from "../layouts/layout"
import Section from "../components/section"
import Title from "../components/title"

const content = null

export default () => (
    <Layout>
        <Section>
            <Title />
            {content}
        </Section>
    </Layout>
)
