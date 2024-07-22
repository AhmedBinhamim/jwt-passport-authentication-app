import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    @Post('login')
    login(@Body() authPayLoad: AuthPayloadDto){
        const user = this.authService.validateUser(authPayLoad);
        if(!user) throw new HttpException('Invalid Credintials', 401);
        return user;
    }
}