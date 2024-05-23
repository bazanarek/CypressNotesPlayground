export class NotesMocks {
    #login = '/notes/api/users/login'
    #notes = '/notes/api/notes'
    
    login(statusCode, jsonResponse) {
        return cy.intercept('POST', this.#login, {
            fixture: jsonResponse, 
            statusCode: statusCode
        });
    }

    someNotesResponse() {
        return cy.intercept('GET', this.#notes, {
            fixture: 'someNotes.json',
            statusCode: 200
        });
    }
}

export default new NotesMocks();