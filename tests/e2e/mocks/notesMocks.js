export class NotesMocks {
    #login = '/notes/api/users/login'
    #notes = '/notes/api/notes'
    #noteDetails = 'notes/api/notes/*'
    
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

    noteDetails(statusCode, fixture) {
        return cy.intercept('GET', this.#noteDetails, {
            fixture: fixture,
            statusCode: statusCode
        })
    }

    noteUpdated(statusCode, fixture) {
        return cy.intercept('PATCH', this.#noteDetails, {
            fixture: fixture,
            statusCode: statusCode
        })
    }
}

export default new NotesMocks();