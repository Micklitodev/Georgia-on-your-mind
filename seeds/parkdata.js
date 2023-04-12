const { Park } = require('../models')
//-------------Park Data Alphabetized---------------
const parkdata = [
    {
        name: 'Amicalola Falls State Park & Lodge',
        county: 'Dawson',
        image: 'https://www.amicalolafallslodge.com/wp-content/uploads/2019/03/FallsHeader.jpg',
        content: `Amicalola Falls State Park & Lodge has four groups of trails within it, 
        including the trail leading up to the top of the waterfall. The park has a lodge that serves as a starting point for Appalachian Trail hikers. The park also checks in guests for a nearby facility called the Len Foote Hike Inn, a backcountry eco-friendly inn that is 5 miles from the park, one mile from the Appalachian Approach trail and 4.4 miles from Springer Mountain.`
    },
    {
        name: 'Black Rock Mountain State Park',
        county: 'Rabun',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/BlackRockMountain1.jpg?itok=gWnK34qZ',
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
        name: 'Fort McAllister State Park',
        county: 'Bryan',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/FortMcAllister-banner4.jpg?itok=-VOhODK6',
        content: `Fort McAllister State Park is located close to I-95 south of Savannah on the banks of the Ogeechee River. It showcases the best-preserved earthwork fortification of the Confederacy, which was attacked seven times by Union ironclads but did not fall until 1864—ending General William T. McAllister's presidency. The park has been connected to Native American life, Civil War soldiers and Henry Ford Era visitors for centuries.`
    },
    {
        name: 'Fort Mountain State Park',
        county: 'Murray',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/locationslideshow/FortMountain.jpg?itok=5EKTscvg',
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
        image: 'https://www.lakeblackshearresort.com/wp-content/uploads/2021/05/Lake-Blackshear-Homepage-Slider-MarinaSunset.jpg?t=1681240335725',
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
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/HardLaborCreek_0.jpg?itok=SzYx4PC2',
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
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/JamesHFloyd.jpg?itok=WW7ogu9q',
        content: `James H. Floyd State Park is a 561-acre (2.27 km²) Georgia State Park located near Summerville at the base of Taylor Ridge (Georgia). The park is named after Democrat James H. "Sloppy" Floyd who served in the 
        Georgia House of Representatives from 1953 until 1974 and was from the area.`
    },
    {
        name: 'Kolomoki Mounds',
        county: 'Early',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/KolomokiMounds_0.jpg?itok=UJpPVa-r',
        content: `The Kolomoki Mounds is one of the largest and earliest Woodland period earthwork mound complexes in the Southeastern United States[3] and is the largest in Georgia. Constructed from 350CE to 600CE, the mound complex is located in southwest Georgia, in present-day Early County near the Chattahoochee River.`
    },
    {
        name: 'Laura S. Walker State Park',
        county: 'Ware',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/LSW-banner1.jpg?itok=zQj9XaDL',
        content: `Laura S. Walker State Park is a 626-acre state park in the U.S. state of Georgia. Located near Hoboken and the Okefenokee Swamp, the park is named after Laura S. Walker, a Georgia writer, teacher, civic leader, and naturalist . The park's location near the Okefenokee makes it home to many exotic plant and animal species, including alligators, great blue herons, and pitcher plants. The park includes a 120-acre lake and a championship 18-hole golf course with a pro shop.`
    },
    {
        name: 'Little Ocmulgee State Park',
        county: 'Telfair',
        image: 'https://www.littleocmulgeelodge.com/wp-content/uploads/2019/06/Lake-8990.jpg',
        content: `Little Ocmulgee State Park and Lodge is a 1,360-acre Georgia state park located 2 miles north of McRae-Helena on the Little Ocmulgee River. Part of the park was initially built by the Civilian Conservation Corps during the Great Depression, around the natural diversion of the Little Ocmulgee into a lake. This is a 256-acre lake with beach, and the park includes a 60 room lodge and a championship 18-hole golf course with pro shop, known as the Wallace Adams Memorial Golf Course.[1] The soil around the Ocmulgee River and the Little Ocmulgee is a fine white sand, and therefore the lake has its own "beach sand". Also within the park is the 2.6-mile long Oak Ridge Trail, allowing visitors to see native wildlife and plants.`
    },
    {
        name: 'Magnolia Springs State Park',
        county: 'Jenkins',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/mag-slider.jpg?itok=SwTHFBhh',
        content: `Magnolia Springs State Park is a 1,070-acre Georgia state park located between Perkins and Millen in Jenkins County. The park was built as a project of the Civilian Conservation Corps and opened in 1939. The park is well known for its crystal clear springs that are estimated to flow 7 million US gallons per day. The park also offers unique wildlife near the springs, including alligators, turtles, and a variety of birds and fish.`
    },
    {
        name: 'Mistletoe State Park',
        county: 'Columiba',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/Mistletoe.jpg?itok=U80NPnmI',
        content: `Mistletoe State Park is a 1,972 acre Georgia state park located northwest of Augusta, Georgia on the southern shore of Lake Strom Thurmond. The park gets its name from Mistletoe Corners,[1] a local area where people gather to pick mistletoe during the winter holiday season. Its strategic location on the lake makes it one of the finest bass fishing spots in the nation. The park also offers public beaches and 8 miles of nature trails. The land on which the park is located is leased to Georgia by the United States Army Corps of Engineers.`
    },
    {
        name: 'Moccasin Creek State Park',
        county: 'Rabun',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/MoccasinCreek_0.jpg?itok=qTnsCKf2',
        content: `Moccasin Creek State Park is a 32-acre state park located on the western shore of Lake Burton in Rabun County in the northeast corner of Georgia. The park features campgrounds; a fishing pier for the physically disabled, the elderly, and children; and walking trails. Even though the surrounding area is mountainous, the camping area is relatively flat.`
    },
    {
        name: 'Panola Mountain',
        county: 'Henry',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/panola-mountain-rock-banner_0.jpg?itok=16sO6Bxf',
        content: `Panola Mountain is a 100-acre granite monadnock near Stockbridge on the boundary between Henry County and Rockdale County, Georgia. The peak is 946 feet above sea level, rising 260 feet above the South River. The South River marks the boundary between Henry, Rockdale, and DeKalb counties. Due to its delicate ecological features, Panola Mountain was designated a National Natural Landmark in 1980`
    },
    {
        name: 'Providence Canyon State Park',
        county: 'Steward',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/ProvidenceCanyon.jpg?itok=GS3mXVXI',
        content: `Providence Canyon State Outdoor Recreation Area is a 1,003-acre Georgia state park located in Stewart County in southwest Georgia, United States.[2] The park contains Providence Canyon, which is sometimes called Georgia's "Little Grand Canyon". It is considered one of the Seven Natural Wonders of Georgia. It is also home to the very rare plumleaf azalea.`
    },
    {
        name: 'Red Top Mountain State Park',
        county: 'Bartow',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/RedTopMountain.jpg?itok=a4s7cj6i',
        content: `Red Top Mountain State Park is a state park in the U.S. state of Georgia. It is located in the northwestern part of the state, on the northwestern edge of metro Atlanta, in southeastern Bartow County near Cartersville. Named for iron-rich Red Top Mountain,[1] the park covers 1,776 acres on a peninsula jutting north into Lake Allatoona, formed on the park's north and east sides by the Etowah River arm and on the west by Allatoona Creek arm.`
    },
    {
        name: 'Reed Bingham State Park',
        county: 'Colquitt',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/ReedBingham1.jpg?itok=V9s8Co7N',
        content: `Reed Bingham State Park is a 1,613 acre Georgia state park in Colquitt County and Cook County located 5 miles east of Ellenton. The park surrounds a 375 acre lake that is a tourist attraction in southern Georgia. Inside the park, visitors can hike the 3.5 mile long Coastal Plains Nature Trail, which goes through a baldcypress swamp, a pitcher plant bog, and sandhill area. The park also contains many animals, including the threatened gopher tortoise and the indigo snake. In addition, the park offers camping and fishing with special ponds for kids that are only open on specific dates.`
    },
    {
        name: 'richard b. russell state park',
        county: 'Elbert',
        image: 'https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/RichardBRussell1.jpg?itok=Wm62qRzX',
        content: `Richard B. Russell State Park is a 2,508 acres state park located on the shore of Richard B. Russell Lake in Elbert County, Georgia. The park features the 18-hole Arrowhead Golf Course, as well as picnic shelters and a swimming beach.`
    },
    {
        name: "Seminole State Park",
        county: "Seminole",
        image: "https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/Seminole1.jpg?itok=MHx0pEhy",
        content: "Seminole State Park is a 604 acre (2.44 km2) state park located on the shores of Lake Seminole in the extreme southwest corner of Georgia. The park offers excellent fishing opportunities on the lake, as well as a tranquil getaway in one of the park's cottages or campsites."
        },
        {
        name: "Skidaway Island State Park",
        county: "Chatham",
        image: "https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/SkidawayIsland.jpg?itok=AJYB0z8z",
        content: "Skidaway Island State Park is a state park near Savannah, Georgia. The park borders Skidaway narrows, a part of Georgia’s intracoastal waterway. Trails wind through maritime forest and past salt marsh, leading to a boardwalk and observation tower. Visitors can watch for deer, fiddler crabs, raccoon, egrets and other wildlife"
        },
        {
        name: "Smithgall Woods State Park",
        county: "White",
        image: "https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/SmithgallWoods1.jpg?itok=VMH1fLHC",
        content:"Smithgall Woods Conservation Area and Lodge is a 5,664 acres (8.85 sq mi; 22.92 km2) Georgia state park, lodge and protected wilderness area near Helen, Georgia. It contains old growth forests, 12 miles of trout streams, and populations of wild turkeys, bears and deer."
        },
        {
        name: "Standing Boy Creek State Park",
        county: "Muscogee",
        image: "https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/standingboycreek-1.jpg?itok=2OOfmb9d",
        content: "Standing Boy Creek State Park is a 1,579 acres (6.39 km2) Georgia state park located in Columbus. The executive order creating the park was issued by then-Governor Sonny Perdue on January 21, 2004. Attractions in the park include swimming, boating (on Lake Oliver), hiking, and hunting."
        },
        {
        name: "Stephen C. Foster State Park",
        county: "Charlton",
        image: "https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/StephenCFoster.jpg?itok=BSgcWWv0",
        content:"Stephen C. Foster State Park is an 120-acre (49 ha) state park located in the Okefenokee Swamp in Charlton County, Georgia. the park offers visitors several ways to explore the swamp's unique ecosystem"
        },
        {
        name: "Sweetwater Creek State Park",
        county: "Douglas",
        image: "https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/SweetwaterCreek.jpg?itok=mMh9uwKn",
        content:"Sweetwater Creek State Park is a 2,549 acres (10.32 km2) Georgia state park in east Douglas County, 15 miles (24 km) from downtown Atlanta. The park is named after Sweetwater Creek which runs through it. The park features wooded walking and hiking trails, the George Sparks Reservoir, a visitor center, a bait shop, and a gift shop, as well as the ruins of the New Manchester Manufacturing Company."
        },
        {
        name: "Tallulah Gorge State Park",
        county: "Rabun, Habersham",
        image: "https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/locationslideshow/TallulahGorge.jpg?itok=vIYmsog1",
        content: "Tallulah Gorge State Park is a 2,689-acre (1,088 ha) Georgia state park adjacent to Tallulah Falls, Georgia, along the county line between Rabun and Habersham Counties. The park surrounds Tallulah Gorge, a 1,000-foot (300 m) deep gorge formed by the action of the Tallulah River, which runs along the floor of the gorge. The major attractions of the gorge are the six waterfalls known as the Tallulah Falls, which cause the river to drop 500 feet over one mile (150 m over 1.6 km)."
        },
        {
        name: "Tugaloo State Park",
        county: "Franklin",
        image: "https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/Tugaloo.jpg?itok=67ac2eDE",
        content: "Tugaloo State Park is a 393 acres (1.59 km2) state park located on the shore of Lake Hartwell in Franklin County, Georgia. The park features a swimming beach, boat ramps, and ample fishing opportunities, and is located near S.R. 328 north of Lavonia."
        },
        {
        name: "Unicoi State Park & Lodge",
        county: "White",
        image: "https://www.unicoilodge.com/wp-content/uploads/2017/06/1600x800-Level2Ziplines.jpg?t=1681241213146",
        content:"Unicoi State Park & Lodge is a 1,050-acre (4.2 km2) state park (est. in 1954) located immediately north-northeast of Helen, Georgia in the northeastern portion of the state. The centerpiece of the park is 53-acre (21 ha) Unicoi Lake on Smith Creek. The park is especially popular in October, when the autumn leaves in the forest change colors."
        },
        {
        name: "Victoria Bryant State Park",
        county: "Franklin",
        image: "https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/VictoriaBryant1.jpg?itok=rI3h-HCO",
        content:"Victoria Bryant State Park is a 502-acre (2.03 km2) Georgia state park located near Franklin Springs.[1] Nestled in the rolling hills of Georgia's Piedmont plateau, this park offers facilities ranging from picnic sites and a swimming pool to an 18-hole golf course. The North Fork of the Broad River flows through the park, adding several water hazards to the course"
        },
        {
        name: "Vogel State Park",
        county: "Union",
        image: "https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/Vogel.jpg?itok=ADP5wlyB",
        content: "Vogel State Park is located in the north Georgia mountains and offers visitors a chance to experience the beauty of the area. The park features hiking trails, a lake for fishing and boating, picnic areas, and campsites for overnight stays. Vogel State Park is a popular destination for families and outdoor enthusiasts alike."
        },
        {
        name: "Watson Mill Bridge State Park",
        county: "Madison",
        image: "https://gastateparks.org/sites/default/files/styles/locationslidestyle/public/parks/locationslideshow/WatsonMillBridge.jpg?itok=qXrdiR8q",
        content: "Watson Mill Bridge State Park is home to one of the longest and tallest covered bridges in Georgia. The park features hiking trails, picnic areas, and campsites for visitors to enjoy. Visitors can also fish in the nearby river or take a guided horseback ride through the park. Watson Mill Bridge State Park is a great place to relax and enjoy the natural beauty of Georgia."
        }


];



const parkSeeds = () => Park.bulkCreate(parkdata)

module.exports = parkSeeds; 