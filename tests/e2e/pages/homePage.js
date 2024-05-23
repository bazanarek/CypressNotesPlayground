export class HomePage {

    profileButton = () => cy.findElementByTestData('profile');
    logoutButton = () => cy.findElementByTestData('logout');
    addNewNoteButton = () => cy.findElementByTestData('add-new-note')
    note = () => cy.findElementByTestData('note-card')
    noteTitle = () => cy.findElementByTestData('note-card-title')
    noteDescription = () => cy.findElementByTestData('note-card-description')
    deleteButton = () => cy.findElementByTestData('note-delete')
    confirmDeleteButton = () => cy.findElementByTestData('note-delete-confirm')
    cancelDeleteButton = () => cy.findElementByTestData('note-delete-cancel')

    logout() {
        this.logoutButton().click()
    }

    clickAddNewNote() {
        this.addNewNoteButton().click(); 
        return this;
    }

    note() {
        return this.note();
    }

    noteTitle() {
        return this.noteTitle();
    }

    noteDescription() {
        return this.noteDescription();
    }

    confirmDelete() {
        this.confirmDeleteButton().click()
        return this;
    }

    cancelDelete() {
        this.cancelDeleteButton().click()
        return this;
    }

    clickDeleteNoteWithTitle(noteTitle) {
        cy.contains(noteTitle)
        .parent()
        .within(() => {
            this.deleteButton().click()
        })
        return this;
    }
}

export default new HomePage();