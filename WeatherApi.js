//const { table } = require("node:console");

function getWeather()
{
    var request=new XMLHttpRequest();
    var apikey='93a3f24b26df41eed8ba1285c87d85a8';
    var city=document.getElementById("city").value;
    console.log(city);
    //var url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    var url= `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apikey}`;
    console.log(url);
    request.open('GET',url,true);
    request.onload=function()
    {
        var res=JSON.parse(this.response);
        //console.log(res);
        table=document.createElement("table");
        table.border="1";
        table.width="100%";
        table.align="center";
        row=table.insertRow(-1)
        cellH1=row.insertCell(-1)
        cellH2=row.insertCell(-1)
        cellH3=row.insertCell(-1)
        cellH4=row.insertCell(-1)
        cellH1.innerHTML="Date";
        cellH2.innerHTML="TIME"
        cellH3.innerHTML="MAX_TEMP";
        cellH4.innerHTML="MIN_TEMP"
        res.list.forEach((day) => 
        {
            row1=table.insertRow(-1)
            cell1=row1.insertCell(-1)
            cell2=row1.insertCell(-1)
            cell3=row1.insertCell(-1)
            cell4=row1.insertCell(-1)
            var res=day.dt_txt.split(" ");
            cell1.innerHTML=res[0];
            cell2.innerHTML=res[1];
            cell3.innerHTML=day.main.temp_max;
            cell4.innerHTML=day.main.temp_min;
            console.log(day)
        })
        document.getElementById("temp").append(table);
    }
    request.send();
}