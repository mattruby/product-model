import { Product } from './product-model';

const productData = {
    id: '123',
    description: 'Product description',
    questions: [
        {
            id: '1',
            title: 'Question 1',
            type: 'SKU_FILTER',
            renderType: '',
            filter: true,
            answers: [
                {
                    id: '1',
                    title: 'Answer 1',
                    skus: [
                        {
                            id: '1',
                        },
                    ],
                },
            ],
        },
    ],
};
test('Product model - Happy path', () => {
    const product = Product.create(productData);
    expect(product.id).toBe('123');
    expect(product.description).toBe('Product description');
    const firstQuestion = product.questions[0];
    expect(firstQuestion.id).toBe('1');
    const firstAnswer = firstQuestion.answers[0];
    expect(firstAnswer.id).toBe('2');
});
