import { IsString, IsBoolean, IsDate } from "class-validator";

export class Todo {

    @IsString()
    description: string;

    @IsBoolean()
    completed: boolean;

    
}
