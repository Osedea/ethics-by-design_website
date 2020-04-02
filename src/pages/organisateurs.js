import React from "react"

import Layout from "../layouts/layout"
import Section from "../components/section"
import Speaker from "../components/speaker"
import Patron from "../components/patron"
import Title from "../components/title"
import Volunteers from "../components/volunteers"
import BoxDesignersEthiques from "../components/box-designers-ethiques"

const organizers = [
]
const contributors = [
]
const skillsPatrons = [
]
const moneyPatrons = [
]

export default () => (
    <Layout>
        <Section>
            <Title>Equipe d'organisation Ethics by Design</Title>
            <div>
                {organizers.map((speaker) => (
                    <Speaker {...speaker} />
                ))}
            </div>
        </Section>
        <Section>
            <Title>Les Designers Ethiques</Title>
            <BoxDesignersEthiques />
        </Section>
        <Section>
            <Title>Benevoles</Title>
            <Volunteers />
        </Section>
        <Section dark>
            <Title>Avec la contribution</Title>
            {contributors.map((speaker) => (
                <Speaker {...speaker} />
            ))}
        </Section>
        <Section>
            <Title>Mécènes de compétences</Title>
            <div>
                {skillsPatrons.map((patron) => (
                    <Patron {...patron} />
                ))}
            </div>
        </Section>
        <Section>
            <Title>Mécènes financiers</Title>
            <div>
                {moneyPatrons.map((patron) => (
                    <Patron {...patron} />
                ))}
            </div>
        </Section>
    </Layout>
)
