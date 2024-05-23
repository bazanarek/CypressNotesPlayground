import { faker } from '@faker-js/faker';
import homePage from "../pages/homePage";
import loginPage from "../pages/loginPage";
import addNewNoteModal from '../pages/addNewNoteModal';


describe('Notes tests', () => {

    beforeEach(() => {
        cy.loginUser()
    });

    it('Create Note', () => {
        let randomTitle = faker.lorem.words(5)
        let randomDescription = faker.lorem.words(20)

        cy.visit('/notes/app')
        homePage.clickAddNewNote()
        addNewNoteModal
            .selectWorkCategory()
            .typeTitle(randomTitle)
            .typeDescription(randomDescription)
            .clickCreate()

        homePage.noteTitle().should('contains.text', randomTitle)
        homePage.noteDescription().should('contains.text', randomDescription)
    })

    it.only('Delete Note', () => {
        let randomTitle = faker.lorem.words(5)
        let randomDescription = faker.lorem.words(20)

        cy.visit('/notes/app')
        homePage.clickAddNewNote()
        addNewNoteModal
            .selectWorkCategory()
            .typeTitle(randomTitle)
            .typeDescription(randomDescription)
            .clickCreate()

        homePage.noteTitle().should('contains.text', randomTitle)
        homePage.noteDescription().should('contains.text', randomDescription)

        homePage
            .clickDeleteNoteWithTitle(randomTitle)
            .confirmDelete()

        homePage.noteTitle().should('not.contains.text', randomTitle)
        homePage.noteDescription().should('not.contains.text', randomDescription)  
    })



});