gsap.registerPlugin();

const introtl = gsap.timeline()
introtl.set('#index-section', { autoAlpha: 0 })
    .set('.ribbon-t', { xPercent: +110 }, "<")
    .set('.ribbon-b', { xPercent: -110 }, "<")
    .set('.po', { yPercent: +100 }, "<")
    .set('.newbie', { yPercent: +100 }, "<")
    .to('.point', { autoAlpha: 0 }, "<")
    .set('.start', { scale: 0 }, "<")
    .set('#accept-section', { autoAlpha: 0 }, "<")
introtl.to('#intro-section', { autoAlpha: 0, display: 'none', duration: 0.5, delay: 3 })
    .to('#index-section', { autoAlpha: 1, display: 'block', duration: 1.5 }, "<")
    .to('.ribbon-t', { xPercent: 0, duration: 1 })
    .to('.ribbon-b', { xPercent: 0, duration: 1 }, "<")
    .to('.po', { yPercent: 0 })
    .to('.newbie', { yPercent: 0 })
    .to('.point', { autoAlpha: 1 })
    .to('.start', { scale: 1 }, "<")
$('.start').click(function () {
    introtl.set('.pad-introduce', { yPercent: +50 })
    introtl.to('#index-section', { autoAlpha: 0, display: 'none', duration: 0.2 })
        .to('#accept-section', { autoAlpha: 1, display: "block", duration: 0.8 }, "<")
        .to('.pad-introduce', { yPercent: 0, scale: 1.3 })
});

const part1tl = gsap.timeline()
part1tl.set('#part1-section', { autoAlpha: 0 })
    .set('.po-part1', { xPercent: -110 }, "<")
    .set('.talking', { autoAlpha: 0 }, "<")
    .set('.talking2', { yPercent: +75 }, "<")
    .set('.bla', { scale: 0 }, "<")

$('.accept').click(function () {
    part1tl.to('#accept-section', { autoAlpha: 0, display: 'none', duration: 0.2 })
        .to('#part1-section', { autoAlpha: 1, display: "block", duration: 0.8 }, "<")
        .to('.po-part1', { xPercent: 0 })
        .to('.talking', { autoAlpha: 1 }, "<")
});
$('.down1-btn').click(function () {
    part1tl.to('.talking', { display: 'none', yPercent: -75, duration: 0.2 })
        .to('.talking2', { display: 'block', yPercent: 0, duration: 0.2 })
        .to('.bla', { scale: 1 }, "<")
        .to('.down1-btn', { autoAlpha: 0, display: "none" }, "<")
        .to('.go1-btn', { autoAlpha: 1, display: "block" })
        .to('.again1-btn', { autoAlpha: 1, display: "block" }, "<")
});
$('.again1-btn').click(function () {
    part1tl.to('.talking2', { display: 'none', yPercent: +75, duration: 0.2 })
        .to('.talking', { display: 'block', yPercent: 0, duration: 0.2 })
        .to('.again1-btn', { autoAlpha: 0, display: "none" }, "<")
        .to('.go1-btn', { autoAlpha: 0, display: "none" }, "<")
        .to('.down1-btn', { autoAlpha: 1, display: "block" })
});

const drag1tl = gsap.timeline()
drag1tl.set('#drag1-section', { autoAlpha: 0 })
    .set('.pad-drag1', { rotation: 20, transformOrigin: "left bottom" })
    .set('.drag1-caption', { autoAlpha: 0, yPercent: -50 }, "<")
