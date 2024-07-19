function claculate()
{
    let year;
    let month;
    let day;
    let currentday=parseInt(cd.value.slice(8,10),10);
    let currentmonth=parseInt(cd.value.slice(5,7),10);
    let currentyear=parseInt(cd.value.slice(0,4),10);
    console.log('current date',currentyear,currentmonth,currentday);
    let birthday=parseInt(dob.value.slice(8,10),10);
    let birthmonth=parseInt(dob.value.slice(5,7),10);
    let birthyear=parseInt(dob.value.slice(0,4),10);
    console.log('dob',birthyear,birthmonth,birthday);
    if(currentday>=birthday)
    {
        day=currentday-birthday;
    }
    else{
        day=currentday + new Date(currentyear,currentmonth).getData()-birthday;
        currentmonth--;   
    }
    if(currentmonth>=birthmonth)
    {
        month=currentmonth-birthmonth;
    }
    else{
      month=currentmonth+12-birthmonth;
      currentyear--;  
    }
    year=currentyear-birthyear;
    if(year<0)
    {
       ageText.innerHTML ="enter credentials correctly";
    }
    else
    {
        ageText.innerHTML=year+"years,"+month+"months,"+day+"days";
    }
}
