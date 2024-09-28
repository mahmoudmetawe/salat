

/*axios.get('http://api.aladhan.com/v1/timingsByCity?country=EG&city=Cairo')
    .then(function (response) {
        // handle success
        const time = response.data.data.timings;
        document.getElementById("a").innerHTML =time.Fajr
        document.getElementById("c").innerHTML =time.Sunrise
        document.getElementById("d").innerHTML =time.Dhuhr
        document.getElementById("e").innerHTML =time.Asr
        document.getElementById("b").innerHTML =time.Maghrib
        document.getElementById("f").innerHTML =time.Isha
        console.log(response.data.data.timings);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });*/

axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params: {
        country:'EG',
        city:'Cairo'
    }
})
    .then(function (response) {
        const time = response.data.data.timings;
        document.getElementById("a").innerHTML =time.Fajr
        document.getElementById("c").innerHTML =time.Sunrise
        document.getElementById("d").innerHTML =time.Dhuhr
        document.getElementById("e").innerHTML =time.Asr
        document.getElementById("b").innerHTML =time.Maghrib
        document.getElementById("f").innerHTML =time.Isha
        document.getElementById("day").innerHTML ="اليــــــــــوم : "+ response.data.data.date.hijri.weekday.ar
        document.getElementById("date").innerHTML = "التــــــــــاريخ : "+response.data.data.date.readable
    })
    .catch(function (error) {
        alert(error);
    })
    .finally(function () {
        // always executed
    }); 