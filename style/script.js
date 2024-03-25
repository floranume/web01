$(function () {
    $('.mainSlider .imgSlider').slick({
        infinite: true,
        slidesToShow: 1, //Hiển thị mấy
        slidesToScroll: 1, //cuộn mấy
        autoplay: true,
        autoplaySpeed: 2000, //lu7u dum2 d9i
        // arrows: false,
        prevArrow: $('.mainSlider .arrowaSlider #leftArrow'),
        nextArrow: $('.mainSlider .arrowaSlider #rightArrow'),
    });

    $('#slickDichVu').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.DichVu .arrowDichVu #leftArrow'),
        nextArrow: $('.DichVu .arrowDichVu #rightArrow'),
    });

    $('#slickSanpham').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.sanpham .arrowSanpham #leftArrow'),
        nextArrow: $('.sanpham .arrowSanpham #rightArrow'),
    });

    $('#slickBloge').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.blog .arrowBlog #leftArrow'),
        nextArrow: $('.blog .arrowBlog #rightArrow'),
    });

    $('#slickAlbum').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.album .arrowAlbum #leftArrow'),
        nextArrow: $('.album .arrowAlbum #rightArrow'),
    })
});

