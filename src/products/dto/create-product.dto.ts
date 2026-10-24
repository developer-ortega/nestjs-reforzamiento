import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";
// Comprobar que lo que llega en una petición (el body) tiene el formato correcto antes de llegar a tu lógica.
export class CreateProductDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @Type(() => Number)
    price: number;

}
