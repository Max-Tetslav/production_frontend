import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface IErrorBoundaryFallbackProps {
    className?: string;
}

const ErrorBoundaryFallback: FC<IErrorBoundaryFallbackProps> = props => {
    const { className } = props;

    const { t } = useTranslation();

    return (
        <div className="flex-center vh100">
            <h2>{t('errorBoundary')}</h2>
        </div>
    );
};

export default ErrorBoundaryFallback;
