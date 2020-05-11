import React from "react"

import styled from "styled-components"

import Inset from "./inset"

const GridComponent = styled.div`
  display: grid;
  flex: 1;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  grid-template-rows: ${(props) => `repeat(${props.rows}, 1fr)`};
  grid-column-gap: 15px;
  grid-row-gap: 15px;
`

export default function Grid(props) {
    const grid = (
        <GridComponent {...props}>
            {props.children}
        </GridComponent>
    );

    if (props.offsetLeft) {
        return (
            <Inset>
                {grid}
            </Inset>
        );
    }

    return grid;
}
