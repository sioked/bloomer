import * as classNames from 'classnames';
import * as React from 'react';

import * as Bulma from './../../bulma';
import { withHelpersModifiers } from './../../bulma';

export interface MediaRight<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function MediaRight({ tag = 'div', ...props }: MediaRight<HTMLElement>) {
    const className = classNames('media-right', props.className);

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(MediaRight);
export default HOC;
