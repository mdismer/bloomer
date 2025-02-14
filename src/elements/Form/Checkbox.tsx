import  classNames from 'classnames';
import  React from 'react';

import {
    Bulma,
    withHelpersModifiers,
} from './../../bulma';

export function Checkbox(props: React.HTMLProps<HTMLInputElement>) {
    const wrapperClassName = classNames(
        'checkbox',
        props.className,
    );

    const { children, className, ...HTMLProps } = props;

    return (
        <label className={wrapperClassName}>
            <input {...HTMLProps} type="checkbox" />{children}
        </label>
    );
}

const HOC = /*@__PURE__*/withHelpersModifiers(Checkbox);
export default HOC;
