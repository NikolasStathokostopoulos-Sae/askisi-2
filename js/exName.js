'use strict';
let firstName = prompt ('Ποιό είναι το όνομα σου?');
let lastName = prompt ('Ποιό είναι το επίθετο σου?');
let fullName = firstName + ' ' + lastName;
let greeting = 'Keep coding';

//Για να εμφανιστεί στo σώμα της σελίδας και όχι σαν popup παράθυρο στον browser
document.write( greeting + ' ' + fullName + '!' );