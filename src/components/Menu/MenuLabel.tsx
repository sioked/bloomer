import * as classNames from 'classnames';
import * as React from 'react';

import * as Bulma from './../../bulma';
import { withHelpersModifiers } from './../../bulma';

export interface MenuLabel<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function MenuLabel({ tag = 'p', ...props }: MenuLabel<HTMLElement>) {
    const className = classNames('menu-label', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(MenuLabel);
export default HOC;
