export interface Advertisement {
    logo?: string | null;
    name: string;
    productName: string;
    price: number;
    status: string;
    rating?: number | null;
    type: number;
}