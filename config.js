
const config = {
    style: "mapbox://styles/mapbox/light-v10",
    accessToken: "pk.eyJ1IjoibWFwYm94LWNvbW11bml0eSIsImEiOiJjazhrbnF1NWIwMHVjM2Zwbmh2OWs2dTI1In0.O8lasZoOGKUihm-HVEZxaQ",
    CSV: "./Mapbeks.csv",
    center: [120.982688, 14.643619], //Lng, Lat
    zoom: 6, //Default zoom
    title: "HIV Testing Facilities",
    description: "Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.",
    sideBarInfo: ["FACILITY NAME", "STREET ADDRESS", "UPDATED TEL NUMBER"],
    popupInfo: ["FACILITY NAME"],
    filters: [
        {
            type: "TYPE",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        },
        {
            type: "checkbox",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: ["filter one", "filter two", "filter three"]
        },
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        }
    ]

};
