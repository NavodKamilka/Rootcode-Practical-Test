import joi from 'joi';

export const addProductValidation = joi.object({
    sku:joi.string().required(),
    name:joi.string().required(),
    description:joi.allow(),
    categorieId:joi.number().integer().required(),
    subCategoryId:joi.number().integer().required(),
    price:joi.required()
});