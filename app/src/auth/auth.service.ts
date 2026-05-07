import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}
    registerUser(){
        //logic for user register
        /**
         * check if email is already exists
         * hash the password
         * store the user into db
         * generate jwt token
         * send token in reponse
         */
        return this.userService.createUser();
    }
}
