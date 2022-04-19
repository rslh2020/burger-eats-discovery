var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){
      var firstName = faker.name.firstName()
      var lastName = faker.name.lastName()
               
        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '1188888888',
            address: {
              postalcode: '72311107',
              number: '31',
              details: 'Casa',
              street: 'QR 327 Conjunto 7',
              district: 'Samambaia Sul (Samambaia)',
              city_state: 'Brasília/DF'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
          }
          return data
    }
}