import { Selector } from 'testcafe';

fixture`Book a room`
    .page`https://aw1.automationintesting.online/#/`;

test('Successfully book a room', async t => {
    // Click on the "Book This Room" button
    await t.click(Selector('button').withExactText('Book this room'));

    // TO-DO: Robust date selection???
    // Click on the next button and Select dates
    const startDate = Selector('.rbc-day-bg').nth(2)
    const endDate = Selector('.rbc-day-bg').nth(6)
    await t.click(Selector('button').withExactText('Next'));
    await t.dragToElement(startDate, endDate, { speed: 0.5 });

    // Enter in reservation information
    await t
        .typeText(Selector('input').withAttribute('name', 'firstname'), 'Super')
        .typeText(Selector('input').withAttribute('name', 'lastname'), 'Man')
        .typeText(Selector('input').withAttribute('name', 'email'), 'test@test.com')
        .typeText(Selector('input').withAttribute('name', 'phone'), '111-222-3333');

    // Click the "Book" button
    await t.click(Selector('button').withExactText('Book'));

    // Assert that the booking is successful
    await t.expect(Selector('h3').withExactText('Booking Successful!').exists).ok('Booking was not successful');
});