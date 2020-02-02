// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$('#ng-btn').on('click', (e) => {
    const $form = $(e.target).closest('form');
    $.ajax({
        url: $form.get(0).action,
        type: $form.get(0).method
        // data attribute is not defined
    }).always((response, status) => {
        alert(status);
    });
    e.preventDefault();
});

$('#ok-btn').on('click', (e) => {
    const $form = $(e.target).closest('form');
    $.ajax({
        url: $form.get(0).action,
        type: $form.get(0).method,
        data: $form.serialize()
    }).always((response, status) => {
        alert(status);
    });
    e.preventDefault();
});