$('.go1-btn').click(function () {
    drag1tl.to('#part1-section', { autoAlpha: 0, display: 'none', duration: 0.2 })
        .to('#drag1-section', { autoAlpha: 1, display: "block", duration: 0.8 }, "<")
        .to('.pad-drag1', { rotation: 0, transformOrigin: "left bottom" })
        .to('.drag1-caption', { autoAlpha: 1, yPercent: 0 }, "<")
        .to('.po-drag1', { autoAlpha: 0 })

});
const part2tl = gsap.timeline()
$('.done1-btn').click(function () {
    part2tl.set('.po-part1', { xPercent: -110 })
        .set('.role-name', { autoAlpha: 0 }, "<")
        .set('.talking', { display: 'block', autoAlpha: 0, yPercent: 0 }, "<")
        .set('.talking2', { display: 'none', yPercent: +75 }, "<")
        .set('.master', { xPercent: +150 }, "<")
        .set('.dev1', { xPercent: -150 }, "<")
        .set('.dev2', { xPercent: -150 }, "<")
        .set('.dev1-2', { xPercent: -150 }, "<")
        .set('.dev2-2', { xPercent: +150 }, "<")
    part2tl.to('#drag1-section', { autoAlpha: 0, display: 'none', duration: 0.2 })
        .to('#part2-section', { autoAlpha: 1, display: "block", duration: 0.8 }, "<")
        .to('.po-part1', { xPercent: 0 })
        .to('.role-name', { autoAlpha: 1 }, "<")
        .to('.talking', { autoAlpha: 1 }, "<")
});
$('.down2-btn').click(function () {
    part2tl.to('.talking', { display: 'none', yPercent: -75, duration: 0.2 })
        .to('.talking2', { display: 'block', yPercent: 0, duration: 0.2 })
        .to('.down2-btn', { autoAlpha: 0, display: "none" }, "<")
        .to('.continue2-btn', { autoAlpha: 1, display: "block" })
        .to('.again2-btn', { autoAlpha: 1, display: "block" }, "<")
});
$('.again2-btn').click(function () {
    part2tl.to('.talking2', { display: 'none', yPercent: +75, duration: 0.2 })
        .to('.talking', { display: 'block', yPercent: 0, duration: 0.2 })
        .to('.again2-btn', { autoAlpha: 0, display: "none" }, "<")
        .to('.continue2-btn', { autoAlpha: 0, display: "none" }, "<")
        .to('.down2-btn', { autoAlpha: 1, display: "block" })
});
$('.continue2-btn').click(function () {
    part2tl.to('.talking2', { autoAlpha: 0, display: 'none', duration: 0.2 })
        .to('.talking3', { autoAlpha: 1, display: 'block', duration: 0.2 })
        .to('.role-name', { text: "Scrum Master(SM):" }, "<")
        .to('.po-part1', { xPercent: -110 }, "<")
        .to('.master', { xPercent: 0 }, "<")
        .to('.again2-btn', { autoAlpha: 0, display: "none" }, "<")
        .to('.continue2-btn', { autoAlpha: 0, display: "none" }, "<")
        .to('.down4-btn', { autoAlpha: 1, display: "block" })
});

