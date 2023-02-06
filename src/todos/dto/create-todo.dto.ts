import { IsString } from "class-validator";
import { IsBoolean, IsNumber } from "class-validator/types/decorator/decorators";

export class CreateTodoDto {

    @IsNumber
    id: number;

    @IsString
    description: string;

    @IsBoolean
    completed: boolean;
}
