import * as classNames from 'classnames';
import * as React from 'react';

import * as Bulma from './../../bulma';
import { withHelpersModifiers } from './../../bulma';

export interface NavLeft<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function NavLeft({tag= 'div', ...props}: NavLeft<HTMLElement>) {
    const className = classNames('nav-left', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(NavLeft);
export default HOC;
