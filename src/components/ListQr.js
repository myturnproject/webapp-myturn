const getqr = () => {
    let loader = `<div class="boxLoading"></div>`;
    document.getElementById('movieResult').innerHTML = loader;
    fetch("https://cors-anywhere.herokuapp.com/https://mighty-temple-86101.herokuapp.com/api/myturn/service/get/" +
         global.service)
        .then(response => response.json())
        .then(function (data) {
            global.qr[0] = data[0].qr;     
                document.getElementById('movieResult').innerHTML = result;
        })
    };