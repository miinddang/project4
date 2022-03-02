$(function () {
    $('.ham').on('click', function () {
        $('.gnb, .gnb .dep1').toggleClass('on')
    })

    $('.gnb>ul>li').on('click', function () {
        if ($(this).attr('class') != 'on') {
            $('.gnb>ul>li').children('.dep2').slideUp()
            $(this).children('.dep2').slideToggle()
            $('.gnb>ul>li').removeClass('on')
            $(this).addClass('on')
        } else {
            $(this).children('.dep2').slideToggle()
            $(this).removeClass('on')
        }
    })
    
})