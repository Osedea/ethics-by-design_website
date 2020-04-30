import React from "react"

import Layout from "../layouts/layout"
import Section from "../components/section"
import Title from "../components/title"
import ArticlesList from "../components/articles-list"

const content = null
const toReadAlso = []

const BlogPost = ({ location }) => (
    <Layout location={location}>
        <Section>
            {content}
        </Section>
        <Section>
            <Title />
            <ArticlesList items={toReadAlso} />
        </Section>
    </Layout>
)

export default BlogPost;
