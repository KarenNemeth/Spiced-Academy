$(document).ready(function() {
    if (localStorage.getItem('input')) {
        $('#text').val(localStorage.getItem('input'));
    }
    $("#text").change(function(){
        try {
            localStorage.setItem('input', $(this).val());
            console.log(localStorage.getItem('input'));
        } catch (e) {
            console.log('What a nuisance');
        }
    });
});
