export const site = {
    name: "Uintah Home Services",
    shortName: "Uintah Home Services",
    legalName: "Uintah Home Services",
    tagline: "Your home, handled.",
    subtagline: "Serving the Uintah Basin",
    description:
        "Handyman, gutter cleaning, painting, and pressure washing in Vernal, Naples, and Roosevelt. Locally owned and operated by Orson Batty.",
    url: "https://uintahhomeservice.com",
    email: "orson@uintahhomeservice.com",
    senderEmail: "quotes@uintahhomeservice.com",
    phone: {
        display: "(435) 790-6267",
        tel: "+14357906267",
    },
    owner: "Orson Batty",
    address: {
        locality: "Vernal",
        region: "UT",
        country: "US",
        postalCode: "84078",
    },
    serviceAreas: ["Vernal", "Naples", "Roosevelt"],
    hours: {
        weekdays: "Monday – Saturday: 7AM – 7PM",
        weekend: "Sunday: By appointment",
    },
    social: {
        facebook: "",
        instagram: "",
    },
    licensed: true,
    insured: true,
    foundedYear: 2020,
} as const

export type Site = typeof site
