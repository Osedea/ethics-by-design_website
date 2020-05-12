import React from "react"

import Layout from "../layouts/layout"
import Section from "../components/section"
import Title from "../components/title"
import ArticlesList from "../components/articles-list"

const toReadAlso = []

const BlogPost = ({ location, pageContext }) => {
    const articles = pageContext.frontmatter.toReadAlso || [];

    return (
        <Layout location={location}>
            <Section>
                <p>{pageContext.frontmatter.date}</p>
                <Title style={{ borderBottom: 'solid 3px black', paddingBottom: '15px', marginTop: '0' }}>{pageContext.frontmatter.title}</Title>
                <div dangerouslySetInnerHTML={{ __html: pageContext.html }} />
                <p style={{ textDecoration: 'underline', fontWeight: 'bold', fontFamily: 'Helvetica' }}>Ecrit par {pageContext.frontmatter.author}</p>
                {articles.length > 0
                    ? <>
                        <Title>À lire aussi</Title>
                        <ArticlesList items={articles} />
                    </>
                    : null
                }
            </Section>
        </Layout>
    );
}

export default BlogPost;
