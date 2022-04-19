
class SignupPage{

    go(){
        
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    }

    fillForm(deliver){
        //Preenchendo Fildset Dados

        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        //Preenchendo Fildset Endereço
        
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"]').type('72311107').click()
        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)
        cy.get('input[name="address"]').should('have.value',deliver.address.street)
        cy.get('input[name="district"]').should('have.value',deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value',deliver.address.city_state)

        // Escolhendo Metodo de Entrega
        cy.get('.delivery-method li').should('have.length', 3)
        cy.contains('.delivery-method li', deliver.delivery_method).click()

        //Importando a CNH
        cy.get('input[accept^="image"]').attachFile('/imagens/' + deliver.cnh)

    }

    submit(){
        cy.get('button[type="submit"]').click()
    }

    modalContentShouldBe(message){
        cy.get('div[class="swal2-html-container"]')
        .should('have.text',message)
    }

    alertMessageShoudBe(messageexpert){
        cy.get('.alert-error').should('have.text',messageexpert)
        
    }
    
    alertMessage(id, message){
        cy.get(id).should('have.text', message)
    }

    alertMessageShoudBe(messageexpert){
        //cy.get('.alert-error').should('have.text',messageexpert)
        cy.contains('.alert-error', messageexpert).should('be.visible')
        
    }
    
}

export default new SignupPage;