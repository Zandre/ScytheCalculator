import { Injectable } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  setDefaultValidationMessages = (): void => {
      ReactiveFormConfig.set({
          baseConfig: {

          },
          validationMessage: { 
              required: 'Required',
              maxNumber: 'Maximum number exceeded',
              minNumber: 'Minimum number exceeded',
            }
        });

  }

}