let form_options = {
    clientType: "",
    contactMethod: "",
    email: "",
    phone: "",
    message: "",
}

const send_information_from_form = () => {
    if (form_options.clientType === "" || form_options.contactMethod === "" || form_options.email === "" || form_options.phone === "") return
    console.log(form_options);
}

export { 
    form_options,
    send_information_from_form
};