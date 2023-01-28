import { Module } from '@nestjs/common';

import { database } from '@/config';
import { CoreModule } from '@/modules/core/core.module';

@Module({
    imports: [CoreModule.forRoot({ database: database() })],
})
export class AppModule {}
