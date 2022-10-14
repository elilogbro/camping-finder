puts "Destroying seeds..."
User.destroy_all
Type.destroy_all
Campsite.destroy_all
Visit.destroy_all
Review.destroy_all
Amenity.destroy_all

puts "Seeding types..."
t1 = Type.create(name: "Free")
t2 = Type.create(name: "Pay")
t3 = Type.create(name: "Permit")

puts "Seeding campsites..."
Campsite.create(lat: "38.01635", long: "-105.007156", city_state: "Beulah Valley, Colorado", type_id: t1.id, description: "Small loop of sites in San Isabel Nat. Forest just off of 12 Mile Rd./ Hwy 78 between Beulah & San Isabel (CO Hwy. 165)in a small meadow surrounded by forest, with some sites farther back from the road in the trees. 12 Mile has occasional traffic, but over all, very quiet. Another small meadow with trailhead just across the road (San Carlos or St. Charles, don't remember which. I marked it hiking and horse only because I don't remember whether bikes and/or ATVs are allowed.)", elevation: 8173, name: "12 Mile Road")

Campsite.create(lat: "39.1763", long: "-108.56631", city_state: "Grand Junction, Colorado", type_id: t1.id, description: "BLM site in Grand Junction Colorado right below the Bookcliff Mountains. Site is located about 5 miles north of town. When you come to the dirt road continue another mile until you see a large brown sign and multiple pull offs. There are miles and miles of dirt bike and off road trails. Camping is allowed anywhere in on the BLM land. There are a few sites with fire rings already made.", elevation: 4902, name: "25 Rd Grand Junction")

Campsite.create(lat: "38.71562", long: "-109.01114", city_state: "Gateway, Colorado", type_id: t1.id, description: "Amazing surroundings. Big dispersed camping area. Down by the river. Behind high-end resort. Awesome place with an ATV or similar OHV. Great without one. Can access campsite with most vehicles provides its not raining. No restrooms.", elevation: 4547, name: "4.1 Road")

Campsite.create(lat: "40.376926", long: "-106.730599", city_state: "Steamboat Springs, Colorado", type_id: t1.id, description: "Great camping spot right of route 40 small gravel road 296 there is about 7-8 campsites. Gravel road is kinda rough but all cars should be fine. VERY CLEAN PLEASE KEEP IT THAT WAY", elevation: 4902, name: "296 Gravel Road")

