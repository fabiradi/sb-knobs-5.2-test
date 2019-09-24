import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import styled from 'styled-components'

import Component from '../Component'

export default { title: 'Knobs Test', decorators: [withKnobs] }

export const directBoolean = () => (
    <Panel active={boolean('Active', false)} />
)

export const indirectBoolean = () => {
    const active = boolean('Active', false)
    return (
        <Panel active={active} />
    )
}

export const directText = () => (
    <Panel>{text('Content', 'Type here ...')}</Panel>
)

export const styledComponent = () => (
    <StyledPanel>{text('Content', 'Type here ...')}</StyledPanel>
)

export const separateComponent = () => (
    <Component active={boolean('Active', false)} />
)


const Panel = ({ active, children = "Default Content" }) => (
    <div style={{ background: active ? 'green' : 'red' }}>{children}</div>
)

const StyledPanel = styled.div`
    background: ${props => props.active ? 'green' : 'red'}
`