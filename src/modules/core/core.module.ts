import { DynamicModule, ModuleMetadata } from '@nestjs/common';

import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';

import { database } from '@/config';
import { AppPipe } from '@/modules/core/app/app.pipe';
import { CoreOptions } from '@/modules/core/constans';

export class CoreModule {
    public static forRoot(options: CoreOptions = {}): DynamicModule {
        const imports: ModuleMetadata['imports'] = [];

        if (options.database) {
            imports.push(TypeOrmModule.forRoot(database()));
        }

        const providers: ModuleMetadata['providers'] = [
            {
                provide: APP_PIPE,
                useFactory: () =>
                    new AppPipe({
                        transform: true,
                        forbidUnknownValues: false,
                        validationError: { target: false },
                    }),
            },
        ];

        return {
            imports,
            providers,
            global: true,
            module: CoreModule,
        };
    }
}
