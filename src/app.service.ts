import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'App is running. Use Postman or any other API tool to test the endpoints!';
  }
}
