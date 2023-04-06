const { Park } = require('../models')

const parkdata = [
    {
        name: 'Fort Mountain State Park',
        county: 'Murray',
        image: 'https://i0.wp.com/blueridgemountainstravelguide.com/wp-content/uploads/2022/03/Oerlook-at-Fort-Mountain-State-Park-near-Ellijay-GA-1-of-1.jpg?fit=1280%2C853&ssl=1',
        content: `Fort Mountain State Park is a 3,712-acre Georgia state park located between Chatsworth and Ellijay on Fort Mountain. The state park was founded 
        in 1938 and is named for an ancient 885-foot-long rock wall located on the peak`
    },
    {
        name: 'Fort Yargo State Park',
        county: 'Barrow',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/FortYargoVisitorsCenter2.jpg?itok=5ertD8Mo',
        content: `Fort Yargo State Park is a 1,816-acre (7.35 km2) U.S. state park located in Winder, Georgia, situated between Athens and Atlanta. The park is located 1 mile south of Winder and is accessible by Georgia State Route 81. There is a 260-acre (1.1 km2) lake with a public beach. Available activities at Fort Yargo include GeoCaching, hiking, mountain biking, disc golf, boating (including Jon boat, pedal boat, and canoe rentals), 
        lake swimming, fishing, picnicking, and miniature golf.`
    },
    {
        name: 'General Coffee State Park',
        county: 'Coffee',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/GeneralCoffee_0.jpg?itok=Qr554S7q',
        content: `General Coffee State Park is a 1,511-acre (6.11 km2) Georgia state park located near Douglas. The park is named after politician, farmer, and military leader General John E. Coffee.[1] The park is host to many rare and endangered species, especially in the cypress swamps through which the Seventeen Mile River winds.`
    },
    {
        name: 'George L. Smith State Park',
        county: 'Emanuel',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/FortYargo2.jpg?itok=gWoeLTE6',
        content: `George L. Smith State Park is a 1,634-acre (6.61 km2) Georgia state park located in Emanuel County. The park is named after George L. Smith, a former speaker of the Georgia House of Representatives and Emanuel County native. Attractions include a grist mill, 
        covered bridge, and the dam of the Parrish Mill (built 1880).`
    },
    {
        name: 'George T. Bagby State Park',
        county: 'Clay',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/GeorgeTBagby3.jpg?itok=ruyGf2-n',
        content: `George T. Bagby State Park is a 700-acre (280 ha) state park located in southwestern Georgia on the shore of Walter F. George Lake. The park offers a 60-room lodge, conference center, restaurant, cottages, and features the 
        18 hole Meadow Links Golf Course, as well as a marina and boat ramp.`
    },
    {
        name: 'Georgia Veterans State Park',
        county: 'Crisp',
        image: 'https://gastateparks.org/sites/default/files/parks/images/webmaps/webmap-2023-02.png',
        content: `Georgia Veterans State Park (originally the Georgia Veterans Memorial State Park) is a state park located on Lake Blackshear in Crisp County, west of Cordele, Georgia. It was established on December 4, 1946 as a memorial to U.S. Veterans. The 1,308-acre (5 km2) park features a museum with aircraft, vehicles, 
        weapons, uniforms and other memorabilia dating from the Revolutionary War to the present.`
    },
    {
        name: 'Hamburg State Park',
        county: 'Warren',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/hamburg-slider1.jpg?itok=oLjWvsxu',
        content: `Hamburg State Park is a 741 acre (3.00 km²) state park located near Jewell and Warthen in the U.S. state of Georgia. It is home to a 1921 water-powered grist mill still operating today, and a museum with 
        antique agricultural tools and appliances used in rural Georgia.`
    },
    {
        name: 'Hard Labor Creek State Park',
        county: 'Morgan',
        image: 'https://gastateparks.org/HardLaborCreek',
        content: `Hard Labor Creek State Park is a 5,804 acre (23.49 km²) Georgia state park located between Bostwick and Rutledge. The park is named after Hard Labor Creek, a small stream that cuts through the park. The creek's name comes either from enslaved people who once tilled the summer fields, or from Native
         Americans who found the area around the stream difficult to ford.`
    },
    {
        name: 'High Falls State Park',
        county: 'Monroe',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/HighFalls.jpg?itok=sX_97ZV_',
        content: `High Falls State Park is a 1,050-acre (4.2 km2) Georgia state park located near the city of Jackson in Monroe County, Georgia, part of the Macon metropolitan area.
         It is the site of a prosperous 19th-century industrial center, which became a ghost town when it was bypassed by the railroad. The park contains the largest waterfall in middle Georgia and a 650-acre (2.6 km2) lake.`
    },
    {
        name: 'Indian Springs State Park',
        county: 'Butts',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/indian-springs-slider-stairs_0.jpg?itok=h1pfeKTL',
        content: `Indian Springs State Park is a 528-acre (2.14 km²) Georgia state park located near Jackson and Flovilla. The park is named for its several springs, which the Creek Indians used for centuries to heal the sick. The water from these springs is said to have a sulfur smell and taste. Indian Springs is 
        thought to be the oldest state park in the nation.`
    },
    {
        name: 'Jack Hill State Park',
        county: 'Tattnall',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/banner-jackhill-footgolf.jpg?itok=ob6u4nLB',
        content: `Jack Hill State Park, formerly named Gordonia-Alatamaha State Park, is a 662-acre (268 ha) Georgia state park located in Reidsville, a city on Georgia's coastal plain region. The park is known for having a dramatic history, 
        having been previously under water for nearly 20 million years.`
    },
    {
        name: 'James H. Floyd State Park',
        county: 'Chattooga',
        image: 'https://d3qvqlc701gzhm.cloudfront.net/thumbs/fd9b3b4c78f9c4c4fb05832764862244c304dc46ff0e30a126b94aa9f1dd7856-375.jpg',
        content: `James H. Floyd State Park is a 561-acre (2.27 km²) Georgia State Park located near Summerville at the base of Taylor Ridge (Georgia). The park is named after Democrat James H. "Sloppy" Floyd who served in the 
        Georgia House of Representatives from 1953 until 1974 and was from the area.`
    },



    





];

const parkSeeds = () => Park.bulkCreate(parkdata)

module.exports = parkSeeds; 