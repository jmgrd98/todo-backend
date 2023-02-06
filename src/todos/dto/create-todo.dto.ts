import { IsString, IsBoolean, IsDate } from "class-validator";

export class CreateTodoDto {

    @IsString()
    id: string;

    @IsString()
    description: string;

    @IsBoolean()
    completed: boolean;

}
