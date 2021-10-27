my_profile = {

    "name":"Chetan",
    "age":"24",
    "year_of_passing": "2018",
    "Experience": "2.5",
    "Languages": ["Java Script","Python"],
    "College": "NMIT",
    "Graduate": "B.E",
    "School": "SHS"

}

for(var x in my_profile){                                //loop through all the values of my_profile
    console.log(x,my_profile[x])
}
