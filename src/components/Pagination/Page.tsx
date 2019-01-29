import * as React from 'react';

import * as Bulma from './../../bulma';
import { withHelpersModifiers } from './../../bulma';

export interface Page<T> extends Bulma.Tag, React.HTMLProps<T> { }

export function Page({ tag = 'li', ...props }: Page<HTMLElement>) {
    return React.createElement(tag, props);
}

const HOC = /*@__PURE__*/withHelpersModifiers(Page);
export default HOC;
