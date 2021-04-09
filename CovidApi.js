function getReport()
{
    var request=new XMLHttpRequest();
    var country=document.getElementById("state").value;
    var sd=document.getElementById("sd").value;
    //console.log(country+" "+sd);
    var url= `https://api.covid19api.com/live/country/${country}`;
    //var url=`https://api.covid19api.com/country/${country}/status/confirmed/live?from=${sd}T00:00:00Z&to=${ed}T00:00:00Z`
    //console.log(url);
    request.open('GET',url,true);
    request.onload=function()
    {
        var res=JSON.parse(this.response);
        var temp=document.getElementById("temp");
        temp.innerHTML="";
        // console.log(res);
        table=document.createElement("table");
        table.border="1";
        table.width="100%";
        table.align="center";
        row=table.insertRow(-1)
        cellH1=row.insertCell(-1)
        cellH2=row.insertCell(-1)
        cellH3=row.insertCell(-1)
        cellH4=row.insertCell(-1)
        cellH5=row.insertCell(-1)
        cellH1.innerHTML="State";
        cellH2.innerHTML="Confirmed"
        cellH3.innerHTML="Death";
        cellH4.innerHTML="Recovered"
        cellH5.innerHTML="Active"
        res.forEach((day) => 
        {
            if(day.Date.includes(sd))
            {
                row1=table.insertRow(-1)
                cell1=row1.insertCell(-1)
                cell2=row1.insertCell(-1)
                cell3=row1.insertCell(-1)
                cell4=row1.insertCell(-1)
                cell5=row1.insertCell(-1)
                cell1.innerHTML=day.Province;
                cell2.innerHTML=day.Confirmed;
                cell3.innerHTML=day.Deaths;
                cell4.innerHTML=day.Recovered;
                cell5.innerHTML=day.Active;
                console.log(day)
            }
        })
        temp.append(table);
    }
    request.send();
}