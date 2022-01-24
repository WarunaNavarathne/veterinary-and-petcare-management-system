export const setErrors = (
    firstName, 
    lastName,
    post ,
    username,
    password,
    contactNumber,
    email,
    address 
) => {
    let errors = {};
    errors.firstName = firstName ? "" : "First Name Required !";
    errors.lastName = lastName ? "" : "Last name Required !";
    errors.post = post ? "" : "Post Required !";
    errors.username = username ? "" : "Username Required !";
    errors.password = password ? "" : "Password Required !";
    errors.contactNumber = contactNumber ? "" : "Contact number Required !";
    errors.email = email ? "" : "Email Required !";
    errors.address = address ? "" : "Address Required !";
    return errors;
};