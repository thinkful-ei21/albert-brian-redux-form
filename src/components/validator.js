export const required = value => value === undefined ? 'Required' : undefined;
// function required(value) {
//   if (!value) {
//     return 'Required';
//   }
// }

export const isEmpty = value => value.trim() === '' ? 'Cannot be empty' : undefined;
// function isEmpty(value) {
//   if (value.trim() === '') {
//     return 'Cannot be empty';
//   }
// }

export const lengthCheck = value => value.length === 5 ? undefined : 'Tracking Number must be 5 characters long';
// function lengthCheck(value) {
//   if (value.length !== 5) {
//     return 'Tracking Number must be 5 characters long';
//   }
// }

export const isNumber = value => Number(value) ? undefined : 'Tracking Number must be numbers only';
// function isNumber(value) {
//   if (!Number(value)) {
//     return 'Tracking Number must be numbers only';
//   }
// }
