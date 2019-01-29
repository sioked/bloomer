import * as classNames from 'classnames';
import * as React from 'react';

import * as Bulma from './../../bulma';
import {
    getSizeModifiers, removeSizeProps,
    withHelpersModifiers,
} from './../../bulma';
import { combineModifiers, getHTMLProps } from './../../helpers';

export interface ModalClose<T> extends Bulma.Size, Bulma.Render, Bulma.Tag, React.HTMLProps<T> {

}

export function ModalClose({tag= 'button', render, ...props}: ModalClose<HTMLElement>) {
    const className = classNames(
        'modal-close',
        {
            ...getSizeModifiers(props),
        },
        props.className,
    );

    const HTMLProps = getHTMLProps(props, removeSizeProps);

    if (render) return render({ ...HTMLProps, className });

    return React.createElement(tag, { ...HTMLProps, className });
}

const HOC = /*@__PURE__*/withHelpersModifiers(ModalClose);
export default HOC;
