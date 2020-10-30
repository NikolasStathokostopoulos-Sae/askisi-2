'use strict';
let firstName = prompt ('Ποιό ειναι το ονομά σου?');
let lastName = prompt ('Ποιό ειναι το επιθετό σου?');
let fullName = firstName + ' ' + lastName;
let greeting = 'Keep coding';

//Για να εμφανιστεί στην σελίδα και οχι σαν popup παράθυρο στον browser
document.write( greeting + ' ' + fullName + '!' );