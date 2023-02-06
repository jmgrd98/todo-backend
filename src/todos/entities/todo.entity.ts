import { IsString, IsBoolean, IsDate } from "class-validator";

export class Todo {

    @IsString()
    id: string;

    @IsString()
    description: string;

    @IsBoolean()
    completed: boolean;

    
}
