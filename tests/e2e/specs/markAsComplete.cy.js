import notesMocks from '../mocks/notesMocks';
import noteDetails from '../pages/noteDetails';



describe('Mark note as completed', () => {

    beforeEach(() => {
        cy.loginUser()
    });

    it('Test marking note as completed', () => {
        notesMocks.noteDetails(200, 'oneNoteNotCompleted.json')
        notesMocks.noteUpdated(200, 'oneNoteCompleted.json')

        cy.visit('//notes/app/notes/123')
        noteDetails.markComplete()

        noteDetails.noteTitle().should('have.css', 'background-color', 'rgba(40, 46, 41, 0.6)');
        noteDetails.markCompleteButton().should('be.checked');
    }) 
});