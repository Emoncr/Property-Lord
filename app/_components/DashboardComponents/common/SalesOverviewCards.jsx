import quotationMetrics from '@/app/_pages/service/eventDecoration/vendor/utils/quotationMetrics';
import SalesItemBox from './SalesItemBox';

const SalesOverviewCards = async () => {
    const response = await quotationMetrics.list({});

    return (
        <>
            <SalesItemBox response={response?.data} />
        </>
    );
};

export default SalesOverviewCards;
