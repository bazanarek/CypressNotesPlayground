export class noteDetails {

    markCompleteButton = () => cy.findElementByTestData('toggle-note-switch');
    noteTitle = () => cy.findElementByTestData('note-card-title');

    
    markComplete() {
        this.markCompleteButton().click();
        return this;
    }

    notTitleElement() {
        return this.noteTitle();
    }

    markCompleteButton() {
        return this.markCompleteButton();
    }

}

export default new noteDetails();
