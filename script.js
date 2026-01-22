function countDown(){
    setInterval(function(){
        let setDate = new Date("2025-10-20 00:00:00").getTime();
        let current = new Date().getTime();

        let diff = setDate - current;

        let d = Math.floor(diff/(24*60*60*1000));
        console.log(d);

        let h = Math.floor((diff % (24*60*60*1000)) / (60*60*1000));
        console.log(h);

        let m = Math.floor((diff % (60*60*1000)) / (60*1000));
        console.log(m);

        let s = Math.floor((diff % (60*1000)) / (1000));
        console.log(s);

        document.getElementById("days").innerHTML = d;
        document.getElementById("hours").innerHTML = h;
        document.getElementById("minutes").innerHTML = m;
        document.getElementById("seconds").innerHTML = s;
    }, 1000);
}
countDown();