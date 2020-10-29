import { t, Selector } from 'testcafe';
import { bookRoomData } from './bookRoomData';

export class BookRoomPageModel {
    calendarDay: Selector = Selector(bookRoomData.dayClass);
    bookButton: Selector = Selector(bookRoomData.bookButtonClass).withExactText('Book');
    nextButton: Selector = Selector('button').withExactText('Next');

    async bookRoom() {
        // Click on the "Book This Room" button
        await t.click(bookRoomData.bookThisRoomButtonClass);

        // Click the Next button and select dates
        const startDate = this.calendarDay.nth(2);
        const endDate = this.calendarDay.nth(6);
        await t.click(this.nextButton)
        await t.dragToElement(startDate, endDate, { speed: 0.5 });
        // await t.drag(startDate, 50, 10, { speed: 0.5 });

        // Enter in reservation information
        await t
            .typeText(bookRoomData.firstNameClass, bookRoomData.firstName)
            .typeText(bookRoomData.lastNameClass, bookRoomData.lastName)
            .typeText(bookRoomData.emailClass, bookRoomData.email)
            .typeText(bookRoomData.phoneClass, bookRoomData.phone);

        // Click the "Book" button
        await t.click(this.bookButton);
    };
};