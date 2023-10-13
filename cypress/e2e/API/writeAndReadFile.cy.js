const BASE_URL = 'https://petstore.swagger.io/v2';
const petId = 3355;
let dataPet = null;

const getPetById = (id) => cy.request({
    method: 'GET',
    url: `${BASE_URL}/pet/${id}`,
})

describe('get pet by id', () => {

    it('get pet by id and write in file', () => {
        getPetById(petId).then(response => {
            cy.writeFile('cypress/fixtures/petById.json', response.body)
        })
    });

    it('read file with pet', () => {
        cy.readFile('cypress/fixtures/petById.json').then(data => {
            cy.log(data)
            dataPet = data;
        });
    });
});