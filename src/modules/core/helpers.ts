import * as process from 'process';

import { isNil } from 'lodash';

import { EnvironmentType } from '@/modules/core/constans';

export const setRunEnv = () => {
    if (
        isNil(process.env.NODE_ENV) ||
        !Object.values(EnvironmentType).includes(process.env.NODE_ENV as EnvironmentType)
    ) {
        process.env.NODE_ENV = EnvironmentType.DEVELOPMENT;
    }
};

export const getRunEnv = () => {
    setRunEnv();
    return process.env.NODE_ENV as EnvironmentType;
};
