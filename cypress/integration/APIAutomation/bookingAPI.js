/// <reference types="Cypress" />


describe('booking page APIs', ()=>{


    it('GET',()=>{

        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking'
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
        })
    })
    it('GET',()=>{
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking'
        }).then((resp) =>{
            //expect(resp.status).to.eq(200)
            expect(resp.body[0].bookingid).to.eq(2098)
                })
    })
    it('GET',()=>{
        cy.request({
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking/2098'
        }).then((resp) =>{
            expect(resp.status).to.eq(200)
            expect(resp.body.firstname).to.eq("Howard")
         })
    })

})