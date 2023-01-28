import * as process from 'process';

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { EnvironmentType } from '@/modules/core/constans';

export const database: () => TypeOrmModuleOptions = () => ({
    type: 'mysql',
    host: '172.17.22.37',
    username: 'root',
    password: 'root',
    database: 'avrilko',
    autoLoadEntities: true,
    entities: [],
    synchronize: process.env.NODE_ENV !== EnvironmentType.PRODUCTION,
});
