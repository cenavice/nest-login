import { IsString, IsInt } from 'class-validator';

export class CreateUserDto {
    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsInt()
    age: number;
}
