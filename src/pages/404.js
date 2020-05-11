import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Section from "../components/section"
import Title from "../components/title"


const NotFound = ({ location }) => {
    return (
        <Layout location={location}>
            <Section>
                <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Title>Oups! Pas de page...</Title>
                    <Link to="/">Retour à la normale</Link>
                </div>
            </Section>
        </Layout>
    );
}

export default NotFound;
