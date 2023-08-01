const cardList = [{
    title: "Demo 2"
    , image: "Images/Image4.jpg"
    , link: "About Demo 2"
    , desciption: "Desciption about Demo 2"
}
    , {
    title: "Demo 3"
    , image: "Images/Image5.jpg"
    , link: "About Demo 3"
    , desciption: "Desciption about Demo 3"
}
]

function clickMe() {
    alert("Thanks You! for Clicking me.");
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#firstname')
        .val();
    formData.last_name = $('#lastname')
        .val();
    formData.password = $('#password')
        .val();
    formData.email = $('#email')
        .val();

    console.log("Submitted: ", formData);
}

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section")
            .append(itemToAppend)
    });
}

$(document)
    .ready(function () {
        $('.materialboxed')
            .materialbox();
        $('#formSubmit')
            .click(() => {
                submitForm();
            })
        addCards(cardList);
        $('.modal')
            .modal();
    });
