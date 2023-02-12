import { FC, useEffect, useState } from 'react';

interface IBugButtonProps {
    className?: string;
}

const BugButton: FC<IBugButtonProps> = (props) => {
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isError) {
            throw new Error();
        }
    }, [isError]);

    const onThrow = () => {
        setIsError(true);
    };

    return <button onClick={onThrow}>Throw Error</button>;
};

export default BugButton;
