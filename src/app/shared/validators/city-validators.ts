import { AbstractControl, ValidationErrors } from '@angular/forms';

export function validateCity(validCities: string[]) {

    return (c: AbstractControl): ValidationErrors | null => {
    /*     const validCities: string[] = [
            'Graz',
            'Hamburg',
            'Wien'
        ]; */

        if (c.value && validCities.indexOf(c.value) === -1) {
            return {
                city: {
                    actualValue: c.value,
                    validCities: validCities
                }
            };
        }

        return null;
    };
}
