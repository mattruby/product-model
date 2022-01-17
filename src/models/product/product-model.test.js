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
    expect(product.questions.length).toBe(1);

    const firstQuestion = product.questions[0];
    expect(firstQuestion.id).toBe('1');
    expect(firstQuestion.title).toBe('Question 1');
    expect(firstQuestion.type).toBe('SKU_FILTER');
    expect(firstQuestion.renderType).toBe('');
    expect(firstQuestion.filter).toBe(true);

    const firstAnswer = firstQuestion.answers[0];
    expect(product.questions[0].answers.length).toBe(1);
    expect(firstAnswer.id).toBe('1');
    expect(firstAnswer.title).toBe('Answer 1');
    expect(firstAnswer.skus.length).toBe(1);
    expect(firstAnswer.skus[0].id).toBe('1');
});
