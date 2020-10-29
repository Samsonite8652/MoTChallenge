import { Selector } from 'testcafe';
import { bookRoomData } from './bookRoomData';
import { BookRoomPageModel } from './bookRoomPageModel';

// Instatiate Imported class
const bookRoomPageModel = new BookRoomPageModel();

fixture`Book a room`
    .page`https://aw1.automationintesting.online/#/`;

test('Successfully book a room', async t => {
    // Book a room, and assert the booking is successful
    await t.debug()
    await bookRoomPageModel.bookRoom();
    await t.expect(Selector('h3').withExactText(bookRoomData.successText).exists).ok('Booking was not successful');
});