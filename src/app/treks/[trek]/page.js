import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
// import { useRouter } from "next/navigation";
import TourCategories from "@/components/tours/TourCategories/TourCategories";
import { CommonButton } from "@/components/commonbutton";

// spiritual
// monsoon
// ladkh and spiti valey
// explore the raoad trips---
// south trips---

const tourData = [
  // spiritual
  {
    heading1: " Spiritual Journeys",
    heading2:
      "Find Serenity and Inner Peace: Discover Our Tranquil Spiritual Treks",
    button: "View More ",
    details: [
      {
        id: "1",
        title: "5 DAYS 4 NIGHTS",
        title1: "View itinerary",
        description: "Badrinath Kedarnath Tour",
        image: "badri-kedarnath.jpg",
        amount: 11999,
        location: "Haridwar To Haridwar ",
        region: "Uttarakhand",
        places: ["Dharamshala", "Shimla", "Manali", "Kullu"],
        month: "may",
        difficulty: " Easy to Moderate",
        season: "Winter",
        theme: ["Nature"],
        tourDetails: [
          {
            travelbanner: {
              travelimage: "badri-kedarnath.jpg",
              travelimagefirsttext: "Badrinath ",
              travelimagesecondtext: "Kedarnath Tour",
              traveldays: "5 DAYS 4 NIGHTS",
              reviwsoftrip: "1073",
              starts: "5",
            },

            regions: [
              {
                image: "region.png",
                title: "Region",
                description: "Uttrakhand, India",
              },
              {
                image: "maxaltitude.png",
                title: "Max Altitude",
                description: "11,755 ft",
              },
              {
                image: "trekking.png",
                title: "Trekking Km",
                description: "20 KM",
              },
              {
                image: "diificulties.png",
                title: "Difficulty",
                description: "Easy to Moderate",
              },
            ],
            travelprice: {
              priceperperson: 11999,
            },
            tempopriceDetails: [
              {
                occupancyType: "Quad Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "11999", // Example for another type of occupancy
              },
              {
                occupancyType: "Triple Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "12999",
              },

              {
                occupancyType: "Double Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "13999",
              },
            ],

            gallerysections: [
              "/badri1.jpg",
              "/kedarbadri2.jpg",
              "/kedarbadri3.jpg",
              "/badri4.jpg",
              "/badri5.jpg",
              "/kedarbadri6.jpg",
              "/kedarbadri7.jpg",
            ],

            overviewsdetails1: [
              {
                type: "intro",
                content: [
                  {
                    label: "Tour name:",
                    value: "Badrinath Kedarnath Tour",
                    color: "grey",
                  },
                  {
                    text: "Embark on a cultural and historical journey with Trip My Soul’s Badrinath Kedarnath Tour.",
                  },
                  {
                    text: "This ultimate religious pilgrimage to Kedarnath and Badrinath, two of the four revered Dhams, is cherished by Hindu pilgrims seeking 'Moksha' and serenity.",
                  },
                  {
                    text: "Immerse yourself in the enchanting prayers and rituals of Hinduism, visit the iconic temples, and explore the vibrant confluence of rivers and local markets.",
                  },
                ],
              },
              {
                type: "tour",
                text: "Route",
                text1:
                  "Haridwar,Devprayag,Sonprayag,joshimath, Dhari Devi ,Gaurikund,Kedarnath,Guptkashi,Badrinath,",
                text2: "Duration",
                text3: "5 Days & 4 Nights",
              },
              {
                type: "tour",
                text: "Start Point",
                text1: " (Haridwar,Rishikesh)",
                text2: "End Point",
                text3: "(Haridwar,Rishikesh)",
              },
              {
                type: "tour",
                text: "Adventure Type",
                text1: "Religious Pilgrimage and Sightseeing",
                text2: "Duration",
                text3: "5 Days & 4 Nights",
              },
              {
                type: "tour",
                text: "Base Camp:",
                text1: "Guptkashi",
                text2: "Altitude",
                text3: "3,560 ft",
              },
              {
                type: "tour",
                text: "Stay:",
                text1: "Hotels & Camps",
                text2: "Season",
                text3: "Throughout the Year",
              },
              {
                type: "tour",
                text: "Difficulty Level:",
                text1: "Easy to Moderate",
                text2: "Food",
                text3: "Meals included",
              },
              {
                type: "highlight",
                title: "sightseeing",
                items: [
                  "Visit Kedarnath and Badrinath Temples, significant pilgrimage sites over 1,200 years old.",
                  "Witness the confluence of the Alaknanda and Mandakini Rivers at Rudraprayag.",
                  "Explore the local markets of Rishikesh and iconic landmarks such as Ram Jhula and Laxman Jhula.",
                  "Experience the serene beauty and spiritual ambiance of the Himalayan foothills.",
                ],
              },
              {
                type: "highlightText",
                text: "Meeting Point (Pickup/Drop Point):",
                text1: "(Haridwar,Rishikesh)",
              },
              {
                type: "highlightText",
                text: "Reporting Time :",
                text1: "5:30 am to 6:30 am",
              },
              {
                type: "highlightText",
                text: "Drop Time:",
                text1: "Flexible based on schedule",
              },
            ],

            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            batches: {
              August: [
                { startDate: "1 Aug", endDate: "5 Aug", status: "Open" },
                { startDate: "6 Aug", endDate: "10 Aug", status: "Open" },
                { startDate: "9 Aug", endDate: "13 Aug", status: "Open" },
                { startDate: "15 Aug", endDate: "19 Aug", status: "Open" },
                { startDate: "16 Aug", endDate: "20 Aug", status: "Open" },
                { startDate: "20 Aug", endDate: "24 Aug", status: "Open" },
                { startDate: "23 Aug", endDate: "27 Aug", status: "Open" },
                { startDate: "27 Aug", endDate: "31 Aug", status: "Open" },
                { startDate: "30 Aug", endDate: "3 Sep", status: "Open" },
              ],

              September: [
                { startDate: "01 Sep", endDate: "06 Sep", status: "Open" },
                { startDate: "05 Sep", endDate: "10 Sep", status: "Open" },
                { startDate: "09 Sep", endDate: "14 Sep", status: "Open" },
                { startDate: "12 Sep", endDate: "17 Sep", status: "Open" },
                { startDate: "16 Sep", endDate: "21 Sep", status: "Open" },
                { startDate: "19 Sep", endDate: "24 Sep", status: "Open" },
                { startDate: "23 Sep", endDate: "28 Sep", status: "Open" },
                { startDate: "26 Sep", endDate: "01 Oct", status: "Open" },
                { startDate: "30 Sep", endDate: "05 Oct", status: "Open" },
              ],
              October: [
                { startDate: "03 Oct", endDate: "08 Oct", status: "Open" },
                { startDate: "06 Oct", endDate: "11 Oct", status: "Open" },
                { startDate: "10 Oct", endDate: "15 Oct", status: "Open" },
                { startDate: "13 Oct", endDate: "18 Oct", status: "Open" },
                { startDate: "17 Oct", endDate: "22 Oct", status: "Open" },
                { startDate: "20 Oct", endDate: "25 Oct", status: "Open" },
                { startDate: "24 Oct", endDate: "29 Oct", status: "Open" },
                { startDate: "27 Oct", endDate: "01 Nov", status: "Open" },
                { startDate: "29 Oct", endDate: "03 Nov", status: "Open" },
              ],
            },
            inclusion: [
              {
                img: "rightsign.png",
                title: " Pick-Up time: 5:30 am to 6:30 am",
                description: "Fixed time for pickup ( group)",
              },
              {
                img: "rightsign.png",
                title: "Transportation:",
                description:
                  "Travel in a comfortable and well-maintained vehicle (Innova/Xylo/Similar) for seamless sightseeing throughout the itinerary.",
              },
              {
                img: "rightsign.png",
                title: "Accommodation:",
                description:
                  "Accommodation provided in hygienic and sanitized hotels, offering double and triple sharing options.",
              },
              {
                img: "rightsign.png",
                title: "Meals:",
                description:
                  "Enjoy a delicious buffet breakfast in line with the itinerary to kick-start your day.",
              },
              {
                img: "rightsign.png",
                title: "Driver Cum Guide:",
                description:
                  "Benefit from the expertise of our highly-experienced driver cum guide, ensuring a safe and informative journey.",
              },
              {
                img: "rightsign.png",
                title: "Sightseeing:",
                description:
                  "Explore captivating sights and attractions as per the meticulously planned itinerary.",
              },
            ],
            exclusion: [
              {
                img: "crossSign.png",
                title: "5% GST:",
                description: "Included in the package.",
              },
              {
                img: "crossSign.png",
                title: "Early Check-In at the Hotel:",
                description: "Option available but not included.",
              },
              {
                img: "crossSign.png",
                title: "Personal Expenses:",
                description: "Such as shopping, laundry, or phone calls.",
              },
              {
                img: "crossSign.png",
                title: "Additional Costs for Accommodation or Meals:",
                description: "Resulting from travel delays.",
              },
              {
                img: "crossSign.png",
                title: "Airfare/Rail Fare:",
                description: "Not mentioned in the 'Inclusions' section.",
              },
              {
                img: "crossSign.png",
                title: "Parking Fees and Monument Entry Charges:",
                description: "During sightseeing.",
              },
              {
                img: "crossSign.png",
                title: "Additional Expenses Due to Natural Disasters:",
                description:
                  "Such as flight cancellations, landslides, roadblocks, or other natural calamities.",
              },
              {
                img: "crossSign.png",
                title: "Services Not Specified in Inclusions:",
                description: "Any other services not listed.",
              },
            ],

            cardcontent: [
              {
                iconName: "PlaceOutlinedIcon",
                title: "Pickup & Drop",
                description: "Haridwar To Haridwar",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "TimerOutlinedIcon",
                title: "Duration",
                description: "5days",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "BusinessCenterOutlinedIcon",
                title: "Category",
                description: "Yatra",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "SportsScoreOutlinedIcon",
                title: "Difficulty",
                description: "Easy to Moderate",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
            ],
            thingtopack: [
              {
                img: "pack1.png",
                title: "Rucksack",
                description:
                  "You must pick a good quality backpack with a comfortable fit and straps that won’t give you shoulder pain. You can check out your nearest Decathlon store for a good trekking backpack.",
              },
              {
                img: "pack2.png",
                title: "Day Bag / Day Pack",
                description:
                  "When you head towards the summit, you are required to carry only a few necessary items and for that, you need a day backpack as you will leave your bigger one on the campsite.",
              },
              {
                img: "pack3.png",
                title: "Hiking Shoes",
                description: "Durable footwear designed for rugged terrains.",
              },
              {
                img: "pack4.png",
                title: "Floaters or Sandals",
                description:
                  "Although the entire trek requires a good quality shoe, you still need to let your feet breathe to avoid chafing and blisters. When you are at the camp, a good pair of sandals and floaters will help you to move freely.",
              },
              {
                img: "pack5.png",
                title: "Tees / Tshirts",
                description:
                  "You must keep at least three pairs of quick dry tees so that you can wash them in between stops for proper hygiene.",
              },
              {
                img: "pack6.png",
                title: "Poncho",
                description:
                  "A poncho is an evolved form of a raincoat that provides coverage to your body as well as your bag and ensures total water protection from rain.",
              },
              {
                img: "pack7.png",
                title: "Quick Dry Towel",
                description:
                  "A quick dry towel will help in maintaining proper hygiene. It must dry quickly because the wet fabric will only increase the chance of bacterial growth.",
              },
              {
                img: "pack8.png",
                title: "Sanitizer",
                description:
                  "Essential for maintaining cleanliness while trekking.",
              },
              {
                img: "pack9.png",
                title: "Sun Cap / Hat",
                description:
                  "A lightweight sun cap with side flaps is perfect to keep your head cool and avoid sunburns on a sunny day.",
              },
              {
                img: "pack10.png",
                title: "Sunscreen SPF 40+",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack11.png",
                title: "Water Bottle (Re-usable)",
                description:
                  "Hydration is extremely important when it comes to trekking. Carrying a water bottle that you can refill with Himalayan water is a must.",
              },
              {
                img: "pack12.png",
                title: "Personal Toiletries",
                description:
                  "A bag with all your essentials including napkins, toothpaste, sanitizers, paper soap, etc should be carried in a ziplock bag.",
              },
              {
                img: "pack13.png",
                title: "Personal Medication / First Aid",
                description:
                  "A few cuts and bruises are almost inevitable when you are on a trek so carrying a medical kit with bandages, Dettol, etc is necessary.",
              },
              {
                img: "pack14.png",
                title: "Sun Glasses / Reading Glasses",
                description:
                  "Photochromatic glasses are specs that are designed to transform into anti-glare shades depending upon exposure to the sun. They are good when it comes to eye protection but one can also opt for clip-on glasses etc.",
              },
              {
                img: "pack15.png",
                title: "Charger",
                description:
                  "To keep your electronic devices powered during the trip.",
              },
              {
                img: "pack16.png",
                title: "Power Bank",
                description:
                  "Ensures your devices stay charged when there are no outlets.",
              },
              {
                img: "pack17.png",
                title: "Personal Documents & IDs",
                description:
                  "Identification proofs like Aadhar Card, Drivers License.",
              },
              {
                img: "pack18.png",
                title: "Laundry Bag (Waterproof)",
                description:
                  "In case your clothes get wet or your garments don’t dry, you can carry them in polythene. However, make sure that all the plastic that you are carrying into the woods leaves with you. Don’t litter in the mountains.",
              },
              {
                img: "pack19.png",
                title: "Track Pants",
                description:
                  "A good pair of track pants made of polyester will let your skin breathe. They’re lightweight, dry easily, and comfortable to walk around in. You can easily avoid chafing and rashes by investing in a good pair of track pants.",
              },
              {
                img: "pack20.png",
                title: "Trekking Shoes",
                description:
                  "A good trekking shoe is comfortable, provides ankle support, and has a good grip as well. They shouldn’t be chunky, instead, they should be lightweight and sturdy.",
              },
              {
                img: "pack21.png",
                title: "Cotton Socks",
                description:
                  "Cotton socks are extremely comfortable to move around in and are lightweight as well which is why you can always count on a good pair of cotton socks while trekking. However, keep in mind to change them and avoid wearing them when they are wet.",
              },
              {
                img: "pack22.png",
                title: "Woolen Socks",
                description:
                  "A good pair of woolen socks, especially merino, are comfortable, limit odors and provide adequate insulation from the cold so you can wear them at night.",
              },
              {
                img: "pack23.png",
                title: "Woolen Gloves",
                description:
                  "Insulated gloves help in maintaining proper body heat in your hands and also provide a better grasp on trekking poles.",
              },
              {
                img: "pack24.png",
                title: "Main Jacket",
                description:
                  "It’s emphasized that you need to carry proper layers so you can avoid getting cold which is why you need to carry a heavy jacket that you can put on over your other clothes.",
              },
              {
                img: "pack25.png",
                title: "Woolen Cap",
                description:
                  "A woolen cap will help prevent cold when you ascend to high altitude. You can also cover your ears to avoid any pain and discomfort you might face in them when going at high altitudes.",
              },
              {
                img: "pack26.png",
                title: "Hoodie",
                description:
                  "A versatile layering option for various temperatures.",
              },
              {
                img: "pack27.png",
                title: "Scarf / Balaclava",
                description:
                  "Along with sun rays and chilly winds, you also get hit by dirt and grime during treks which is why it's important to carry a scarf or balaclava so you can cover your face when needed.",
              },
              {
                img: "pack28.png",
                title: "Head Lamp",
                description:
                  "You can’t rely on moonlight when you are in the mountains. A torch or even a headlamp with a fresh pair of batteries is always a good idea to bring along.",
              },
              {
                img: "pack29.png",
                title: "Trekking Pole",
                description:
                  "The trekking pole assists in more than one way. It saves energy while also providing stability and helps you to maintain proper balance.",
              },
              {
                img: "pack30.png",
                title: "Camera",
                description:
                  "This should be obvious. To make sure that you get to capture all the great moments from your trek. Make sure that you have enough storage and some extra batteries as well.",
              },
              {
                img: "pack31.png",
                title: "Riding Gear",
                description: "If your trip involves biking or motorcycling.",
              },
              {
                img: "pack32.png",
                title: "Moisturiser & Cold Cream",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack33.png",
                title: "Lip Balm",
                description:
                  "Your lips can become chapped due to the harsh cold winds so it's important to keep them moisturized.",
              },
              {
                img: "pack34.png",
                title: "Sanitary Pads",
                description: "Essential for feminine hygiene.",
              },
              {
                img: "pack35.png",
                title: "Insect Repellent",
                description: "Guards against pesky bugs and insects.",
              },
              {
                img: "pack36.png",
                title: "Cash",
                description: "Emergency funds for unexpected situations.",
              },
              {
                img: "pack37.png",
                title: "Thermals",
                description:
                  "Thermal is a piece of garment that helps in keeping your body warm in cold temperatures. It is a necessary item that you need when going on a high-altitude trek.",
              },
              {
                img: "pack38.png",
                title: "Snacks / Dryfruits / Energy Bar",
                description: "Provides quick energy on the go.",
              },
              {
                img: "pack39.png",
                title: "Positive Attitude",
                description:
                  "The most important item for a successful trek or trip, keeping your spirits high and adaptable to the challenges of the journey.",
              },
            ],
            itenariesdetails: [
              {
                day: "Day 1",
                description: "Haridwar to Guptkashi (220 kms) | Temple Visit",
                details:
                  "Get picked up from Haridwar/Rishikesh and transfer to Guptkashi in a private vehicle. Enjoy mesmerizing views of the Ganga River along the journey. Witness the confluence of Alaknanda and Bhagirathi rivers at Devprayag. Stop at Srinagar for essentials, as facilities are limited afterwards. Pass by Rudraprayag and Ukhimath on the way. Check-in at the hotel in Guptkashi. Visit ArdhNarishwar Temple (if time permits). Dinner at the hotel and overnight stay.",
              },
              {
                day: "Day 2",
                description:
                  "Guptkashi - Sonprayag - Kedarnath | Visit to Kedarnath Temple",
                details:
                  "Wake up to breathtaking mountain views. Depart early around 5 AM for Kedarnath. Trek from Gaurikund to Kedarnath Temple (16 km one way). Ponies or palanquins are available. Enjoy scenic views of the valley and river stream. Stop for lunch around Rambara. Reach Kedarnath Temple, surrounded by majestic mountains. Indulge in Darshan at Kedarnath Temple. Overnight stay in Kedarnath.",
              },
              {
                day: "Day 3",
                description:
                  "Kedarnath-Sonprayag-Guptkashi | Sightseeing along the Journey",
                details:
                  "Wake up in the serene mountain surroundings. Breakfast at the hotel/homestay. Trek back to Gaurikund (16 km) and drive to Guptkashi. Visit Gauri Kund Temple en route. Check-in at the hotel/homestay in Guptkashi. Rest and overnight stay in Guptkashi.",
              },
              {
                day: "Day 4",
                description: "Guptkashi to Badrinath (210 kms)",
                details:
                  "Breakfast at the hotel. Drive to Badrinath, a holy pilgrimage site. Witness scenic views of the valleys and Alaknanda River. Visit Baniyakund, Joshimath, Govindghat, and Hanuman Chatti en route. Check-in at the hotel in Badrinath. Visit Badrinath Temple and join the evening aarti. Dinner and overnight stay in Badrinath.",
              },
              {
                day: "Day 5",
                description: "Badrinath - Rishikesh",
                details:
                  "Breakfast at the hotel. Check out and transfer to your pre-discussed location for departure.",
              },
            ],

            cardcontentinclusion: [
              { img: "/meal.png", title: "Meals" },
              { img: "/stay.png", title: "Stays" },
              { img: "/car.png", title: "Transfers" },
              { img: "/activities.png", title: "SightSeens" },
            ],
            FaQDetails: [
              {
                title: " What is the Badrinath Kedarnath Tour?",
                answer:
                  " The Badrinath Kedarnath Tour is a 7-day pilgrimage journey through the sacred sites of Badrinath and Kedarnath in Uttarakhand. It involves visiting these prominent temples and experiencing the spiritual and natural beauty of the region.",
              },
              {
                title: "How long does the Badrinath Kedarnath Tour take?",
                answer:
                  "The tour takes 7 days to complete, including travel between Haridwar, Badrinath, and Kedarnath.",
              },
              {
                title:
                  "What is the difficulty level of the Badrinath Kedarnath Tour?",
                answer:
                  "The tour is classified as Moderate. It involves some trekking and high-altitude travel, making it suitable for those with a reasonable level of fitness.",
              },
              {
                title:
                  "What is the maximum altitude of the Badrinath Kedarnath Tour?",
                answer:
                  "The maximum altitude reached during the tour is approximately 11,750 feet at Kedarnath.",
              },
              {
                title: "What is included in the tour package?",
                answer:
                  " The package includes transportation from Haridwar to Haridwar, accommodation in hotels or guest houses, meals (vegetarian), guided tours, and necessary permits.",
              },
              {
                title: "What should I pack for the Badrinath Kedarnath Tour?",
                answer:
                  " Essential items include warm clothing, trekking shoes, a good quality backpack, water bottles, sunscreen, personal medication, and a camera. A detailed packing list will be provided upon booking.",
              },
              {
                title:
                  "When is the best time to do the Badrinath Kedarnath Tour?",
                answer:
                  " The best time to undertake the Badrinath Kedarnath Tour is in May, during the pre-monsoon season, for favorable weather and clear views.",
              },
              {
                title: "What is the cost of the Badrinath Kedarnath Tour?",
                answer: "The cost of the tour is INR 5,000 per person.",
              },
              {
                title: "How can I book the Badrinath Kedarnath Tour?",
                answer:
                  " You can book the tour through our website or contact us directly for more details and availability.",
              },
              {
                title:
                  "Are there any additional costs not covered in the tour package?",
                answer:
                  "Exclusions may include personal expenses, meals not mentioned in the package, and additional costs due to natural calamities or delays. Details will be provided upon booking.",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        title: "9 DAYS 8 NIGHTS",
        title1: "View itinerary",
        description: "Chardham Yatra Package",
        image: "chardhamyatra.png",
        amount: 21999,
        location: "Haridwar To Haridwar",
        region: "Uttrakhand",
        places: ["Haridwar"],
        month: "January",
        difficulty: "Medium",
        season: "Autumn",
        theme: ["Adventure"],
        tourDetails: [
          {
            travelbanner: {
              travelimage: "chardhambanner.jpg",
              travelimagefirsttext: "Chardham Yatra  ",
              travelimagesecondtext: "Package",
              traveldays: "9 Days 8 Nights",
              reviwsoftrip: "1073",
              starts: "9",
            },
            regions: [
              {
                image: "region.png",
                title: "Region",
                description: "Uttrakhand, India",
              },
              {
                image: "maxaltitude.png",
                title: "Max Altitude",
                description: "11735 ft",
              },
              {
                image: "trekking.png",
                title: "Trekking Km",
                description: "46 km ",
              },
              {
                image: "diificulties.png",
                title: "Difficulty",
                description: "Medium",
              },
            ],
            travelprice: {
              priceperperson: 21999,
            },
            tempopriceDetails: [
              {
                occupancyType: "Quad Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "21999", // Example for another type of occupancy
              },
              {
                occupancyType: "Triple Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "22999",
              },

              {
                occupancyType: "Double Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "23999",
              },
            ],
            gallerysections: [
              "/dham1.jpg",
              "/dham2.jpg",
              "/dham3.jpg",
              "/dham4.jpg",
              "/dham5.jpg",
              "/dham6.jpg",
              "/dham7.jpg",
            ],
            overviewsdetails1: [
              {
                type: "intro",
                content: [
                  {
                    label: "Tour name:",
                    value: "Chardham Yatra",
                    color: "grey",
                  },
                  {
                    text: "Embark on the sacred journey of the Chardham Yatra, a pilgrimage to the four prominent Hindu temples believed to grant 'Moksha' to the wandering souls.",
                  },
                  {
                    text: "Commence from Haridwar, culminating in Badrinath amidst the majestic Himalayan hills and breathtaking vistas.",
                  },
                  {
                    text: "Experience divine ambiance, serene treks, and spiritual moments throughout this spiritual odyssey.",
                  },
                ],
              },
              {
                type: "tour",
                text: "Destination Covered",
                text1:
                  "Haridwar-Dehradun-Barkot-Yamunotri Uttarkashi-Gangotri-Guptkashi-Kedarnath-Badrinath-Rudraprayag-Haridwar",
                text2: "Country",
                text3: "India",
              },
              {
                type: "tour",
                text: "Adventure Type",
                text1: "Pilgrimage and Sightseeing",
                text2: "Duration",
                text3: "9 Days 8 Nights",
              },
              {
                type: "tour",
                text: "Base Camp:",
                text1: "Haridwar",
                text2: "Altitude",
                text3: "Varies",
              },
              {
                type: "tour",
                text: "Stay:",
                text1: "Hotels & Guesthouses",
                text2: "Season",
                text3: "All Year Round",
              },
              {
                type: "tour",
                text: "Difficulty Level:",
                text1: "Moderate",
                text2: "Food",
                text3: "Meals included",
              },
              {
                type: "tour",
                text: "Trail Type",
                text1: "Sacred Temples & Scenic Routes",
                text2: "Rail Head",
                text3: "Haridwar",
              },
              {
                type: "tour",
                text: "Month",
                text1: "March to November",
              },
              {
                type: "highlight",
                title: "Highlights",
                items: [
                  "Sacred pilgrimage to the four prominent Hindu temples.",
                  "Serene treks through the Himalayan landscape.",
                  "Spiritual experiences and breathtaking vistas.",
                ],
              },
              {
                type: "highlightText",
                text: "Meeting Point (Pickup/Drop Point):",
                text1: "Haridwar",
              },
              {
                type: "highlightText",
                text: "Reporting Time :",
                text1: "Flexible based on arrival",
              },
              {
                type: "highlightText",
                text: "Drop Time:",
                text1: "Flexible based on departure",
              },
            ],

            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            batches: {
              August: [
                { startDate: "02 Aug", endDate: "07 Aug", status: "Open" },
                { startDate: "06 Aug", endDate: "11 Aug", status: "Open" },
                { startDate: "08 Aug", endDate: "13 Aug", status: "Open" },
                { startDate: "12 Aug", endDate: "17 Aug", status: "Open" },
                { startDate: "14 Aug", endDate: "19 Aug", status: "Open" },
                { startDate: "16 Aug", endDate: "21 Aug", status: "Open" },
                { startDate: "20 Aug", endDate: "25 Aug", status: "Open" },
                { startDate: "23 Aug", endDate: "28 Aug", status: "Open" },
                { startDate: "27 Aug", endDate: "01 Sep", status: "Open" },
                { startDate: "30 Aug", endDate: "04 Sep", status: "Open" },
              ],

              September: [
                { startDate: "03 Sep", endDate: "08 Sep", status: "Open" },
                { startDate: "08 Sep", endDate: "13 Sep", status: "Open" },
                { startDate: "10 Sep", endDate: "15 Sep", status: "Open" },
                { startDate: "13 Sep", endDate: "18 Sep", status: "Open" },
                { startDate: "17 Sep", endDate: "22 Sep", status: "Open" },
                { startDate: "20 Sep", endDate: "25 Sep", status: "Open" },
                { startDate: "24 Sep", endDate: "29 Sep", status: "Open" },
                { startDate: "27 Sep", endDate: "02 Oct", status: "Open" },
                { startDate: "30 Sep", endDate: "05 Oct", status: "Open" },
              ],

              October: [
                { startDate: "02 Oct", endDate: "07 Oct", status: "Open" },
                { startDate: "05 Oct", endDate: "10 Oct", status: "Open" },
                { startDate: "09 Oct", endDate: "14 Oct", status: "Open" },
                { startDate: "12 Oct", endDate: "17 Oct", status: "Open" },
                { startDate: "16 Oct", endDate: "21 Oct", status: "Open" },
                { startDate: "19 Oct", endDate: "24 Oct", status: "Open" },
                { startDate: "22 Oct", endDate: "27 Oct", status: "Open" },
                { startDate: "25 Oct", endDate: "30 Oct", status: "Open" },
                { startDate: "29 Oct", endDate: "03 Nov", status: "Open" },
              ],
            },

            inclusion: [
              {
                img: "rightsign.png",
                title: "Accommodation:",
                description:
                  "9 Days 8 Nights Accommodation in Standard Category of hotels/Home stays/Guest Houses/Camps on Triple and Quad sharing basis.",
              },
              {
                img: "rightsign.png",
                title: "Meals:",
                description:
                  "Meals as per the itinerary (Breakfast and Dinner) on MAP basis in Guptkashi, Kedarnath & Badrinath (basic Indian vegetarian meals).",
              },
              {
                img: "rightsign.png",
                title: "Transportation:",
                description:
                  "Transportation using private vehicles on sharing basis from Haridwar/Rishikesh till Haridwar/Rishikesh as per the itinerary.",
              },
              {
                img: "rightsign.png",
                title: "Taxes and Allowances:",
                description:
                  "All toll tax, parking, fuel, Green Tax, and driver allowances.",
              },
            ],
            exclusion: [
              {
                img: "crossSign.png",
                title: "5% GST:",
                description: "On Invoice Amount.",
              },
              {
                img: "crossSign.png",
                title: "Travel/Health Insurance:",
                description: "Recommended for each traveler.",
              },
              {
                img: "crossSign.png",
                title: "Meals/Snacks/Beverages:",
                description: "During the trip and transportation.",
              },
              {
                img: "crossSign.png",
                title: "Medical Expenses:",
                description: "Any medical expenses.",
              },
              {
                img: "crossSign.png",
                title: "Airport Pickup and Drop Services:",
                description: "",
              },
              {
                img: "crossSign.png",
                title: "Local Taxi Charges:",
                description: "From Sonprayag to Gaurikund and back.",
              },
              {
                img: "crossSign.png",
                title: "Pony Cost for Kedarnath Trek:",
                description: "Additional cost.",
              },
              {
                img: "crossSign.png",
                title: "Helicopter Charges:",
                description: "Additional cost.",
              },
              {
                img: "crossSign.png",
                title: "Rituals or Pooja Expenses:",
                description: "",
              },
            ],
            itenariesdetails: [
              {
                day: "Day 01",
                description: "HARIDWAR - BARKOT (205 KM / 7 TO 8 HRS)",
                details:
                  "This morning depart for Barkot, located on the foot of Yamunotri. On arrival at Barkot, check-in to your hotel/ camp. Rest of the day is free to relax and store your energy for the Pahad (hill) Yatra of Yamunotri the next day. Dinner and Overnight stay at Barkot.",
              },
              {
                day: "Day 02",
                description:
                  " BARKOT-Yamunotri-BARKOT ( 148 KM / 3 HRSDRIVE & START TREK 05 KM EACH SIDE)",
                details:
                  "After breakfast, depart for Hanumanchatti (40 Km), Janki Chatti (8 km). Here you will begin the trek Yamunotri (5 Km trek).You can hire a Doli or a horse, for your trek (Cost Not Included).The trek passes through a lush green valley, a profusion of conifers, rhododendrons, cacti, and several species of Himalayan shrubs. Yamunotri (altitude 3,291 m), the westernmost shrine of the Char Dhams, is dominated by Banderpunch (6,361 m). Yamunotri is the source of the river Yamuna, the twin sister of Varna, the Lord of Death. On arrival by afternoon in Yamunotri take a holy dip in Yamuna River and perform Pooja, and take the same route back to Barkot, check-in at Hotel / Camp. Dinner and Overnight stay at hotel in Barkot.",
              },
              {
                day: "Day 03",
                description: "BARKOT - UTTARKASHI (100 KM/ 4 HRS JOURNEY)",
                details:
                  "After breakfast check out from the Barkot hotel and drive to Uttarkashi. On arrival check-in into the hotel. Uttarkashi is situated on the banks of the river Bhagirathi and is famous for its historical monuments, Temples & Ashrams. In the evening, Visit the famous Vishwanath Temple. Dinner and Overnight stay at Uttarkashi",
              },
              {
                day: "Day 04",
                description:
                  "Uttarkashi to Gangotri-Uttarkashi (100 KM / 3 TO 4 HRS EACH SIDE)",
                details:
                  "Early morning breakfast at the hotel and drive to Gangotri.Nestled in the magnificent Garhwal Himalayas, Upon arrival at Gangotri take a holy dip in the sacred river Ganges which is also called Bhagirathi at its origin Visit the Gangotri Temple.Ganga is believed to have touched earth at this spot. The temple is an exquisite 20 ft. high structure made of white granite. After performing Pooja Late afternoon drive back to Uttarkashi. Dinner & Overnight stay at Uttarkashi.",
              },
              {
                day: "Day 05",
                description: "UTTARKASHI - GUPTKASHI (190 KM / 8 TO 9 HRS)",
                details:
                  "After early morning breakfast check out from the hotel and drive for Guptkashi. On arrival check-in at the hotel.Rest of the day free to explore the Guptkashi town. Dinner and Overnight stay in Guptkashi hotel/Camps.Rest of the day free to explore the Guptkashi town. Dinner and Overnight stay in Guptkashi hotel/Camps.",
              },
              {
                day: "Day 06",
                description:
                  "GUPTKASHI - SONPRAYAG - KEDARNATH(30 KM + 20 KM TREK ONE WAY)",
                details:
                  "After the early morning breakfast, check out from the hotel and drive to Sonprayag. The 20 km trek to Kedarnath starts from Sonprayag. For your convenience on your trek, Hire a Doli, Palki, Pony, or a Horse at your own cost.Visit Kedarnath Temple and Overnight stay is arranged here.",
              },
              {
                day: "Day 07",
                description:
                  "KEDARNATH - SONPRAYAG - GUPTKASHI KEDARNATH - SONPRAYAG - GUPTKASHI",
                details:
                  "Early morning you get up before dawn and after taking bath you are at the temple by 4:45 am for the 'Abhishek' to Kedarnath Shiva. Later you'll start the return trek of 20 km from Kedarnath to Sonprayag. The vehicles wait for you in Sonprayag Car Parking and you'll drive to your hotel (Guptkashi). Dinner and Overnight at Guptkashi.",
              },
              {
                day: "Day 08",
                description:
                  "GUPTKASHI - JOSHIMATH - BADRINATH(190 KM OR 240 KMS / 8TO 9 HRS)",
                details:
                  "This morning, you check out of the hotel at 07:00 am and drive to Badrinath via Joshimath. After driving through some wonderful Ghat road you arrive at Badrinath. On arrival check into the hotel. After some you are all set to go to Badrinath Temple for darshan in the evening. But first, you have to go to Tapt Kund (Hot Spring), take bath and then go to the temple. Dedicated to Lord Vishnu, the temple of Shri Badrinath Ji is 15 meters in height, built in the form of a cone with a small cupola of a gilt bull and spire. Later back to hotel. Dinner and Overnight stay at hotel.",
              },
              {
                day: "Day 09",
                description:
                  " DRIVE FROM BADRINATH TO RISHIKESH/HARIDWAR (DISTANCE: 300 KM)",
                details:
                  "Morning after Breakfast Time to head back home after your Yatra",
              },
            ],

            cardcontent: [
              {
                iconName: "PlaceOutlinedIcon",
                title: "Pickup & Drop",
                description: "Haridwar To Haridwar",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "TimerOutlinedIcon",
                title: "Duration",
                description: "9 Days 8 Nights",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "BusinessCenterOutlinedIcon",
                title: "Category",
                description: "Yatra",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "SportsScoreOutlinedIcon",
                title: "Difficulty",
                description: "Medium",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
            ],
            thingtopack: [
              {
                img: "pack1.png",
                title: "Rucksack",
                description:
                  "You must pick a good quality backpack with a comfortable fit and straps that won’t give you shoulder pain. You can check out your nearest Decathlon store for a good trekking backpack.",
              },
              {
                img: "pack2.png",
                title: "Day Bag / Day Pack",
                description:
                  "When you head towards the summit, you are required to carry only a few necessary items and for that, you need a day backpack as you will leave your bigger one on the campsite.",
              },
              {
                img: "pack3.png",
                title: "Hiking Shoes",
                description: "Durable footwear designed for rugged terrains.",
              },
              {
                img: "pack4.png",
                title: "Floaters or Sandals",
                description:
                  "Although the entire trek requires a good quality shoe, you still need to let your feet breathe to avoid chafing and blisters. When you are at the camp, a good pair of sandals and floaters will help you to move freely.",
              },
              {
                img: "pack5.png",
                title: "Tees / Tshirts",
                description:
                  "You must keep at least three pairs of quick dry tees so that you can wash them in between stops for proper hygiene.",
              },
              {
                img: "pack6.png",
                title: "Poncho",
                description:
                  "A poncho is an evolved form of a raincoat that provides coverage to your body as well as your bag and ensures total water protection from rain.",
              },
              {
                img: "pack7.png",
                title: "Quick Dry Towel",
                description:
                  "A quick dry towel will help in maintaining proper hygiene. It must dry quickly because the wet fabric will only increase the chance of bacterial growth.",
              },
              {
                img: "pack8.png",
                title: "Sanitizer",
                description:
                  "Essential for maintaining cleanliness while trekking.",
              },
              {
                img: "pack9.png",
                title: "Sun Cap / Hat",
                description:
                  "A lightweight sun cap with side flaps is perfect to keep your head cool and avoid sunburns on a sunny day.",
              },
              {
                img: "pack10.png",
                title: "Sunscreen SPF 40+",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack11.png",
                title: "Water Bottle (Re-usable)",
                description:
                  "Hydration is extremely important when it comes to trekking. Carrying a water bottle that you can refill with Himalayan water is a must.",
              },
              {
                img: "pack12.png",
                title: "Personal Toiletries",
                description:
                  "A bag with all your essentials including napkins, toothpaste, sanitizers, paper soap, etc should be carried in a ziplock bag.",
              },
              {
                img: "pack13.png",
                title: "Personal Medication / First Aid",
                description:
                  "A few cuts and bruises are almost inevitable when you are on a trek so carrying a medical kit with bandages, Dettol, etc is necessary.",
              },
              {
                img: "pack14.png",
                title: "Sun Glasses / Reading Glasses",
                description:
                  "Photochromatic glasses are specs that are designed to transform into anti-glare shades depending upon exposure to the sun. They are good when it comes to eye protection but one can also opt for clip-on glasses etc.",
              },
              {
                img: "pack15.png",
                title: "Charger",
                description:
                  "To keep your electronic devices powered during the trip.",
              },
              {
                img: "pack16.png",
                title: "Power Bank",
                description:
                  "Ensures your devices stay charged when there are no outlets.",
              },
              {
                img: "pack17.png",
                title: "Personal Documents & IDs",
                description:
                  "Identification proofs like Aadhar Card, Drivers License.",
              },
              {
                img: "pack18.png",
                title: "Laundry Bag (Waterproof)",
                description:
                  "In case your clothes get wet or your garments don’t dry, you can carry them in polythene. However, make sure that all the plastic that you are carrying into the woods leaves with you. Don’t litter in the mountains.",
              },
              {
                img: "pack19.png",
                title: "Track Pants",
                description:
                  "A good pair of track pants made of polyester will let your skin breathe. They’re lightweight, dry easily, and comfortable to walk around in. You can easily avoid chafing and rashes by investing in a good pair of track pants.",
              },
              {
                img: "pack20.png",
                title: "Trekking Shoes",
                description:
                  "A good trekking shoe is comfortable, provides ankle support, and has a good grip as well. They shouldn’t be chunky, instead, they should be lightweight and sturdy.",
              },
              {
                img: "pack21.png",
                title: "Cotton Socks",
                description:
                  "Cotton socks are extremely comfortable to move around in and are lightweight as well which is why you can always count on a good pair of cotton socks while trekking. However, keep in mind to change them and avoid wearing them when they are wet.",
              },
              {
                img: "pack22.png",
                title: "Woolen Socks",
                description:
                  "A good pair of woolen socks, especially merino, are comfortable, limit odors and provide adequate insulation from the cold so you can wear them at night.",
              },
              {
                img: "pack23.png",
                title: "Woolen Gloves",
                description:
                  "Insulated gloves help in maintaining proper body heat in your hands and also provide a better grasp on trekking poles.",
              },
              {
                img: "pack24.png",
                title: "Main Jacket",
                description:
                  "It’s emphasized that you need to carry proper layers so you can avoid getting cold which is why you need to carry a heavy jacket that you can put on over your other clothes.",
              },
              {
                img: "pack25.png",
                title: "Woolen Cap",
                description:
                  "A woolen cap will help prevent cold when you ascend to high altitude. You can also cover your ears to avoid any pain and discomfort you might face in them when going at high altitudes.",
              },
              {
                img: "pack26.png",
                title: "Hoodie",
                description:
                  "A versatile layering option for various temperatures.",
              },
              {
                img: "pack27.png",
                title: "Scarf / Balaclava",
                description:
                  "Along with sun rays and chilly winds, you also get hit by dirt and grime during treks which is why it's important to carry a scarf or balaclava so you can cover your face when needed.",
              },
              {
                img: "pack28.png",
                title: "Head Lamp",
                description:
                  "You can’t rely on moonlight when you are in the mountains. A torch or even a headlamp with a fresh pair of batteries is always a good idea to bring along.",
              },
              {
                img: "pack29.png",
                title: "Trekking Pole",
                description:
                  "The trekking pole assists in more than one way. It saves energy while also providing stability and helps you to maintain proper balance.",
              },
              {
                img: "pack30.png",
                title: "Camera",
                description:
                  "This should be obvious. To make sure that you get to capture all the great moments from your trek. Make sure that you have enough storage and some extra batteries as well.",
              },
              {
                img: "pack31.png",
                title: "Riding Gear",
                description: "If your trip involves biking or motorcycling.",
              },
              {
                img: "pack32.png",
                title: "Moisturiser & Cold Cream",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack33.png",
                title: "Lip Balm",
                description:
                  "Your lips can become chapped due to the harsh cold winds so it's important to keep them moisturized.",
              },
              {
                img: "pack34.png",
                title: "Sanitary Pads",
                description: "Essential for feminine hygiene.",
              },
              {
                img: "pack35.png",
                title: "Insect Repellent",
                description: "Guards against pesky bugs and insects.",
              },
              {
                img: "pack36.png",
                title: "Cash",
                description: "Emergency funds for unexpected situations.",
              },
              {
                img: "pack37.png",
                title: "Thermals",
                description:
                  "Thermal is a piece of garment that helps in keeping your body warm in cold temperatures. It is a necessary item that you need when going on a high-altitude trek.",
              },
              {
                img: "pack38.png",
                title: "Snacks / Dryfruits / Energy Bar",
                description: "Provides quick energy on the go.",
              },
              {
                img: "pack39.png",
                title: "Positive Attitude",
                description:
                  "The most important item for a successful trek or trip, keeping your spirits high and adaptable to the challenges of the journey.",
              },
            ],

            cardcontentinclusion: [
              { img: "/meal.png", title: "Meals" },
              { img: "/stay.png", title: "Stays" },
              { img: "/car.png", title: "Transfers" },
              { img: "/activities.png", title: "SightSeens" },
            ],
            FaQDetails: [
              {
                title: "What is the Chardham Yatra Package?",
                answer:
                  " The Chardham Yatra Package is a 10-day pilgrimage tour covering the four sacred sites of Yamunotri, Gangotri, Kedarnath, and Badrinath in Uttarakhand. This comprehensive package offers a spiritual journey through the heart of the Himalayas.",
              },
              {
                title: "How long does the Chardham Yatra Package take?",
                answer:
                  "The tour takes 10 days to complete, including travel and pilgrimage visits to all four sacred sites.",
              },
              {
                title:
                  " What is the difficulty level of the Chardham Yatra Package?",
                answer:
                  " The package is classified as Hard due to the challenging terrain, high altitudes, and extended travel involved. It is suitable for experienced travelers and those in good physical condition.",
              },
              {
                title:
                  "What is the maximum altitude of the Chardham Yatra Package?",
                answer:
                  "The maximum altitude reached during the tour is approximately 12,000 feet at Kedarnath.",
              },
              {
                title: " What is included in the tour package?",
                answer:
                  " The package includes transportation from Haridwar to Haridwar, accommodation in hotels or guest houses, meals (vegetarian), guided tours, and necessary permits.",
              },
              {
                title: "What should I pack for the Chardham Yatra Package?",
                answer:
                  "Essential items include warm clothing, trekking shoes, a good quality backpack, water bottles, sunscreen, personal medication, and a camera. A detailed packing list will be provided upon booking.",
              },
              {
                title:
                  " When is the best time to do the Chardham Yatra Package?",
                answer:
                  "The best time to undertake the Chardham Yatra is in January during the autumn season, offering clear views and favorable weather conditions.",
              },
              {
                title: "What is the cost of the Chardham Yatra Package?",
                answer: "The cost of the package is INR 32,890 per person.",
              },
              {
                title: "How can I book the Chardham Yatra Package?",
                answer:
                  "You can book the package through our website or contact us directly for more details and availability.",
              },
              {
                title:
                  "Are there any additional costs not covered in the tour package?",
                answer:
                  " Exclusions may include personal expenses, meals not mentioned in the package, and additional costs due to natural calamities or delays. Details will be provided upon booking.",
              },
            ],
          },
        ],
      },
      {
        id: "3",
        title: "5 DAY 4 Nights",
        title1: "View itinerary",
        description: "Do Dham And Tungnath",
        image: "dodhamcard.png",
        amount: 14999,
        location: "Haridwar To Haridwar",
        region: "Uttrakhand",
        places: ["Haridwar"],
        month: "January",
        difficulty: "Easy",
        season: "Winter",
        theme: ["Beginner"],
        tourDetails: [
          {
            travelbanner: {
              travelimage: "dodhambanner.jpg",
              travelimagefirsttext: "Do Dham And  ",
              travelimagesecondtext: "Tungnath Yatra",
              traveldays: "5 DAY 4 Nights",
              reviwsoftrip: "1073",
              starts: "5",
            },
            regions: [
              {
                image: "region.png",
                title: "Region",
                description: "Uttrakhand, India",
              },
              {
                image: "maxaltitude.png",
                title: "Max Altitude",
                description: "10,010 ft",
              },
              {
                image: "trekking.png",
                title: "Trekking Km",
                description: "",
              },
              {
                image: "diificulties.png",
                title: "Difficulty",
                description: "Easy to Moderate",
              },
            ],
            travelprice: {
              priceperperson: 14999,
            },
            tempopriceDetails: [
              {
                occupancyType: "Quad Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "14999", // Example for another type of occupancy
              },
              {
                occupancyType: "Triple Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "15999",
              },

              {
                occupancyType: "Double Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "16999",
              },
            ],
            gallerysections: [
              "https://swiperjs.com/demos/images/nature-1.jpg",
              "https://swiperjs.com/demos/images/nature-2.jpg",
              "https://swiperjs.com/demos/images/nature-3.jpg",
              "https://swiperjs.com/demos/images/nature-4.jpg",
              "https://swiperjs.com/demos/images/nature-5.jpg",
              "https://swiperjs.com/demos/images/nature-6.jpg",
              "https://swiperjs.com/demos/images/nature-7.jpg",
              "https://swiperjs.com/demos/images/nature-8.jpg",
              "https://swiperjs.com/demos/images/nature-9.jpg",
              "https://swiperjs.com/demos/images/nature-10.jpg",
            ],

            overviewsdetails1: [
              {
                type: "intro",
                content: [
                  {
                    label: "Tour name:",
                    value: "Uttarakhand Pilgrimage Trek",
                    color: "grey",
                  },
                  {
                    text: "Embark on a soulful journey through the divine landscapes of Uttarakhand with Trip My Soul.",
                  },
                  {
                    text: "Experience the spiritual aura of Kedarnath and Badrinath, explore the serene beauty of Chopta and Mana Village, and immerse yourself in the tranquility of the Himalayas.",
                  },
                  {
                    text: "Our expertly crafted 5-day/4-night itinerary ensures a seamless and fulfilling experience with comfortable accommodations, delicious meals, and reliable transportation.",
                  },
                ],
              },
              {
                type: "tour",
                text: "Location",
                text1: "Uttarakhand, India",
                text2: "Country",
                text3: "India",
              },
              {
                type: "tour",
                text: "Adventure Type",
                text1: "Pilgrimage and Scenic Exploration",
                text2: "Duration",
                text3: "5 Days / 4 Nights",
              },
              {
                type: "tour",
                text: "Base Camp:",
                text1: "Barkot, Uttarkashi, Guptkashi, Kedarnath, Badrinath",
                text2: "Altitude",
                text3: "Various",
              },
              {
                type: "tour",
                text: "Stay:",
                text1: "Hotels, Guest Houses, and Camps",
                text2: "Season",
                text3: "Year-Round",
              },
              {
                type: "tour",
                text: "Difficulty Level:",
                text1: "Easy to Moderate",
                text2: "Food",
                text3: "Meals included as per itinerary",
              },
              {
                type: "tour",
                text: "Trail Type",
                text1: "Sacred Temples & Scenic Routes",
                text2: "Rail Head",
                text3: "Haridwar",
              },
              {
                type: "tour",
                text: "Month",
                text1: "Available throughout the year",
              },
              {
                type: "highlight",
                title: "Highlights",
                items: [
                  "Visit to Kedarnath and Badrinath, two of the Char Dham pilgrimage sites.",
                  "Exploration of scenic locations such as Chopta and Mana Village.",
                  "Opportunity to witness the majestic landscapes of the Himalayas.",
                  "Comfortable accommodations and transportation included.",
                  "Guided tours and spiritual experiences tailored to enhance your journey.",
                ],
              },
              {
                type: "highlightText",
                text: "Meeting Point (Pickup/Drop Point):",
                text1: "Haridwar",
              },
              {
                type: "highlightText",
                text: "Reporting Time:",
                text1: "Flexible as per travel arrangements",
              },
              {
                type: "highlightText",
                text: "Drop Time:",
                text1: "Flexible based on departure",
              },
            ],

            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            batches: {
              August: [
                { startDate: "03 Aug", endDate: "08 Aug", status: "Open" },
                { startDate: "07 Aug", endDate: "12 Aug", status: "Open" },
                { startDate: "11 Aug", endDate: "16 Aug", status: "Open" },
                { startDate: "13 Aug", endDate: "18 Aug", status: "Open" },
                { startDate: "15 Aug", endDate: "20 Aug", status: "Open" },
                { startDate: "17 Aug", endDate: "22 Aug", status: "Open" },
                { startDate: "21 Aug", endDate: "26 Aug", status: "Open" },
                { startDate: "24 Aug", endDate: "29 Aug", status: "Open" },
                { startDate: "28 Aug", endDate: "02 Sep", status: "Open" },
                { startDate: "31 Aug", endDate: "05 Sep", status: "Open" },
              ],

              September: [
                { startDate: "02 Sep", endDate: "07 Sep", status: "Open" },
                { startDate: "07 Sep", endDate: "12 Sep", status: "Open" },
                { startDate: "11 Sep", endDate: "16 Sep", status: "Open" },
                { startDate: "15 Sep", endDate: "20 Sep", status: "Open" },
                { startDate: "18 Sep", endDate: "23 Sep", status: "Open" },
                { startDate: "21 Sep", endDate: "26 Sep", status: "Open" },
                { startDate: "25 Sep", endDate: "30 Sep", status: "Open" },
                { startDate: "28 Sep", endDate: "03 Oct", status: "Open" },
                { startDate: "30 Sep", endDate: "05 Oct", status: "Open" },
              ],

              October: [
                { startDate: "01 Oct", endDate: "06 Oct", status: "Open" },
                { startDate: "04 Oct", endDate: "09 Oct", status: "Open" },
                { startDate: "08 Oct", endDate: "13 Oct", status: "Open" },
                { startDate: "11 Oct", endDate: "16 Oct", status: "Open" },
                { startDate: "14 Oct", endDate: "19 Oct", status: "Open" },
                { startDate: "18 Oct", endDate: "23 Oct", status: "Open" },
                { startDate: "21 Oct", endDate: "26 Oct", status: "Open" },
                { startDate: "26 Oct", endDate: "31 Oct", status: "Open" },
                { startDate: "29 Oct", endDate: "03 Nov", status: "Open" },
              ],
            },
            inclusion: [
              {
                img: "rightsign.png",
                title: "Accommodation:",
                description:
                  "Accommodation in Standard Category hotels/Home stays/Guest Houses/Camps on Triple and Quad sharing basis.",
              },
              {
                img: "rightsign.png",
                title: "Meals:",
                description:
                  "Meals on MAP basis in Guptkashi, Kedarnath & Badrinath (Breakfast and Dinner).",
              },
              {
                img: "rightsign.png",
                title: "Transportation:",
                description:
                  "Private vehicle transportation from Haridwar/Rishikesh.",
              },
              {
                img: "rightsign.png",
                title: "Expenses:",
                description:
                  "Toll tax, parking, fuel, Green Tax, and driver allowances included.",
              },
            ],

            exclusion: [
              {
                img: "crossSign.png",
                title: "GST (5%) on Invoice Amount:",
                description: "Applicable extra.",
              },
              {
                img: "crossSign.png",
                title: "Travel/Health Insurance:",
                description: "Recommended for each traveler.",
              },
              {
                img: "crossSign.png",
                title: "Meals/Snacks/Beverages during the trip:",
                description: "Not included in the package.",
              },
              {
                img: "crossSign.png",
                title: "Medical Expenses:",
                description: "Any medical expenses incurred during the trip.",
              },
              {
                img: "crossSign.png",
                title: "Airport Pickup and Drop Services:",
                description: "Not included in the package.",
              },
              {
                img: "crossSign.png",
                title: "Local Taxi Charges from Sonprayag to Gaurikund:",
                description: "Additional cost.",
              },
              {
                img: "crossSign.png",
                title: "Any Other Fee/Charges Not Mentioned:",
                description: "Additional costs as applicable.",
              },
              {
                img: "crossSign.png",
                title: "Pony Cost for Kedarnath Trek:",
                description: "Additional cost if opted.",
              },
              {
                img: "crossSign.png",
                title: "Helicopter Charges:",
                description: "Additional cost if opted.",
              },
              {
                img: "crossSign.png",
                title: "Rituals or Pooja Expenses:",
                description: "Any additional costs for rituals or pooja.",
              },
            ],

            cardcontent: [
              {
                iconName: "PlaceOutlinedIcon",
                title: "Pickup & Drop",
                description: "Haridwar To Haridwar",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "TimerOutlinedIcon",
                title: "Duration",
                description: "6 Days",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "BusinessCenterOutlinedIcon",
                title: "Category",
                description: "Yatra",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "SportsScoreOutlinedIcon",
                title: "Difficulty",
                description: "Easy",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
            ],
            thingtopack: [
              {
                img: "pack1.png",
                title: "Rucksack",
                description:
                  "You must pick a good quality backpack with a comfortable fit and straps that won’t give you shoulder pain. You can check out your nearest Decathlon store for a good trekking backpack.",
              },
              {
                img: "pack2.png",
                title: "Day Bag / Day Pack",
                description:
                  "When you head towards the summit, you are required to carry only a few necessary items and for that, you need a day backpack as you will leave your bigger one on the campsite.",
              },
              {
                img: "pack3.png",
                title: "Hiking Shoes",
                description: "Durable footwear designed for rugged terrains.",
              },
              {
                img: "pack4.png",
                title: "Floaters or Sandals",
                description:
                  "Although the entire trek requires a good quality shoe, you still need to let your feet breathe to avoid chafing and blisters. When you are at the camp, a good pair of sandals and floaters will help you to move freely.",
              },
              {
                img: "pack5.png",
                title: "Tees / Tshirts",
                description:
                  "You must keep at least three pairs of quick dry tees so that you can wash them in between stops for proper hygiene.",
              },
              {
                img: "pack6.png",
                title: "Poncho",
                description:
                  "A poncho is an evolved form of a raincoat that provides coverage to your body as well as your bag and ensures total water protection from rain.",
              },
              {
                img: "pack7.png",
                title: "Quick Dry Towel",
                description:
                  "A quick dry towel will help in maintaining proper hygiene. It must dry quickly because the wet fabric will only increase the chance of bacterial growth.",
              },
              {
                img: "pack8.png",
                title: "Sanitizer",
                description:
                  "Essential for maintaining cleanliness while trekking.",
              },
              {
                img: "pack9.png",
                title: "Sun Cap / Hat",
                description:
                  "A lightweight sun cap with side flaps is perfect to keep your head cool and avoid sunburns on a sunny day.",
              },
              {
                img: "pack10.png",
                title: "Sunscreen SPF 40+",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack11.png",
                title: "Water Bottle (Re-usable)",
                description:
                  "Hydration is extremely important when it comes to trekking. Carrying a water bottle that you can refill with Himalayan water is a must.",
              },
              {
                img: "pack12.png",
                title: "Personal Toiletries",
                description:
                  "A bag with all your essentials including napkins, toothpaste, sanitizers, paper soap, etc should be carried in a ziplock bag.",
              },
              {
                img: "pack13.png",
                title: "Personal Medication / First Aid",
                description:
                  "A few cuts and bruises are almost inevitable when you are on a trek so carrying a medical kit with bandages, Dettol, etc is necessary.",
              },
              {
                img: "pack14.png",
                title: "Sun Glasses / Reading Glasses",
                description:
                  "Photochromatic glasses are specs that are designed to transform into anti-glare shades depending upon exposure to the sun. They are good when it comes to eye protection but one can also opt for clip-on glasses etc.",
              },
              {
                img: "pack15.png",
                title: "Charger",
                description:
                  "To keep your electronic devices powered during the trip.",
              },
              {
                img: "pack16.png",
                title: "Power Bank",
                description:
                  "Ensures your devices stay charged when there are no outlets.",
              },
              {
                img: "pack17.png",
                title: "Personal Documents & IDs",
                description:
                  "Identification proofs like Aadhar Card, Drivers License.",
              },
              {
                img: "pack18.png",
                title: "Laundry Bag (Waterproof)",
                description:
                  "In case your clothes get wet or your garments don’t dry, you can carry them in polythene. However, make sure that all the plastic that you are carrying into the woods leaves with you. Don’t litter in the mountains.",
              },
              {
                img: "pack19.png",
                title: "Track Pants",
                description:
                  "A good pair of track pants made of polyester will let your skin breathe. They’re lightweight, dry easily, and comfortable to walk around in. You can easily avoid chafing and rashes by investing in a good pair of track pants.",
              },
              {
                img: "pack20.png",
                title: "Trekking Shoes",
                description:
                  "A good trekking shoe is comfortable, provides ankle support, and has a good grip as well. They shouldn’t be chunky, instead, they should be lightweight and sturdy.",
              },
              {
                img: "pack21.png",
                title: "Cotton Socks",
                description:
                  "Cotton socks are extremely comfortable to move around in and are lightweight as well which is why you can always count on a good pair of cotton socks while trekking. However, keep in mind to change them and avoid wearing them when they are wet.",
              },
              {
                img: "pack22.png",
                title: "Woolen Socks",
                description:
                  "A good pair of woolen socks, especially merino, are comfortable, limit odors and provide adequate insulation from the cold so you can wear them at night.",
              },
              {
                img: "pack23.png",
                title: "Woolen Gloves",
                description:
                  "Insulated gloves help in maintaining proper body heat in your hands and also provide a better grasp on trekking poles.",
              },
              {
                img: "pack24.png",
                title: "Main Jacket",
                description:
                  "It’s emphasized that you need to carry proper layers so you can avoid getting cold which is why you need to carry a heavy jacket that you can put on over your other clothes.",
              },
              {
                img: "pack25.png",
                title: "Woolen Cap",
                description:
                  "A woolen cap will help prevent cold when you ascend to high altitude. You can also cover your ears to avoid any pain and discomfort you might face in them when going at high altitudes.",
              },
              {
                img: "pack26.png",
                title: "Hoodie",
                description:
                  "A versatile layering option for various temperatures.",
              },
              {
                img: "pack27.png",
                title: "Scarf / Balaclava",
                description:
                  "Along with sun rays and chilly winds, you also get hit by dirt and grime during treks which is why it's important to carry a scarf or balaclava so you can cover your face when needed.",
              },
              {
                img: "pack28.png",
                title: "Head Lamp",
                description:
                  "You can’t rely on moonlight when you are in the mountains. A torch or even a headlamp with a fresh pair of batteries is always a good idea to bring along.",
              },
              {
                img: "pack29.png",
                title: "Trekking Pole",
                description:
                  "The trekking pole assists in more than one way. It saves energy while also providing stability and helps you to maintain proper balance.",
              },
              {
                img: "pack30.png",
                title: "Camera",
                description:
                  "This should be obvious. To make sure that you get to capture all the great moments from your trek. Make sure that you have enough storage and some extra batteries as well.",
              },
              {
                img: "pack31.png",
                title: "Riding Gear",
                description: "If your trip involves biking or motorcycling.",
              },
              {
                img: "pack32.png",
                title: "Moisturiser & Cold Cream",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack33.png",
                title: "Lip Balm",
                description:
                  "Your lips can become chapped due to the harsh cold winds so it's important to keep them moisturized.",
              },
              {
                img: "pack34.png",
                title: "Sanitary Pads",
                description: "Essential for feminine hygiene.",
              },
              {
                img: "pack35.png",
                title: "Insect Repellent",
                description: "Guards against pesky bugs and insects.",
              },
              {
                img: "pack36.png",
                title: "Cash",
                description: "Emergency funds for unexpected situations.",
              },
              {
                img: "pack37.png",
                title: "Thermals",
                description:
                  "Thermal is a piece of garment that helps in keeping your body warm in cold temperatures. It is a necessary item that you need when going on a high-altitude trek.",
              },
              {
                img: "pack38.png",
                title: "Snacks / Dryfruits / Energy Bar",
                description: "Provides quick energy on the go.",
              },
              {
                img: "pack39.png",
                title: "Positive Attitude",
                description:
                  "The most important item for a successful trek or trip, keeping your spirits high and adaptable to the challenges of the journey.",
              },
            ],
            itenariesdetails: [
              {
                day: "Day 01",
                description:
                  " HARDWAR/ RISHIKESH- GUPTRASHI (220KMS/8-9HR) HEIGHT: 1319 MTS.",
                details:
                  "Dhari Devi Rudraprayag. Enroute you can see the beautiful river Mandakini at Tilwara. The Mandakini river comes from Kedarnath, drive alongside the river to reach Guptakashi, Check into the hotel arrival in Guptakashi. Overnight stay at Guptakashi.",
              },
              {
                day: "Day 02",
                description:
                  "GUPTKASHI - KEDARNATH JI (30KMS BY ROAD & 19 KMS TREK ONE WAY) HEIGHT: 3384 MTR. ",
                details:
                  "Morning after breakfast drive to Gaurikund, start your trek from Gaurikund to Kedarnath (by Pony / Doli / Helicopter at your own cost). Visit Kedarnath Temple and overnight stay in Kedarnath",
              },
              {
                day: "Day 03",
                description: "KEDARNATH - GUPTKASHI - CHOPTA (46 KMS BY ROAD)",
                details:
                  "In the Morning Darshan at Kedarnath Temple Return to Gaurikund by Trek or reach Guptakashi, Later drive for Chopta. On Arrival at Chopta check-in the Swiss camp and overnight stay.",
              },
              {
                day: "Day 04",
                description: "CHOPTA 4 KMS TREK ONE WAY)",
                details:
                  "after morning breakfast from Chopta to tungnath, its approx 8 Kms trek. On arrival at Tungnath Mandir, Get Pooja and Darshan, Later trek down to Chopta and night stay in chopta",
              },
              {
                day: "Day 05",
                description: "CHOPTA TO RISHIKESH/HARIDWAR (DRIVE 160 KM)",
                details:
                  "Morning after breakfast, Drive 160 Km From Chopta to Rishikesh/Haridwar",
              },
            ],

            cardcontentinclusion: [
              { img: "/meal.png", title: "Meals" },
              { img: "/stay.png", title: "Stays" },
              { img: "/car.png", title: "Transfers" },
              { img: "/activities.png", title: "Side Seens" },
            ],
            FaQDetails: [
              {
                title: "What is the Do Dham And Tungnath tour?",
                answer:
                  "The Do Dham And Tungnath tour is a 6-day pilgrimage journey covering the sacred sites of Yamunotri and Gangotri, along with a trek to Tungnath, one of the highest Shiva temples in the world. This tour offers a blend of spiritual exploration and scenic trekking.",
              },
              {
                title: "How long does the Do Dham And Tungnath tour take?",
                answer:
                  "The tour takes 6 days to complete, including visits to the Do Dham temples and the Tungnath trek.",
              },
              {
                title:
                  "What is the difficulty level of the Do Dham And Tungnath tour?",
                answer:
                  " The tour is classified as Easy, making it suitable for beginners and those new to trekking, with a moderate level of fitness required for the Tungnath trek.",
              },
              {
                title:
                  " What is the maximum altitude of the Do Dham And Tungnath tour?",
                answer:
                  "The maximum altitude reached during the tour is approximately 12,073 feet at Tungnath.",
              },
              {
                title: "What is included in the tour package?",
                answer:
                  "The package includes transportation from Haridwar to Haridwar, accommodation in hotels or guest houses, meals (vegetarian), guided tours, and necessary permits.",
              },
              {
                title: "What should I pack for the Do Dham And Tungnath tour?",
                answer:
                  " Essential items include warm clothing, trekking shoes, a good quality backpack, water bottles, sunscreen, personal medication, and a camera. A detailed packing list will be provided upon booking.",
              },
              {
                title:
                  " When is the best time to do the Do Dham And Tungnath tour?",
                answer:
                  " The best time to undertake the tour is in January during the winter season for clear views and a pleasant trekking experience.",
              },
              {
                title: "What is the cost of the Do Dham And Tungnath tour?",
                answer: " The cost of the tour is INR 15,000 per person.",
              },
              {
                title: "How can I book the Do Dham And Tungnath tour?",
                answer:
                  " You can book the tour through our website or contact us directly for more details and availability.",
              },
              {
                title:
                  " Are there any additional costs not covered in the tour package?",
                answer:
                  "Exclusions may include personal expenses, meals not mentioned in the package, and additional costs due to natural calamities or delays. Details will be provided upon booking.",
              },
            ],
          },
        ],
      },
      {
        id: "4",
        title: "3 DAYs 2 NIGHTS",
        title1: "View itinerary",
        description: "Chopta Tungnath Trek",
        image: "tungnath.jpg",
        amount: 6499,
        location: "Rishikesh To Rishikesh",
        region: "Uttrakhand",
        places: ["Haridwar"],
        month: "January",
        difficulty: "Easy",
        season: "Winter",
        theme: ["Beginner"],
        tourDetails: [
          {
            travelbanner: {
              travelimage: "tungnath.jpg",
              travelimagefirsttext: "Chopta Tungnath",
              travelimagesecondtext: "Trek",
              traveldays: "3 Days 4 Nights",
              reviwsoftrip: "1073",
              starts: "3",
            },
            regions: [
              {
                image: "region.png",
                title: "Region",
                description: "Uttrakhand, India",
              },
              {
                image: "maxaltitude.png",
                title: "Max Altitude",
                description: "11,154 ft",
              },
              {
                image: "trekking.png",
                title: "Trekking Km",
                description: "5 KM",
              },
              {
                image: "diificulties.png",
                title: "Difficulty",
                description: "Easy to Moderate",
              },
            ],
            travelprice: {
              priceperperson: 6499,
            },
            tempopriceDetails: [
              {
                occupancyType: "Quad Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "6499", // Example for another type of occupancy
              },
              {
                occupancyType: "Triple Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "7499",
              },

              {
                occupancyType: "Double Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "8499",
              },
            ],
            gallerysections: [
              "https://swiperjs.com/demos/images/nature-1.jpg",
              "https://swiperjs.com/demos/images/nature-2.jpg",
              "https://swiperjs.com/demos/images/nature-3.jpg",
              "https://swiperjs.com/demos/images/nature-4.jpg",
              "https://swiperjs.com/demos/images/nature-5.jpg",
              "https://swiperjs.com/demos/images/nature-6.jpg",
              "https://swiperjs.com/demos/images/nature-7.jpg",
              "https://swiperjs.com/demos/images/nature-8.jpg",
              "https://swiperjs.com/demos/images/nature-9.jpg",
              "https://swiperjs.com/demos/images/nature-10.jpg",
            ],

            overviewsdetails1: [
              {
                type: "intro",
                content: [
                  {
                    label: "Tour name:",
                    value: "Chopta and Tungnath Trek",
                    color: "grey",
                  },
                  {
                    text: "Embark on an unforgettable journey through the serene landscapes of Chopta and Tungnath.",
                  },
                  {
                    text: "Situated in the Garhwali Himalayas, this trek promises breathtaking views of mist-covered peaks, lush forests, and vibrant rhododendron blooms.",
                  },
                  {
                    text: "Whether you're a seasoned trekker or a novice adventurer, this trek offers an unparalleled experience amidst nature's bounty.",
                  },
                ],
              },
              {
                type: "tour",
                text: "Location",
                text1: "Garhwali Himalayas, Uttarakhand",
                text2: "Country",
                text3: "India",
              },
              {
                type: "tour",
                text: "Adventure Type",
                text1: "Trekking and Nature Exploration",
                text2: "Duration",
                text3: "3 Days 2 Nights",
              },
              {
                type: "tour",
                text: "Base Camp:",
                text1: "Chopta, Uttarakhand",
                text2: "Altitude",
                text3: "2,680 meters (8,790 ft)",
              },
              {
                type: "tour",
                text: "Stay:",
                text1: "Standard Category Hotels/Home Stays/Guest Houses/Camps",
                text2: "Season",
                text3: "Year-round",
              },
              {
                type: "tour",
                text: "Difficulty Level:",
                text1: "Easy to Moderate",
                text2: "Food",
                text3: "Meals included",
              },
              {
                type: "tour",
                text: "Trail Type",
                text1: "Scenic Trails & Himalayan Views",
                text2: "Rail Head",
                text3: "Haridwar",
              },
              {
                type: "tour",
                text: "Month",
                text1:
                  "Accessible year-round, moderate from Dec to Feb due to snowfall",
              },
              {
                type: "highlight",
                title: "Highlights",
                items: [
                  "Suitable for all age groups due to its easy grade.",
                  "Most accessible Himalayan trek in Uttarakhand.",
                  "Visit the highest Shiva Temple globally at Tungnath.",
                  "Enjoy a panoramic 360-degree view of mighty Himalayan peaks.",
                  "Achieve a 4000-meter Himalayan summit with minimal stress.",
                  "Spot remarkable Himalayan birds like the Monal (Nepal's National Bird) and occasionally Himalayan Tahr.",
                  "Accessible year-round, although considered moderate from Dec to Feb due to heavy snowfall.",
                ],
              },
              {
                type: "highlightText",
                text: "Meeting Point (Pickup/Drop Point):",
                text1: "Haridwar or Rishikesh",
              },
              {
                type: "highlightText",
                text: "Reporting Time :",
                text1: "Varies based on the itinerary",
              },
              {
                type: "highlightText",
                text: "Drop Time:",
                text1: "Flexible based on departure",
              },
            ],

            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            batches: {
              August: [
                { startDate: "02 Aug", endDate: "07 Aug", status: "Open" },
                { startDate: "06 Aug", endDate: "11 Aug", status: "Open" },
                { startDate: "09 Aug", endDate: "14 Aug", status: "Open" },
                { startDate: "14 Aug", endDate: "19 Aug", status: "Open" },
                { startDate: "16 Aug", endDate: "21 Aug", status: "Open" },
                { startDate: "20 Aug", endDate: "25 Aug", status: "Open" },
                { startDate: "23 Aug", endDate: "28 Aug", status: "Open" },
                { startDate: "27 Aug", endDate: "01 Sep", status: "Open" },
                { startDate: "30 Aug", endDate: "04 Sep", status: "Open" },
              ],

              September: [
                { startDate: "03 Sep", endDate: "08 Sep", status: "Open" },
                { startDate: "06 Sep", endDate: "11 Sep", status: "Open" },
                { startDate: "10 Sep", endDate: "15 Sep", status: "Open" },
                { startDate: "13 Sep", endDate: "18 Sep", status: "Open" },
                { startDate: "17 Sep", endDate: "22 Sep", status: "Open" },
                { startDate: "20 Sep", endDate: "25 Sep", status: "Open" },
                { startDate: "24 Sep", endDate: "29 Sep", status: "Open" },
                { startDate: "27 Sep", endDate: "02 Oct", status: "Open" },
                { startDate: "30 Sep", endDate: "05 Oct", status: "Open" },
              ],

              October: [
                { startDate: "02 Oct", endDate: "07 Oct", status: "Open" },
                { startDate: "05 Oct", endDate: "10 Oct", status: "Open" },
                { startDate: "09 Oct", endDate: "14 Oct", status: "Open" },
                { startDate: "12 Oct", endDate: "17 Oct", status: "Open" },
                { startDate: "16 Oct", endDate: "21 Oct", status: "Open" },
                { startDate: "19 Oct", endDate: "24 Oct", status: "Open" },
                { startDate: "22 Oct", endDate: "27 Oct", status: "Open" },
                { startDate: "25 Oct", endDate: "30 Oct", status: "Open" },
                { startDate: "29 Oct", endDate: "03 Nov", status: "Open" },
              ],

              November: [
                { startDate: "01 Nov", endDate: "06 Nov", status: "Open" },
                { startDate: "05 Nov", endDate: "10 Nov", status: "Open" },
                { startDate: "08 Nov", endDate: "13 Nov", status: "Open" },
                { startDate: "12 Nov", endDate: "17 Nov", status: "Open" },
                { startDate: "15 Nov", endDate: "20 Nov", status: "Open" },
                { startDate: "19 Nov", endDate: "24 Nov", status: "Open" },
                { startDate: "22 Nov", endDate: "27 Nov", status: "Open" },
                { startDate: "26 Nov", endDate: "01 Dec", status: "Open" },
                { startDate: "29 Nov", endDate: "04 Dec", status: "Open" },
              ],

              December: [
                { startDate: "01 Dec", endDate: "06 Dec", status: "Open" },
                { startDate: "03 Dec", endDate: "08 Dec", status: "Open" },
                { startDate: "07 Dec", endDate: "12 Dec", status: "Open" },
                { startDate: "10 Dec", endDate: "15 Dec", status: "Open" },
                { startDate: "14 Dec", endDate: "19 Dec", status: "Open" },
                { startDate: "17 Dec", endDate: "22 Dec", status: "Open" },
                { startDate: "21 Dec", endDate: "26 Dec", status: "Open" },
                { startDate: "24 Dec", endDate: "29 Dec", status: "Open" },
                { startDate: "28 Dec", endDate: "02 Jan", status: "Open" },
                { startDate: "31 Dec", endDate: "05 Jan", status: "Open" },
              ],

              January: [
                { startDate: "02 Jan", endDate: "07 Jan", status: "Open" },
                { startDate: "04 Jan", endDate: "09 Jan", status: "Open" },
                { startDate: "07 Jan", endDate: "12 Jan", status: "Open" },
                { startDate: "10 Jan", endDate: "15 Jan", status: "Open" },
                { startDate: "13 Jan", endDate: "18 Jan", status: "Open" },
                { startDate: "17 Jan", endDate: "22 Jan", status: "Open" },
                { startDate: "20 Jan", endDate: "25 Jan", status: "Open" },
                { startDate: "24 Jan", endDate: "29 Jan", status: "Open" },
                { startDate: "27 Jan", endDate: "01 Feb", status: "Open" },
                { startDate: "31 Jan", endDate: "05 Feb", status: "Open" },
              ],

              February: [
                { startDate: "03 Feb", endDate: "08 Feb", status: "Open" },
                { startDate: "07 Feb", endDate: "12 Feb", status: "Open" },
                { startDate: "11 Feb", endDate: "16 Feb", status: "Open" },
                { startDate: "14 Feb", endDate: "19 Feb", status: "Open" },
                { startDate: "17 Feb", endDate: "22 Feb", status: "Open" },
                { startDate: "21 Feb", endDate: "26 Feb", status: "Open" },
                { startDate: "25 Feb", endDate: "01 Mar", status: "Open" },
                { startDate: "28 Feb", endDate: "05 Mar", status: "Open" },
              ],

              March: [
                { startDate: "03 Mar", endDate: "08 Mar", status: "Open" },
                { startDate: "08 Mar", endDate: "13 Mar", status: "Open" },
                { startDate: "10 Mar", endDate: "15 Mar", status: "Open" },
                { startDate: "14 Mar", endDate: "19 Mar", status: "Open" },
                { startDate: "17 Mar", endDate: "22 Mar", status: "Open" },
                { startDate: "21 Mar", endDate: "26 Mar", status: "Open" },
                { startDate: "24 Mar", endDate: "29 Mar", status: "Open" },
                { startDate: "28 Mar", endDate: "02 Apr", status: "Open" },
              ],

              April: [
                { startDate: "01 Apr", endDate: "06 Apr", status: "Open" },
                { startDate: "04 Apr", endDate: "09 Apr", status: "Open" },
                { startDate: "08 Apr", endDate: "13 Apr", status: "Open" },
                { startDate: "11 Apr", endDate: "16 Apr", status: "Open" },
                { startDate: "15 Apr", endDate: "20 Apr", status: "Open" },
                { startDate: "18 Apr", endDate: "23 Apr", status: "Open" },
                { startDate: "22 Apr", endDate: "27 Apr", status: "Open" },
                { startDate: "25 Apr", endDate: "30 Apr", status: "Open" },
                { startDate: "29 Apr", endDate: "04 May", status: "Open" },
              ],
            },

            inclusion: [
              {
                img: "rightsign.png",
                title: "Meals:",
                description:
                  "Rishikesh to Rishikesh Meals (Veg Only) - Breakfast, Lunch, and Dinner.",
              },
              {
                img: "rightsign.png",
                title: "Accommodation:",
                description: "Deluxe Camps in Triple/Quad Sharing.",
              },
              {
                img: "rightsign.png",
                title: "Guides:",
                description: "Experienced and Qualified Guides.",
              },
              {
                img: "rightsign.png",
                title: "Forest Permits:",
                description: "Required permits for forest areas.",
              },
              {
                img: "rightsign.png",
                title: "Medical Amenities:",
                description: "First Aid Kits, Oxymeters, Oxygen Cylinders.",
              },
              {
                img: "rightsign.png",
                title: "Sanitized and Hygienic Campsites and Hotels:",
                description:
                  "Ensuring cleanliness and safety throughout the trek.",
              },
            ],

            exclusion: [
              {
                img: "crossSign.png",
                title: "Anything not mentioned in the inclusions:",
                description: "",
                img: "crossSign.png",
                title: "Anything not mentioned in the inclusions:",
                description: "",
              },
              {
                img: "crossSign.png",
                title: "Meals During Transportation:",
                description:
                  "Meals not covered during travel to and from the trek.",
              },
              {
                img: "crossSign.png",
                title: "Any kind of personal expenses:",
                description:
                  "Such as tips to drivers, entry to monuments/monasteries, camera/video camera charges, camel safari, river rafting, laundry, telephone bills, etc.",
              },
              {
                img: "crossSign.png",
                title:
                  "Unscheduled or extended stay due to roadblocks or landslides:",
                description:
                  "Additional costs incurred for unscheduled or extended stays.",
              },
              {
                img: "crossSign.png",
                title:
                  "Porter/Mule Charges (Personal) and Backpack Offloading Charges:",
                description:
                  "Additional costs for personal porter/mule services and backpack offloading.",
              },
              {
                img: "crossSign.png",
                title: "Cost of Evacuation in Case of Emergency:",
                description:
                  "Any costs incurred for evacuation due to emergency situations.",
              },
            ],

            cardcontent: [
              {
                iconName: "PlaceOutlinedIcon",
                title: "Pickup & Drop",
                description: "Rishikesh To Rishikesh",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "TimerOutlinedIcon",
                title: "Duration",
                description: "3 Days 2 Nights",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "BusinessCenterOutlinedIcon",
                title: "Category",
                description: "Trek",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "SportsScoreOutlinedIcon",
                title: "Difficulty",
                description: "Easy",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
            ],
            thingtopack: [
              {
                img: "pack1.png",
                title: "Rucksack",
                description:
                  "You must pick a good quality backpack with a comfortable fit and straps that won’t give you shoulder pain. You can check out your nearest Decathlon store for a good trekking backpack.",
              },
              {
                img: "pack2.png",
                title: "Day Bag / Day Pack",
                description:
                  "When you head towards the summit, you are required to carry only a few necessary items and for that, you need a day backpack as you will leave your bigger one on the campsite.",
              },
              {
                img: "pack3.png",
                title: "Hiking Shoes",
                description: "Durable footwear designed for rugged terrains.",
              },
              {
                img: "pack4.png",
                title: "Floaters or Sandals",
                description:
                  "Although the entire trek requires a good quality shoe, you still need to let your feet breathe to avoid chafing and blisters. When you are at the camp, a good pair of sandals and floaters will help you to move freely.",
              },
              {
                img: "pack5.png",
                title: "Tees / Tshirts",
                description:
                  "You must keep at least three pairs of quick dry tees so that you can wash them in between stops for proper hygiene.",
              },
              {
                img: "pack6.png",
                title: "Poncho",
                description:
                  "A poncho is an evolved form of a raincoat that provides coverage to your body as well as your bag and ensures total water protection from rain.",
              },
              {
                img: "pack7.png",
                title: "Quick Dry Towel",
                description:
                  "A quick dry towel will help in maintaining proper hygiene. It must dry quickly because the wet fabric will only increase the chance of bacterial growth.",
              },
              {
                img: "pack8.png",
                title: "Sanitizer",
                description:
                  "Essential for maintaining cleanliness while trekking.",
              },
              {
                img: "pack9.png",
                title: "Sun Cap / Hat",
                description:
                  "A lightweight sun cap with side flaps is perfect to keep your head cool and avoid sunburns on a sunny day.",
              },
              {
                img: "pack10.png",
                title: "Sunscreen SPF 40+",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack11.png",
                title: "Water Bottle (Re-usable)",
                description:
                  "Hydration is extremely important when it comes to trekking. Carrying a water bottle that you can refill with Himalayan water is a must.",
              },
              {
                img: "pack12.png",
                title: "Personal Toiletries",
                description:
                  "A bag with all your essentials including napkins, toothpaste, sanitizers, paper soap, etc should be carried in a ziplock bag.",
              },
              {
                img: "pack13.png",
                title: "Personal Medication / First Aid",
                description:
                  "A few cuts and bruises are almost inevitable when you are on a trek so carrying a medical kit with bandages, Dettol, etc is necessary.",
              },
              {
                img: "pack14.png",
                title: "Sun Glasses / Reading Glasses",
                description:
                  "Photochromatic glasses are specs that are designed to transform into anti-glare shades depending upon exposure to the sun. They are good when it comes to eye protection but one can also opt for clip-on glasses etc.",
              },
              {
                img: "pack15.png",
                title: "Charger",
                description:
                  "To keep your electronic devices powered during the trip.",
              },
              {
                img: "pack16.png",
                title: "Power Bank",
                description:
                  "Ensures your devices stay charged when there are no outlets.",
              },
              {
                img: "pack17.png",
                title: "Personal Documents & IDs",
                description:
                  "Identification proofs like Aadhar Card, Drivers License.",
              },
              {
                img: "pack18.png",
                title: "Laundry Bag (Waterproof)",
                description:
                  "In case your clothes get wet or your garments don’t dry, you can carry them in polythene. However, make sure that all the plastic that you are carrying into the woods leaves with you. Don’t litter in the mountains.",
              },
              {
                img: "pack19.png",
                title: "Track Pants",
                description:
                  "A good pair of track pants made of polyester will let your skin breathe. They’re lightweight, dry easily, and comfortable to walk around in. You can easily avoid chafing and rashes by investing in a good pair of track pants.",
              },
              {
                img: "pack20.png",
                title: "Trekking Shoes",
                description:
                  "A good trekking shoe is comfortable, provides ankle support, and has a good grip as well. They shouldn’t be chunky, instead, they should be lightweight and sturdy.",
              },
              {
                img: "pack21.png",
                title: "Cotton Socks",
                description:
                  "Cotton socks are extremely comfortable to move around in and are lightweight as well which is why you can always count on a good pair of cotton socks while trekking. However, keep in mind to change them and avoid wearing them when they are wet.",
              },
              {
                img: "pack22.png",
                title: "Woolen Socks",
                description:
                  "A good pair of woolen socks, especially merino, are comfortable, limit odors and provide adequate insulation from the cold so you can wear them at night.",
              },
              {
                img: "pack23.png",
                title: "Woolen Gloves",
                description:
                  "Insulated gloves help in maintaining proper body heat in your hands and also provide a better grasp on trekking poles.",
              },
              {
                img: "pack24.png",
                title: "Main Jacket",
                description:
                  "It’s emphasized that you need to carry proper layers so you can avoid getting cold which is why you need to carry a heavy jacket that you can put on over your other clothes.",
              },
              {
                img: "pack25.png",
                title: "Woolen Cap",
                description:
                  "A woolen cap will help prevent cold when you ascend to high altitude. You can also cover your ears to avoid any pain and discomfort you might face in them when going at high altitudes.",
              },
              {
                img: "pack26.png",
                title: "Hoodie",
                description:
                  "A versatile layering option for various temperatures.",
              },
              {
                img: "pack27.png",
                title: "Scarf / Balaclava",
                description:
                  "Along with sun rays and chilly winds, you also get hit by dirt and grime during treks which is why it's important to carry a scarf or balaclava so you can cover your face when needed.",
              },
              {
                img: "pack28.png",
                title: "Head Lamp",
                description:
                  "You can’t rely on moonlight when you are in the mountains. A torch or even a headlamp with a fresh pair of batteries is always a good idea to bring along.",
              },
              {
                img: "pack29.png",
                title: "Trekking Pole",
                description:
                  "The trekking pole assists in more than one way. It saves energy while also providing stability and helps you to maintain proper balance.",
              },
              {
                img: "pack30.png",
                title: "Camera",
                description:
                  "This should be obvious. To make sure that you get to capture all the great moments from your trek. Make sure that you have enough storage and some extra batteries as well.",
              },
              {
                img: "pack31.png",
                title: "Riding Gear",
                description: "If your trip involves biking or motorcycling.",
              },
              {
                img: "pack32.png",
                title: "Moisturiser & Cold Cream",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack33.png",
                title: "Lip Balm",
                description:
                  "Your lips can become chapped due to the harsh cold winds so it's important to keep them moisturized.",
              },
              {
                img: "pack34.png",
                title: "Sanitary Pads",
                description: "Essential for feminine hygiene.",
              },
              {
                img: "pack35.png",
                title: "Insect Repellent",
                description: "Guards against pesky bugs and insects.",
              },
              {
                img: "pack36.png",
                title: "Cash",
                description: "Emergency funds for unexpected situations.",
              },
              {
                img: "pack37.png",
                title: "Thermals",
                description:
                  "Thermal is a piece of garment that helps in keeping your body warm in cold temperatures. It is a necessary item that you need when going on a high-altitude trek.",
              },
              {
                img: "pack38.png",
                title: "Snacks / Dryfruits / Energy Bar",
                description: "Provides quick energy on the go.",
              },
              {
                img: "pack39.png",
                title: "Positive Attitude",
                description:
                  "The most important item for a successful trek or trip, keeping your spirits high and adaptable to the challenges of the journey.",
              },
            ],
            itenariesdetails: [
              {
                day: "Day 01",
                description: "Rishikesh to Chopta",
                details:
                  "Departure from Rishikesh at 7:00 AM. Drive to Chopta via Devprayag, Srinagar, and Rudraprayag. Check-in to Deluxe Camps in Chopta. Dinner and briefing session with the tour leader.",
              },
              {
                day: "Day 02",
                description: "Trek to Tungnath",
                details:
                  "Trek to Tungnath Temple after breakfast. Easy to moderate 5.5 km trail, taking 3-4 hours. Ascend to Chandrashila Summit with a packed lunch. Return to Chopta, witnessing a beautiful sunset. Overnight stay in camps.",
              },
              {
                day: "Day 03",
                description:
                  "Drive to Sari village, Deoriyatal Trek, Return to Rishikesh",
                details:
                  "Early departure to Sari village. 2-hour hike to Deoriyatal, with Chaukhamba peak reflection. Return to Sari village for lunch. Drive back to Rishikesh, arriving around 10:00 PM.",
              },
            ],

            cardcontentinclusion: [
              { img: "/meal.png", title: "Meals" },
              { img: "/stay.png", title: "Stays" },
              { img: "/car.png", title: "Transfers" },
              { img: "/activities.png", title: "SightSeens" },
            ],
            FaQDetails: [
              {
                title: "What is the Chopta Tungnath Trek?",
                answer:
                  " The Chopta Tungnath Trek is a 3-day adventure in Uttarakhand, leading to the Tungnath temple, which is one of the highest Shiva temples in the world. The trek offers stunning views of the Himalayas and passes through lush forests and scenic landscapes.",
              },
              {
                title: "How long does the Chopta Tungnath Trek take?",
                answer:
                  " The trek takes 3 days to complete, including trekking from Chopta to Tungnath and back, with accommodation and rest breaks along the way.",
              },
              {
                title:
                  " What is the difficulty level of the Chopta Tungnath Trek?",
                answer:
                  "The trek is classified as Easy, making it suitable for beginners and those new to trekking, with a basic level of fitness required.",
              },
              {
                title:
                  " What is the maximum altitude of the Chopta Tungnath Trek?",
                answer:
                  "The maximum altitude reached during the trek is approximately 12,073 feet at Tungnath.",
              },
              {
                title: "What is included in the trek package?",
                answer:
                  "The package includes transportation from Rishikesh to Rishikesh, accommodation in guest houses or camps, meals (vegetarian), a trek guide, necessary permits, and first aid kits.",
              },
              {
                title: "What should I pack for the Chopta Tungnath Trek?",
                answer:
                  " Essential items include trekking shoes, warm clothing, a good quality backpack, water bottles, sunscreen, personal medication, and a camera. A detailed packing list will be provided upon booking.",
              },
              {
                title: "When is the best time to do the Chopta Tungnath Trek?",
                answer:
                  " The best time to undertake the trek is in January during the winter season to enjoy clear views and a pleasant trekking experience.",
              },
              {
                title: "What is the cost of the Chopta Tungnath Trek?",
                answer: "The cost of the trek is INR 5,000 per person.",
              },
              {
                title: "How can I book the Chopta Tungnath Trek?",
                answer:
                  " You can book the trek through our website or contact us directly for more details and availability.",
              },
              {
                title:
                  "Are there any additional costs not covered in the trek package?",
                answer:
                  " Exclusions may include personal expenses, meals not mentioned in the package, and additional costs due to natural calamities or delays. Details will be provided upon booking.",
              },
            ],
          },
        ],
      },
    ],
  },

  // trending treks
  {
    heading1: "Trending Treks ",
    heading2: "Treks That Transform Lives",
    button: "View More ",
    details: [
      {
        id: "1",
        title: "4 DAY TOUR",
        title1: "View itinerary",
        description: "Auli weekend tour",
        image: "aullibanner.png",
        amount: 8500,
        location: "Delhi to Delhi ",
        region: "Himachal",
        places: ["Dharamshala", "Shimla", "Manali", "Kullu"],
        month: "January",
        difficulty: "Moderate",
        season: "Winter",
        theme: ["Nature"],
        tourDetails: [
          {
            travelbanner: {
              travelimage: "aullibanner.png",
              travelimagefirsttext: "Auli",
              travelimagesecondtext: "Weekend Tour",
              traveldays: "4 Days Trip",
              reviwsoftrip: "1073",
              starts: "4",
            },

            regions: [
              {
                image: "region.png",
                title: "Region",
                description: "Uttrakhand, India",
              },
              {
                image: "maxaltitude.png",
                title: "Max Altitude",
                description: "10,010 ft",
              },
              {
                image: "trekking.png",
                title: "Trekking Km",
                description: "30 KM",
              },
              {
                image: "diificulties.png",
                title: "Difficulty",
                description: "Easy to Moderate",
              },
            ],

            travelprice: {
              priceperperson: "8500",
            },
            tempopriceDetails: [
              {
                occupancyType: "Quad Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "11999", // Example for another type of occupancy
              },
              {
                occupancyType: "Triple Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "12999",
              },

              {
                occupancyType: "Double Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "13999",
              },
            ],
            gallerysections: [
              "/auli1.jpg",
              "/auli2.jpg",
              "/auli3.jpg",
              "/auli4.jpg",
              "/auli5.jpg",
              "/auli6.jpg",
              "/auli7.jpg",
              "/auli8.jpg",
            ],

            overviewsdetails: [
              {
                description:
                  "Are you a snow enthusiast longing to experience the thrill of gliding through pristine snow-covered slopes? Look no further than Auli, a captivating town nestled in the Garhwal region of Uttarakhand. With its stunning views of the majestic Himalayan peaks and snow-laden slopes, Auli has emerged as a premier winter destination in India.",
                title: "Auli Weekend Trip: Experience the Magic in Just 3 Days",
                subContent: [
                  {
                    heading: "Discover the Charms of Auli:",
                    description: "",
                  },
                  {
                    heading: "Mesmerizing Landscapes:",
                    description:
                      "Situated at an altitude of 2,800 meters, Auli boasts captivating vistas of snow-capped mountains and expansive forests adorned with majestic oak trees.",
                  },
                  {
                    heading: "Adventurous Activities:",
                    description:
                      "Dive into the thrill of skiing on the snow-laden slopes of Auli, offering an experience akin to Switzerland or Norway, right here in India.",
                  },
                  {
                    heading: "Spectacular Attractions:",
                    description:
                      "Explore attractions like the Valley of Flowers National Park, Hemkund Sahib Gurudwara, and trekking destinations like Gorson Bugyal and Pangerchulla summit.",
                  },
                  {
                    heading: "World-Class Infrastructure:",
                    description:
                      "Auli features India's highest and longest cable car link, connecting it to the town of Joshimath and providing access to holy sites like Shankaracharya Math and Narsingh Temple.",
                  },
                  { heading: "Best Time to Visit Auli:", description: "" },
                  {
                    heading: "Winter Wonderland:",
                    description:
                      "For snow enthusiasts and skiing aficionados, December to March offers the perfect opportunity to immerse yourself in the magical world of snow.",
                  },
                  {
                    heading: "Spring Delight:",
                    description:
                      "If you prefer the warmth of spring and wish to witness the blooming of over 500 species of flowers, visit Auli from June to August for a vibrant and colorful experience.",
                  },
                  {
                    heading: "In Conclusion:",
                    description:
                      "Auli is a paradise for nature lovers, adventure seekers, and those craving a serene escape amidst the beauty of the Himalayas. With its myriad charms and breathtaking landscapes, Auli promises an unforgettable experience for all who visit.",
                  },
                ],
              },
            ],
            overviewsdetails1: [
              {
                type: "intro",
                content: [
                  {
                    label: "Tour name:",
                    value: "Auli weekend tour",
                    color: "grey",
                  },
                  {
                    text: "Are you a snow enthusiast longing to experience the thrill of gliding through pristine snow-covered slopes?",
                  },
                  {
                    text: "Look no further than Auli, a captivating town nestled in the Garhwal region of Uttarakhand.",
                  },
                  {
                    text: "With its stunning views of the majestic Himalayan peaks and snow-laden slopes, Auli has emerged as a premier winter destination in India.",
                  },
                ],
              },
              {
                type: "tour",
                text: "location",
                text1: "Garhwal region, Uttarakhand",
                text2: "Country",
                text3: "India",
              },
              {
                type: "tour",
                text: "Adventure Type",
                text1: "Skiing and Sightseeing",
                text2: "Duration",
                text3: "3 Days",
              },
              {
                type: "tour",
                text: "Base Camp:",
                text1: "Auli, Uttarakhand",
                text2: "Altitude",
                text3: "10,010 ft",
              },
              {
                type: "tour",
                text: "Stay:",
                text1: "Guesthouses & Ski Resorts",
                text2: "Season",
                text3: "Winter, Spring",
              },
              {
                type: "tour",
                text: "Difficulty Level:",
                text1: "Easy to Moderate",
                text2: "Food",
                text3: "Meals included",
              },
              {
                type: "tour",
                text: "Trail Type",
                text1: "Snow-covered Slopes & Scenic Trails",
                text2: "Rail Head",
                text3: "Haridwar",
              },
              {
                type: "tour",
                text: "Month",
                text1: "December, January, February, March, June, July, August",
              },
              {
                type: "highlight",
                title: "Highlights",
                items: [
                  "India's highest and longest cable car link.",
                  "Stunning views of Himalayan peaks.",
                  "Proximity to attractions like Valley of Flowers National Park and Hemkund Sahib Gurudwara.",
                ],
              },
              {
                type: "highlightText",
                text: "Meeting Point (Pickup/Drop Point):",
                text1: "Akshardham Metro Station, Delhi",
              },
              {
                type: "highlightText",
                text: "Reporting Time :",
                text1: "11 PM",
              },
              {
                type: "highlightText",
                text: "Drop Time:",
                text1: "Flexible based on departure",
              },
            ],

            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            batches: {
              July: [
                { startDate: "10 Jul", endDate: "15 Jul", status: "Close" },
                { startDate: "20 Jul", endDate: "25 Jul", status: "Open" },
              ],
              August: [
                { startDate: "05 Aug", endDate: "10 Aug", status: "Full" },
                { startDate: "15 Aug", endDate: "20 Aug", status: "Open" },
              ],
              September: [
                { startDate: "01 Sep", endDate: "06 Sep", status: "Open" },
                { startDate: "10 Sep", endDate: "15 Sep", status: "Open" },
              ],
            },
            inclusion: [
              {
                img: "rightsign.png",
                title: "Transportation:",
                description:
                  "Delhi to Delhi transportation by Tempo Traveler / SUV.",
              },
              {
                img: "rightsign.png",
                title: "Accommodation:",
                description: "2 Nights Accommodation in Hotel.",
              },
              {
                img: "rightsign.png",
                title: "Meals:",
                description:
                  "MAPI Plan(Total 4 Meals - 1 Meal on Day 1 (D) + 2 Meals on Day 2 (B+D) + 1 Meal on Day 3 (B)).",
              },
              {
                img: "rightsign.png",
                title: "Sightseeing as per the Itinerary.",
                description: "",
              },
              {
                img: "rightsign.png",
                title:
                  "The trip Captain will be present at all times during the tour.",
                description: "",
              },
              {
                img: "rightsign.png",
                title: "First Aid Kits.",
                description: "",
              },
              {
                img: "rightsign.png",
                title: "Driver Allowance.",
                description: "",
              },
              {
                img: "rightsign.png",
                title: "Toll Taxes And Other State Taxes.",
                description: "",
              },
              {
                img: "rightsign.png",
                title: "Parking Charges.",
                description: "",
              },
            ],
            exclusion: [
              {
                img: "crossSign.png",
                title: "5% GST:",
              },
              {
                img: "crossSign.png",
                title:
                  "Expenses for adventure activities, cable car, private cabs in Auli.",
              },
              {
                img: "crossSign.png",
                title: "Early check-in at the hotel.",
              },
              {
                img: "crossSign.png",
                title: "Any additional expenses such as of personal nature.",
              },
              {
                img: "crossSign.png",
                title:
                  "Additional accommodation/food costs incurred due to any delay travel.",
              },
              {
                img: "crossSign.png",
                title:
                  "Any lunch and other meals not mentioned in Package Inclusions.",
              },
              {
                img: "crossSign.png",
                title:
                  "Any Airfare/Rail fare other than what is mentioned in “Inclusions” or any type of transportation from which is outside the itinerary.",
              },
              {
                img: "crossSign.png",
                title: "Parking and monument entry fees during sightseeing.",
              },
              {
                img: "crossSign.png",
                title:
                  "Additional Costs due to Flight Cancellations, Landslides, Roadblocks, and other natural calamities.",
              },
              {
                img: "crossSign.png",
                title: "Any other services not specified above in inclusions.",
              },
            ],
            cardcontent: [
              {
                iconName: "PlaceOutlinedIcon",
                title: "Pickup & Drop",
                description: "Delhi To Delhi",
                color: "#006FFF",
                fontSize: { xs: "17px", sm: "19px", md: "25px" },
              },
              {
                iconName: "TimerOutlinedIcon",
                title: "Duration",
                description: "4 Days",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "BusinessCenterOutlinedIcon",
                title: "Category",
                description: "Weekend Getaways",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "SportsScoreOutlinedIcon",
                title: "Difficulty",
                description: "Easy",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
            ],
            thingtopack: [
              {
                img: "pack1.png",
                title: "Rucksack",
                description:
                  "You must pick a good quality backpack with a comfortable fit and straps that won’t give you shoulder pain. You can check out your nearest Decathlon store for a good trekking backpack.",
              },
              {
                img: "pack2.png",
                title: "Day Bag / Day Pack",
                description:
                  "When you head towards the summit, you are required to carry only a few necessary items and for that, you need a day backpack as you will leave your bigger one on the campsite.",
              },
              {
                img: "pack3.png",
                title: "Hiking Shoes",
                description: "Durable footwear designed for rugged terrains.",
              },
              {
                img: "pack4.png",
                title: "Floaters or Sandals",
                description:
                  "Although the entire trek requires a good quality shoe, you still need to let your feet breathe to avoid chafing and blisters. When you are at the camp, a good pair of sandals and floaters will help you to move freely.",
              },
              {
                img: "pack5.png",
                title: "Tees / Tshirts",
                description:
                  "You must keep at least three pairs of quick dry tees so that you can wash them in between stops for proper hygiene.",
              },
              {
                img: "pack6.png",
                title: "Poncho",
                description:
                  "A poncho is an evolved form of a raincoat that provides coverage to your body as well as your bag and ensures total water protection from rain.",
              },
              {
                img: "pack7.png",
                title: "Quick Dry Towel",
                description:
                  "A quick dry towel will help in maintaining proper hygiene. It must dry quickly because the wet fabric will only increase the chance of bacterial growth.",
              },
              {
                img: "pack8.png",
                title: "Sanitizer",
                description:
                  "Essential for maintaining cleanliness while trekking.",
              },
              {
                img: "pack9.png",
                title: "Sun Cap / Hat",
                description:
                  "A lightweight sun cap with side flaps is perfect to keep your head cool and avoid sunburns on a sunny day.",
              },
              {
                img: "pack10.png",
                title: "Sunscreen SPF 40+",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack11.png",
                title: "Water Bottle (Re-usable)",
                description:
                  "Hydration is extremely important when it comes to trekking. Carrying a water bottle that you can refill with Himalayan water is a must.",
              },
              {
                img: "pack12.png",
                title: "Personal Toiletries",
                description:
                  "A bag with all your essentials including napkins, toothpaste, sanitizers, paper soap, etc should be carried in a ziplock bag.",
              },
              {
                img: "pack13.png",
                title: "Personal Medication / First Aid",
                description:
                  "A few cuts and bruises are almost inevitable when you are on a trek so carrying a medical kit with bandages, Dettol, etc is necessary.",
              },
              {
                img: "pack14.png",
                title: "Sun Glasses / Reading Glasses",
                description:
                  "Photochromatic glasses are specs that are designed to transform into anti-glare shades depending upon exposure to the sun. They are good when it comes to eye protection but one can also opt for clip-on glasses etc.",
              },
              {
                img: "pack15.png",
                title: "Charger",
                description:
                  "To keep your electronic devices powered during the trip.",
              },
              {
                img: "pack16.png",
                title: "Power Bank",
                description:
                  "Ensures your devices stay charged when there are no outlets.",
              },
              {
                img: "pack17.png",
                title: "Personal Documents & IDs",
                description:
                  "Identification proofs like Aadhar Card, Drivers License.",
              },
              {
                img: "pack18.png",
                title: "Laundry Bag (Waterproof)",
                description:
                  "In case your clothes get wet or your garments don’t dry, you can carry them in polythene. However, make sure that all the plastic that you are carrying into the woods leaves with you. Don’t litter in the mountains.",
              },
              {
                img: "pack19.png",
                title: "Track Pants",
                description:
                  "A good pair of track pants made of polyester will let your skin breathe. They’re lightweight, dry easily, and comfortable to walk around in. You can easily avoid chafing and rashes by investing in a good pair of track pants.",
              },
              {
                img: "pack20.png",
                title: "Trekking Shoes",
                description:
                  "A good trekking shoe is comfortable, provides ankle support, and has a good grip as well. They shouldn’t be chunky, instead, they should be lightweight and sturdy.",
              },
              {
                img: "pack21.png",
                title: "Cotton Socks",
                description:
                  "Cotton socks are extremely comfortable to move around in and are lightweight as well which is why you can always count on a good pair of cotton socks while trekking. However, keep in mind to change them and avoid wearing them when they are wet.",
              },
              {
                img: "pack22.png",
                title: "Woolen Socks",
                description:
                  "A good pair of woolen socks, especially merino, are comfortable, limit odors and provide adequate insulation from the cold so you can wear them at night.",
              },
              {
                img: "pack23.png",
                title: "Woolen Gloves",
                description:
                  "Insulated gloves help in maintaining proper body heat in your hands and also provide a better grasp on trekking poles.",
              },
              {
                img: "pack24.png",
                title: "Main Jacket",
                description:
                  "It’s emphasized that you need to carry proper layers so you can avoid getting cold which is why you need to carry a heavy jacket that you can put on over your other clothes.",
              },
              {
                img: "pack25.png",
                title: "Woolen Cap",
                description:
                  "A woolen cap will help prevent cold when you ascend to high altitude. You can also cover your ears to avoid any pain and discomfort you might face in them when going at high altitudes.",
              },
              {
                img: "pack26.png",
                title: "Hoodie",
                description:
                  "A versatile layering option for various temperatures.",
              },
              {
                img: "pack27.png",
                title: "Scarf / Balaclava",
                description:
                  "Along with sun rays and chilly winds, you also get hit by dirt and grime during treks which is why it's important to carry a scarf or balaclava so you can cover your face when needed.",
              },
              {
                img: "pack28.png",
                title: "Head Lamp",
                description:
                  "You can’t rely on moonlight when you are in the mountains. A torch or even a headlamp with a fresh pair of batteries is always a good idea to bring along.",
              },
              {
                img: "pack29.png",
                title: "Trekking Pole",
                description:
                  "The trekking pole assists in more than one way. It saves energy while also providing stability and helps you to maintain proper balance.",
              },
              {
                img: "pack30.png",
                title: "Camera",
                description:
                  "This should be obvious. To make sure that you get to capture all the great moments from your trek. Make sure that you have enough storage and some extra batteries as well.",
              },
              {
                img: "pack31.png",
                title: "Riding Gear",
                description: "If your trip involves biking or motorcycling.",
              },
              {
                img: "pack32.png",
                title: "Moisturiser & Cold Cream",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack33.png",
                title: "Lip Balm",
                description:
                  "Your lips can become chapped due to the harsh cold winds so it's important to keep them moisturized.",
              },
              {
                img: "pack34.png",
                title: "Sanitary Pads",
                description: "Essential for feminine hygiene.",
              },
              {
                img: "pack35.png",
                title: "Insect Repellent",
                description: "Guards against pesky bugs and insects.",
              },
              {
                img: "pack36.png",
                title: "Cash",
                description: "Emergency funds for unexpected situations.",
              },
              {
                img: "pack37.png",
                title: "Thermals",
                description:
                  "Thermal is a piece of garment that helps in keeping your body warm in cold temperatures. It is a necessary item that you need when going on a high-altitude trek.",
              },
              {
                img: "pack38.png",
                title: "Snacks / Dryfruits / Energy Bar",
                description: "Provides quick energy on the go.",
              },
              {
                img: "pack39.png",
                title: "Positive Attitude",
                description:
                  "The most important item for a successful trek or trip, keeping your spirits high and adaptable to the challenges of the journey.",
              },
            ],
            itenariesdetails: [
              {
                day: "Day 0",
                description:
                  "Delhi to Joshimath via Rishikesh (517 Km, 12 Hrs)",
                details:
                  "🚗 Assemble at Akshardham Metro Station by 11 PM. 🌊 En route, visit sacred places like Haridwar and Rishikesh. 🛣️ Enjoy scenic views along the Badrinath road. 🏨 Check into the hotel upon reaching Joshimath. Leisure evening.",
              },
              {
                day: "Day 1",
                description: "Leisure Day in Joshimath",
                details:
                  "🌄 Marvel at the confluence of the Ganga river. 🏔️ Spend the day at leisure in Joshimath. 🍽️ Dinner and overnight stay in Joshimath.",
              },
              {
                day: "Day 2",
                description: "Auli Sightseeing",
                details:
                  "🏂 Head to Auli after breakfast. 🚡 Experience the Auli Cable Car with stunning mountain views. ⛷️ Enjoy winter sports activities like skiing. 🏨 Return to Joshimath for leisure time. 🍽️ Dinner and overnight stay in Joshimath.",
              },
              {
                day: "Day 3",
                description: "Return to Delhi via Rishikesh (253 Km, 8 Hrs)",
                details:
                  "🌅 Check out from Joshimath after breakfast. 🚗 Travel back to Rishikesh. 🛣️ Depart for Delhi in the evening.",
              },
              {
                day: "Day 4",
                description: "Delhi Arrival",
                details:
                  "🌇 Reach Delhi by early morning. 👋 Bid farewell with cherished memories. 🏔️ Trip concludes.",
              },
            ],

            cardcontentinclusion: [
              { img: "/meal.png", title: "Meals" },
              { img: "/stay.png", title: "Stays" },
              { img: "/car.png", title: "Transfers" },
              { img: "/activities.png", title: "Activities" },
            ],
            FaQDetails: [
              {
                title: "What is included in the Auli Weekend Tour package?",
                answer:
                  "Our package includes transportation, accommodation, guided skiing sessions, and meals. Specific details can be found in the tour itinerary.",
              },
              {
                title: "How do I book the Auli Weekend Tour?",
                answer:
                  "Visit our Auli Weekend Tour page, select your preferred dates, and follow the booking instructions. You’ll receive a confirmation email once your booking is complete.",
              },
              {
                title: "What should I pack for the Auli Weekend Tour?",
                answer:
                  "Pack warm clothing, including thermal wear, waterproof jackets, gloves, and sturdy footwear. Don’t forget your personal items and any required documents.",
              },
              {
                title: "Is skiing equipment provided?",
                answer:
                  "Yes, skiing equipment is provided as part of the tour package. If you have your own gear, you’re welcome to bring it along.",
              },
              {
                title: "Can beginners join the Auli Weekend Tour?",
                answer:
                  "Absolutely! Our guides offer support for beginners, including basic skiing lessons. The tour is suitable for all skill levels.",
              },
              {
                title: "What are the accommodation options?",
                answer:
                  "Accommodation options include comfortable hotels or guesthouses. Specific details about the accommodation will be shared in the booking confirmation.",
              },
              {
                title: "What is the best time to visit Auli for skiing?",
                answer:
                  "The best time for skiing in Auli is from December to March, when the snow conditions are optimal.",
              },
              {
                title: "Are meals included in the tour package?",
                answer:
                  "Yes, the tour package includes meals. We offer a variety of options to cater to different dietary preferences.",
              },
              {
                title: "What if I need to cancel or reschedule my booking?",
                answer:
                  "Please refer to our cancellation policy on the booking page. Contact our support team to discuss rescheduling options.",
              },
              {
                title:
                  "Is transportation provided from the nearest airport or railway station?",
                answer:
                  "Yes, transportation is included from the nearest airport or railway station to Auli. Details will be provided in your booking confirmation.",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        title: "6 DAY TOUR",
        title1: "View itinerary",
        description: "Pindari Glacier Trek",
        image: "pindaribanner.jpg",
        amount: 14500,
        location: "Kathgodam to Kathgodam",
        region: "Uttrakhand",
        places: ["Haridwar"],
        month: "January",
        difficulty: "Hard",
        season: "Autumn",
        theme: ["Adventure"],
        tourDetails: [
          {
            travelbanner: {
              travelimage: "pindaribanner.jpg",
              travelimagefirsttext: "Pindari ",
              travelimagesecondtext: "Glacier Trek",
              traveldays: "6 Days Trip",
              reviwsoftrip: "1073",
              starts: "6",
            },
            regions: [
              {
                image: "region.png",
                title: "Region",
                description: "Uttrakhand, India",
              },
              {
                image: "maxaltitude.png",
                title: "Max Altitude",
                description: "12300 Ft",
              },
              {
                image: "trekking.png",
                title: "Trekking Km",
                description: "50 KM",
              },
              {
                image: "diificulties.png",
                title: "Difficulty",
                description: "Medium",
              },
            ],
            travelprice: {
              priceperperson: "14500",
            },
            tempopriceDetails: [
              {
                occupancyType: "Quad Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "11999", // Example for another type of occupancy
              },
              {
                occupancyType: "Triple Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "12999",
              },

              {
                occupancyType: "Double Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "13999",
              },
            ],
            gallerysections: [
              "/pindari1.jpg",
              "/pindari2.jpg",
              "/pindari3.jpg",
              "/pindari4.jpg",
              "/pindari5.jpg",
              "/pindari6.jpg",
              "/pindari7.jpg",
              "/pindari8.jpg",
            ],

            overviewsdetails1: [
              {
                type: "intro",
                content: [
                  {
                    label: "Tour name:",
                    value: "Pindari Glacier Trek",
                    color: "grey",
                  },
                  {
                    text: "Experience the beauty of the Kumaon Himalayas amidst the tranquility of the Pindari Glacier.",
                  },
                  {
                    text: "Trek through the Nanda Devi Sanctuary and witness stunning views of peaks like Maiktoli and Panwali Dwar.",
                  },
                  {
                    text: "Traverse diverse landscapes, from rhododendron forests to lush meadows and cascading rivers.",
                  },
                  {
                    text: "Reach the summit of Pindari Glacier at an altitude of 3,660 meters and behold the majestic Nanda Devi peak.",
                  },
                  {
                    text: "Suitable for beginners and experienced trekkers alike.",
                  },
                ],
              },
              {
                type: "tour",
                text: "Location",
                text1: "Kumaon Himalayas",
                text2: "Region",
                text3: "Uttarakhand, India",
              },
              {
                type: "tour",
                text: "Adventure Type",
                text1: "Trekking",
                text2: "Duration",
                text3: "6 Days",
              },
              {
                type: "tour",
                text: "Base Camp:",
                text1: "Pindari Glacier",
                text2: "Altitude",
                text3: "12,007 ft (3,660 m)",
              },
              {
                type: "tour",
                text: "Stay:",
                text1: "Tented Camps & Guesthouses",
                text2: "Season",
                text3: "Summer, Autumn",
              },
              {
                type: "tour",
                text: "Difficulty Level:",
                text1: "Moderate to Challenging",
                text2: "Food",
                text3: "Meals included",
              },
              {
                type: "tour",
                text: "Trail Type",
                text1: "Mountain Trails & Glacier",
                text2: "Rail Head",
                text3: "Kathgodam",
              },
              {
                type: "tour",
                text: "Month",
                text1: "April, May, September, October",
              },
              {
                type: "highlight",
                title: "Highlights",
                items: [
                  "Experience the beauty of the Kumaon Himalayas amidst the tranquility of the Pindari Glacier.",
                  "Trek through the Nanda Devi Sanctuary and witness stunning views of peaks like Maiktoli and Panwali Dwar.",
                  "Traverse diverse landscapes, from rhododendron forests to lush meadows and cascading rivers.",
                  "Reach the summit of Pindari Glacier at an altitude of 3,660 meters and behold the majestic Nanda Devi peak.",
                  "Suitable for beginners and experienced trekkers alike.",
                ],
              },
              {
                type: "highlightText",
                text: "Meeting Point (Pickup/Drop Point):",
                text1: "Kathgodam Railway Station",
              },
              {
                type: "highlightText",
                text: "Reporting Time :",
                text1: "7 AM",
              },
              {
                type: "highlightText",
                text: "Drop Time:",
                text1: "Flexible based on return journey",
              },
            ],

            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            batches: {
              July: [
                { startDate: "10 Jul", endDate: "15 Jul", status: "Close" },
                { startDate: "20 Jul", endDate: "25 Jul", status: "Open" },
              ],
              August: [
                { startDate: "05 Aug", endDate: "10 Aug", status: "Full" },
                { startDate: "15 Aug", endDate: "20 Aug", status: "Open" },
              ],
              September: [
                { startDate: "01 Sep", endDate: "06 Sep", status: "Open" },
                { startDate: "10 Sep", endDate: "15 Sep", status: "Open" },
              ],
            },

            inclusion: [
              {
                img: "rightsign.png",
                title: "Transportation:",
                description:
                  "Kathgodam to Kathgodam transportation. Mules/Porters for central luggage.",
              },
              {
                img: "rightsign.png",
                title: "Accommodation:",
                description:
                  "Guest house, homestay, and camping on a twin sharing basis.",
              },
              {
                img: "rightsign.png",
                title: "Meals:",
                description: "Vegetarian meals provided while on the trek.",
              },
              {
                img: "rightsign.png",
                title: "Support:",
                description:
                  "Trek leader, experienced chef, local guides, and support staff.",
              },
              {
                img: "rightsign.png",
                title: "Trek Equipment:",
                description:
                  "Sleeping bags, mattress, utensils, tents, and safety gear provided.",
              },
              {
                img: "rightsign.png",
                title: "First Aid:",
                description:
                  "Medical kit, oxygen cylinder, and stretcher for emergencies.",
              },
              {
                img: "rightsign.png",
                title: "Clock Room Facility:",
                description: "Clock room facility available at the base camp.",
              },
            ],

            exclusion: [
              {
                img: "crossSign.png",
                title: "Insurance (Mandatory):",
                description: "",
              },
              {
                img: "crossSign.png",
                title: "Food during transit:",
                description: "",
              },
              {
                img: "crossSign.png",
                title: "Personal Expenses:",
                description: "",
              },
              {
                img: "crossSign.png",
                title: "Mule or Porter for Personal Luggage:",
                description: "",
              },
              {
                img: "crossSign.png",
                title: "Emergency Evacuation and Hospitalization Charges:",
                description: "",
              },
              {
                img: "crossSign.png",
                title: "Anything not mentioned under inclusions:",
                description: "",
              },
            ],

            cardcontent: [
              {
                iconName: "PlaceOutlinedIcon",
                title: "Pickup & Drop",
                description: "Kathgodam to Kathgodam",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "TimerOutlinedIcon",
                title: "Duration",
                description: "6 Days",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "BusinessCenterOutlinedIcon",
                title: "Category",
                description: "Trek",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "SportsScoreOutlinedIcon",
                title: "Difficulty",
                description: "Medium",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
            ],
            thingtopack: [
              {
                img: "pack1.png",
                title: "Rucksack",
                description:
                  "You must pick a good quality backpack with a comfortable fit and straps that won’t give you shoulder pain. You can check out your nearest Decathlon store for a good trekking backpack.",
              },
              {
                img: "pack2.png",
                title: "Day Bag / Day Pack",
                description:
                  "When you head towards the summit, you are required to carry only a few necessary items and for that, you need a day backpack as you will leave your bigger one on the campsite.",
              },
              {
                img: "pack3.png",
                title: "Hiking Shoes",
                description: "Durable footwear designed for rugged terrains.",
              },
              {
                img: "pack4.png",
                title: "Floaters or Sandals",
                description:
                  "Although the entire trek requires a good quality shoe, you still need to let your feet breathe to avoid chafing and blisters. When you are at the camp, a good pair of sandals and floaters will help you to move freely.",
              },
              {
                img: "pack5.png",
                title: "Tees / Tshirts",
                description:
                  "You must keep at least three pairs of quick dry tees so that you can wash them in between stops for proper hygiene.",
              },
              {
                img: "pack6.png",
                title: "Poncho",
                description:
                  "A poncho is an evolved form of a raincoat that provides coverage to your body as well as your bag and ensures total water protection from rain.",
              },
              {
                img: "pack7.png",
                title: "Quick Dry Towel",
                description:
                  "A quick dry towel will help in maintaining proper hygiene. It must dry quickly because the wet fabric will only increase the chance of bacterial growth.",
              },
              {
                img: "pack8.png",
                title: "Sanitizer",
                description:
                  "Essential for maintaining cleanliness while trekking.",
              },
              {
                img: "pack9.png",
                title: "Sun Cap / Hat",
                description:
                  "A lightweight sun cap with side flaps is perfect to keep your head cool and avoid sunburns on a sunny day.",
              },
              {
                img: "pack10.png",
                title: "Sunscreen SPF 40+",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack11.png",
                title: "Water Bottle (Re-usable)",
                description:
                  "Hydration is extremely important when it comes to trekking. Carrying a water bottle that you can refill with Himalayan water is a must.",
              },
              {
                img: "pack12.png",
                title: "Personal Toiletries",
                description:
                  "A bag with all your essentials including napkins, toothpaste, sanitizers, paper soap, etc should be carried in a ziplock bag.",
              },
              {
                img: "pack13.png",
                title: "Personal Medication / First Aid",
                description:
                  "A few cuts and bruises are almost inevitable when you are on a trek so carrying a medical kit with bandages, Dettol, etc is necessary.",
              },
              {
                img: "pack14.png",
                title: "Sun Glasses / Reading Glasses",
                description:
                  "Photochromatic glasses are specs that are designed to transform into anti-glare shades depending upon exposure to the sun. They are good when it comes to eye protection but one can also opt for clip-on glasses etc.",
              },
              {
                img: "pack15.png",
                title: "Charger",
                description:
                  "To keep your electronic devices powered during the trip.",
              },
              {
                img: "pack16.png",
                title: "Power Bank",
                description:
                  "Ensures your devices stay charged when there are no outlets.",
              },
              {
                img: "pack17.png",
                title: "Personal Documents & IDs",
                description:
                  "Identification proofs like Aadhar Card, Drivers License.",
              },
              {
                img: "pack18.png",
                title: "Laundry Bag (Waterproof)",
                description:
                  "In case your clothes get wet or your garments don’t dry, you can carry them in polythene. However, make sure that all the plastic that you are carrying into the woods leaves with you. Don’t litter in the mountains.",
              },
              {
                img: "pack19.png",
                title: "Track Pants",
                description:
                  "A good pair of track pants made of polyester will let your skin breathe. They’re lightweight, dry easily, and comfortable to walk around in. You can easily avoid chafing and rashes by investing in a good pair of track pants.",
              },
              {
                img: "pack20.png",
                title: "Trekking Shoes",
                description:
                  "A good trekking shoe is comfortable, provides ankle support, and has a good grip as well. They shouldn’t be chunky, instead, they should be lightweight and sturdy.",
              },
              {
                img: "pack21.png",
                title: "Cotton Socks",
                description:
                  "Cotton socks are extremely comfortable to move around in and are lightweight as well which is why you can always count on a good pair of cotton socks while trekking. However, keep in mind to change them and avoid wearing them when they are wet.",
              },
              {
                img: "pack22.png",
                title: "Woolen Socks",
                description:
                  "A good pair of woolen socks, especially merino, are comfortable, limit odors and provide adequate insulation from the cold so you can wear them at night.",
              },
              {
                img: "pack23.png",
                title: "Woolen Gloves",
                description:
                  "Insulated gloves help in maintaining proper body heat in your hands and also provide a better grasp on trekking poles.",
              },
              {
                img: "pack24.png",
                title: "Main Jacket",
                description:
                  "It’s emphasized that you need to carry proper layers so you can avoid getting cold which is why you need to carry a heavy jacket that you can put on over your other clothes.",
              },
              {
                img: "pack25.png",
                title: "Woolen Cap",
                description:
                  "A woolen cap will help prevent cold when you ascend to high altitude. You can also cover your ears to avoid any pain and discomfort you might face in them when going at high altitudes.",
              },
              {
                img: "pack26.png",
                title: "Hoodie",
                description:
                  "A versatile layering option for various temperatures.",
              },
              {
                img: "pack27.png",
                title: "Scarf / Balaclava",
                description:
                  "Along with sun rays and chilly winds, you also get hit by dirt and grime during treks which is why it's important to carry a scarf or balaclava so you can cover your face when needed.",
              },
              {
                img: "pack28.png",
                title: "Head Lamp",
                description:
                  "You can’t rely on moonlight when you are in the mountains. A torch or even a headlamp with a fresh pair of batteries is always a good idea to bring along.",
              },
              {
                img: "pack29.png",
                title: "Trekking Pole",
                description:
                  "The trekking pole assists in more than one way. It saves energy while also providing stability and helps you to maintain proper balance.",
              },
              {
                img: "pack30.png",
                title: "Camera",
                description:
                  "This should be obvious. To make sure that you get to capture all the great moments from your trek. Make sure that you have enough storage and some extra batteries as well.",
              },
              {
                img: "pack31.png",
                title: "Riding Gear",
                description: "If your trip involves biking or motorcycling.",
              },
              {
                img: "pack32.png",
                title: "Moisturiser & Cold Cream",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack33.png",
                title: "Lip Balm",
                description:
                  "Your lips can become chapped due to the harsh cold winds so it's important to keep them moisturized.",
              },
              {
                img: "pack34.png",
                title: "Sanitary Pads",
                description: "Essential for feminine hygiene.",
              },
              {
                img: "pack35.png",
                title: "Insect Repellent",
                description: "Guards against pesky bugs and insects.",
              },
              {
                img: "pack36.png",
                title: "Cash",
                description: "Emergency funds for unexpected situations.",
              },
              {
                img: "pack37.png",
                title: "Thermals",
                description:
                  "Thermal is a piece of garment that helps in keeping your body warm in cold temperatures. It is a necessary item that you need when going on a high-altitude trek.",
              },
              {
                img: "pack38.png",
                title: "Snacks / Dryfruits / Energy Bar",
                description: "Provides quick energy on the go.",
              },
              {
                img: "pack39.png",
                title: "Positive Attitude",
                description:
                  "The most important item for a successful trek or trip, keeping your spirits high and adaptable to the challenges of the journey.",
              },
            ],

            itenariesdetails: [
              {
                day: "Day 1",
                description: "Drive from Kathgodam to Khati Village",
                details:
                  "Altitude: 2200 m/ 7300 ft.\nDistance: Approx. 214 km\nDuration: 9 to 10 hrs.\nAccommodation: Twin-sharing tents.",
              },
              {
                day: "Day 2",
                description: "Trek from Khati to Dwali",
                details:
                  "Altitude: 2,600 m/ 8,600 ft.\nTrek Distance: 13 km\nDuration: 7-8 hrs.\nAccommodation: Twin-sharing camps.",
              },
              {
                day: "Day 3",
                description: "Trek from Dwali to Phurkia",
                details:
                  "Altitude: 3,200 m/ 10,500 ft\nDistance: 5 km\nDuration: 3 hrs.\nAccommodation: Twin-sharing tents.",
              },
              {
                day: "Day 4",
                description:
                  "Trek from Phurkia to Zero Point and back to Phurkia",
                details:
                  "Altitude: 3,700 m/ 12,100 ft.\nDistance: 16 km\nDuration: 6 to 7 hrs.\nAccommodation: Twin-sharing tents.",
              },
              {
                day: "Day 5",
                description: "Trek from Phurkia to Khati via Dwali",
                details:
                  "Altitude: 2,200 m/ 7,300 ft.\nTrek Distance: 18 km\nDuration: 7 to 8 hrs.\nAccommodation: Twin-sharing tents.",
              },
              {
                day: "Day 6",
                description: "Drive from Khati to Kathgodam",
                details:
                  "Altitude: 2,050 m/ 6,750 ft.\nTrek Distance: 4 km\nDuration: 1 hr.\nDrive Distance: 210 km\nDuration: 9 to 10 hrs.",
              },
            ],

            cardcontentinclusion: [
              { img: "/meal.png", title: "Meals" },
              { img: "/stay.png", title: "Stays" },
              { img: "/car.png", title: "Transfers" },
              { img: "/activities.png", title: "Activities" },
            ],

            FaQDetails: [
              {
                title: "What is the best time to do the Pindari Glacier Trek?",
                answer:
                  "The best time to do the Pindari Glacier Trek is during the summer (April to June) and autumn (September to November) months. These periods offer the most stable weather conditions, making the trek more enjoyable and safer.",
              },
              {
                title: "How difficult is the Pindari Glacier Trek?",
                answer:
                  "The Pindari Glacier Trek is rated as moderately challenging. It is suitable for both beginners and experienced trekkers, but some level of physical fitness is recommended due to the long trekking distances and high altitude.",
              },
              {
                title:
                  "What kind of accommodation is provided during the trek?",
                answer:
                  "Accommodation during the trek includes guesthouses, homestays, and tented camps on a twin-sharing basis. The facilities are basic but comfortable, providing the essentials needed for a pleasant stay.",
              },
              {
                title: "Is it safe to trek to Pindari Glacier?",
                answer:
                  "Yes, the Pindari Glacier Trek is considered safe for trekkers. Experienced trek leaders, local guides, and support staff are available throughout the trek to ensure your safety. However, it is important to follow the instructions provided by your guides.",
              },
              {
                title: "What should I pack for the Pindari Glacier Trek?",
                answer:
                  "Essential items to pack include a good quality backpack, trekking shoes, warm clothing, a sleeping bag, personal medication, and basic toiletries. A detailed packing list is usually provided before the trek.",
              },
              {
                title:
                  "Is there a provision for personal luggage during the trek?",
                answer:
                  "Yes, you can hire mules or porters for your personal luggage during the trek. This service is not included in the trek cost and needs to be arranged separately.",
              },
              {
                title: "Do I need to carry my own trekking equipment?",
                answer:
                  "No, the necessary trekking equipment such as tents, sleeping bags, and safety gear will be provided during the trek. However, you should bring your own personal gear like trekking shoes and clothing.",
              },
              {
                title: "Is prior trekking experience required?",
                answer:
                  "Prior trekking experience is not mandatory, but it is helpful. The trek is suitable for beginners, but having a basic level of fitness will enhance your experience.",
              },
            ],
          },
        ],
      },
      {
        id: "3",
        title: "1 DAY TOUR",
        title1: "View itinerary",
        description: "Kunjapuri Trek Rishikesh",
        image: "kunjapuribanner.jpg",
        amount: 2200,
        location: "Rishikesh To Rishikesh",
        region: "Uttrakhand",
        places: ["Haridwar"],
        month: "January",
        difficulty: "Easy",
        season: "Winter",
        theme: ["Beginner"],
        tourDetails: [
          {
            travelbanner: {
              travelimage: "kunjapuribanner.jpg",
              travelimagefirsttext: "Kunjapuri  ",
              travelimagesecondtext: "Trek Rishikesh",
              traveldays: "1 Days Trip",
              reviwsoftrip: "1073",
              starts: "1",
            },
            regions: [
              {
                image: "region.png",
                title: "Region",
                description: "Uttrakhand, India",
              },
              {
                image: "maxaltitude.png",
                title: "Max Altitude",
                description: "1676 ft",
              },
              {
                image: "trekking.png",
                title: "Trekking Km",
                description: "11 KM",
              },
              {
                image: "diificulties.png",
                title: "Difficulty",
                description: "Easy",
              },
            ],
            travelprice: {
              priceperperson: "2200",
            },
            tempopriceDetails: [
              {
                occupancyType: "Quad Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "11999", // Example for another type of occupancy
              },
              {
                occupancyType: "Triple Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "12999",
              },

              {
                occupancyType: "Double Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "13999",
              },
            ],
            gallerysections: [
              "/kunja1.jpg",
              "/kunja2.jpg",
              "/kunja3.jpg",
              "/kunja4.jpg",
            ],

            overviewsdetails1: [
              {
                type: "intro",
                content: [
                  {
                    label: "Tour name:",
                    value: "Kunjapuri Trek Rishikesh",
                    color: "grey",
                  },
                  {
                    text: "Rishikesh, known for its ashrams, yoga, and meditation camps, attracts many adventure lovers and trekkers.",
                  },
                  {
                    text: "The Kunjapuri Temple, dedicated to a revered Hindu goddess, is one of the spiritually significant sites in the region.",
                  },
                  {
                    text: "This 8-hour trek from Rishikesh to the Kunjapuri Temple offers not only spiritual enrichment but also stunning natural beauty.",
                  },
                ],
              },
              {
                type: "tour",
                text: "Location",
                text1: "Kunjapuri Temple, Rishikesh",
                text2: "Country",
                text3: "India",
              },
              {
                type: "tour",
                text: "Adventure Type",
                text1: "Trekking and Spiritual Experience",
                text2: "Duration",
                text3: "1 Day",
              },
              {
                type: "tour",
                text: "Altitude",
                text1: "1,676 meters above sea level",
                text2: "Season",
                text3: "Year-round",
              },
              {
                type: "tour",
                text: "Stay",
                text1: "Not applicable for this day trip",
                text2: "Food",
                text3: "Meals not included",
              },
              {
                type: "tour",
                text: "Difficulty Level",
                text1: "Easy",
                text2: "Food",
                text3: "Meals not included",
              },
              {
                type: "highlight",
                title: "Highlights",
                items: [
                  "Altitude: Kunjapuri Temple situated at 1676 meters above sea level.",
                  "Scenic Views: Panoramic views of lush green mountains and a stunning sunrise.",
                  "Waterfall Visit: Relax or take a plunge in the tranquil Neergaddu Waterfall pool.",
                  "Professional Guidance: Assistance from a professional trek leader for a hassle-free experience.",
                ],
              },
              {
                type: "highlightText",
                text: "Meeting Point:",
                text1: "Rishikesh",
              },
              {
                type: "highlightText",
                text: "Reporting Time:",
                text1: "Early morning (exact time to be confirmed)",
              },
              {
                type: "highlightText",
                text: "Return Time:",
                text1: "Late afternoon (approx. 8 hours trek)",
              },
            ],

            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            batches: {
              July: [
                { startDate: "10 Jul", endDate: "15 Jul", status: "Close" },
                { startDate: "20 Jul", endDate: "25 Jul", status: "Open" },
              ],
              August: [
                { startDate: "05 Aug", endDate: "10 Aug", status: "Full" },
                { startDate: "15 Aug", endDate: "20 Aug", status: "Open" },
              ],
              September: [
                { startDate: "01 Sep", endDate: "06 Sep", status: "Open" },
                { startDate: "10 Sep", endDate: "15 Sep", status: "Open" },
              ],
            },

            inclusion: [
              {
                img: "rightsign.png",
                title: "Transportation:",
                description:
                  "Pick-up and drop-off from your specified location in Tapovan, Rishikesh.",
              },
              {
                img: "rightsign.png",
                title: "Meals:",
                description: "Fulfilling lunch included.",
              },
              {
                img: "rightsign.png",
                title: "Mobile Voucher:",
                description: "For convenience.",
              },
              {
                img: "rightsign.png",
                title: "Guide:",
                description: "Professional trek leader.",
              },
              {
                img: "rightsign.png",
                title: "Cashback:",
                description: "Offers available.",
              },
              {
                img: "rightsign.png",
                title: "Accommodation:",
                description:
                  "Camping gear and guest house accommodations as per itinerary.",
              },
              {
                img: "rightsign.png",
                title: "Support:",
                description:
                  "Experienced trek leaders, guides, and support staff.",
              },
              {
                img: "rightsign.png",
                title: "Trek Equipment:",
                description:
                  "Provided trekking equipment, including tents, sleeping bags, and kitchen/dining essentials.",
              },
              {
                img: "rightsign.png",
                title: "First Aid:",
                description:
                  "Medical kit, oxygen cylinder, and necessary emergency equipment.",
              },
              {
                img: "rightsign.png",
                title: "Permits and Entry Fees:",
                description: "All necessary permits and entry fees included.",
              },
              {
                img: "rightsign.png",
                title: "Trek Completion Certificate:",
                description: "Recognition of trek completion by Trip My Soul.",
              },
            ],

            exclusion: [
              {
                img: "crossSign.png",
                title: "GST (5%) is applicable extra:",
                description: "",
              },
              {
                img: "crossSign.png",
                title:
                  "Any kind of food or beverage that is not included in the package:",
                description:
                  "This includes alcoholic drinks, mineral water, meals/refreshments/lunches on the highway.",
              },
              {
                img: "crossSign.png",
                title: "Any personal expenses:",
                description:
                  "Such as tips to drivers, entry to monuments/monasteries, camera/video camera charges, camel safari, river rafting, laundry, telephone bills, tips, etc.",
              },
              {
                img: "crossSign.png",
                title: "Any cost arising due to natural calamities:",
                description:
                  "Like landslides, roadblocks, etc. (to be borne directly by the customer on the spot).",
              },
              {
                img: "crossSign.png",
                title: "Anything not mentioned in the inclusions:",
                description: "",
              },
              {
                img: "crossSign.png",
                title: "Any damage to the bike except engine damage:",
                description: "Must be borne by the client.",
              },
              {
                img: "crossSign.png",
                title: "Airport pick and drop not included:",
                description: "",
              },
            ],

            cardcontent: [
              {
                iconName: "PlaceOutlinedIcon",
                title: "Pickup & Drop",
                description: "Rishikesh To Rishikesh",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "TimerOutlinedIcon",
                title: "Duration",
                description: "1 Days",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "BusinessCenterOutlinedIcon",
                title: "Category",
                description: "Trek",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "SportsScoreOutlinedIcon",
                title: "Difficulty",
                description: "Easy",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
            ],
            thingtopack: [
              {
                img: "pack1.png",
                title: "Rucksack",
                description:
                  "You must pick a good quality backpack with a comfortable fit and straps that won’t give you shoulder pain. You can check out your nearest Decathlon store for a good trekking backpack.",
              },
              {
                img: "pack2.png",
                title: "Day Bag / Day Pack",
                description:
                  "When you head towards the summit, you are required to carry only a few necessary items and for that, you need a day backpack as you will leave your bigger one on the campsite.",
              },
              {
                img: "pack3.png",
                title: "Hiking Shoes",
                description: "Durable footwear designed for rugged terrains.",
              },
              {
                img: "pack4.png",
                title: "Floaters or Sandals",
                description:
                  "Although the entire trek requires a good quality shoe, you still need to let your feet breathe to avoid chafing and blisters. When you are at the camp, a good pair of sandals and floaters will help you to move freely.",
              },
              {
                img: "pack5.png",
                title: "Tees / Tshirts",
                description:
                  "You must keep at least three pairs of quick dry tees so that you can wash them in between stops for proper hygiene.",
              },
              {
                img: "pack6.png",
                title: "Poncho",
                description:
                  "A poncho is an evolved form of a raincoat that provides coverage to your body as well as your bag and ensures total water protection from rain.",
              },
              {
                img: "pack7.png",
                title: "Quick Dry Towel",
                description:
                  "A quick dry towel will help in maintaining proper hygiene. It must dry quickly because the wet fabric will only increase the chance of bacterial growth.",
              },
              {
                img: "pack8.png",
                title: "Sanitizer",
                description:
                  "Essential for maintaining cleanliness while trekking.",
              },
              {
                img: "pack9.png",
                title: "Sun Cap / Hat",
                description:
                  "A lightweight sun cap with side flaps is perfect to keep your head cool and avoid sunburns on a sunny day.",
              },
              {
                img: "pack10.png",
                title: "Sunscreen SPF 40+",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack11.png",
                title: "Water Bottle (Re-usable)",
                description:
                  "Hydration is extremely important when it comes to trekking. Carrying a water bottle that you can refill with Himalayan water is a must.",
              },
              {
                img: "pack12.png",
                title: "Personal Toiletries",
                description:
                  "A bag with all your essentials including napkins, toothpaste, sanitizers, paper soap, etc should be carried in a ziplock bag.",
              },
              {
                img: "pack13.png",
                title: "Personal Medication / First Aid",
                description:
                  "A few cuts and bruises are almost inevitable when you are on a trek so carrying a medical kit with bandages, Dettol, etc is necessary.",
              },
              {
                img: "pack14.png",
                title: "Sun Glasses / Reading Glasses",
                description:
                  "Photochromatic glasses are specs that are designed to transform into anti-glare shades depending upon exposure to the sun. They are good when it comes to eye protection but one can also opt for clip-on glasses etc.",
              },
              {
                img: "pack15.png",
                title: "Charger",
                description:
                  "To keep your electronic devices powered during the trip.",
              },
              {
                img: "pack16.png",
                title: "Power Bank",
                description:
                  "Ensures your devices stay charged when there are no outlets.",
              },
              {
                img: "pack17.png",
                title: "Personal Documents & IDs",
                description:
                  "Identification proofs like Aadhar Card, Drivers License.",
              },
              {
                img: "pack18.png",
                title: "Laundry Bag (Waterproof)",
                description:
                  "In case your clothes get wet or your garments don’t dry, you can carry them in polythene. However, make sure that all the plastic that you are carrying into the woods leaves with you. Don’t litter in the mountains.",
              },
              {
                img: "pack19.png",
                title: "Track Pants",
                description:
                  "A good pair of track pants made of polyester will let your skin breathe. They’re lightweight, dry easily, and comfortable to walk around in. You can easily avoid chafing and rashes by investing in a good pair of track pants.",
              },
              {
                img: "pack20.png",
                title: "Trekking Shoes",
                description:
                  "A good trekking shoe is comfortable, provides ankle support, and has a good grip as well. They shouldn’t be chunky, instead, they should be lightweight and sturdy.",
              },
              {
                img: "pack21.png",
                title: "Cotton Socks",
                description:
                  "Cotton socks are extremely comfortable to move around in and are lightweight as well which is why you can always count on a good pair of cotton socks while trekking. However, keep in mind to change them and avoid wearing them when they are wet.",
              },
              {
                img: "pack22.png",
                title: "Woolen Socks",
                description:
                  "A good pair of woolen socks, especially merino, are comfortable, limit odors and provide adequate insulation from the cold so you can wear them at night.",
              },
              {
                img: "pack23.png",
                title: "Woolen Gloves",
                description:
                  "Insulated gloves help in maintaining proper body heat in your hands and also provide a better grasp on trekking poles.",
              },
              {
                img: "pack24.png",
                title: "Main Jacket",
                description:
                  "It’s emphasized that you need to carry proper layers so you can avoid getting cold which is why you need to carry a heavy jacket that you can put on over your other clothes.",
              },
              {
                img: "pack25.png",
                title: "Woolen Cap",
                description:
                  "A woolen cap will help prevent cold when you ascend to high altitude. You can also cover your ears to avoid any pain and discomfort you might face in them when going at high altitudes.",
              },
              {
                img: "pack26.png",
                title: "Hoodie",
                description:
                  "A versatile layering option for various temperatures.",
              },
              {
                img: "pack27.png",
                title: "Scarf / Balaclava",
                description:
                  "Along with sun rays and chilly winds, you also get hit by dirt and grime during treks which is why it's important to carry a scarf or balaclava so you can cover your face when needed.",
              },
              {
                img: "pack28.png",
                title: "Head Lamp",
                description:
                  "You can’t rely on moonlight when you are in the mountains. A torch or even a headlamp with a fresh pair of batteries is always a good idea to bring along.",
              },
              {
                img: "pack29.png",
                title: "Trekking Pole",
                description:
                  "The trekking pole assists in more than one way. It saves energy while also providing stability and helps you to maintain proper balance.",
              },
              {
                img: "pack30.png",
                title: "Camera",
                description:
                  "This should be obvious. To make sure that you get to capture all the great moments from your trek. Make sure that you have enough storage and some extra batteries as well.",
              },
              {
                img: "pack31.png",
                title: "Riding Gear",
                description: "If your trip involves biking or motorcycling.",
              },
              {
                img: "pack32.png",
                title: "Moisturiser & Cold Cream",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack33.png",
                title: "Lip Balm",
                description:
                  "Your lips can become chapped due to the harsh cold winds so it's important to keep them moisturized.",
              },
              {
                img: "pack34.png",
                title: "Sanitary Pads",
                description: "Essential for feminine hygiene.",
              },
              {
                img: "pack35.png",
                title: "Insect Repellent",
                description: "Guards against pesky bugs and insects.",
              },
              {
                img: "pack36.png",
                title: "Cash",
                description: "Emergency funds for unexpected situations.",
              },
              {
                img: "pack37.png",
                title: "Thermals",
                description:
                  "Thermal is a piece of garment that helps in keeping your body warm in cold temperatures. It is a necessary item that you need when going on a high-altitude trek.",
              },
              {
                img: "pack38.png",
                title: "Snacks / Dryfruits / Energy Bar",
                description: "Provides quick energy on the go.",
              },
              {
                img: "pack39.png",
                title: "Positive Attitude",
                description:
                  "The most important item for a successful trek or trip, keeping your spirits high and adaptable to the challenges of the journey.",
              },
            ],
            itenariesdetails: [
              {
                day: "Day 0",
                description: "Pick-up and Trek Start",
                details:
                  "Start your journey with a pick-up from your specified location in Tapovan, Rishikesh. Reach the main gate of Kunjapuri Temple where your trek begins. Meet your guide and begin the climb of approximately 300 stairs.",
              },
              {
                day: "Day 1",
                description: "Temple Visit and Descent",
                details:
                  "Upon reaching the top, pay your respects at the temple and enjoy panoramic views of the Shivaliks. Begin your descent back to Rishikesh, passing through picturesque villages, paddy fields, and forests, with opportunities to spot Himalayan wildlife. End your trek at Neergaddu Waterfall, where you can relax and unwind amidst the misty beauty. Walk 1.5 km to the pick-up point and return to your hotel in a comfortable vehicle.",
              },
            ],
            cardcontentinclusion: [
              { img: "/meal.png", title: "Meals" },
              { img: "/stay.png", title: "Stays" },
              { img: "/car.png", title: "Transfers" },
              { img: "/activities.png", title: "Activities" },
            ],
            FaQDetails: [
              {
                title: "What is the Kunjapuri Trek?",
                answer:
                  "The Kunjapuri Trek is a one-day trekking experience from Rishikesh to the Kunjapuri Temple, known for its spiritual significance and stunning natural beauty.",
              },
              {
                title: "How long is the Kunjapuri Trek?",
                answer:
                  "The trek covers approximately 11 kilometers and typically takes about 8 hours to complete.",
              },
              {
                title: "What is the difficulty level of the Kunjapuri Trek?",
                answer:
                  "The Kunjapuri Trek is classified as an easy trek, suitable for beginners and families.",
              },
              {
                title: "What is the best time to do the Kunjapuri Trek?",
                answer:
                  "The trek can be done year-round, but the best time is during the winter season, from October to February, for the most pleasant weather and clear views.",
              },
              {
                title: "What should I carry for the Kunjapuri Trek?",
                answer:
                  "Essential items include a good quality backpack, hiking shoes, water bottle, sunscreen, hat, personal medication, and a light jacket. A complete list of items to pack will be provided in your booking details.",
              },
              {
                title: "Are meals provided during the trek?",
                answer:
                  "The package includes a fulfilling lunch. However, it's recommended to carry some snacks and water for the trek.",
              },
              {
                title: "Is transportation provided for the Kunjapuri Trek?",
                answer:
                  "Yes, transportation for pick-up and drop-off from your specified location in Tapovan, Rishikesh, is included in the package.",
              },
              {
                title: "Do I need any permits for the Kunjapuri Trek?",
                answer:
                  "All necessary permits and entry fees are included in the trek package, so you don't need to arrange them separately.",
              },
              {
                title:
                  "Is there professional guidance available during the trek?",
                answer:
                  "Yes, a professional trek leader will accompany you to ensure a safe and enjoyable trekking experience.",
              },
              {
                title: "What kind of views can I expect during the trek?",
                answer:
                  "The trek offers panoramic views of lush green mountains, a stunning sunrise, and a visit to the tranquil Neergaddu Waterfall pool.",
              },
              {
                title: "Is the Kunjapuri Trek suitable for children?",
                answer:
                  "Yes, the trek is suitable for children who are reasonably fit and enjoy outdoor activities.",
              },
              {
                title: "What should I wear for the Kunjapuri Trek?",
                answer:
                  "Wear comfortable trekking shoes, breathable clothing, and carry layers to adjust to changing weather conditions.",
              },
              {
                title: "Is there any mobile network coverage during the trek?",
                answer:
                  "Mobile network coverage might be limited in certain areas, so it's advisable to inform your contacts about limited connectivity beforehand.",
              },
              {
                title: "What happens in case of bad weather?",
                answer:
                  "In case of bad weather or unforeseen circumstances, the trek may be rescheduled or canceled for safety reasons. You will be informed of any changes in advance.",
              },
              {
                title: "How do I book the Kunjapuri Trek?",
                answer:
                  "You can book the trek through our website or contact our customer support for assistance with the booking process.",
              },
              {
                title: "Is there any age restriction for the Kunjapuri Trek?",
                answer:
                  "There is no strict age restriction, but participants should be reasonably fit and capable of walking for several hours. Children should be accompanied by an adult.",
              },
              {
                title: "What is the refund policy for cancellations?",
                answer:
                  "The refund policy will be detailed in your booking confirmation. Please refer to it for specific information on cancellations and refunds.",
              },
              {
                title:
                  "Are there any medical facilities available during the trek?",
                answer:
                  "A first aid kit and necessary emergency equipment will be carried by the trek leader. It's recommended to carry any personal medication you might need.",
              },
              {
                title:
                  "Can I do the Kunjapuri Trek alone or do I need to join a group?",
                answer:
                  "You can join an organized group trek or arrange for a private trek. Both options are available based on your preference.",
              },
              {
                title: "Is the Kunjapuri Trek pet-friendly?",
                answer:
                  "Pets are generally not recommended for the trek due to the challenging terrain and potential safety concerns.",
              },
            ],
          },
        ],
      },
      {
        id: "4",
        title: "7 DAY TOUR",
        title1: "View itinerary",
        description: "Har Ki Dun",
        image: "harkidunbanner.jpg",
        amount: 11000,
        location: "Dehradun to Dehradun",
        region: "Uttrakhand",
        places: ["Haridwar"],
        month: "January",
        difficulty: "Easy",
        season: "Winter",
        theme: ["Beginner"],
        tourDetails: [
          {
            travelbanner: {
              travelimage: "harkidunbanner.jpg",
              travelimagefirsttext: "Har Ki Dun",
              travelimagesecondtext: "Trek",
              traveldays: "7 Days Trip",
              reviwsoftrip: "1073",
              starts: "7",
            },
            regions: [
              {
                image: "region.png",
                title: "Region",
                description: "Uttrakhand, India",
              },
              {
                image: "maxaltitude.png",
                title: "Max Altitude",
                description: "11,800 ft",
              },
              {
                image: "trekking.png",
                title: "Trekking Km",
                description: "30KM",
              },
              {
                image: "diificulties.png",
                title: "Difficulty",
                description: "Easy to Moderate",
              },
            ],
            travelprice: {
              priceperperson: "11000",
            },
            tempopriceDetails: [
              {
                occupancyType: "Quad Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "11999", // Example for another type of occupancy
              },
              {
                occupancyType: "Triple Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "12999",
              },

              {
                occupancyType: "Double Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "13999",
              },
            ],
            gallerysections: [
              "/hkd1.jpg",
              "/hkd2.jpg",
              "/hkd3.jpg",
              "/hkd4.jpg",
              "/hkd5.jpg",
              "/hkd6.jpg",
              "/hkd7.jpg",
              "/hkd8.jpg",
            ],
            overviewsdetails1: [
              {
                type: "intro",
                content: [
                  {
                    label: "Tour name:",
                    value: "Har Ki Dun Trek",
                    color: "grey",
                  },
                  {
                    text: "Embark on an unforgettable journey through the captivating landscapes of Har Ki Dun, a trekking paradise nestled in the heart of the Himalayas.",
                  },
                  {
                    text: "With its lush meadows, ancient forests, and majestic snow-capped peaks, the Har Ki Dun trek offers a perfect blend of adventure and tranquility.",
                  },
                  {
                    text: "Ideal for nature enthusiasts and adventure seekers, this trek provides a unique opportunity to explore the pristine beauty of the Indian Himalayas.",
                  },
                ],
              },
              {
                type: "tour",
                text: "location",
                text1: "Har Ki Dun, Uttarakhand",
                text2: "Country",
                text3: "India",
              },
              {
                type: "tour",
                text: "Adventure Type",
                text1: "Trekking and Nature Exploration",
                text2: "Duration",
                text3: "6 Days",
              },
              {
                type: "tour",
                text: "Base Camp:",
                text1: "Sankri, Uttarakhand",
                text2: "Altitude",
                text3: "11,700 ft",
              },
              {
                type: "tour",
                text: "Stay:",
                text1: "Camping and Guesthouses",
                text2: "Season",
                text3: "Summer and Autumn",
              },
              {
                type: "tour",
                text: "Difficulty Level:",
                text1: "Moderate to Challenging",
                text2: "Food",
                text3: "Nutritious meals included",
              },
              {
                type: "tour",
                text: "Trail Type",
                text1: "Forest Trails, Meadows, and Alpine Pastures",
                text2: "Rail Head",
                text3: "Dehradun",
              },
              {
                type: "tour",
                text: "Month",
                text1: "May, June, September, October",
              },
              {
                type: "highlight",
                title: "Highlights",
                items: [
                  "Stunning views of Swargarohini, Bandarpoonch, and Black Peak.",
                  "Rich flora and fauna, including diverse ecosystems.",
                  "Cultural insights from traditional villages and local communities.",
                  "Serene environment perfect for escaping city life.",
                ],
              },
              {
                type: "highlightText",
                text: "Meeting Point (Pickup/Drop Point):",
                text1: "Dehradun Railway Station",
              },
              {
                type: "highlightText",
                text: "Reporting Time:",
                text1: "6 AM",
              },
              {
                type: "highlightText",
                text: "Drop Time:",
                text1: "Flexible based on departure",
              },
            ],

            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            batches: {
              July: [
                { startDate: "10 Jul", endDate: "15 Jul", status: "Close" },
                { startDate: "20 Jul", endDate: "25 Jul", status: "Open" },
              ],
              August: [
                { startDate: "05 Aug", endDate: "10 Aug", status: "Full" },
                { startDate: "15 Aug", endDate: "20 Aug", status: "Open" },
              ],
              September: [
                { startDate: "01 Sep", endDate: "06 Sep", status: "Open" },
                { startDate: "10 Sep", endDate: "15 Sep", status: "Open" },
              ],
            },
            inclusion: [
              {
                img: "rightsign.png",
                title: "Transportation:",
                description: "Dehradun-Dehradun transportation.",
              },
              {
                img: "rightsign.png",
                title: "Meals:",
                description: "Veg Meals: Breakfast, Lunch, Snacks, Dinner.",
              },
              {
                img: "rightsign.png",
                title: "Camping Equipment:",
                description: "Tents, Sleeping Bags, Sleeping Mats.",
              },
              {
                img: "rightsign.png",
                title: "Gears:",
                description: "Snow Grips/Micro Spikes, Gaiters.",
              },
              {
                img: "rightsign.png",
                title: "Accommodation:",
                description: "Hotel/Guest House on Day 1 & 6.",
              },
              {
                img: "rightsign.png",
                title: "Support:",
                description:
                  "Experienced Trek Leader, Guides, Supportive Staff.",
              },
              {
                img: "rightsign.png",
                title: "Permits:",
                description: "Forest Permits.",
              },
              {
                img: "rightsign.png",
                title: "Medical Amenities:",
                description: "First Aid, Oxymeters, Oxygen Cylinders.",
              },
              {
                img: "rightsign.png",
                title: "Sanitized Campsites and Hotels:",
                description:
                  "Ensuring cleanliness and safety throughout the trek.",
              },
            ],

            exclusion: [
              {
                img: "crossSign.png",
                title: "GST (5%) is applicable extra:",
                description: "",
              },
              {
                img: "crossSign.png",
                title:
                  "Any kind of food or beverage that is not included in the package:",
                description:
                  "This includes alcoholic drinks, mineral water, meals/refreshments/lunches on the highway.",
              },
              {
                img: "crossSign.png",
                title: "Personal expenses:",
                description:
                  "Such as tips to drivers, entry to monuments/monasteries, camera/video camera charges, camel safari, river rafting, laundry, telephone bills, etc.",
              },
              {
                img: "crossSign.png",
                title: "Any cost arising due to natural calamities:",
                description:
                  "Like landslides, roadblocks, etc. (to be borne directly by the customer on the spot).",
              },
              {
                img: "crossSign.png",
                title: "Anything not mentioned in the inclusions:",
                description: "",
              },
              {
                img: "crossSign.png",
                title:
                  "Porter/Mule Charges (personal) and Backpack Offloading Charges:",
                description:
                  "Additional costs for personal porter/mule services and backpack offloading.",
              },
              {
                img: "crossSign.png",
                title: "Cost of Evacuation in Case of Emergency:",
                description:
                  "Any costs incurred for evacuation due to emergency situations.",
              },
              {
                img: "crossSign.png",
                title: "Meals During Transportation:",
                description:
                  "Meals not covered during travel to and from the trek.",
              },
            ],

            cardcontent: [
              {
                iconName: "PlaceOutlinedIcon",
                title: "Pickup & Drop",
                description: "Dehradun to Dehradun",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "TimerOutlinedIcon",
                title: "Duration",
                description: "7 Days",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "BusinessCenterOutlinedIcon",
                title: "Category",
                description: "Trek",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "SportsScoreOutlinedIcon",
                title: "Difficulty",
                description: "Easy",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
            ],
            thingtopack: [
              {
                img: "pack1.png",
                title: "Rucksack",
                description:
                  "You must pick a good quality backpack with a comfortable fit and straps that won’t give you shoulder pain. You can check out your nearest Decathlon store for a good trekking backpack.",
              },
              {
                img: "pack2.png",
                title: "Day Bag / Day Pack",
                description:
                  "When you head towards the summit, you are required to carry only a few necessary items and for that, you need a day backpack as you will leave your bigger one on the campsite.",
              },
              {
                img: "pack3.png",
                title: "Hiking Shoes",
                description: "Durable footwear designed for rugged terrains.",
              },
              {
                img: "pack4.png",
                title: "Floaters or Sandals",
                description:
                  "Although the entire trek requires a good quality shoe, you still need to let your feet breathe to avoid chafing and blisters. When you are at the camp, a good pair of sandals and floaters will help you to move freely.",
              },
              {
                img: "pack5.png",
                title: "Tees / Tshirts",
                description:
                  "You must keep at least three pairs of quick dry tees so that you can wash them in between stops for proper hygiene.",
              },
              {
                img: "pack6.png",
                title: "Poncho",
                description:
                  "A poncho is an evolved form of a raincoat that provides coverage to your body as well as your bag and ensures total water protection from rain.",
              },
              {
                img: "pack7.png",
                title: "Quick Dry Towel",
                description:
                  "A quick dry towel will help in maintaining proper hygiene. It must dry quickly because the wet fabric will only increase the chance of bacterial growth.",
              },
              {
                img: "pack8.png",
                title: "Sanitizer",
                description:
                  "Essential for maintaining cleanliness while trekking.",
              },
              {
                img: "pack9.png",
                title: "Sun Cap / Hat",
                description:
                  "A lightweight sun cap with side flaps is perfect to keep your head cool and avoid sunburns on a sunny day.",
              },
              {
                img: "pack10.png",
                title: "Sunscreen SPF 40+",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack11.png",
                title: "Water Bottle (Re-usable)",
                description:
                  "Hydration is extremely important when it comes to trekking. Carrying a water bottle that you can refill with Himalayan water is a must.",
              },
              {
                img: "pack12.png",
                title: "Personal Toiletries",
                description:
                  "A bag with all your essentials including napkins, toothpaste, sanitizers, paper soap, etc should be carried in a ziplock bag.",
              },
              {
                img: "pack13.png",
                title: "Personal Medication / First Aid",
                description:
                  "A few cuts and bruises are almost inevitable when you are on a trek so carrying a medical kit with bandages, Dettol, etc is necessary.",
              },
              {
                img: "pack14.png",
                title: "Sun Glasses / Reading Glasses",
                description:
                  "Photochromatic glasses are specs that are designed to transform into anti-glare shades depending upon exposure to the sun. They are good when it comes to eye protection but one can also opt for clip-on glasses etc.",
              },
              {
                img: "pack15.png",
                title: "Charger",
                description:
                  "To keep your electronic devices powered during the trip.",
              },
              {
                img: "pack16.png",
                title: "Power Bank",
                description:
                  "Ensures your devices stay charged when there are no outlets.",
              },
              {
                img: "pack17.png",
                title: "Personal Documents & IDs",
                description:
                  "Identification proofs like Aadhar Card, Drivers License.",
              },
              {
                img: "pack18.png",
                title: "Laundry Bag (Waterproof)",
                description:
                  "In case your clothes get wet or your garments don’t dry, you can carry them in polythene. However, make sure that all the plastic that you are carrying into the woods leaves with you. Don’t litter in the mountains.",
              },
              {
                img: "pack19.png",
                title: "Track Pants",
                description:
                  "A good pair of track pants made of polyester will let your skin breathe. They’re lightweight, dry easily, and comfortable to walk around in. You can easily avoid chafing and rashes by investing in a good pair of track pants.",
              },
              {
                img: "pack20.png",
                title: "Trekking Shoes",
                description:
                  "A good trekking shoe is comfortable, provides ankle support, and has a good grip as well. They shouldn’t be chunky, instead, they should be lightweight and sturdy.",
              },
              {
                img: "pack21.png",
                title: "Cotton Socks",
                description:
                  "Cotton socks are extremely comfortable to move around in and are lightweight as well which is why you can always count on a good pair of cotton socks while trekking. However, keep in mind to change them and avoid wearing them when they are wet.",
              },
              {
                img: "pack22.png",
                title: "Woolen Socks",
                description:
                  "A good pair of woolen socks, especially merino, are comfortable, limit odors and provide adequate insulation from the cold so you can wear them at night.",
              },
              {
                img: "pack23.png",
                title: "Woolen Gloves",
                description:
                  "Insulated gloves help in maintaining proper body heat in your hands and also provide a better grasp on trekking poles.",
              },
              {
                img: "pack24.png",
                title: "Main Jacket",
                description:
                  "It’s emphasized that you need to carry proper layers so you can avoid getting cold which is why you need to carry a heavy jacket that you can put on over your other clothes.",
              },
              {
                img: "pack25.png",
                title: "Woolen Cap",
                description:
                  "A woolen cap will help prevent cold when you ascend to high altitude. You can also cover your ears to avoid any pain and discomfort you might face in them when going at high altitudes.",
              },
              {
                img: "pack26.png",
                title: "Hoodie",
                description:
                  "A versatile layering option for various temperatures.",
              },
              {
                img: "pack27.png",
                title: "Scarf / Balaclava",
                description:
                  "Along with sun rays and chilly winds, you also get hit by dirt and grime during treks which is why it's important to carry a scarf or balaclava so you can cover your face when needed.",
              },
              {
                img: "pack28.png",
                title: "Head Lamp",
                description:
                  "You can’t rely on moonlight when you are in the mountains. A torch or even a headlamp with a fresh pair of batteries is always a good idea to bring along.",
              },
              {
                img: "pack29.png",
                title: "Trekking Pole",
                description:
                  "The trekking pole assists in more than one way. It saves energy while also providing stability and helps you to maintain proper balance.",
              },
              {
                img: "pack30.png",
                title: "Camera",
                description:
                  "This should be obvious. To make sure that you get to capture all the great moments from your trek. Make sure that you have enough storage and some extra batteries as well.",
              },
              {
                img: "pack31.png",
                title: "Riding Gear",
                description: "If your trip involves biking or motorcycling.",
              },
              {
                img: "pack32.png",
                title: "Moisturiser & Cold Cream",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack33.png",
                title: "Lip Balm",
                description:
                  "Your lips can become chapped due to the harsh cold winds so it's important to keep them moisturized.",
              },
              {
                img: "pack34.png",
                title: "Sanitary Pads",
                description: "Essential for feminine hygiene.",
              },
              {
                img: "pack35.png",
                title: "Insect Repellent",
                description: "Guards against pesky bugs and insects.",
              },
              {
                img: "pack36.png",
                title: "Cash",
                description: "Emergency funds for unexpected situations.",
              },
              {
                img: "pack37.png",
                title: "Thermals",
                description:
                  "Thermal is a piece of garment that helps in keeping your body warm in cold temperatures. It is a necessary item that you need when going on a high-altitude trek.",
              },
              {
                img: "pack38.png",
                title: "Snacks / Dryfruits / Energy Bar",
                description: "Provides quick energy on the go.",
              },
              {
                img: "pack39.png",
                title: "Positive Attitude",
                description:
                  "The most important item for a successful trek or trip, keeping your spirits high and adaptable to the challenges of the journey.",
              },
            ],

            itenariesdetails: [
              {
                day: "Day 0",
                description: "Starting a journey from Dehradun",
                details: "",
              },
              {
                day: "Day 1",
                description: "Dehradun to Sankri",
                details:
                  "Enjoy a scenic 8-9 hours drive from Dehradun to Sankri, passing through picturesque villages. Check-in at your hotel in Sankri and enjoy a delicious dinner.",
              },
              {
                day: "Day 2",
                description: "Sankri to Chilurgad via Takula",
                details:
                  "Drive to Taluka, then embark on a trek to Chilurgad. Delight in the views of the ever-flowing Tons River. Reach your campsite, relax, and explore. Enjoy an evening walk, snacks, and dinner at the camp.",
              },
              {
                day: "Day 3",
                description: "Chilurgad to Har Ki Dun Camp",
                details:
                  "Trek to Har Ki Dun Camp, covering 13 km in 7-8 hours. Have lunch at the campsite, rest, and participate in evening activities.",
              },
              {
                day: "Day 4",
                description: "Exploration Day at Har Ki Dun Camp",
                details:
                  "Embark on an early trek to Har Ki Dun and Jaundhar Glacier. Return to the camp by evening for dinner and rest.",
              },
              {
                day: "Day 5",
                description: "Har Ki Dun Camp to Chilurgad Trek",
                details:
                  "Trek back to Chilurgad, covering 13 km in 7-8 hours. Enjoy riverside camping in the valley. Participate in an evening walk, snacks, and dinner at the camp.",
              },
              {
                day: "Day 6",
                description: "Chilurgad to Sankri via Takula",
                details:
                  "Trek to Taluka, then drive back to Sankri. Rest at the Sankri hotel, have dinner, and enjoy an overnight stay.",
              },
              {
                day: "Day 7",
                description: "Sankri to Dehradun",
                details:
                  "Enjoy breakfast and depart for Dehradun. Arrive in Dehradun by 6:00 PM.",
              },
            ],

            cardcontentinclusion: [
              { img: "/meal.png", title: "Meals" },
              { img: "/stay.png", title: "Stays" },
              { img: "/car.png", title: "Transfers" },
              { img: "/activities.png", title: "Activities" },
            ],
            FaQDetails: [
              {
                title: "What is the Har Ki Dun Trek?",
                answer:
                  "The Har Ki Dun Trek is a 7-day trekking adventure that takes you through the picturesque landscapes of Uttrakhand, exploring the beautiful Har Ki Dun valley.",
              },
              {
                title: "How long is the Har Ki Dun Trek?",
                answer:
                  "The trek spans 7 days, covering various scenic routes and camping spots in the Har Ki Dun region.",
              },
              {
                title: "What is the difficulty level of the Har Ki Dun Trek?",
                answer:
                  "The trek is classified as easy, making it suitable for beginners and those new to trekking.",
              },
              {
                title: "What is the best time to do the Har Ki Dun Trek?",
                answer:
                  "The best time to undertake the Har Ki Dun Trek is in January, during the winter season, to experience the trek in its most serene state.",
              },
              {
                title: "What should I carry for the Har Ki Dun Trek?",
                answer:
                  "Essential items include trekking shoes, warm clothing, a good quality backpack, water bottles, sunscreen, personal medication, and camping gear. A complete list of items will be provided in your booking details.",
              },
              {
                title: "Are meals provided during the trek?",
                answer:
                  "The trek package includes meals throughout the trek. Specific details about the meal plan will be provided upon booking.",
              },
              {
                title: "Is transportation provided for the Har Ki Dun Trek?",
                answer:
                  "Yes, transportation is arranged from Dehradun to the trek starting point and back as part of the trek package.",
              },
              {
                title: "Do I need any permits for the Har Ki Dun Trek?",
                answer:
                  "All necessary permits for the Har Ki Dun Trek are included in the trek package, so you don't need to arrange them separately.",
              },
              {
                title:
                  "Is there professional guidance available during the trek?",
                answer:
                  "Yes, a professional trek leader will accompany you to ensure safety and enhance your trekking experience.",
              },
              {
                title: "What kind of views can I expect during the trek?",
                answer:
                  "The trek offers breathtaking views of snow-capped peaks, lush valleys, and beautiful meadows. You'll also experience the serene beauty of the Har Ki Dun valley.",
              },
              {
                title: "Is the Har Ki Dun Trek suitable for children?",
                answer:
                  "Yes, the trek is suitable for children who are reasonably fit and enjoy outdoor adventures. However, they should be accompanied by an adult.",
              },
              {
                title: "What should I wear for the Har Ki Dun Trek?",
                answer:
                  "Wear comfortable trekking shoes, warm clothing suitable for winter, and carry layers to adjust to varying weather conditions.",
              },
              {
                title: "Is there any mobile network coverage during the trek?",
                answer:
                  "Mobile network coverage may be limited in certain areas. It's advisable to inform your contacts about possible limited connectivity.",
              },
              {
                title: "What happens in case of bad weather?",
                answer:
                  "In case of adverse weather conditions, the trek may be rescheduled or canceled for safety reasons. You will be informed of any changes in advance.",
              },
              {
                title: "How do I book the Har Ki Dun Trek?",
                answer:
                  "You can book the trek through our website or by contacting our customer support team for assistance with the booking process.",
              },
              {
                title: "Is there any age restriction for the Har Ki Dun Trek?",
                answer:
                  "There is no strict age restriction, but participants should be reasonably fit and capable of handling the trek's demands. Children should be accompanied by an adult.",
              },
              {
                title: "What is the refund policy for cancellations?",
                answer:
                  "The refund policy details will be provided in your booking confirmation. Please refer to it for specific information on cancellations and refunds.",
              },
              {
                title:
                  "Are there any medical facilities available during the trek?",
                answer:
                  "A first aid kit and necessary emergency equipment will be carried by the trek leader. It’s recommended to carry any personal medication you might need.",
              },
              {
                title:
                  "Can I do the Har Ki Dun Trek alone or do I need to join a group?",
                answer:
                  "You can join an organized group trek or arrange for a private trek based on your preference.",
              },
              {
                title: "Is the Har Ki Dun Trek pet-friendly?",
                answer:
                  "Pets are generally not allowed on the trek due to safety and terrain concerns.",
              },
            ],
          },
        ],
      },
    ],
  },
  //Weekend trek
  {
    heading1: "Weekend Getaways",
    heading2: "Explore, Relax, and Rejuvenate: The Best Weekend Getaways Await",
    button: "View More",

    details: [
      {
        id: "1",
        title: "4 DAY TOUR",
        title1: "View itinerary",
        description: "Deoriatal Chandrashila Trek",
        image: "deodrialtrek.jpg",
        amount: 7800,
        location: "Delhi to Delhi ",
        region: "Uttarakhand",
        places: ["deoriatal chandrashila trek"],
        month: "January",
        difficulty: "Easy",
        season: "Winter",
        theme: ["Beginner"],
        tourDetails: [
          {
            travelbanner: {
              travelimage: "deodrialtrek.jpg",
              travelimagefirsttext: "Deoriatal ",
              travelimagesecondtext: "Chandrashila Trek",
              traveldays: "4 Days Trip",
              reviwsoftrip: "1073",
              starts: "5",
            },

            regions: [
              {
                image: "region.png",
                title: "Region",
                description: "Uttrakhand, India",
              },
              {
                image: "maxaltitude.png",
                title: "Max Altitude",
                description: "12,110 ft",
              },
              {
                image: "trekking.png",
                title: "Trekking Km",
                description: "10 KM",
              },
              {
                image: "diificulties.png",
                title: "Difficulty",
                description: "Easy",
              },
            ],
            travelprice: {
              priceperperson: "7800",
            },
            tempopriceDetails: [
              {
                occupancyType: "Quad Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "11999", // Example for another type of occupancy
              },
              {
                occupancyType: "Triple Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "12999",
              },

              {
                occupancyType: "Double Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "13999",
              },
            ],
            gallerysections: [
              "/deoriatal1.jpg",
              "/deoriatal2.jpg",
              "/deoriatal3.jpg",
              "/deoriatal4.jpg",
              "/deoriatal5.jpg",
              "/deoriatal6.jpg",
              "/deoriatal7.jpg",
              "/deoriatal8.jpg",
            ],
            overviewsdetails1: [
              {
                type: "intro",
                content: [
                  {
                    label: "Tour name:",
                    value: "Deoriatal Chopta Tungnath Chandrashila Trek",
                    color: "grey",
                  },
                  {
                    text: "The Deoriatal Chopta Tungnath Chandrashila Trek is one of the most popular treks in the Garhwal Himalayas, offering majestic views of the Himalayas and valleys, alluring sights of rare Himalayan birds, blossoms, and a serene environment.",
                  },
                  {
                    text: "This trek is well-loved by trekking enthusiasts and nature lovers alike, remaining accessible almost throughout the year, including the winter months of November, December, and January.",
                  },
                  {
                    text: "With a duration of just 3 days, it is perfect for weekends and extended long weekends from Delhi.",
                  },
                ],
              },
              {
                type: "highlight",
                title: "Highlights",
                items: [
                  "Magnificent Views: The trek offers stunning vistas of Mt. Chaukhamba from Chandrashila peak and Deoriatal.",
                  "Tungnath Temple: Visit the world's highest Lord Shiva temple, nestled in the scenic beauty of Chopta.",
                  "Deoriatal Lake: This serene lake provides picturesque reflections of the surrounding peaks and is a haven for nature lovers and photographers.",
                  "Flora and Fauna: Encounter a variety of blossoms and rare Himalayan birds, making it an ideal trek for bird-watching amateurs and botanists.",
                ],
              },
              {
                type: "tour",
                text: "Starting Point: ",
                text1:
                  "The trek begins from Sari, a small village in the Rudraprayag district of Uttarakhand, situated at an elevation of 6,601 feet.",
                text2: "",
              },
              {
                type: "tour",
                text: "Ending Point: ",
                text1:
                  "The trek concludes at Chopta, a quaint settlement that serves as the gateway to Tungnath temple and Chandrashila peak (3,998 meters).",
                text2: "",
              },
              {
                type: "tour",
                text: "Accessibility and Difficulty",
                text1:
                  "The Deoriatal Chopta Chandrashila Trek is classified as easy, making it suitable for novice trekkers as well as experienced ones. Its accessibility almost year-round adds to its appeal, providing a variety of views and experiences in different seasons.",
                text2: "",
              },
              {
                type: "highlightText",
                text: "Plan Your Trek",
                text1:
                  "For those planning a trek from Delhi, this 3-day adventure is perfect for a quick getaway. The trek not only offers breathtaking natural beauty but also provides a spiritual journey with the visit to Tungnath temple.",
              },
              {
                type: "highlightText",
                text: "Experience",
                text1:
                  "Embark on the Deoriatal Chopta Tungnath Chandrashila Trek for an unforgettable experience in the Garhwal Himalayas, where every step reveals the majestic splendor of the mountains and the serene beauty of nature.",
              },
            ],

            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            batches: {
              July: [
                { startDate: "10 Jul", endDate: "15 Jul", status: "Close" },
                { startDate: "20 Jul", endDate: "25 Jul", status: "Open" },
              ],
              August: [
                { startDate: "05 Aug", endDate: "10 Aug", status: "Full" },
                { startDate: "15 Aug", endDate: "20 Aug", status: "Open" },
              ],
              September: [
                { startDate: "01 Sep", endDate: "06 Sep", status: "Open" },
                { startDate: "10 Sep", endDate: "15 Sep", status: "Open" },
              ],
            },
            inclusion: [
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Transportation:",
                description:
                  "Tempo Traveler/SUV for Delhi to Delhi transportation.",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Accommodation:",
                description: "2 Night accommodation in Swiss Camps in Chopta.",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Meals:",
                description:
                  "6 Meals based on MAPAI (From Day 1 Lunch to Day 3 Breakfast) (Veg and Non-veg Dinner on Day 2). Evening Snacks on Day 1. Buransh's Juice Welcome Drink on Arrival.",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title:
                  "The trip Captain will be present at all times during the tour.",
                description: "",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Local Guide",
                description: "",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "First Aid Kits",
                description: "",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "All required Permits",
                description: "",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Driver Allowance",
                description: "",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Toll Taxes and other state taxes",
                description: "",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Parking Charges",
                description: "",
              },
            ],
            exclusion: [
              {
                img: "crossSign.png",
                title: "5% GST",
              },
              {
                img: "crossSign.png",
                title: "Early check-in at the hotel.",
              },
              {
                img: "crossSign.png",
                title: "Any additional expenses such as of personal nature.",
              },
              {
                img: "crossSign.png",
                title:
                  "Additional accommodation/food costs incurred due to any delayed travel.",
              },
              {
                img: "crossSign.png",
                title:
                  "Any lunch and other meals not mentioned in Package Inclusions.",
              },
              {
                img: "crossSign.png",
                title:
                  "Any Airfare/Rail fare other than what is mentioned in ‘Inclusions’ or any type of transportation from which is outside the itinerary.",
              },
              {
                img: "crossSign.png",
                title: "Parking and monument entry fees during sightseeing.",
              },
              {
                img: "crossSign.png",
                title:
                  "Additional Costs due to Flight Cancellations, Landslides, Roadblocks, and other natural calamities.",
              },
              {
                img: "crossSign.png",
                title: "Any other services not specified above in inclusions.",
              },
            ],
            cardcontent: [
              {
                iconName: "PlaceOutlinedIcon",
                title: "Pickup & Drop",
                description: "Delhi To Delhi",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "TimerOutlinedIcon",
                title: "Duration",
                description: "4 Days",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "BusinessCenterOutlinedIcon",
                title: "Category",
                description: "Weekend Getaways",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "SportsScoreOutlinedIcon",
                title: "Difficulty",
                description: "Easy",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
            ],
            thingtopack: [
              {
                img: "pack1.png",
                title: "Rucksack",
                description:
                  "You must pick a good quality backpack with a comfortable fit and straps that won’t give you shoulder pain. You can check out your nearest Decathlon store for a good trekking backpack.",
              },
              {
                img: "pack2.png",
                title: "Day Bag / Day Pack",
                description:
                  "When you head towards the summit, you are required to carry only a few necessary items and for that, you need a day backpack as you will leave your bigger one on the campsite.",
              },
              {
                img: "pack3.png",
                title: "Hiking Shoes",
                description: "Durable footwear designed for rugged terrains.",
              },
              {
                img: "pack4.png",
                title: "Floaters or Sandals",
                description:
                  "Although the entire trek requires a good quality shoe, you still need to let your feet breathe to avoid chafing and blisters. When you are at the camp, a good pair of sandals and floaters will help you to move freely.",
              },
              {
                img: "pack5.png",
                title: "Tees / Tshirts",
                description:
                  "You must keep at least three pairs of quick dry tees so that you can wash them in between stops for proper hygiene.",
              },
              {
                img: "pack6.png",
                title: "Poncho",
                description:
                  "A poncho is an evolved form of a raincoat that provides coverage to your body as well as your bag and ensures total water protection from rain.",
              },
              {
                img: "pack7.png",
                title: "Quick Dry Towel",
                description:
                  "A quick dry towel will help in maintaining proper hygiene. It must dry quickly because the wet fabric will only increase the chance of bacterial growth.",
              },
              {
                img: "pack8.png",
                title: "Sanitizer",
                description:
                  "Essential for maintaining cleanliness while trekking.",
              },
              {
                img: "pack9.png",
                title: "Sun Cap / Hat",
                description:
                  "A lightweight sun cap with side flaps is perfect to keep your head cool and avoid sunburns on a sunny day.",
              },
              {
                img: "pack10.png",
                title: "Sunscreen SPF 40+",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack11.png",
                title: "Water Bottle (Re-usable)",
                description:
                  "Hydration is extremely important when it comes to trekking. Carrying a water bottle that you can refill with Himalayan water is a must.",
              },
              {
                img: "pack12.png",
                title: "Personal Toiletries",
                description:
                  "A bag with all your essentials including napkins, toothpaste, sanitizers, paper soap, etc should be carried in a ziplock bag.",
              },
              {
                img: "pack13.png",
                title: "Personal Medication / First Aid",
                description:
                  "A few cuts and bruises are almost inevitable when you are on a trek so carrying a medical kit with bandages, Dettol, etc is necessary.",
              },
              {
                img: "pack14.png",
                title: "Sun Glasses / Reading Glasses",
                description:
                  "Photochromatic glasses are specs that are designed to transform into anti-glare shades depending upon exposure to the sun. They are good when it comes to eye protection but one can also opt for clip-on glasses etc.",
              },
              {
                img: "pack15.png",
                title: "Charger",
                description:
                  "To keep your electronic devices powered during the trip.",
              },
              {
                img: "pack16.png",
                title: "Power Bank",
                description:
                  "Ensures your devices stay charged when there are no outlets.",
              },
              {
                img: "pack17.png",
                title: "Personal Documents & IDs",
                description:
                  "Identification proofs like Aadhar Card, Drivers License.",
              },
              {
                img: "pack18.png",
                title: "Laundry Bag (Waterproof)",
                description:
                  "In case your clothes get wet or your garments don’t dry, you can carry them in polythene. However, make sure that all the plastic that you are carrying into the woods leaves with you. Don’t litter in the mountains.",
              },
              {
                img: "pack19.png",
                title: "Track Pants",
                description:
                  "A good pair of track pants made of polyester will let your skin breathe. They’re lightweight, dry easily, and comfortable to walk around in. You can easily avoid chafing and rashes by investing in a good pair of track pants.",
              },
              {
                img: "pack20.png",
                title: "Trekking Shoes",
                description:
                  "A good trekking shoe is comfortable, provides ankle support, and has a good grip as well. They shouldn’t be chunky, instead, they should be lightweight and sturdy.",
              },
              {
                img: "pack21.png",
                title: "Cotton Socks",
                description:
                  "Cotton socks are extremely comfortable to move around in and are lightweight as well which is why you can always count on a good pair of cotton socks while trekking. However, keep in mind to change them and avoid wearing them when they are wet.",
              },
              {
                img: "pack22.png",
                title: "Woolen Socks",
                description:
                  "A good pair of woolen socks, especially merino, are comfortable, limit odors and provide adequate insulation from the cold so you can wear them at night.",
              },
              {
                img: "pack23.png",
                title: "Woolen Gloves",
                description:
                  "Insulated gloves help in maintaining proper body heat in your hands and also provide a better grasp on trekking poles.",
              },
              {
                img: "pack24.png",
                title: "Main Jacket",
                description:
                  "It’s emphasized that you need to carry proper layers so you can avoid getting cold which is why you need to carry a heavy jacket that you can put on over your other clothes.",
              },
              {
                img: "pack25.png",
                title: "Woolen Cap",
                description:
                  "A woolen cap will help prevent cold when you ascend to high altitude. You can also cover your ears to avoid any pain and discomfort you might face in them when going at high altitudes.",
              },
              {
                img: "pack26.png",
                title: "Hoodie",
                description:
                  "A versatile layering option for various temperatures.",
              },
              {
                img: "pack27.png",
                title: "Scarf / Balaclava",
                description:
                  "Along with sun rays and chilly winds, you also get hit by dirt and grime during treks which is why it's important to carry a scarf or balaclava so you can cover your face when needed.",
              },
              {
                img: "pack28.png",
                title: "Head Lamp",
                description:
                  "You can’t rely on moonlight when you are in the mountains. A torch or even a headlamp with a fresh pair of batteries is always a good idea to bring along.",
              },
              {
                img: "pack29.png",
                title: "Trekking Pole",
                description:
                  "The trekking pole assists in more than one way. It saves energy while also providing stability and helps you to maintain proper balance.",
              },
              {
                img: "pack30.png",
                title: "Camera",
                description:
                  "This should be obvious. To make sure that you get to capture all the great moments from your trek. Make sure that you have enough storage and some extra batteries as well.",
              },
              {
                img: "pack31.png",
                title: "Riding Gear",
                description: "If your trip involves biking or motorcycling.",
              },
              {
                img: "pack32.png",
                title: "Moisturiser & Cold Cream",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack33.png",
                title: "Lip Balm",
                description:
                  "Your lips can become chapped due to the harsh cold winds so it's important to keep them moisturized.",
              },
              {
                img: "pack34.png",
                title: "Sanitary Pads",
                description: "Essential for feminine hygiene.",
              },
              {
                img: "pack35.png",
                title: "Insect Repellent",
                description: "Guards against pesky bugs and insects.",
              },
              {
                img: "pack36.png",
                title: "Cash",
                description: "Emergency funds for unexpected situations.",
              },
              {
                img: "pack37.png",
                title: "Thermals",
                description:
                  "Thermal is a piece of garment that helps in keeping your body warm in cold temperatures. It is a necessary item that you need when going on a high-altitude trek.",
              },
              {
                img: "pack38.png",
                title: "Snacks / Dryfruits / Energy Bar",
                description: "Provides quick energy on the go.",
              },
              {
                img: "pack39.png",
                title: "Positive Attitude",
                description:
                  "The most important item for a successful trek or trip, keeping your spirits high and adaptable to the challenges of the journey.",
              },
            ],
            itenariesdetails: [
              {
                day: "Day 0",
                description:
                  "Drive from Delhi to Chopta via Rishikesh (427 Kilometers, 10 Hours) 🚗",
                details:
                  "9 PM: The group will assemble at the pick-up point (Botanical Garden Metro Station). After a brief introduction session with the Trip Captain, we will head towards Chopta. En route, we'll traverse the confluence of the Ganga river with breathtaking views of Devprayag and Rudraprayag.",
              },
              {
                day: "Day 1",
                description: "Chopta Arrival | Leisure Day 🏕️",
                details:
                  "Morning: Upon arrival, we will check into our campsites at Chopta and unwind in the lap of nature. Enjoy a warm welcome with Buransh's Juice. The rest of the day is at leisure with exciting group bonding activities. Evening: Enjoy delicious snacks with a view. Later, we will have dinner followed by an overnight stay in the camps.",
              },
              {
                day: "Day 2",
                description:
                  "Trek to Tungnath Chandrashila (4 Kilometers, 4 Hours) 🥾",
                details:
                  "Early Morning: After breakfast, we'll start our trek from Chopta to Chandrashila summit. En route, we'll traverse through Tungnath, situated at an elevation of 12,106 ft, the highest Shiva Temple in the world. We will have packed lunch en route. At 13,050 ft, the Chandrashila top offers majestic views of Nandadevi, Trisul, Kedar Peak, Bandarpunch, and Chaukhamba peaks. After spending some time at the top, marveling at the beauty of the Himalayas, we will head back to Chopta. Dinner followed by an overnight stay in Chopta.",
              },
              {
                day: "Day 3",
                description: "Visit Deoria Tal | Departure 🏞️",
                details:
                  "Early Morning: After breakfast, we'll check out of our campsites and drive towards Sari Village. Upon arrival, we'll start a trek to Deoria Tal, a pristine lake known for its beautiful reflections of the Chaukhamba peaks on its glass-like surface. Afterwards, we'll board an overnight Tempo Traveler/SUV and start our return journey to Delhi.",
              },
              {
                day: "Day 4",
                description: "Delhi Arrival | Trip Ends 🏁",
                details:
                  "Early Morning: We will arrive in Delhi. The group will part ways with fond memories.",
              },
            ],
            cardcontentinclusion: [
              { img: "/meal.png", title: "Meals" },
              { img: "/stay.png", title: "Stays" },
              { img: "/car.png", title: "Transfers" },
              { img: "/activities.png", title: "Activities" },
            ],

            FaQDetails: [
              {
                title: "What is the Deoriatal Chandrashila Trek?",
                answer:
                  "The Deoriatal Chandrashila Trek is a popular trek in the Garhwal Himalayas, known for its majestic views of the Himalayas, serene environment, and rare Himalayan birds. The trek offers a 4-day adventure, including breathtaking vistas from Chandrashila peak and Deoriatal Lake.",
              },
              {
                title: "What is the difficulty level of this trek?",
                answer:
                  "The trek is classified as 'Easy,' making it suitable for both novice and experienced trekkers. It is accessible almost year-round, including winter months.",
              },
              {
                title: "What is the maximum altitude of the trek?",
                answer:
                  "The maximum altitude reached during the trek is 12,110 feet.",
              },
              {
                title: "How long does the trek take?",
                answer: "The trek takes 4 days to complete.",
              },
              {
                title: "What is included in the trek package?",
                answer:
                  "The package includes transportation from Delhi to Delhi, accommodation in Swiss Camps in Chopta, meals (6 meals, including vegetarian and non-vegetarian options), a trip captain, local guide, first aid kits, required permits, driver allowance, toll taxes, and parking charges.",
              },
              {
                title: "What is not included in the trek package?",
                answer:
                  "Exclusions include 5% GST, early check-in at the hotel, personal expenses, additional accommodation or food costs due to delayed travel, meals not mentioned in the package, airfare or rail fare not included in the itinerary, parking and monument entry fees during sightseeing, additional costs due to natural calamities, and any other services not specified in the inclusions.",
              },
              {
                title: "What are the starting and ending points of the trek?",
                answer:
                  "The trek starts from Sari, a village in Rudraprayag district, and ends at Chopta.",
              },
              {
                title: "What should I pack for the trek?",
                answer:
                  "Essential items include a rucksack, day bag, hiking shoes, floaters or sandals, quick-dry tees, poncho, quick-dry towel, sanitizer, sun cap or hat, sunscreen, water bottle, personal toiletries, first aid kit, sunglasses or reading glasses, charger, power bank, personal documents, laundry bag, track pants, trekking shoes, cotton and woolen socks, woolen gloves, main jacket, woolen cap, hoodie, scarf or balaclava, headlamp, trekking pole, camera, and riding gear (if applicable).",
              },
              {
                title:
                  "Are there any specific months when the trek is best undertaken?",
                answer:
                  "The trek can be undertaken throughout the year, but it is particularly popular in January.",
              },
              {
                title: "What is the cost of the trek?",
                answer: "The cost per person for the trek is INR 7800.",
              },
              {
                title: "How can I book the trek?",
                answer:
                  "You can book the trek through our website or contact us directly for more details and availability.",
              },
            ],
          },
        ],
      },
      {
        id: "2",
        title: "2 DAY TOUR",
        title1: "View itinerary",
        description: "Triund Trek",
        image: "triundimage.jpg",
        amount: 4400,
        location: "Delhi to Delhi",
        region: "Himachal",
        places: ["triund trek"],
        month: "January",
        difficulty: "Easy",
        season: "Winter",
        theme: ["Beginner"],
        tourDetails: [
          {
            travelbanner: {
              travelimage: "triundimage.jpg",
              travelimagefirsttext: "Triund ",
              travelimagesecondtext: " Trek",
              traveldays: "2 Days Trip",
              reviwsoftrip: "1073",
              starts: "5",
            },
            travelprice: {
              priceperperson: 4400,
            },
            tempopriceDetails: [
              {
                occupancyType: "Quad Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "11999", // Example for another type of occupancy
              },
              {
                occupancyType: "Triple Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "12999",
              },

              {
                occupancyType: "Double Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "13999",
              },
            ],

            regions: [
              {
                image: "region.png",
                title: "Region",
                description: "Himachal, India",
              },
              {
                image: "maxaltitude.png",
                title: "Max Altitude",
                description: "9350 ft",
              },
              {
                image: "trekking.png",
                title: "Trekking Km",
                description: "16 KM",
              },
              {
                image: "diificulties.png",
                title: "Difficulty",
                description: "Easy",
              },
            ],

            gallerysections: [
              "/trikund2.jpg",
              "/trikund3.jpg",
              "/trikund4.jpg",
              "/trikund5.jpg",
              "/trikund6.jpg",
              "/trikund7.jpg",
              "/trikund8.jpg",
            ],

            overviewsdetails1: [
              {
                type: "intro",
                content: [
                  {
                    label: "Tour name:",
                    value: "Mcleodganj Adventure & Spiritual Exploration",
                    color: "grey",
                  },

                  {
                    text: 'Mcleodganj, often referred to as the "Little Lhasa (Tibet) of India," is nestled in the outskirts of Dharamshala, situated at an elevation of 2082 meters (6831 feet) above sea level.',
                  },
                  
                  {
                    text: "This charming hill station offers a delightful blend of Tibetan and Indian cultures, set against the backdrop of the mighty Dhauladhar hills.",
                  },
                  {
                    text: "Mcleodganj is renowned for its majestic landscapes, rich cultural heritage, and captivating trekking trails, making it a favored destination for travelers seeking both adventure and spiritual exploration.",
                  },
                ],
              },
            ],
            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            batches: {
              July: [
                { startDate: "10 Jul", endDate: "15 Jul", status: "Close" },
                { startDate: "20 Jul", endDate: "25 Jul", status: "Open" },
              ],
              August: [
                { startDate: "05 Aug", endDate: "10 Aug", status: "Full" },
                { startDate: "15 Aug", endDate: "20 Aug", status: "Open" },
              ],
              September: [
                { startDate: "01 Sep", endDate: "06 Sep", status: "Open" },
                { startDate: "10 Sep", endDate: "15 Sep", status: "Open" },
              ],
            },

            inclusion: [
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Transportation:",
                description: "Delhi to Mcleodganj and return to Delhi.",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Meals:",
                description:
                  "Provided during the trip include 1 breakfast, 1 lunch, and 1 dinner.",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Leadership:",
                description:
                  "A trip lead will accompany the group throughout the journey.",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Trek Guide:",
                description:
                  "An experienced trek guide will lead the trekking activities.",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Accommodation:",
                description:
                  "Camping facilities on twin or triple sharing basis during the trek.",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Camping Essentials:",
                description:
                  "Necessary camping equipment provided for the duration of the trip.",
              },
              {
                img: "rightsign.png",
                img: "rightsign.png",
                title: "Rooms:",
                description:
                  "Accommodation for freshening up before and after the trek.",
              },
            ],

            exclusion: [
              {
                img: "crossSign.png",
                title: "Any meals apart from mentioned in Inclusion.",
              },
              {
                img: "crossSign.png",
                title:
                  "Any expenses for optional activities or tickets, unless quoted in Inclusions.",
              },
              {
                img: "crossSign.png",
                title:
                  "Insurance, items of personal nature like porterage, tips, laundry, etc.",
              },
              {
                img: "crossSign.png",
                title: "Any Entry Fees",
              },
              {
                img: "crossSign.png",
                title:
                  "Any additional expenses arising out of unforeseen circumstances like cancellation, roadblocks, landslides, strikes, or any other natural causes out of human control, or any emergency evacuation expenses.",
              },
              {
                img: "crossSign.png",
                title: "Anything not mentioned in Inclusions.",
              },
              {
                img: "crossSign.png",
                title:
                  "Any kind of expense for loss, misplaced, or theft of personal belongings.",
              },
            ],

            cardcontent: [
              {
                iconName: "PlaceOutlinedIcon",
                title: "Pickup & Drop",
                description: "Delhi To Delhi",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "TimerOutlinedIcon",
                title: "Duration",
                description: "2 Days",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "BusinessCenterOutlinedIcon",
                title: "Category",
                description: "Weekend Getaways",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "SportsScoreOutlinedIcon",
                title: "Difficulty",
                description: "Easy",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
            ],
            thingtopack: [
              {
                img: "pack1.png",
                title: "Rucksack",
                description:
                  "You must pick a good quality backpack with a comfortable fit and straps that won’t give you shoulder pain. You can check out your nearest Decathlon store for a good trekking backpack.",
              },
              {
                img: "pack2.png",
                title: "Day Bag / Day Pack",
                description:
                  "When you head towards the summit, you are required to carry only a few necessary items and for that, you need a day backpack as you will leave your bigger one on the campsite.",
              },
              {
                img: "pack3.png",
                title: "Hiking Shoes",
                description: "Durable footwear designed for rugged terrains.",
              },
              {
                img: "pack4.png",
                title: "Floaters or Sandals",
                description:
                  "Although the entire trek requires a good quality shoe, you still need to let your feet breathe to avoid chafing and blisters. When you are at the camp, a good pair of sandals and floaters will help you to move freely.",
              },
              {
                img: "pack5.png",
                title: "Tees / Tshirts",
                description:
                  "You must keep at least three pairs of quick dry tees so that you can wash them in between stops for proper hygiene.",
              },
              {
                img: "pack6.png",
                title: "Poncho",
                description:
                  "A poncho is an evolved form of a raincoat that provides coverage to your body as well as your bag and ensures total water protection from rain.",
              },
              {
                img: "pack7.png",
                title: "Quick Dry Towel",
                description:
                  "A quick dry towel will help in maintaining proper hygiene. It must dry quickly because the wet fabric will only increase the chance of bacterial growth.",
              },
              {
                img: "pack8.png",
                title: "Sanitizer",
                description:
                  "Essential for maintaining cleanliness while trekking.",
              },
              {
                img: "pack9.png",
                title: "Sun Cap / Hat",
                description:
                  "A lightweight sun cap with side flaps is perfect to keep your head cool and avoid sunburns on a sunny day.",
              },
              {
                img: "pack10.png",
                title: "Sunscreen SPF 40+",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack11.png",
                title: "Water Bottle (Re-usable)",
                description:
                  "Hydration is extremely important when it comes to trekking. Carrying a water bottle that you can refill with Himalayan water is a must.",
              },
              {
                img: "pack12.png",
                title: "Personal Toiletries",
                description:
                  "A bag with all your essentials including napkins, toothpaste, sanitizers, paper soap, etc should be carried in a ziplock bag.",
              },
              {
                img: "pack13.png",
                title: "Personal Medication / First Aid",
                description:
                  "A few cuts and bruises are almost inevitable when you are on a trek so carrying a medical kit with bandages, Dettol, etc is necessary.",
              },
              {
                img: "pack14.png",
                title: "Sun Glasses / Reading Glasses",
                description:
                  "Photochromatic glasses are specs that are designed to transform into anti-glare shades depending upon exposure to the sun. They are good when it comes to eye protection but one can also opt for clip-on glasses etc.",
              },
              {
                img: "pack15.png",
                title: "Charger",
                description:
                  "To keep your electronic devices powered during the trip.",
              },
              {
                img: "pack16.png",
                title: "Power Bank",
                description:
                  "Ensures your devices stay charged when there are no outlets.",
              },
              {
                img: "pack17.png",
                title: "Personal Documents & IDs",
                description:
                  "Identification proofs like Aadhar Card, Drivers License.",
              },
              {
                img: "pack18.png",
                title: "Laundry Bag (Waterproof)",
                description:
                  "In case your clothes get wet or your garments don’t dry, you can carry them in polythene. However, make sure that all the plastic that you are carrying into the woods leaves with you. Don’t litter in the mountains.",
              },
              {
                img: "pack19.png",
                title: "Track Pants",
                description:
                  "A good pair of track pants made of polyester will let your skin breathe. They’re lightweight, dry easily, and comfortable to walk around in. You can easily avoid chafing and rashes by investing in a good pair of track pants.",
              },
              {
                img: "pack20.png",
                title: "Trekking Shoes",
                description:
                  "A good trekking shoe is comfortable, provides ankle support, and has a good grip as well. They shouldn’t be chunky, instead, they should be lightweight and sturdy.",
              },
              {
                img: "pack21.png",
                title: "Cotton Socks",
                description:
                  "Cotton socks are extremely comfortable to move around in and are lightweight as well which is why you can always count on a good pair of cotton socks while trekking. However, keep in mind to change them and avoid wearing them when they are wet.",
              },
              {
                img: "pack22.png",
                title: "Woolen Socks",
                description:
                  "A good pair of woolen socks, especially merino, are comfortable, limit odors and provide adequate insulation from the cold so you can wear them at night.",
              },
              {
                img: "pack23.png",
                title: "Woolen Gloves",
                description:
                  "Insulated gloves help in maintaining proper body heat in your hands and also provide a better grasp on trekking poles.",
              },
              {
                img: "pack24.png",
                title: "Main Jacket",
                description:
                  "It’s emphasized that you need to carry proper layers so you can avoid getting cold which is why you need to carry a heavy jacket that you can put on over your other clothes.",
              },
              {
                img: "pack25.png",
                title: "Woolen Cap",
                description:
                  "A woolen cap will help prevent cold when you ascend to high altitude. You can also cover your ears to avoid any pain and discomfort you might face in them when going at high altitudes.",
              },
              {
                img: "pack26.png",
                title: "Hoodie",
                description:
                  "A versatile layering option for various temperatures.",
              },
              {
                img: "pack27.png",
                title: "Scarf / Balaclava",
                description:
                  "Along with sun rays and chilly winds, you also get hit by dirt and grime during treks which is why it's important to carry a scarf or balaclava so you can cover your face when needed.",
              },
              {
                img: "pack28.png",
                title: "Head Lamp",
                description:
                  "You can’t rely on moonlight when you are in the mountains. A torch or even a headlamp with a fresh pair of batteries is always a good idea to bring along.",
              },
              {
                img: "pack29.png",
                title: "Trekking Pole",
                description:
                  "The trekking pole assists in more than one way. It saves energy while also providing stability and helps you to maintain proper balance.",
              },
              {
                img: "pack30.png",
                title: "Camera",
                description:
                  "This should be obvious. To make sure that you get to capture all the great moments from your trek. Make sure that you have enough storage and some extra batteries as well.",
              },
              {
                img: "pack31.png",
                title: "Riding Gear",
                description: "If your trip involves biking or motorcycling.",
              },
              {
                img: "pack32.png",
                title: "Moisturiser & Cold Cream",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack33.png",
                title: "Lip Balm",
                description:
                  "Your lips can become chapped due to the harsh cold winds so it's important to keep them moisturized.",
              },
              {
                img: "pack34.png",
                title: "Sanitary Pads",
                description: "Essential for feminine hygiene.",
              },
              {
                img: "pack35.png",
                title: "Insect Repellent",
                description: "Guards against pesky bugs and insects.",
              },
              {
                img: "pack36.png",
                title: "Cash",
                description: "Emergency funds for unexpected situations.",
              },
              {
                img: "pack37.png",
                title: "Thermals",
                description:
                  "Thermal is a piece of garment that helps in keeping your body warm in cold temperatures. It is a necessary item that you need when going on a high-altitude trek.",
              },
              {
                img: "pack38.png",
                title: "Snacks / Dryfruits / Energy Bar",
                description: "Provides quick energy on the go.",
              },
              {
                img: "pack39.png",
                title: "Positive Attitude",
                description:
                  "The most important item for a successful trek or trip, keeping your spirits high and adaptable to the challenges of the journey.",
              },
            ],
            itenariesdetails: [
              {
                day: "Day 0",
                description: "Departure from Delhi to Mcleodganj",
                details:
                  "Gather at Kashmere Gate ISBT or Majnu ka Tila by 7 PM and board the Volvo bus bound for Mcleodganj. Enjoy the overnight journey, covering approximately 500 km, which takes around 11-12 hours.",
              },
              {
                day: "Day 1",
                description: "Trek from Mcleodganj to Triund (4-5 Hours)",
                details:
                  "Arrive in Mcleodganj by 8 AM. Enjoy tea and breakfast upon arrival before embarking on the trek to Triund hill. The trek begins from Mcleodganj main chowk. The trail, spanning 9 km, winds through dense pine forests with occasional scenic valley views. While the gradient is mostly easy, some stretches may be challenging. The journey to Triund takes around 5-6 hours. Triund, perched at an altitude of 2875 meters (9432 feet) above sea level, offers panoramic vistas of the Kangra Valley. Spend the evening soaking in the views and enjoy dinner. Overnight stay in camps.",
              },
              {
                day: "Day 2",
                description:
                  "Return from Triund to Mcleodganj and Departure to Delhi",
                details:
                  "Wake up to the breathtaking views of the Dhauladhars and relish breakfast. Spend some leisure time on Triund Hill, creating memories amidst the stunning surroundings. Afterwards, begin the descent towards Mcleodganj. The downhill trek takes less time, and by 4 PM, we'll reach Mcleodganj. Explore the town and unwind at a local café. Later, board the Volvo bus back to Delhi. Arrive in New Delhi early the next morning.",
              },
            ],

            cardcontentinclusion: [
              { img: "/meal.png", title: "Meals" },
              { img: "/stay.png", title: "Stays" },
              { img: "/car.png", title: "Transfers" },
              { img: "/activities.png", title: "Activities" },
            ],
            FaQDetails: [
              {
                title: "What is the Triund Trek?",
                answer:
                  "The Triund Trek is a scenic trek located in Himachal Pradesh, offering stunning views of the Dhauladhar range and the Kangra valley. It is a popular trekking destination for those seeking a short and picturesque adventure.",
              },
              {
                title: "How long does the Triund Trek take?",
                answer:
                  "The Triund Trek is typically a 2-day trek, making it ideal for a short getaway.",
              },
              {
                title: "What is the difficulty level of the Triund Trek?",
                answer:
                  "The trek is classified as 'Easy,' making it suitable for beginners and those new to trekking.",
              },
              {
                title: "What is the maximum altitude of the Triund Trek?",
                answer:
                  "The maximum altitude reached during the trek is approximately 2,828 meters (9,280 feet).",
              },
              {
                title: "What is included in the trek package?",
                answer:
                  "The trek package includes transportation from Delhi to Delhi, accommodation, meals, a trek guide, and any necessary permits.",
              },
              {
                title: "What should I pack for the Triund Trek?",
                answer:
                  "Essential items include trekking shoes, warm clothing, a good quality backpack, water bottles, sunscreen, personal medication, and a camera. A detailed packing list will be provided upon booking.",
              },
              {
                title: "When is the best time to do the Triund Trek?",
                answer:
                  "The best time to undertake the Triund Trek is in January during the winter season for a serene experience and clear views.",
              },
              {
                title: "What is the cost of the Triund Trek?",
                answer: "The cost of the trek is INR 4400 per person.",
              },
              {
                title: "How can I book the Triund Trek?",
                answer:
                  "You can book the trek through our website or contact us directly for more details and availability.",
              },
              {
                title:
                  "Are there any additional costs not covered in the trek package?",
                answer:
                  "Exclusions may include personal expenses, meals not mentioned in the package, and additional costs due to natural calamities or delays. Details will be provided upon booking.",
              },
            ],
          },
        ],
      },
      {
        id: "3",
        title: "3 DAY TOUR",
        title1: "View itinerary",
        description: "Bir Biling Paragliding & Trek",
        image: "birbilling.jpg",
        amount: 9200,
        location: "Delhi to Delhi",
        region: "Himachal",
        places: ["bir biling paragliding trek"],
        month: "January",
        difficulty: "Easy",
        season: "Winter",
        theme: ["Beginner"],
        tourDetails: [
          {
            travelbanner: {
              travelimage: "birbilling.jpg",
              travelimagefirsttext: "Bir Biling",
              travelimagesecondtext: "Paragliding & Trek",
              traveldays: "3 Days Trip",
              reviwsoftrip: "1073",
              starts: "4",
            },
            travelprice: {
              priceperperson: "9200",
            },
            tempopriceDetails: [
              {
                occupancyType: "Quad Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "11999", // Example for another type of occupancy
              },
              {
                occupancyType: "Triple Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "12999",
              },

              {
                occupancyType: "Double Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "13999",
              },
            ],
            regions: [
              {
                image: "region.png",
                title: "Region",
                description: "Himachal Pradesh, India",
              },
              {
                image: "maxaltitude.png",
                title: "Max Altitude",
                description: "7,517 ft (2,291 m)",
              },
              {
                image: "trekking.png",
                title: "Trekking Km",
                description: "15 KM",
              },
              {
                image: "diificulties.png",
                title: "Difficulty",
                description: "Moderate",
              },
            ],

            gallerysections: [
              "/birbilling1.jpg",
              "/birbilling2.jpg",
              "/birbilling3.jpg",
              "/birbilling4.jpg",
              "/birbilling5.jpg",
              "/birbilling6.jpg",
              "/birbilling7.jpg",
              "/birbilling8.jpg",
            ],
            overviewsdetails1: [
              {
                type: "intro",
                content: [
                  {
                    label: "Tour name:",
                    value: "Bir Billing Paragliding and Trekking Adventure",
                    color: "grey",
                  },
                  {
                    text: "If you’re seeking a thrilling 3-day weekend adventure to break the monotony of life, a trip to Bir Billing in Himachal Pradesh is tailor-made for you.",
                  },
                  {
                    text: "Bir, a charming town nestled in the Himalayas, and Billing, located 15 kilometers away, form a dynamic duo renowned for their adventurous offerings.",
                  },
                  {
                    text: "Perched at an altitude of 8000 feet, Bir boasts the world's second-highest take-off point for paragliding.",
                  },
                ],
              },
              {
                type: "tour",
                text: "location",
                text1: "Himachal Pradesh, India",
                text2: "Country",
                text3: "India",
              },
              {
                type: "tour",
                text: "Adventure Type",
                text1: "Paragliding and Sightseeing",
                text2: "Duration",
                text3: "3 Days",
              },
              {
                type: "tour",
                text: "Base Camp:",
                text1: "Bir, Himachal Pradesh",
                text2: "Altitude",
                text3: "8000 ft",
              },
              {
                type: "tour",
                text: "Stay:",
                text1: "Guesthouses & Camps",
                text2: "Season",
                text3: "November to January",
              },
              {
                type: "tour",
                text: "Difficulty Level:",
                text1: "Moderate",
                text2: "Food",
                text3: "Meals included",
              },
              {
                type: "tour",
                text: "Trail Type",
                text1: "Mountain Trails & Scenic Paths",
                text2: "Nearby Attractions",
                text3: "Sunset Point, Bir Waterfall",
              },
              {
                type: "tour",
                text: "Month",
                text1: "November, December, January",
              },
              {
                type: "highlight",
                title: "Highlights",
                items: [
                  "World's second-highest take-off point for paragliding.",
                  "Exhilarating paragliding experience with panoramic valley views.",
                  "Rich Tibetan culture with visits to Buddhist monasteries.",
                  "Exploring local markets, cafes, and scenic spots.",
                ],
              },
              {
                type: "highlightText",
                text: "Meeting Point (Pickup/Drop Point):",
                text1: "Bir, Himachal Pradesh",
              },
              {
                type: "highlightText",
                text: "Reporting Time :",
                text1: "To be confirmed based on schedule",
              },
              {
                type: "highlightText",
                text: "Drop Time:",
                text1: "Flexible based on departure",
              },
            ],
            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            batches: {
              July: [
                { startDate: "10 Jul", endDate: "15 Jul", status: "Close" },
                { startDate: "20 Jul", endDate: "25 Jul", status: "Open" },
              ],
              August: [
                { startDate: "05 Aug", endDate: "10 Aug", status: "Full" },
                { startDate: "15 Aug", endDate: "20 Aug", status: "Open" },
              ],
              September: [
                { startDate: "01 Sep", endDate: "06 Sep", status: "Open" },
                { startDate: "10 Sep", endDate: "15 Sep", status: "Open" },
              ],
            },

            inclusion: [
              {
                img: "rightsign.png",
                title: "Transportation:",
                description:
                  "Tempo Traveler/ Volvo for Delhi to Delhi transportation. Surface transfer for sightseeing.",
              },
              {
                img: "rightsign.png",
                title: "Accommodation:",
                description: "1 Night Accommodation in camps.",
              },
              {
                img: "rightsign.png",
                title: "Meals:",
                description:
                  "MAPI Plan (Total 3 Meals - 2 Meal on Day 1 (B+D) + 1 Meal on Day 2 (B)). Veg meals provided.",
              },
              {
                img: "rightsign.png",
                title: "Sightseeing:",
                description: "As per the Itinerary.",
              },
              {
                img: "rightsign.png",
                title: "Paragliding:",
                description:
                  "Includes GoPro shots taken during the paragliding session and paragliding insurance.",
              },
              {
                img: "rightsign.png",
                title: "Local Guide:",
                description: "For Gunehar hike.",
              },
              {
                img: "rightsign.png",
                title: "Support:",
                description:
                  "The trip Captain will be present at all times during the tour.",
              },
              {
                img: "rightsign.png",
                title: "First Aid:",
                description: "First Aid Kits provided.",
              },
              {
                img: "rightsign.png",
                title: "Permits and Entry Fees:",
                description: "All required permits and entry fees included.",
              },
              {
                img: "rightsign.png",
                title: "Driver Allowance:",
                description: "Included.",
              },
              {
                img: "rightsign.png",
                title: "Toll Taxes and Other State Taxes:",
                description: "Included.",
              },
              {
                img: "rightsign.png",
                title: "Parking Charges:",
                description: "Included.",
              },
            ],

            exclusion: [
              {
                img: "crossSign.png",
                title: "5% GST",
                description: "",
              },
              {
                img: "crossSign.png",
                title: "Early check-in at the hotel",
                description: "",
              },
              {
                img: "crossSign.png",
                title: "Any additional expenses of personal nature:",
                description: "Such as tips, laundry, telephone bills, etc.",
              },
              {
                img: "crossSign.png",
                title:
                  "Additional accommodation/food costs due to delayed travel:",
                description: "",
              },
              {
                img: "crossSign.png",
                title:
                  "Any lunch and other meals not mentioned in Package Inclusions:",
                description: "",
              },
              {
                img: "crossSign.png",
                title:
                  "Any Airfare/Rail fare other than what is mentioned in Inclusions:",
                description: "",
              },
              {
                img: "crossSign.png",
                title: "Parking and monument entry fees during sightseeing:",
                description: "",
              },
              {
                img: "crossSign.png",
                title:
                  "Additional Costs due to Flight Cancellations, Landslides, Roadblocks, and other natural calamities:",
                description:
                  "To be borne directly by the customer on the spot.",
              },
              {
                img: "crossSign.png",
                title: "Any other services not specified above in inclusions:",
                description: "",
              },
            ],

            cardcontent: [
              {
                iconName: "PlaceOutlinedIcon",
                title: "Pickup & Drop",
                description: "Delhi To Delhi",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "TimerOutlinedIcon",
                title: "Duration",
                description: "3 Days",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "BusinessCenterOutlinedIcon",
                title: "Category",
                description: "Weekend Getaways",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "SportsScoreOutlinedIcon",
                title: "Difficulty",
                description: "Easy",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
            ],
            thingtopack: [
              {
                img: "pack1.png",
                title: "Rucksack",
                description:
                  "You must pick a good quality backpack with a comfortable fit and straps that won’t give you shoulder pain. You can check out your nearest Decathlon store for a good trekking backpack.",
              },
              {
                img: "pack2.png",
                title: "Day Bag / Day Pack",
                description:
                  "When you head towards the summit, you are required to carry only a few necessary items and for that, you need a day backpack as you will leave your bigger one on the campsite.",
              },
              {
                img: "pack3.png",
                title: "Hiking Shoes",
                description: "Durable footwear designed for rugged terrains.",
              },
              {
                img: "pack4.png",
                title: "Floaters or Sandals",
                description:
                  "Although the entire trek requires a good quality shoe, you still need to let your feet breathe to avoid chafing and blisters. When you are at the camp, a good pair of sandals and floaters will help you to move freely.",
              },
              {
                img: "pack5.png",
                title: "Tees / Tshirts",
                description:
                  "You must keep at least three pairs of quick dry tees so that you can wash them in between stops for proper hygiene.",
              },
              {
                img: "pack6.png",
                title: "Poncho",
                description:
                  "A poncho is an evolved form of a raincoat that provides coverage to your body as well as your bag and ensures total water protection from rain.",
              },
              {
                img: "pack7.png",
                title: "Quick Dry Towel",
                description:
                  "A quick dry towel will help in maintaining proper hygiene. It must dry quickly because the wet fabric will only increase the chance of bacterial growth.",
              },
              {
                img: "pack8.png",
                title: "Sanitizer",
                description:
                  "Essential for maintaining cleanliness while trekking.",
              },
              {
                img: "pack9.png",
                title: "Sun Cap / Hat",
                description:
                  "A lightweight sun cap with side flaps is perfect to keep your head cool and avoid sunburns on a sunny day.",
              },
              {
                img: "pack10.png",
                title: "Sunscreen SPF 40+",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack11.png",
                title: "Water Bottle (Re-usable)",
                description:
                  "Hydration is extremely important when it comes to trekking. Carrying a water bottle that you can refill with Himalayan water is a must.",
              },
              {
                img: "pack12.png",
                title: "Personal Toiletries",
                description:
                  "A bag with all your essentials including napkins, toothpaste, sanitizers, paper soap, etc should be carried in a ziplock bag.",
              },
              {
                img: "pack13.png",
                title: "Personal Medication / First Aid",
                description:
                  "A few cuts and bruises are almost inevitable when you are on a trek so carrying a medical kit with bandages, Dettol, etc is necessary.",
              },
              {
                img: "pack14.png",
                title: "Sun Glasses / Reading Glasses",
                description:
                  "Photochromatic glasses are specs that are designed to transform into anti-glare shades depending upon exposure to the sun. They are good when it comes to eye protection but one can also opt for clip-on glasses etc.",
              },
              {
                img: "pack15.png",
                title: "Charger",
                description:
                  "To keep your electronic devices powered during the trip.",
              },
              {
                img: "pack16.png",
                title: "Power Bank",
                description:
                  "Ensures your devices stay charged when there are no outlets.",
              },
              {
                img: "pack17.png",
                title: "Personal Documents & IDs",
                description:
                  "Identification proofs like Aadhar Card, Drivers License.",
              },
              {
                img: "pack18.png",
                title: "Laundry Bag (Waterproof)",
                description:
                  "In case your clothes get wet or your garments don’t dry, you can carry them in polythene. However, make sure that all the plastic that you are carrying into the woods leaves with you. Don’t litter in the mountains.",
              },
              {
                img: "pack19.png",
                title: "Track Pants",
                description:
                  "A good pair of track pants made of polyester will let your skin breathe. They’re lightweight, dry easily, and comfortable to walk around in. You can easily avoid chafing and rashes by investing in a good pair of track pants.",
              },
              {
                img: "pack20.png",
                title: "Trekking Shoes",
                description:
                  "A good trekking shoe is comfortable, provides ankle support, and has a good grip as well. They shouldn’t be chunky, instead, they should be lightweight and sturdy.",
              },
              {
                img: "pack21.png",
                title: "Cotton Socks",
                description:
                  "Cotton socks are extremely comfortable to move around in and are lightweight as well which is why you can always count on a good pair of cotton socks while trekking. However, keep in mind to change them and avoid wearing them when they are wet.",
              },
              {
                img: "pack22.png",
                title: "Woolen Socks",
                description:
                  "A good pair of woolen socks, especially merino, are comfortable, limit odors and provide adequate insulation from the cold so you can wear them at night.",
              },
              {
                img: "pack23.png",
                title: "Woolen Gloves",
                description:
                  "Insulated gloves help in maintaining proper body heat in your hands and also provide a better grasp on trekking poles.",
              },
              {
                img: "pack24.png",
                title: "Main Jacket",
                description:
                  "It’s emphasized that you need to carry proper layers so you can avoid getting cold which is why you need to carry a heavy jacket that you can put on over your other clothes.",
              },
              {
                img: "pack25.png",
                title: "Woolen Cap",
                description:
                  "A woolen cap will help prevent cold when you ascend to high altitude. You can also cover your ears to avoid any pain and discomfort you might face in them when going at high altitudes.",
              },
              {
                img: "pack26.png",
                title: "Hoodie",
                description:
                  "A versatile layering option for various temperatures.",
              },
              {
                img: "pack27.png",
                title: "Scarf / Balaclava",
                description:
                  "Along with sun rays and chilly winds, you also get hit by dirt and grime during treks which is why it's important to carry a scarf or balaclava so you can cover your face when needed.",
              },
              {
                img: "pack28.png",
                title: "Head Lamp",
                description:
                  "You can’t rely on moonlight when you are in the mountains. A torch or even a headlamp with a fresh pair of batteries is always a good idea to bring along.",
              },
              {
                img: "pack29.png",
                title: "Trekking Pole",
                description:
                  "The trekking pole assists in more than one way. It saves energy while also providing stability and helps you to maintain proper balance.",
              },
              {
                img: "pack30.png",
                title: "Camera",
                description:
                  "This should be obvious. To make sure that you get to capture all the great moments from your trek. Make sure that you have enough storage and some extra batteries as well.",
              },
              {
                img: "pack31.png",
                title: "Riding Gear",
                description: "If your trip involves biking or motorcycling.",
              },
              {
                img: "pack32.png",
                title: "Moisturiser & Cold Cream",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack33.png",
                title: "Lip Balm",
                description:
                  "Your lips can become chapped due to the harsh cold winds so it's important to keep them moisturized.",
              },
              {
                img: "pack34.png",
                title: "Sanitary Pads",
                description: "Essential for feminine hygiene.",
              },
              {
                img: "pack35.png",
                title: "Insect Repellent",
                description: "Guards against pesky bugs and insects.",
              },
              {
                img: "pack36.png",
                title: "Cash",
                description: "Emergency funds for unexpected situations.",
              },
              {
                img: "pack37.png",
                title: "Thermals",
                description:
                  "Thermal is a piece of garment that helps in keeping your body warm in cold temperatures. It is a necessary item that you need when going on a high-altitude trek.",
              },
              {
                img: "pack38.png",
                title: "Snacks / Dryfruits / Energy Bar",
                description: "Provides quick energy on the go.",
              },
              {
                img: "pack39.png",
                title: "Positive Attitude",
                description:
                  "The most important item for a successful trek or trip, keeping your spirits high and adaptable to the challenges of the journey.",
              },
            ],
            itenariesdetails: [
              {
                day: "Day 0",
                description:
                  "Drive from Delhi to Bir (490 Kilometers, 11 Hours)",
                details:
                  "The group will assemble at the pickup point at 7 PM. After meeting the trip captains and receiving a small tour briefing session, we will head towards Bir, known as the Paragliding Capital of India, situated at an elevation of 5,003 Ft. The pickup point will be Majnu Ka Tila.",
              },
              {
                day: "Day 1",
                description: "Bir Arrival | Sightseeing",
                details:
                  "Upon arrival in Bir, we will check into our campsite and have breakfast. Enjoy some leisure time before embarking on a paragliding session from the second-highest take-off point globally. Witness a beautiful sunset from the sunset point, explore the local market, and indulge in café hopping. Dinner will be served in the evening, followed by an overnight stay in Bir.",
              },
              {
                day: "Day 2",
                description: "Hike to Gunehar Waterfall | Departure",
                details:
                  "After an early morning breakfast, we will check out of our campsite and hike towards the Gunehar waterfall, a sparkling gem hidden in the hills. In the evening, we will board a bus to Delhi for an overnight journey.",
              },
              {
                day: "Day 3",
                description: "Delhi Arrival | Trip Ends",
                details:
                  "We will reach Delhi early morning. The group will go their separate ways with fond memories according to their scheduled departures. Trip Ends.",
              },
            ],
            cardcontentinclusion: [
              { img: "/meal.png", title: "Meals" },
              { img: "/stay.png", title: "Stays" },
              { img: "/car.png", title: "Transfers" },
              { img: "/activities.png", title: "Activities" },
            ],

            FaQDetails: [
              {
                title: "What is the Bir Billing Paragliding & Trek?",
                answer:
                  " The Bir Billing Paragliding & Trek is a 3-day adventure in Himachal Pradesh that combines thrilling paragliding experiences with scenic trekking. Bir Billing is known for its world-class paragliding sites and picturesque landscapes.",
              },
              {
                title:
                  " How long does the Bir Billing Paragliding & Trek take?",
                answer:
                  " The experience spans 3 days, including paragliding sessions and trekking through the beautiful landscapes of Bir Billing.",
              },
              {
                title:
                  " What is the difficulty level of the Bir Billing Paragliding & Trek?",
                answer:
                  "The trek is classified as Easy, making it suitable for beginners, while the paragliding experience is accessible for those who meet basic health and fitness requirements.",
              },
              {
                title: "What is the maximum altitude reached during the trek?",
                answer:
                  " The trek reaches an altitude of approximately 8,000 feet, offering stunning views of the surrounding valleys and mountains.",
              },
              {
                title: "What is included in the package?",
                answer:
                  "The package includes transportation from Delhi to Delhi, accommodation in camps or hotels, meals (including vegetarian and non-vegetarian options), paragliding sessions, trekking guides, necessary permits, and first aid kits.",
              },
              {
                title:
                  "What should I pack for the Bir Billing Paragliding & Trek?",
                answer:
                  " Essential items include trekking shoes, warm clothing, a good quality backpack, water bottles, sunscreen, personal medication, and a camera. For paragliding, comfortable clothing and closed shoes are recommended. A detailed packing list will be provided upon booking.",
              },
              {
                title:
                  "When is the best time to do the Bir Billing Paragliding & Trek?",
                answer:
                  "The trek and paragliding are best enjoyed in January during the winter season, which provides clear skies and excellent conditions for both activities.",
              },
              {
                title:
                  "What is the cost of the Bir Billing Paragliding & Trek?",
                answer: "The cost of the experience is INR 9,200 per person.",
              },
              {
                title: "How can I book the Bir Billing Paragliding & Trek?",
                answer:
                  "You can book the adventure through our website or contact us directly for more details and availability.",
              },
              {
                title:
                  " Are there any additional costs not covered in the package?",
                answer:
                  "Exclusions may include personal expenses, meals not mentioned in the package, and additional costs due to natural calamities or delays. Details will be provided upon booking.",
              },
            ],
          },
        ],
      },
      {
        id: "4",
        title: "3 DAY TOUR",
        title1: "View itinerary",
        description: "Beas Kund Trek",
        image: "beasimage.jpg",
        amount: 5900,
        location: "Manali to Manali",
        region: "Himachal",
        places: ["beas kund trek"],
        month: "January",
        difficulty: "Easy",
        season: "Winter",
        theme: ["Beginner"],
        tourDetails: [
          {
            travelbanner: {
              travelimage: "beasimage.jpg",
              travelimagefirsttext: "Beas Kund",
              travelimagesecondtext: "Trek",
              traveldays: "3 Days Trip",
              reviwsoftrip: "1073",
              starts: "5",
            },
            travelprice: {
              priceperperson: 5900,
            },

            tempopriceDetails: [
              {
                occupancyType: "Quad Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "11999", // Example for another type of occupancy
              },
              {
                occupancyType: "Triple Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "12999",
              },

              {
                occupancyType: "Double Occupancy",
                vehicleType: "Tempo Traveller",
                pricePerPerson: "13999",
              },
            ],
            regions: [
              {
                image: "region.png",
                title: "Region",
                description: "Himachal Pradesh, India",
              },
              {
                image: "maxaltitude.png",
                title: "Max Altitude",
                description: "12,772 ft",
              },
              {
                image: "trekking.png",
                title: "Trekking Km",
                description: "16 KM",
              },
              {
                image: "diificulties.png",
                title: "Difficulty",
                description: "Moderate",
              },
            ],

            gallerysections: [
              "/beas1.jpg",
              "/beas2.jpg",
              "/beas3.jpg",
              "/beas4.jpg",
              "/beas5.jpg",
              "/beas6.jpg",
              "/beas7.jpg",
              "/beas8.jpg",
            ],
            overviewsdetails1: [
              {
                type: "intro",
                content: [
                  {
                    label: "Tour name:",
                    value: "Beas Kund Trek",
                    color: "grey",
                  },
                  {
                    text: "Beas Kund Trek is a journey to a high-altitude glacial lake situated at an elevation of 3,600 meters above sea level.",
                  },
                  {
                    text: "The trek, starting from Dundhi near Solang Nala in Manali, is one of the most popular and scenic treks in Himachal Pradesh.",
                  },
                  {
                    text: "It offers breathtaking views of glaciers, valleys, lush green meadows, and towering snow-capped peaks.",
                  },
                ],
              },
              {
                type: "tour",
                text: "Location",
                text1: "Himachal Pradesh, India",
                text2: "Country",
                text3: "India",
              },
              {
                type: "tour",
                text: "Adventure Type",
                text1: "Trekking and Sightseeing",
                text2: "Duration",
                text3: "3 Days",
              },
              {
                type: "tour",
                text: "Base Camp:",
                text1: "Dundhi, Manali",
                text2: "Altitude",
                text3: "12,772 ft",
              },
              {
                type: "tour",
                text: "Stay:",
                text1: "Camping",
                text2: "Season",
                text3: "May to October",
              },
              {
                type: "tour",
                text: "Difficulty Level:",
                text1: "Moderate",
                text2: "Food",
                text3: "Meals included",
              },
              {
                type: "tour",
                text: "Trail Type",
                text1: "Glacial Lakes & Scenic Trails",
                text2: "Rail Head",
                text3: "Joginder Nagar",
              },
              {
                type: "tour",
                text: "Month",
                text1: "May, June, July, August, September, October",
              },
              {
                type: "highlight",
                title: "Highlights",
                items: [
                  "Trek to the source of the Beas River.",
                  "Spectacular views of Pir Panjal range.",
                  "Explore the alpine meadows and serene glacial lake.",
                ],
              },
              {
                type: "highlightText",
                text: "Meeting Point (Pickup/Drop Point):",
                text1: "Majnu Ka Tila, Delhi",
              },
              {
                type: "highlightText",
                text: "Reporting Time:",
                text1: "7 PM",
              },
              {
                type: "highlightText",
                text: "Drop Time:",
                text1: "Flexible based on departure",
              },
            ],
            months: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            batches: {
              July: [
                { startDate: "10 Jul", endDate: "15 Jul", status: "Close" },
                { startDate: "20 Jul", endDate: "25 Jul", status: "Open" },
              ],
              August: [
                { startDate: "05 Aug", endDate: "10 Aug", status: "Full" },
                { startDate: "15 Aug", endDate: "20 Aug", status: "Open" },
              ],
              September: [
                { startDate: "01 Sep", endDate: "06 Sep", status: "Open" },
                { startDate: "10 Sep", endDate: "15 Sep", status: "Open" },
              ],
            },

            inclusion: [
              {
                img: "rightsign.png",
                title: "Accommodation:",
                description:
                  "You will stay at the campsite from Day 1 to Day 3 of the trek.",
              },
              {
                img: "rightsign.png",
                title: "Meals:",
                description:
                  "All meals from Day 1 lunch to Day 3 breakfast are included. We offer simple, nutritious vegetarian food throughout the trek.",
              },
              {
                img: "rightsign.png",
                title: "Camping Charges:",
                description:
                  "All trekking permits and forest camping charges are covered.",
              },
              {
                img: "rightsign.png",
                title: "Support Staff:",
                description:
                  "A trek leader and local guide will accompany you throughout the journey.",
              },
              {
                img: "rightsign.png",
                title: "Trekking Equipment:",
                description:
                  "High-quality tents and sleeping bags will be provided at all camps. Our high-altitude sleeping bags can withstand temperatures as low as -10°C. Additionally, we offer ropes, micro spikes, gaiters, etc., as needed.",
              },
              {
                img: "rightsign.png",
                title: "Safety Equipment:",
                description:
                  "First aid kits, medical supplies, oxygen cylinders, stretchers, etc., will be available at all campsites to handle emergencies.",
              },
            ],

            exclusion: [
              {
                img: "crossSign.png",
                title:
                  "Any expenses for optional activities or tickets, unless quoted in Inclusions.",
                description: "",
              },
              {
                img: "crossSign.png",
                title:
                  "Insurance, Items of personal nature like porterage, tips, laundry etc",
                description: "",
              },
              {
                img: "crossSign.png",
                title: "Any Entry Fees",
                description: "",
              },
              {
                img: "crossSign.png",
                title:
                  "Any additional expenses arising out of unforeseen circumstances like cancellation / roadblocks/landslides/ strike or any other natural causes out of human control or any emergency evacuation expenses.",
                description: "",
              },
              {
                img: "crossSign.png",
                title: "Anything not mentioned in the inclusions",
                description: "",
              },
              {
                img: "crossSign.png",
                title:
                  "Any Kind of Expense for Loss / Misplaced / Theft of personal belongings.",
                description: "",
              },
            ],

            cardcontent: [
              {
                iconName: "PlaceOutlinedIcon",
                title: "Pickup & Drop",
                description: "Manali to Manali",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "TimerOutlinedIcon",
                title: "Duration",
                description: "3 Days",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "BusinessCenterOutlinedIcon",
                title: "Category",
                description: "Weekend Getaways",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
              {
                iconName: "SportsScoreOutlinedIcon",
                title: "Difficulty",
                description: "Easy",
                color: "#006FFF",
                fontSize: { xs: "17px", md: "25px" },
              },
            ],
            thingtopack: [
              {
                img: "pack1.png",
                title: "Rucksack",
                description:
                  "You must pick a good quality backpack with a comfortable fit and straps that won’t give you shoulder pain. You can check out your nearest Decathlon store for a good trekking backpack.",
              },
              {
                img: "pack2.png",
                title: "Day Bag / Day Pack",
                description:
                  "When you head towards the summit, you are required to carry only a few necessary items and for that, you need a day backpack as you will leave your bigger one on the campsite.",
              },
              {
                img: "pack3.png",
                title: "Hiking Shoes",
                description: "Durable footwear designed for rugged terrains.",
              },
              {
                img: "pack4.png",
                title: "Floaters or Sandals",
                description:
                  "Although the entire trek requires a good quality shoe, you still need to let your feet breathe to avoid chafing and blisters. When you are at the camp, a good pair of sandals and floaters will help you to move freely.",
              },
              {
                img: "pack5.png",
                title: "Tees / Tshirts",
                description:
                  "You must keep at least three pairs of quick dry tees so that you can wash them in between stops for proper hygiene.",
              },
              {
                img: "pack6.png",
                title: "Poncho",
                description:
                  "A poncho is an evolved form of a raincoat that provides coverage to your body as well as your bag and ensures total water protection from rain.",
              },
              {
                img: "pack7.png",
                title: "Quick Dry Towel",
                description:
                  "A quick dry towel will help in maintaining proper hygiene. It must dry quickly because the wet fabric will only increase the chance of bacterial growth.",
              },
              {
                img: "pack8.png",
                title: "Sanitizer",
                description:
                  "Essential for maintaining cleanliness while trekking.",
              },
              {
                img: "pack9.png",
                title: "Sun Cap / Hat",
                description:
                  "A lightweight sun cap with side flaps is perfect to keep your head cool and avoid sunburns on a sunny day.",
              },
              {
                img: "pack10.png",
                title: "Sunscreen SPF 40+",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack11.png",
                title: "Water Bottle (Re-usable)",
                description:
                  "Hydration is extremely important when it comes to trekking. Carrying a water bottle that you can refill with Himalayan water is a must.",
              },
              {
                img: "pack12.png",
                title: "Personal Toiletries",
                description:
                  "A bag with all your essentials including napkins, toothpaste, sanitizers, paper soap, etc should be carried in a ziplock bag.",
              },
              {
                img: "pack13.png",
                title: "Personal Medication / First Aid",
                description:
                  "A few cuts and bruises are almost inevitable when you are on a trek so carrying a medical kit with bandages, Dettol, etc is necessary.",
              },
              {
                img: "pack14.png",
                title: "Sun Glasses / Reading Glasses",
                description:
                  "Photochromatic glasses are specs that are designed to transform into anti-glare shades depending upon exposure to the sun. They are good when it comes to eye protection but one can also opt for clip-on glasses etc.",
              },
              {
                img: "pack15.png",
                title: "Charger",
                description:
                  "To keep your electronic devices powered during the trip.",
              },
              {
                img: "pack16.png",
                title: "Power Bank",
                description:
                  "Ensures your devices stay charged when there are no outlets.",
              },
              {
                img: "pack17.png",
                title: "Personal Documents & IDs",
                description:
                  "Identification proofs like Aadhar Card, Drivers License.",
              },
              {
                img: "pack18.png",
                title: "Laundry Bag (Waterproof)",
                description:
                  "In case your clothes get wet or your garments don’t dry, you can carry them in polythene. However, make sure that all the plastic that you are carrying into the woods leaves with you. Don’t litter in the mountains.",
              },
              {
                img: "pack19.png",
                title: "Track Pants",
                description:
                  "A good pair of track pants made of polyester will let your skin breathe. They’re lightweight, dry easily, and comfortable to walk around in. You can easily avoid chafing and rashes by investing in a good pair of track pants.",
              },
              {
                img: "pack20.png",
                title: "Trekking Shoes",
                description:
                  "A good trekking shoe is comfortable, provides ankle support, and has a good grip as well. They shouldn’t be chunky, instead, they should be lightweight and sturdy.",
              },
              {
                img: "pack21.png",
                title: "Cotton Socks",
                description:
                  "Cotton socks are extremely comfortable to move around in and are lightweight as well which is why you can always count on a good pair of cotton socks while trekking. However, keep in mind to change them and avoid wearing them when they are wet.",
              },
              {
                img: "pack22.png",
                title: "Woolen Socks",
                description:
                  "A good pair of woolen socks, especially merino, are comfortable, limit odors and provide adequate insulation from the cold so you can wear them at night.",
              },
              {
                img: "pack23.png",
                title: "Woolen Gloves",
                description:
                  "Insulated gloves help in maintaining proper body heat in your hands and also provide a better grasp on trekking poles.",
              },
              {
                img: "pack24.png",
                title: "Main Jacket",
                description:
                  "It’s emphasized that you need to carry proper layers so you can avoid getting cold which is why you need to carry a heavy jacket that you can put on over your other clothes.",
              },
              {
                img: "pack25.png",
                title: "Woolen Cap",
                description:
                  "A woolen cap will help prevent cold when you ascend to high altitude. You can also cover your ears to avoid any pain and discomfort you might face in them when going at high altitudes.",
              },
              {
                img: "pack26.png",
                title: "Hoodie",
                description:
                  "A versatile layering option for various temperatures.",
              },
              {
                img: "pack27.png",
                title: "Scarf / Balaclava",
                description:
                  "Along with sun rays and chilly winds, you also get hit by dirt and grime during treks which is why it's important to carry a scarf or balaclava so you can cover your face when needed.",
              },
              {
                img: "pack28.png",
                title: "Head Lamp",
                description:
                  "You can’t rely on moonlight when you are in the mountains. A torch or even a headlamp with a fresh pair of batteries is always a good idea to bring along.",
              },
              {
                img: "pack29.png",
                title: "Trekking Pole",
                description:
                  "The trekking pole assists in more than one way. It saves energy while also providing stability and helps you to maintain proper balance.",
              },
              {
                img: "pack30.png",
                title: "Camera",
                description:
                  "This should be obvious. To make sure that you get to capture all the great moments from your trek. Make sure that you have enough storage and some extra batteries as well.",
              },
              {
                img: "pack31.png",
                title: "Riding Gear",
                description: "If your trip involves biking or motorcycling.",
              },
              {
                img: "pack32.png",
                title: "Moisturiser & Cold Cream",
                description:
                  "To avoid sunburns and chafing, you need to put on sunscreen as well as cold cream.",
              },
              {
                img: "pack33.png",
                title: "Lip Balm",
                description:
                  "Your lips can become chapped due to the harsh cold winds so it's important to keep them moisturized.",
              },
              {
                img: "pack34.png",
                title: "Sanitary Pads",
                description: "Essential for feminine hygiene.",
              },
              {
                img: "pack35.png",
                title: "Insect Repellent",
                description: "Guards against pesky bugs and insects.",
              },
              {
                img: "pack36.png",
                title: "Cash",
                description: "Emergency funds for unexpected situations.",
              },
              {
                img: "pack37.png",
                title: "Thermals",
                description:
                  "Thermal is a piece of garment that helps in keeping your body warm in cold temperatures. It is a necessary item that you need when going on a high-altitude trek.",
              },
              {
                img: "pack38.png",
                title: "Snacks / Dryfruits / Energy Bar",
                description: "Provides quick energy on the go.",
              },
              {
                img: "pack39.png",
                title: "Positive Attitude",
                description:
                  "The most important item for a successful trek or trip, keeping your spirits high and adaptable to the challenges of the journey.",
              },
            ],
            itenariesdetails: [
              {
                day: "Day 1",
                description: "Manali – Dundhi – Bakarthatch",
                details:
                  "Start your journey from Manali to Dundhi, a village 21 km away, by road. Upon arrival, embark on a trek to Bakarthatch, which is 13 km from Dundhi. The initial part of the trek takes you through lush green meadows and ridges. Set up camps at Bakarthatch. After lunch, engage in an acclimatization walk to adjust to the altitude and enjoy panoramic views of snow-capped peaks such as Hanuman Tibba, Deo Tibba, and Indrasan. Dinner and overnight stay at the campsite.",
              },
              {
                day: "Day 2",
                description: "Bakarthach – Beas Kund – Bakarthach",
                details:
                  "Begin your day early with breakfast and head towards the final destination, Beas Kund. The trek to Beas Kund involves walking over moraine to reach the lake situated at an altitude of 3600 meters. Beas Kund is renowned as the birthplace of River Beas and serves as a base camp for peaks like Shitidhar and Friendship Peak. Enjoy the breathtaking views at Beas Kund before returning to the Bakarthatch camp. Dinner and overnight stay at the campsite.",
              },
              {
                day: "Day 3",
                description: "Bakarthach to Manali",
                details:
                  "After breakfast, start your trek back to Dundhi, marking the last day of your trek. Upon reaching Dundhi, drive back to Manali. Arrive in Manali, concluding the Beas Kund Trek.",
              },
            ],
            cardcontentinclusion: [
              { img: "/meal.png", title: "Meals" },
              { img: "/stay.png", title: "Stays" },
              { img: "/car.png", title: "Transfers" },
              { img: "/activities.png", title: "Activities" },
            ],

            FaQDetails: [
              {
                title: "What is the Beas Kund Trek?",
                answer:
                  " The Beas Kund Trek is a 3-day adventure located in Himachal Pradesh, offering stunning views of the Beas River's source and the surrounding peaks. It features a relatively easy trek through picturesque landscapes, including meadows and glacial lakes.",
              },
              {
                title: "How long does the Beas Kund Trek take?",
                answer:
                  " The trek takes 3 days to complete, including hiking through beautiful meadows and reaching the Beas Kund.",
              },
              {
                title: "What is the difficulty level of the Beas Kund Trek?",
                answer:
                  " The trek is classified as Easy, making it suitable for beginners and those new to trekking, with a basic level of fitness required.",
              },
              {
                title: "What is the maximum altitude of the Beas Kund Trek?",
                answer:
                  "The maximum altitude reached during the trek is approximately 12,500 feet.",
              },
              {
                title: " What is included in the trek package?",
                answer:
                  " The package includes transportation from Manali to Manali, accommodation in camps, meals (vegetarian and non-vegetarian options), a trek guide, necessary permits, and first aid kits.",
              },
              {
                title: " What should I pack for the Beas Kund Trek?",
                answer:
                  " Essential items include trekking shoes, warm clothing, a good quality backpack, water bottles, sunscreen, personal medication, and a camera. A detailed packing list will be provided upon booking.",
              },
              {
                title: " When is the best time to do the Beas Kund Trek?",
                answer:
                  " The best time to undertake the Beas Kund Trek is in January during the winter season for clear views and pleasant trekking conditions.",
              },
              {
                title: "What is the cost of the Beas Kund Trek?",
                answer: " The cost of the trek is INR 5,900 per person.",
              },
              {
                title: " How can I book the Beas Kund Trek?",
                answer:
                  " You can book the trek through our website or contact us directly for more details and availability.",
              },
              {
                title:
                  "Are there any additional costs not covered in the trek package?",
                answer:
                  " Exclusions may include personal expenses, meals not mentioned in the package, and additional costs due to natural calamities or delays. Details will be provided upon booking.",
              },
            ],
          },
        ],
      },
    ],
  },
];

const MegaMenuPage = () => {
  return (
    <Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
          background: `url(/comingsoon.jpg) no-repeat center center`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: { sm: "70vh", xs: "40vh" },
          marginTop: "8px",
          padding: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            marginBottom: "20px",
            marginTop: "20px",
            fontSize: { xs: "30px", sm: "50px" },
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Trek data coming soon
        </Typography>
        <CommonButton buttonname={"Go Back"} route={"/"} />
      </Box>
      <TourCategories tourData={tourData} />
    </Grid>
  );
};

export default MegaMenuPage;
