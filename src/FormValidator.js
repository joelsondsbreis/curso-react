import validator from 'validator';

class FormValidator {

    constructor(validation) {
        this.validation = validation; 
    }

    validate(state) {

        const valueField = state[this.validation.field.toString()];
        const validationMethod = validator[this.validation.method];

        if(validationMethod(valueField, [], state)){
            console.log('FORM INVÁLIDO');
            return false;
        }else{
            console.log('FORM VÁLIDO');
            return true;
        }
    
    }
}

export default FormValidator;