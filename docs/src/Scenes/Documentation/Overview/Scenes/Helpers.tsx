import  React from 'react';
import  Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

import TableDocs from './../../../../Components/TableDocs';
import { Docs } from './../../../../utils';

import { Container } from './../../../../../../src';
import { Subtitle, Title } from './../../../../../../src';

export const noModifiers = <span>No modifiers, only those inherited by the <Link to="/documentation/overview/helpers">Helpers
</Link> modifiers</span>;

export const Tag = {
    description: <td>A valid <strong>HTML</strong> tag to be rendered instead of the default one.</td>,
    prop: 'tag',
    type: 'string',
};

const Platforms = {
    description: <td><code>mobile</code> | <code>tablet</code> | <code>touch</code> |
     <code>desktop</code> | <code>widescreen</code> | <code>tablet-only</code> | <code>desktop-only</code></td>,
    type: 'bool | string | string[]',
};

export const colors = <td><code>white</code> | <code>light</code> | <code>dark</code> | <code>black</code> |
 <code>primary</code> | <code>info</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td>;
export const isColor = {
    description: colors,
    prop: 'isColor',
    type: 'string',
};

export const isSize = {
    description: <td><code>large</code> | <code>medium</code> | <code>small</code></td>,
    prop: 'isSize',
    type: 'string',
};

export const isAlign = {
    description: <td><code>left</code> | <code>centered</code> | <code>right</code></td>,
    prop: 'isAlign',
    type: 'string',
};

export const render = (component: string) => ({
    description: <td>Allows inline rendering of other element. The render prop receives all the props from {`<${component}>`}.</td>,
    prop: 'render',
    type: 'func',
});

export const states = [
    {
        prop: 'isActive',
        type: 'bool',
    },
    {
        prop: 'isHovered',
        type: 'bool',
    },
    {
        prop: 'isFocused',
        type: 'bool',
    },
];

export const isLoading = {
    prop: 'isLoading',
    type: 'bool',
};

const helpersRows: Docs.Row[] = [
    {
        prop: 'isClearFix',
        type: 'bool',
    },
    {
        description: <td><code>left</code> | <code>right</code></td>,
        prop: 'isPulled',
        type: 'string',
    },
    {
        prop: 'isOverlay',
        type: 'bool',
    },
    {
        prop: 'isFullWidth',
        type: 'bool',
    },
    {
        description: <td><code>left</code> | <code>centered</code> | <code>right</code></td>,
        prop: 'hasTextAlign',
        type: 'string',
    },
    {
        description: colors,
        prop: 'hasTextColor',
        type: 'string',
    },
    {
        prop: 'isMarginless',
        type: 'bool',
    },
    {
        prop: 'isPaddingless',
        type: 'bool',
    },
    {
        prop: 'isUnselectable',
        type: 'bool',
    },

];

const showDescription = (
    <td>
        <code>flex</code> | <code>block</code> | <code>inline</code> | <code>inline-block</code> | <code>inline-flex</code> <br/>
        <code>*-mobile</code> | <code>*-tablet</code> | <code>*-touch</code> | <code>*-desktop</code> |
         <code>*-widescreen</code> | <code>*-tablet-only</code> | <code>*-desktop-only</code>
        <br/>
        <small>Replace <strong>*</strong> with any of the above values</small>
        <br/><br/>
        <Subtitle style={{marginBottom: 0}}>Object</Subtitle>
        <strong>keys</strong> <code>flex</code> | <code>block</code> | <code>inline</code> | <code>inline-block</code> |
         <code>inline-flex</code>
        <br/>
        <strong>values</strong> <code>default</code> | <code>mobile</code> | <code>tablet</code> | <code>touch</code> |
         <code>desktop</code> | <code>widescreen</code> | <code>tablet-only</code> | <code>desktop-only</code>
        <br/>
        <small>default will target all platforms, so make sure to use it if you need it.</small>
        <br/>
        <small>You can pass an Array as value with any of the above strings.</small>
    </td>
);

const showRows: Docs.Row[] = [
    {
        description: showDescription,
        prop: 'isDisplay',
        type: 'string | string[] | object',
    },
];

const hiddenRows: Docs.Row[] = [
    {
        description: Platforms.description,
        prop: 'isHidden',
        type: Platforms.type,
    },
];

const Helpers = (props) => (
    <Container>
        <Title>Helpers</Title>
        <Subtitle>You can apply Bulma helper classes to any Bloomer component.</Subtitle>
        <TableDocs rows={helpersRows} />

        <hr />

        <Title tag="h2" isSpaced>Responsive Helpers</Title>
        <Subtitle tag="h3" isSize={5}>Show</Subtitle>
        <TableDocs rows={showRows} />

        <hr />

        <Subtitle isSpaced tag="h3" isSize={5}>Hide</Subtitle>
        <TableDocs rows={hiddenRows} />

        <hr />

        <Title tag="h2">Tag</Title>
        <Subtitle tag="h3" isSize={5}>
            Although it is not a helper modifier, <strong>tag</strong> prop is in almost every component and is used to
             render a different HTML tag than the default one. For example, a <strong>{'<Footer/>'}</strong> component
             render into a <strong>{'<footer/>'}</strong> tag, but it could be changed to <strong>{'<div/>'}</strong>
             with <strong>{'<Footer tag="div"/>'}</strong>. Most of the times you should be following the default tag,
             but this prop can be handy in some cases.
        </Subtitle>

        <hr />

        <Title tag="h2">withHelpersModifiers(Component)</Title>
        <Subtitle tag="h3" isSize={5}>
            You can compose all helpers in your own custom components,
            just pass your component to the <strong>withHelpersModifiers</strong> <em>Higher Order Component</em>.
        </Subtitle>

        <p>MyComponent.jsx</p>
        <Highlight className="javascript">
            {`import  React from 'react';
import { withHelpersModifiers  } from 'bloomer';

const MyComponent = (props) => (
    <div {...props}>{props.children}</div>
)

export default withHelpersModifiers(MyComponent);
`}
        </Highlight>

        <p>Other.jsx</p>
        <Highlight className="javascript">
            {`import  React from 'react';
import MyComponent from './MyComponent.jsx'

const Other = (props) => (
    <div>
        <MyComponent isFlex='mobile'>Hello World</MyComponent> {/* render :: <div class='is-flex-mobile'>Hello World</div> */}
    </div>
)
`}
        </Highlight>

        <p>If you're using Typescript, you can have the benefit of IntelliSense in your custom components.</p>
    </Container>
);

export default Helpers;