Campsite.create(lat: "38.740027", long: "-119.777914", city_state: "Markleeville, California", type_id: t2.id, description: "Nestled in the eastern foothills of the Sierra Nevada between the California towns of Woodfords and Markleeville. Elevation in the area ranges from 5,600 feet at the reservoir to 6,400 feet in the surrounding foothills. Pine trees and sagebrush dot the landscape.
Summers are generally warm and dry with daytime temperatures occasionally reaching 90 degrees Fahrenheit, while evenings are cool and comfortable. Sunny and dry days prevail, interspersed with periods of spectacular thunderstorms in the mid-summer months.
A campground with 30 sites is situated next to Indian Creek Reservoir. The campground has an RV/tent loop, a tent walk-in loop and group camp area. The RV/tent loop has 19 sites that are suitable for recreational vehicles up to 34 feet in length or tents. The walk-in tent loop has 10 sites with parking nearby.
A group campsite (tents only) is available for groups of up to 40 campers.
The main restrooms located in the RV/tent loop have flush toilets and hot showers. Drinking water is provided and a sanitary dump station (fee charged) is available. A day use area has four picnic sites, a boat ramp, large parking lot and restrooms with flush toilets.
From Woodfords, California, travel Hwy 89 south approximately four (4) miles to Airport Road. Turn left or east on Airport Road and travel another four miles on paved surface to the campground entrance located just south of Indian Creek Reservoir.", elevation: 4902, name: "Indian Creek Campground", price: 10)

Campsite.create(lat: "39.0451", long: "-106.31955", city_state: "Granite, Colorado", type_id: t1.id, description: "About 6-8 sites available on 398. Some down in the forest looking up at mountains, then about 1 at each hairpin turn. The highest site is the best site. Road was very well maintained as of September 2021. Stayed in tent. Views are nice, and Colorado trail runs through area, but otherwise not much else to do.", elevation: 10138, name: "398 Overlook")

Campsite.create(lat: "38.485274", long: "-108.043161", city_state: "Olathe, Colorado", type_id: t1.id, description: "A designated dispersed camping area. No facilities or services. Campers must stay within 300ft of the road. This is in an OHV and rock crawling area, but this spot is a trailhead for a foot, horse, bicycle and motorcycle trail", elevation: 4902, name: "Rim Road Dispersed Camp")

Campsite.create(lat: "38.77872", long: "-107.85281", city_state: "Delta, Colorado", type_id: t1.id, description: "The Cottonwood Grove Campground has six sites. Three have
cabanas with tables and grills and three have only tables and grills. One of the cabana sites provides universal access camping. It is located near the wheelchair accessible fishing pier. There is a toilet and hand-carry boat launch ramp but no drinking water or trash service.", elevation: 4902, name: "Cottonwood Grove Campground")

Campsite.create(lat: "38.439833", long: "-109.044806", city_state: "Paradox, Colorado", type_id: t1.id, description: "The info center map before entering the Buckeye Reservoir said this was free camping along with another around the reservoir and there was two fee sites. So I go in the boat launch area and a sign said 'not suitable for trailers...' Well I found a spot that was suitable and stayed there a few days. It was a nice spot. There were 9 deer one morning. A bunch of cows. Cool gray squirrels. No one was camping at that area and no one bothered me. Very quiet and pretty place. Lots of neat birds. Boats allowed but only 5hp. Just a small lake to relax. The road was sometimes bumpy coming in. Careful of oncoming traffic on it's one lane forest road.", elevation: 4902, name: "Buckeye Campground First Camp")

Campsite.create(lat: "38.884012", long: "-120.369558", city_state: "Pollock Pines, California", type_id: t1.id, description: "This is a walk-in, bike-in or boat-in campground. Check in time is 2:00 p.m. Check out time is 1:00 p.m. No Reservations. Sites are available on a first-come,first-served basis.", elevation: 4869, name: "Azalea Cove Campground (hike in)")

Campsite.create(lat: "39.341238", long: "-120.971902", city_state: "Nevada City, California", type_id: t2.id, description: "Beautiful large area with mixed day use and camping. There are plenty of free places surrounding the pay place, just abide by the NF dispersed camping laws. Horribly maintained road coming from Nevada City, it's easier to enter through a crossing on the 49. Lots of rumors about crime here has been spread by locals, I had no problems and saw few campers, mainly filled with day use crowds speeding around tailgating RVs. Good gold panning opportunities. No phone reception or water.", elevation: 4869, name: "South Yuba", price: 5)

puts "Seeding users..."
User.create(name: "Eli Brown", username: "elilogbro", password: "elilogbro")
User.create(name: "Molley Dove", username: "molleydove", password: "molleydove")


puts "Seeding amenities..."
Amenity.create(campsite_id: Campsite.all.sample.id, name: "Fire Ring")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "Near Water")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "ADA Accessible")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "BBQ Grill")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "Boat Ramp")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "Drinking Water")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "Electricity")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "Laundry")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "Pets Welcome")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "Picnic Tables")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "Restrooms")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "Shooting Range")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "Sewer")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "Showers")
Amenity.create(campsite_id: Campsite.all.sample.id, name: "Trashcans")

puts "Seeding reviews..."
Review.create(user_id: User.all.sample.id, campsite_id: Campsite.all.sample.id, review_summary: "So fun, 10/10")
Review.create(user_id: User.all.sample.id, campsite_id: Campsite.all.sample.id, review_summary: "Would stay here again")
Review.create(user_id: User.all.sample.id, campsite_id: Campsite.all.sample.id, review_summary: "beautiful trees and water")
Review.create(user_id: User.all.sample.id, campsite_id: Campsite.all.sample.id, review_summary: "Annoying neighbors blasting music and being loud")
Review.create(user_id: User.all.sample.id, campsite_id: Campsite.all.sample.id, review_summary: "The cops arrested me, so not good")
Review.create(user_id: User.all.sample.id, campsite_id: Campsite.all.sample.id, review_summary: "Mountain bike friendly with a good view")
Review.create(user_id: User.all.sample.id, campsite_id: Campsite.all.sample.id, review_summary: "Not too busy even on a Saturday")
Review.create(user_id: User.all.sample.id, campsite_id: Campsite.all.sample.id, review_summary: "Stayed for a week and would come back in a heartbeat")

puts "Seeding visits..."
Visit.create(user_id: User.all.sample.id, campsite_id: Campsite.all.sample.id)
Visit.create(user_id: User.all.sample.id, campsite_id: Campsite.all.sample.id)
Visit.create(user_id: User.all.sample.id, campsite_id: Campsite.all.sample.id)
Visit.create(user_id: User.all.sample.id, campsite_id: Campsite.all.sample.id)
Visit.create(user_id: User.all.sample.id, campsite_id: Campsite.all.sample.id)

puts "Done seeding!"