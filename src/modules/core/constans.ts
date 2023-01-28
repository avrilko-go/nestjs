import { TypeOrmModuleOptions } from '@nestjs/typeorm';

/**
 * 运行环境
 */
export enum EnvironmentType {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
}

export interface CoreOptions {
    database?: TypeOrmModuleOptions;
}

export const DTO_VALIDATION_OPTIONS = 'DTO_VALIDATION_OPTIONS';
