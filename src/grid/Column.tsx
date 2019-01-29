import * as classNames from 'classnames';
import * as React from 'react';

import * as Bulma from './../bulma';
import { withHelpersModifiers } from './../bulma';
import { combineModifiers, getHTMLProps } from './../helpers';
import * as Grid from './grid';
import {
    getOffsetModifiers, getSizeModifiers,
    removeOffsetProps, removeSizeProps,
} from './grid';

export interface Column<T> extends
    Grid.HorizontalSize, Grid.Offset, Bulma.Tag,
    React.HTMLProps<T> { }

export function Column({ tag = 'div', ...props }: Column<HTMLElement>) {
    const className = classNames(
        'column',
        {
            ...combineModifiers(
                props,
                getSizeModifiers,
                getOffsetModifiers,
            ),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(
        props,
        removeSizeProps,
        removeOffsetProps,
    );

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(Column);
export default HOC;
