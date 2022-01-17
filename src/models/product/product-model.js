import { types } from 'mobx-state-tree';

export const Sku = types.model('Sku', {
    id: types.identifier,
});

export const Answer = types.model('Answer', {
    id: types.identifier,
    title: types.string,
    skus: types.array(Sku),
});

export const Question = types.model('Question', {
    id: types.identifier,
    title: types.string,
    type: types.enumeration(['SKU_FILTER']),
    renderType: types.string,
    filter: types.boolean,
    answers: types.array(Answer),
});

export const Product = types.model('Product', {
    id: types.identifier,
    description: types.string,
    questions: types.array(Question),
});
