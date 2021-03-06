import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {

  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('tags')
  getProfile(@Request() req) {
    const domains = [
      {
      "key" : "1",
      "value" : "EQUITY"
    }, {
      "key" : "2",
      "value" : "TRADE"
    }, {
      "key" : "3",
      "value" : "CONSOLE"
    }
    ];
    return domains;
  }

}
