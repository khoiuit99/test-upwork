export interface ProductMobile {
    listImage: Image[]
    productName: string;
    rating: number;
    description: string;
    type: string[]
    color: Color[]
}

export interface Image {
    imageSrc: string;
    guard: number;
    liked: boolean;
}
export interface Color {
    colorName: string;
    hexColor: string;
}