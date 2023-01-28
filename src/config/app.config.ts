import { AppConfig } from '@/modules/core/types';

export const appConfig: () => AppConfig = () => ({
    timezone: 'Asia/Shanghai',
    locale: 'zh-cn',
});
