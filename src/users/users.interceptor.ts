import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  NestInterceptor,
  RequestTimeoutException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class UsersInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const data = context.switchToHttp().getRequest().body;
    if (data.password !== data.confirmPassword) {
      return throwError(
        () =>
          new HttpException(
            'Os e-mails estao diferentes',
            HttpStatus.BAD_REQUEST,
          ),
      );
    }
    return next.handle();
  }
}
