var city = [
    "Rajkot",
    "Surat",
    12,
    19,
    "Rajkot"
]


for(i=0; i<city.length; i++){
    if(typeof city[i] !== "string") break
    console.log(city[i]);
}