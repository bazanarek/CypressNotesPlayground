export class addNewNoteModal {

    categoryList = () => cy.findElementByTestData('note-category');
    title = () => cy.findElementByTestData('note-title');
    description = () => cy.findElementByTestData('note-description');
    create = () => cy.findElementByTestData('note-submit');
    
    selectWorkCategory() {
        this.categoryList().select("Work");
        return this;
    }

    typeTitle(title) {
        this.title().type(title)
        return this;
    }

    typeDescription(description) {
        this.description().type(description)
        return this;
    }

    clickCreate() {
        this.create().click()
    }

}

export default new addNewNoteModal();
