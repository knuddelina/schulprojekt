
/*
const getDatePickerTitle = elem => {
    // From the label or the aria-label
    const label = elem.nextElementSibling;
    let titleText = '';
    if (label && label.tagName === 'LABEL') {
        titleText = label.textContent;
    } else {
        titleText = elem.getAttribute('aria-label') || '';
    }
    return titleText;
}

const elems = document.querySelectorAll('.datepicker_input');
for (const elem of elems) {
    const datepicker = new Datepicker(elem, {
        'format': 'dd/mm/yyyy', // UK format
        title: getDatePickerTitle(elem)
    });
}
*/

function calcFunction() {

}

$(function () {
    $('#datepicker').datepicker();
});

function attachEventlisteners() {
    document.addEventListener('click', calcFunction);
    //document.getElementById('memreset').onclick = reset;
}

attachEventlisteners();
