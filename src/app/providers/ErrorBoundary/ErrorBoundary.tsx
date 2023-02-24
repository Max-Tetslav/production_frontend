import { Component, ErrorInfo, ReactNode } from 'react';
import ErrorBoundaryFallback from './ErrorBoundaryFallback';

interface IErrorBoundaryProps {
    children?: ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            return <ErrorBoundaryFallback />;
        }

        return children;
    }
}

export default ErrorBoundary;
