const candidateDOM = document.querySelector(".candidate");
const productBacklogDOM = document.querySelector(".productBacklog");
const done = document.querySelector(".done-btn");
var candidate = Sortable.create(candidateDOM, {
    group: "shart",
    animation: 500,
    onChange: (e) => {
        let order = candidate.toArray();
        // console.log('drag: ' + order.length)
        if (order.length >= 1) {
            $('.done1-btn').css('display', 'none')
        }
    }
});

var productBacklog = Sortable.create(productBacklogDOM, {
    group: "shart",
    onChange: (e) => {
        let order = productBacklog.toArray();
        // console.log(order)
        if (order.length == 4) {
            $('.done1-btn').css('display', 'block')
        } else {
            $('.done1-btn').css('display', 'none')
        }
    }
});