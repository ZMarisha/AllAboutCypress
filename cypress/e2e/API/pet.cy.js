const BASE_URL = 'https://petstore.swagger.io/v2';
const petId = 3355;

const getPetById = (id) => cy.request({
    method: 'GET',
    url: `${BASE_URL}/pet/${id}`,
})
.then(response => {
    expect(response.body).to.have.property('id', 3355)
})

describe('API pet', () => {

    it('Get pets by status', () => {
        const status = ['sold', 'available', 'pending'];

        status.forEach((el) => {
            cy.request({
                method: 'GET',
                url: `${BASE_URL}/pet/findByStatus?status=${el}`
            })
            .its('status').should('eq', 200);
        })
    });

    it('create pet', () => {
        cy.request({
            method: 'POST',
            url: `${BASE_URL}/pet`,
            body: {
                "id": petId,
                "category": {
                  "id": petId,
                  "name": "string"
                },
                "name": "doggie",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "string"
                  }
                ],
                "status": "available"
              }
        })
    });

    it('get pet by id', () => {
        getPetById(petId);
    });

    it('update pet', () => {
        cy.request({
            method: 'PUT',
            url: `${BASE_URL}/pet`,
            body: {
                    "id": petId,
                    "category": {
                      "id": petId,
                      "name": "string"
                    },
                    "name": "korgi",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 0,
                        "name": "string"
                      }
                    ],
                    "status": "available"
                  }
        }).its('status').should('eq', 200);

        getPetById(petId).then(response => {
            expect(response.body).to.have.property('name', 'korgi')
        })
    });

});