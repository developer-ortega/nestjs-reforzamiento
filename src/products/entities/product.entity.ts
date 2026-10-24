interface UpdateWithOptions {
    name?: string, description?: string, price?: number
}

export class Product {

    constructor(
        public id: string,
        public name: string,
        public price: number,
        public descripcion?: string,
    ) {}

    updateWith({
        name, description, price
    }: UpdateWithOptions ) {
        this.name = name ?? this.name;
        this.descripcion = description ?? this.descripcion;
        this.price = price ?? this.price;
    }

}
