import { Body, Controller, Get, HttpException, Post,  Req,  UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { LocalGuard } from './guards/local.guard';
import { Request} from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';


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

    @Get('status')
    @UseGuards(JwtAuthGuard)
    status(@Req() req: Request){
        console.log("Inside AuthController status method");
        console.log(req.user);
        return req.user;
    }
}