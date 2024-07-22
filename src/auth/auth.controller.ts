import { Body, Controller, HttpException, Post,  UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('login')
    @UseGuards(LocalGuard)
    login(@Body() authPayLoad: AuthPayloadDto){
        const user = this.authService.validateUser(authPayLoad);
        if(!user) throw new HttpException('Invalid Credintials', 401);
        return user;
    }

    @Get('status'){
        status(@Req() req: request)
    }
}