import  classNames from 'classnames';
import  React from 'react';

import { Bulma, withHelpersModifiers } from './../../bulma';

export interface NavbarDropdown<T> extends Bulma.Tag, React.HTMLProps<T> {
    isBoxed?: boolean;
}

export function NavbarDropdown({ tag = 'div', isBoxed, ...props }: NavbarDropdown<HTMLElement>) {
    const className = classNames(
        'navbar-dropdown',
        {
            'is-boxed': isBoxed,
        },
        props.className,
    );

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(NavbarDropdown);
export default HOC;
