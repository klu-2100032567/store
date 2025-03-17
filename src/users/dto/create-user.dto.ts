// backend/src/users/dto/create-user.dto.ts
// Data Transfer Object for user creation
import { IsEmail, IsString, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(20, 60)
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 16)
  @Matches(/^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
  password: string;

  @IsString()
  @Length(1, 400)
  address: string;
}
