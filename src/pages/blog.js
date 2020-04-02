import React from "react"

import Layout from "../layouts/layout"
import Hero from "../components/hero"
import Section from "../components/section"
import Title from "../components/title"
import ArticlesList from "../components/articles-list"

const articles = [
]

export default () => (
    <Layout>
        <Section>
            <Hero />
        </Section>
        <Section>
            <Title />
            <ArticlesList articles={articles} />
        </Section>
    </Layout>
)
