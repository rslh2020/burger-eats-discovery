import SignupPage from '../pages/SignupPage'
import SignupFactories from '../factories/SignupFactories'



describe('signup', () => {

    /* beforeEach(function() {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    }) */

    it('user shold be deliver', function () {

        var deliver = SignupFactories.deliver()

        SignupPage.go()
        SignupPage.fillForm(deliver);
        SignupPage.submit();
        const message = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        SignupPage.modalContentShouldBe(message)

    })
    it('Incorrect Document', function () {

        var deliver = SignupFactories.deliver()
        deliver.cpf = '000013A'

        SignupPage.go()
        SignupPage.fillForm(deliver);
        SignupPage.submit();
        const messageexpert = 'Oops! CPF inválido'
        SignupPage.alertMessageShoudBe(messageexpert)

    })
    it('Incorrect email', function () {

        var deliver = SignupFactories.deliver()
        deliver.email = 'br.com'

        SignupPage.go()
        SignupPage.fillForm(deliver);
        SignupPage.submit();
        const messageexpert = 'Oops! Email com formato inválido.'
        SignupPage.alertMessageShoudBe(messageexpert)

    })

    context('Require Fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }

        ]

        before(function(){
            SignupPage.go()
            SignupPage.submit()
        })
        
        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                SignupPage.alertMessageShoudBe(msg.output)
            } )
        })
    })

})