export class HomePage {

    profileButton = () => cy.findElementByTestData('profile');
    logoutButton = () => cy.findElementByTestData('logout');

}

export default new HomePage();