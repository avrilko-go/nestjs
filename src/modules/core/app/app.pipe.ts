import { ArgumentMetadata, Injectable, Paramtype, ValidationPipe } from '@nestjs/common';

import deepmerge from 'deepmerge';

import { DTO_VALIDATION_OPTIONS } from '@/modules/core/constans';

@Injectable()
export class AppPipe extends ValidationPipe {
    async transform(value: any, metadata: ArgumentMetadata) {
        const { type, metatype } = metadata;

        const originOptions = { ...this.validatorOptions };
        const originTransform = { ...this.transformOptions };

        const options = Reflect.getMetadata(DTO_VALIDATION_OPTIONS, metatype);

        const { transformOptions, type: optionsType, ...customOptions } = options;
        const requestType: Paramtype = optionsType ?? 'body';
        if (requestType !== type) {
            return value;
        }

        if (transformOptions) {
            this.transformOptions = deepmerge(this.transformOptions, transformOptions, {
                arrayMerge: (_d, s, _o) => s,
            });
        }

        if (customOptions) {
            this.validatorOptions = deepmerge(this.validatorOptions, customOptions, {
                arrayMerge: (_d, s, _o) => s,
            });
        }
        const result = super.transform(value, metadata);
        this.validatorOptions = originOptions;
        this.transformOptions = originTransform;
        return result;
    }
}
