import * as classNames from 'classnames';
import * as React from 'react';

import * as Bulma from './../../../bulma';
import { withHelpersModifiers } from './../../../bulma';

export interface CardFooter<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function CardFooter({ tag = 'footer', ...props }: CardFooter<HTMLElement>) {
    const className = classNames('card-footer', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(CardFooter);
export default HOC;
