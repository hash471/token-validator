import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Please Login to and fetch the necessary tags. For login information, contact your admin';
  }
}
