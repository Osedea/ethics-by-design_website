import React from "react"

import Layout from "../layouts/layout"
import Section from "../components/section"
import Title from "../components/title"

const Billetterie = () => (
    <Layout>
        <Section>
            <Title />
            <iframe id="iframe" style={{ width: '100%', minHeight: '800px', overflow: 'none', border: 0 }} src="https://app.tickethic.fr/front/orders/products-choice-by-event/ethics-by-design-2020/designers-ethiques/88/FFFFFF" />
            <script src="https://app.tickethic.fr/front/parks/iframe-script/designers-ethiques" charset="utf-8" />
        </Section>
    </Layout>
)

export default Billetterie;
