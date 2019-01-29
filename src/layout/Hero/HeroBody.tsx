import * as classNames from 'classnames';
import * as React from 'react';

import * as Bulma from './../../bulma';
import { withHelpersModifiers } from './../../bulma';

export interface HeroBody<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function HeroBody({ tag = 'div', ...props }: HeroBody<HTMLElement>) {
    const className = classNames('hero-body', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(HeroBody);
export default HOC;
