import iziToast from "izitoast";

const refs = {
    form: document.querySelector('.form'),
    delay: document.querySelector('[name="delay"]'),
    radioBtn: document.querySelectorAll('[name="state"]'),
}
const onSubmitForm = event => {
    event.preventDefault();
    const delayValue = Number(refs.delay.value);
    const selectedState = Array.from(refs.radioBtn).find(radio => radio.checked).value;
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedState === "fulfilled") {
                resolve(`Fulfilled promise in ${delayValue}ms`
                );
            } else {
                reject(`Rejected promise in ${delayValue}ms`
                );
            }
        }, delayValue);
    });
    promise.then((result) => {
        iziToast.success({
            title: "Success",
            message: result,
            position: "topRight"
        })
    }).catch((err) => {
        iziToast.error({
            title: "Error",
            message: err,
            position: "topRight"
        })
    });

}

refs.form.addEventListener('submit', onSubmitForm);
