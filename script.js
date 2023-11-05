$(document).ready(function(){
    if($.localStorage.isSet('memo')){
        $('.notepad').val($.localStorage.get('memo'));
    }
    $('.btn_save').click(function(){
        $.localStorage.set('memo', $('.notepad').val());
        alert('저장되었습니다.');
    });
});