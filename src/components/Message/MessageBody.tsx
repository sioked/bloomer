import * as classNames from 'classnames';
import * as React from 'react';

import * as Bulma from './../../bulma';
import { withHelpersModifiers } from './../../bulma';

export interface MessageBody<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function MessageBody({ tag = 'div', ...props }: MessageBody<HTMLElement>) {
    const className = classNames('message-body', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(MessageBody);
export default HOC;
