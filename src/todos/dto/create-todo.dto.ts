import { IsString, IsBoolean } from "class-validator";

export class CreateTodoDto {

    @IsString()
    description: string;

    @IsBoolean()
    completed: boolean;

}
