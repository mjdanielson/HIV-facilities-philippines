
const config = {
    style: "mapbox://styles/mapbox/light-v10",
    accessToken: "pk.eyJ1IjoibWFwYm94LWNvbW11bml0eSIsImEiOiJja2RlcjQxaHMwOW5qMnp0MW9mNXNxMHRzIn0.dAR-7E76V_GBk32jm1Q1ww",
    CSV: "./Mapbeks.csv",

    //1iZ-k7r0KZiQLC2of8QkWBLX0lJZ1WogBkdEKfEEOOV8
    center: [120.982688, 14.643619], //Lng, Lat
    zoom: 8, //Default zoom
    title: "HIV Testing Facilities",
    description: "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
    sideBarInfo: ["FACILITY NAME", "STREET ADDRESS", "UPDATED TEL NUMBER"],
    popupInfo: ["FACILITY NAME"],
    filters: [
        {
            type: "dropdown",
            title: "Facility Type: ",
            columnHeader: "TYPE",
            listItems: [
                'Treatment Hub',
                'Identified HIV Testing/Counselling Facility',
                'Primary HIV Care Facility'
            ]
        },

        {
            type: "dropdown",
            title: "Class: ",
            columnHeader: "CLASS",
            listItems: [
                'Government',
                'Private',
                'NGO'
            ]
        }

    ]

};
