import * as classNames from 'classnames';
import * as React from 'react';

import * as Bulma from './../../bulma';
import { withHelpersModifiers } from './../../bulma';

export interface ModalContent<T> extends Bulma.Tag, React.HTMLProps<T> {}

export function ModalContent({tag= 'div', ...props}: ModalContent<HTMLElement>) {
    const className = classNames('modal-content', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(ModalContent);
export default HOC;
