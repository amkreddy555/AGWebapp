import ProductClient from './ProductClient';
import { productsData } from './productsData';

export const dynamicParams = false;

export function generateStaticParams() {
    return Object.keys(productsData).map((id) => ({
        id: id,
    }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <ProductClient id={id} />;
}
