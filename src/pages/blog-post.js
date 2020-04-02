import React from "react"

import Layout from "../layouts/layout"
import Section from "../components/section"
import Title from "../components/title"
import ArticlesList from "../components/articles-list"

const content = null
const toReadAlso = []

export default () => (
    <Layout>
        <Section>
            {content}
        </Section>
        <Section>
            <Title />
            <ArticlesList articles={toReadAlso} />
        </Section>
    </Layout>
)