$('.down4-btn').click(function () {
    part2tl.to('.talking3', { display: 'none', yPercent: -75, duration: 0.2 })
        .to('.talking4', { display: 'block', yPercent: 0, duration: 0.2 })
        .to('.down4-btn', { autoAlpha: 0, display: "none" }, "<")
        .to('.dev1', { xPercent: 0 }, "<")
        .to('.dev2', { xPercent: 0 }, "<")
        .to('.continue4-btn', { autoAlpha: 1, display: "block" })
        .to('.again4-btn', { autoAlpha: 1, display: "block" }, "<")
});
$('.again4-btn').click(function () {
    part2tl.to('.talking4', { display: 'none', yPercent: +75, duration: 0.2 })
        .to('.talking3', { display: 'block', yPercent: 0, duration: 0.2 })
        .to('.dev1', { xPercent: -150 }, "<")
        .to('.dev2', { xPercent: -150 }, "<")
        .to('.again4-btn', { autoAlpha: 0, display: "none" }, "<")
        .to('.continue4-btn', { autoAlpha: 0, display: "none" }, "<")
        .to('.down4-btn', { autoAlpha: 1, display: "block" })
});
$('.continue4-btn').click(function () {
    part2tl.to('.talking4', { autoAlpha: 0, display: 'none', duration: 0.2 })
        .to('.talking5', { autoAlpha: 1, display: 'block', duration: 0.2 })
        .to('.dev1', { xPercent: -150 }, "<")
        .to('.dev2', { xPercent: -150 }, "<")
        .to('.continue4-btn', { autoAlpha: 0, display: "none" }, "<")
        .to('.again4-btn', { autoAlpha: 0, display: "none" }, "<")

    part2tl.to('.master', { xPercent: +150, delay: 2 })
        .to('.talking5', { autoAlpha: 0, display: 'none', duration: 0.2 }, "<")
        .to('.dev1-2', { xPercent: 0 })
        .to('.role-name', { text: "Dev 小貓:" }, "<")
        .to('.talking6', { autoAlpha: 1, display: 'block', duration: 0.2 }, "<")
        .to('.dev1-2', { xPercent: -150, delay: 2 })
        .to('.dev2-2', { xPercent: 0 }, "<")
        .to('.role-name', { text: "Dev 小熊:" }, "<")
        .to('.talking6', { autoAlpha: 0, display: 'none', duration: 0.2 }, "<")
        .to('.talking7', { autoAlpha: 1, display: 'block', duration: 0.2 })
        .to('.again5-btn', { autoAlpha: 1, display: "block" }, "<")
        .to('.go2-btn', { autoAlpha: 1, display: "block" }, "<")
});
$('.again5-btn').click(function () {
    part2tl.to('.talking7', { autoAlpha: 0, display: 'none', duration: 0.2 })
        .to('.talking5', { autoAlpha: 1, display: 'block', duration: 0.2 })
        .to('.dev2-2', { xPercent: +150 }, "<")
        .to('.role-name', { text: "Scrum Master(SM):" }, "<")
        .to('.master', { xPercent: 0 }, "<")
        .to('.go2-btn', { autoAlpha: 0, display: "none" }, "<")
        .to('.again5-btn', { autoAlpha: 0, display: "none" }, "<")

    part2tl.to('.master', { xPercent: +150, delay: 3 })
        .to('.talking5', { autoAlpha: 0, display: 'none', duration: 0.2 }, "<")
        .to('.dev1-2', { xPercent: 0 })
        .to('.role-name', { text: "Dev 小貓:" }, "<")
        .to('.talking6', { autoAlpha: 1, display: 'block', duration: 0.2 }, "<")
        .to('.dev1-2', { xPercent: -150, delay: 3 })
        .to('.dev2-2', { xPercent: 0 }, "<")
        .to('.role-name', { text: "Dev 小熊:" }, "<")
        .to('.talking6', { autoAlpha: 0, display: 'none', duration: 0.2 }, "<")
        .to('.talking7', { autoAlpha: 1, display: 'block', duration: 0.2 })
        .to('.again5-btn', { autoAlpha: 1, display: "block" }, "<")
        .to('.go2-btn', { autoAlpha: 1, display: "block" }, "<")
});

const drag2tl = gsap.timeline()
drag2tl.set('#drag2-section', { autoAlpha: 0 })
    .set('.pad-drag2', { yPercent: +50 })
    .set('#end-section', { autoAlpha: 0 })
$('.go2-btn').click(function () {
    drag2tl.to('#part2-section', { autoAlpha: 0, display: 'none', duration: 0.2 })
        .to('#drag2-section', { autoAlpha: 1, display: "block", duration: 0.8 }, "<")
        .to('.pad-drag2', { yPercent: 0, scale: 1.3 })
});

$('.pass-btn').click(function () {
    drag2tl.to('#drag2-section', { autoAlpha: 0, display: 'none', duration: 0.2 })
        .to('#end-section', { autoAlpha: 1, display: "block", duration: 0.8 }, "<")
});
$('.restart-btn').click(function () {
    location.reload();
});
