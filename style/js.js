
let cities = ["القاهرة","مكة المكرمة","دبي","الكويت"]
for (let city of cities){
    let content = `
    <option>${city}</option>
    `
    document.getElementById("country").innerHTML += content;
}

document.getElementById("country").addEventListener("change", function() {
    if (this.value == "القاهرة") {
        gettiming("EG","Cairo")
    }else if(this.value == "مكة المكرمة"){
        gettiming("SA","Makkah al Mukarramah")
    }else if (this.value == "دبي") {
        gettiming("AE","Dubayy")
    }else if (this.value == "الكويت"){
        gettiming("kw" , "Al Kuwayt")
    }
})


function gettiming(countryName ,cityName ) {
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: {
            country:countryName,
            city:cityName
        }
    })
        .then(function (response) {
            const time = response.data.data.timings;
            document.getElementById("a").innerHTML =time.Fajr
            document.getElementById("b").innerHTML =time.Sunrise
            document.getElementById("c").innerHTML =time.Dhuhr
            document.getElementById("d").innerHTML =time.Asr
            document.getElementById("e").innerHTML =time.Maghrib
            document.getElementById("f").innerHTML =time.Isha
            document.getElementById("day").innerHTML ="اليـــــــــــــــــــــــــوم : "+ response.data.data.date.hijri.weekday.ar
            document.getElementById("date").innerHTML = " التاريخ الميلادي : "+response.data.data.date.readable
            document.getElementById("dateh").innerHTML ="التاريخ الــــهجري : "+ response.data.data.date.hijri.date
        })
        .catch(function (error) {
            alert(error);
        })
        .finally(function () {
            // always executed
        }); 
}
gettiming("EG","Cairo")