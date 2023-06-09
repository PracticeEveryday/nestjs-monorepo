import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class HttpResponseInterceptor implements NestInterceptor {
    intercept(_context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
            map((result) => {
                if (result) {
                    return {
                        result,
                    };
                } else {
                    return {
                        result: 'no data',
                    };
                }
            })
        );
    }
}
