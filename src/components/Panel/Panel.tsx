import * as classNames from 'classnames';
import * as React from 'react';

import * as Bulma from './../../bulma';
import { withHelpersModifiers } from './../../bulma';

export interface Panel<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function Panel({ tag = 'nav', ...props }: Panel<HTMLElement>) {
    const className = classNames('panel', props.className );

    return React.createElement(tag, { ...props, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Panel);
export default HOC;
