export interface ProductMobile {
    listImage: string[]
    productName: string;
    rating: number;
    description: string;
    type: string[]
    color: Color[]
}

export interface Color {
    colorName: string;
    hexColor: string;
}