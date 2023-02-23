import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
    target?: Element;
    children?: ReactNode;
}

const Portal: FC<IPortalProps> = (props) => {
    const { target = document.body, children } = props;

    return createPortal(children, target);
};

export default Portal;
