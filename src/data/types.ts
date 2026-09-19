export type Product = { name: string; description: string ,pagesperfile : number, size : string, cliptype : string, materialtype : string, product_images : string[] };
export type FileCategory = { slug: string; name: string; description: string; products: Product[] };
