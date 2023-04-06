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
    {
        name: 'Amicalola Falls State Park & Lodge',
        county: 'Dawson',
        image: 'https://www.amicalolafallslodge.com/wp-content/uploads/2019/07/amicalola-header-blog.jpg',
        content: `Amicalola Falls State Park & Lodge has four groups of trails within it, 
        including the trail leading up to the top of the waterfall. The park has a lodge that serves as a starting point for Appalachian Trail hikers. The park also checks in guests for a nearby facility called the Len Foote Hike Inn, a backcountry eco-friendly inn that is 5 miles from the park, one mile from the Appalachian Approach trail and 4.4 miles from Springer Mountain.`
    },
    {
        name: 'Black Rock Mountain State Park',
        county: 'Rabun',
        image: 'https://d3qvqlc701gzhm.cloudfront.net/full/6c34cb0554f4d622cd08e6e4222779c0de3e86e8503b5b5d77689d8a5b003ce8.jpg',
        content: `Black Rock Mountain State Park is a 1,743-acre (705 ha) Georgia, United States, state park west of Mountain City in Rabun County, in the Blue Ridge Mountains. It is named after its sheer cliffs of dark-colored biotite gneiss. Astride the Eastern Continental Divide at an elevation of 3,640 feet (1,110 m), the park provides many scenic overlooks and 80-mile (130 km) vistas of the southern Appalachian Mountains. On a clear day, four states are visible: Georgia, North Carolina, South Carolina, and Tennessee. In addition to Black Rock Mountain itself, the park includes four other peaks over 3,000 feet (910 m) in elevation, making it the state's highest state park. As of 2019, it was open to visitors year round.`
    },
    {
        name: 'Chattahoochee Bend State Park',
        county: 'Coweta',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/ChattahoocheeBendBoating_0.jpg?itok=i_4QwU_5',
        content: `The state of Georgia first purchased the land for the park in 1999. In 2006, the state approved $7 million for the first phase of park development.[2] Beginning in 2008, the Friends of Chattahoochee Bend organization began hosting work days to aid in the development of the park. The park was opened to the public on July 1, 2011. It was the first new state park to open since Tallulah Gorge State Park in 1993.
        `
    },
    {
        name: 'Cloudland Canyon State Park',
        county: 'Dade',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/CloudandCanyon2.jpg?itok=Ym2cTXQ7',
        content: `Cloudland Canyon State Park is located on the western edge of Lookout Mountain and is one of the largest and most scenic parks in the state.It features thousand-foot deep canyons, sandstone cliffs, wild caves, waterfalls, cascading creeks, dense woodland and abundant wildlife for outdoor recreation. Visitors can discover nature's role through the ages surrounded by breathtaking vistas of the Cumberland Plateau.`
    },
    {
        name: 'Crooked River State Park',
        county: 'Camden',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/crooked-river-banner-dock_0.jpg?itok=W_5uMQ6-',
        content: `Crooked River State Park is located just 5 miles north of the Florida/Georgia state line and is the perfect place to camp if you are planning a trip over to Cumberland Island National Seashore. Campsites and cottages are surrounded by palmettos and Spanish moss-draped oaks, while a boat ramp is popular with anglers who often take their boats there.`
    },
    {
        name: 'Don Carter State Park',
        county: 'Hall',
        image: 'https://d3qvqlc701gzhm.cloudfront.net/full/a5e3b68450daaf1b78baf74c209aea29a528d1ffc0e686f66c08f33ea39100f3.jpg',
        content: `Don Carter State Park is located on 38,000-acre Lake Lanier and is the only state park on this reservoir. It offers a variety of recreational activities for visitors, such as boat ramps for quick access to the Chattahoochee River, a multi-use trail for hikers and bikers to explore hardwood forests, a large sand swimming beach with bath house for guests to stay cool during the summer months.`
    },
    {
        name: 'Elijah Clark State Park',
        county: 'Lincoln',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/ElijahClark_0.jpg?itok=bcZY93ch',
        content: `Elijah Clark State Park is located on the western shore of 71,100-acre Clarks Hill Lake, one of the largest lakes in the Southeast. It is named for a frontiersman and Georgia war hero who led pioneers during the Revolutionary War. A log cabin replica displays furniture, utensils and tools circa 1780 and is open weekends April through November. Visitors can also view the graves of Clark and his wife, Hannah.`
    },
    {
        name: 'Etowah Indian Mounds State Historic Site',
        county: 'Bartow',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/EtowahIndianMounds.jpg?itok=BCIJ0lsr',
        content: `Etowah Indian Mounds State Historic Site is a 54-acre Mississippian culture site in the southeastern United States, home to several thousand Native Americans from 1000 A.D. to 1550 A.D., featuring six earthen mounds, a plaza, village site, borrow pits and defensive ditches. It symbolizes a society rich in ritual with its 63-foot flat-topped earthen knoll used as a platform for the home of the priest-chief; nobility were buried in elaborate costumes accompanied by items they would need in their after-lives; only 9 percent has been excavated but examination has revealed much about the people who lived here more than 500 years ago.`
    },
    {
        name: 'F. D. Roosevelt State Park',
        county: 'Harris',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/FDRoosevelt.jpg?itok=w06wyUJW',
        content: `Franklin D. Roosevelt State Park is a 9,049-acre state park located approximately 40 miles southeast of New York City. It offers day-trippers a day of fun and relaxation with spacious picnic areas that can be reserved in advance, as well as more than 40 miles of hiking and backpacking trails. Dowdells Knob, where President Franklin D.Roosevelt sometimes picnicked and pondered world affairs, has a life-size sculpture of the president now welcoming visitors to the overlook.`
    },
    {
        name: 'Florence Marina State Park',
        county: 'Stewart',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/FlorenceMarina_0.jpg?itok=589IHb8B',
        content: `Florence Marina State Park is a 45,000-acre state park located at the northern end of Lake Walter F. George (also called Lake Eufaula). It was once home to Native Americans and the old town of Florence. Visitors can experience its agricultural and commercial past by walking forested trails, visiting the Kirbo Interpretive Center, or fishing from its natural deep-water marina.`
    },
    {
        name: 'Fort King George State Historic Site',
        county: 'McIntosh',
        image: 'https://imgs.search.brave.com/JK8x8QCLboIjbc0ftcc8cjaraWq1mpR8ihGj7tuJDp4/rs:fit:550:413:1/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLXMv/MWEvZTMvMTcvOGEv/Zm9ydHJlc3MuanBn',
        content: `Fort King George State Historic Site is located in McIntosh County, adjacent to Darien. It was built in 1721 along what is now known as the Darien River and served as the southernmost outpost of the British Empire in North America from 1721 until 1736.3 A cypress blockhouse, barracks and palisaded earthen fort were constructed by scoutmen led by Colonel John “Tuscarora Jack” Barnwell during this time period.124 It is the oldest English fort remaining on Georgias coast.`
    },
    {
        name: 'Fort McAllister State Park',
        county: 'Bryan',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/FortMcAllister-banner4.jpg?itok=-VOhODK6',
        content: `Fort McAllister State Park is located close to I-95 south of Savannah on the banks of the Ogeechee River. It showcases the best-preserved earthwork fortification of the Confederacy, which was attacked seven times by Union ironclads but did not fall until 1864—ending General William T. McAllister's presidency. The park has been connected to Native American life, Civil War soldiers and Henry Ford Era visitors for centuries.`
    },
    {
        name: 'Fort Morris State Historic Site',
        county: 'Liberty',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/FortMorris.jpg?itok=6GcKOQP4',
        content: `Fort Morris State Historic Site was originally a Guale Indian village and became the seaport town of Sunbury in 1776. During both the Revolutionary War and the War of 1812, Fort Morris was used as a coastal fortification to protect Georgia's coast. The earthen works were reconstructed during this time.`
    },


    





];

const parkSeeds = () => Park.bulkCreate(parkdata)

module.exports = parkSeeds; 