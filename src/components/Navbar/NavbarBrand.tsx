import * as classNames from 'classnames';
import * as React from 'react';

import * as Bulma from './../../bulma';
import { withHelpersModifiers } from './../../bulma';

export interface NavbarBrand<T> extends Bulma.Tag, React.HTMLProps<T> {
}

export function NavbarBrand({tag= 'div', ...props}: NavbarBrand<HTMLElement>) {
    const className = classNames(
        'navbar-brand',
        props.className,
    );

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(NavbarBrand);
export default HOC;
