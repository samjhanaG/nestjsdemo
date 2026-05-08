import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { RegisterUserDto } from './dto/registerUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService){}

    async registerUser(registerUserDto: RegisterUserDto){

        console.log('registerDto', registerUserDto);

        const saltRounds = 10;

        const hash = await bcrypt.hash(
            registerUserDto.password,
            saltRounds
        );

        const user = await this.userService.createUser({
            ...registerUserDto,
            password: hash,
        });
        console.log('user', user);
    }
}