# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('listings')
    ApplicationRecord.connection.reset_pk_sequence!('favorites')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      username: 'demo-user', 
      email: 'demo-user@mail.com', 
      password: 'demo-password'
    )

    User.create!(
      username: 'evgenii', 
      email: 'evgenii@mail.com', 
      password: 'password'
    )

    User.create!(
      username: 'bob', 
      email: 'bob@gmail.com', 
      password: 'bob-password'
    )

    User.create!(
      username: 'john', 
      email: 'john@gmail.com', 
      password: 'john-password'
    )
  
    # More users
    10.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end

    puts "Creating listings..."
    
    #1
    listing_1 = Listing.create!({
      owner_id: 1,
      status: "active",
      deal_type: "rent",
      description:  "HUGE deck that spans the living room, dining room and one of the two bedrooms for indoor/outdoor living at the top of the world!
      Fabulous 30th floor views from every room!",
      zip: 94105,
      state: "CA",
      city: "San Francisco",
      address: "301 Main St",
      lat: 37.78957, 
      lng: -122.39123,
      bedroom: 2,
      bathroom: 2,
      size: 1268,  
      year_built: 2010,  
      price: 5995,
      listing_type: "apartment",
    })

    listing_1.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/301-main/301-main.jpg"), filename: "301-main.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/301-main/301-main-1.jpg"), filename: "301-main-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/301-main/301-main-2.jpg"), filename: "301-main-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/301-main/301-main-3.jpg"), filename: "301-main-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/301-main/301-main-4.jpg"), filename: "301-main-4.jpg"}
      ])
    
    #2
    listing_2 = Listing.create!({
      owner_id: 2,
      status: "active",
      deal_type: "sale",
      description:  "An authentic Mid-Century Modern, the Kellogg House is a standout on Potrero Hill. Built in 1948 by F.J. McCarthy, the home was extensively expanded in 2015 on a double-lot near the top of the coveted North Slope with panoramic views of the City skyline.",
      zip: 94107,
      state: "CA",
      city: "San Francisco",
      address: "1740 20th St",
      lat: 37.78456703234154, 
      lng: -122.45184789377329,
      bedroom: 3,
      bathroom: 3,
      size: 2976,  
      year_built: 1950,  
      price: 870000,
      listing_type: "house",
    })

    listing_2.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/2.1740-20th/1740-20th.jpg"), filename: "1740-20th.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/2.1740-20th/1740-20th-1.jpg"), filename: "1740-20th-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/2.1740-20th/1740-20th-2.jpg"), filename: "1740-20th-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/2.1740-20th/1740-20th-3.jpg"), filename: "1740-20th-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/2.1740-20th/1740-20th-4.jpg"), filename: "1740-20th-4.jpg"}
      ])

      #3
    listing_3 = Listing.create!({
      owner_id: 1,
      status: "active",
      deal_type: "rent",
      description:  "Commercial/residential living spaces with storefront access. Clubroom with Full Chef's Kitchen, Chef-inspired kitchens with premium appliance packages, spacious islands, and pantries",
      zip: 94103,
      state: "CA",
      city: "San Francisco",
      address: "1145 Harrison St",
      lat: 37.781481, 
      lng: -122.398708,
      bedroom: 2,
      bathroom: 2,
      size: 817,  
      year_built: 2018,  
      price: 4236,
      listing_type: "apartment",
    })

    listing_3.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/3.1145-harrison/1145-harrison.jpg"), filename: "1145-harrison.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/3.1145-harrison/1145-harrison-1.jpg"), filename: "1145-harrison-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/3.1145-harrison/1145-harrison-2.jpg"), filename: "1145-harrison-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/3.1145-harrison/1145-harrison-3.jpg"), filename: "1145-harrison-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/3.1145-harrison/1145-harrison-4.jpg"), filename: "1145-harrison-4.jpg"}
      ])


      #4
    listing_4 = Listing.create!({
      owner_id: 2,
      status: "active",
      deal_type: "rent",
      description:  "Nestled among 152 acres of outdoor space and parkland, adjacent to beaches, coastal trails, lakes and golf courses, Parkmerced is a unique and vibrant San Francisco community. Our apartment homes offer more living space, indoors and out, with a mix of styles, sizes, floor plans, views and unique locations so there's a perfect fit for the way you want to live.",
      zip: 94132,
      state: "CA",
      city: "San Francisco",
      address: "3713 18th Ave",
      lat: 37.720052, 
      lng: -122.48593,
      bedroom: 3,
      bathroom: 2,
      size: 1401,  
      year_built: 2019,  
      price: 5608,
      listing_type: "apartment",
    })

    listing_4.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/4.3713-18th/3713-18th.jpg"), filename: "3713-18th.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/4.3713-18th/3713-18th-1.jpg"), filename: "3713-18th-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/4.3713-18th/3713-18th-2.jpg"), filename: "3713-18th-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/4.3713-18th/3713-18th-3.jpg"), filename: "3713-18th-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/4.3713-18th/3713-18th-4.jpg"), filename: "3713-18th-4.jpg"}
      ])


      #5
    listing_5 = Listing.create!({
      owner_id: 1,
      status: "active",
      deal_type: "sale",
      description:  "Gorgeous, sunny and roomy townhome with tons of windows and light, bonus office space and split bedrooms. And central air conditioning! Model home with luxurious custom paint and wallpaper. ",
      zip: 94103,
      state: "CA",
      city: "San Francisco",
      address: "1288 Howard St",
      lat: 37.77526, 
      lng: -122.41334,
      bedroom: 2,
      bathroom: 3,
      size: 1050,  
      year_built: 2022,  
      price: 1158000,
      listing_type: "apartment",
    })

    listing_5.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/5.1288-howard/1288-howard.jpg"), filename: "1288-howard.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/5.1288-howard/1288-howard-1.jpg"), filename: "1288-howard-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/5.1288-howard/1288-howard-2.jpg"), filename: "1288-howard-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/5.1288-howard/1288-howard-3.jpg"), filename: "1288-howard-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/5.1288-howard/1288-howard-4.jpg"), filename: "1288-howard-4.jpg"}
      ])


    #6
    listing_6 = Listing.create!({
      owner_id: 2,
      status: "active",
      deal_type: "sale",
      description:  "Traditional Marina style two unit flat half a block from Golden Gate Park. Formal living room with fireplace, formal dining room with gum wood wainscoting and trim, two bedroom, split bath and space garage area to expand. ",
      zip: 94118,
      state: "CA",
      city: "San Francisco",
      address: "749 16th Ave",
      lat: 37.76284, 
      lng: -122.47367,
      bedroom: 4,
      bathroom: 4,
      size: 3000,  
      year_built: 1922,  
      price: 1450000,
      listing_type: "house",
    })

    listing_6.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/6.749-16th/749-16th.jpg"), filename: "749-16th.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/6.749-16th/749-16th-1.jpg"), filename: "749-16th-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/6.749-16th/749-16th-2.jpg"), filename: "749-16th-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/6.749-16th/749-16th-3.jpg"), filename: "749-16th-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/6.749-16th/749-16th-4.jpg"), filename: "749-16th-4.jpg"}
      ])


    #7
    listing_7 = Listing.create!({
      owner_id: 1,
      status: "active",
      deal_type: "sale",
      description:  "Rare Castro Street Huge Upside Income Property.   A historic, three unit property in a dream come true location right in the heart of San Francisco. This extraordinary Duboce Triangle/Castro/Corona Heights offering includes two magnificent buildings on one large lot in the prime location near one of the hottest neighborhoods in San Francisco.",
      zip: 94114,
      state: "CA",
      city: "San Francisco",
      address: "220 Castro St",
      lat: 37.76555, 
      lng: -122.43593,
      bedroom: 7,
      bathroom: 7,
      size: 3960,  
      year_built: 1910,  
      price: 3500000,
      listing_type: "house",
    })

    listing_7.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/7.220-castro/220-castro.jpg"), filename: "220-castro.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/7.220-castro/220-castro-1.jpg"), filename: "220-castro-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/7.220-castro/220-castro-2.jpg"), filename: "220-castro-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/7.220-castro/220-castro-3.jpg"), filename: "220-castro-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/7.220-castro/220-castro-4.jpg"), filename: "220-castro-4.jpg"}
      ])


    #8
    listing_8 = Listing.create!({
      owner_id: 2,
      status: "active",
      deal_type: "sale",
      description:  "Heritage Foundation registered estate to it's former glory. Combined with one of the biggest lots in the area, the home includes gorgeous period details, mature landscaping, and incredible views of downtown San Francisco and the Bay Bridge. ",
      zip: 94133,
      state: "CA",
      city: "San Francisco",
      address: "1030 Broadway",
      lat: 37.79717, 
      lng: -122.41446,
      bedroom: 5,
      bathroom: 4,
      size: 3285,  
      year_built: 1950,  
      price: 6950000,
      listing_type: "house",
    })

    listing_8.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/8.1020-broadway/1020-broadway.jpg"), filename: "1020-broadway.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/8.1020-broadway/1020-broadway-1.jpg"), filename: "1020-broadway-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/8.1020-broadway/1020-broadway-2.jpg"), filename: "1020-broadway-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/8.1020-broadway/1020-broadway-3.jpg"), filename: "1020-broadway-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/8.1020-broadway/1020-broadway-4.jpg"), filename: "1020-broadway-4.jpg"}
      ])


    #9
    listing_9 = Listing.create!({
      owner_id: 1,
      status: "active",
      deal_type: "rent",
      description:  "This is a Lovely family home in a wonderful location. Stunning view from Living room and Master Bedroom. Prime location in the Marina District!",
      zip: 94123,
      state: "CA",
      city: "San Francisco",
      address: "125 Marina Blvd",
      lat: 37.80516, 
      lng: -122.43478,
      bedroom: 4,
      bathroom: 3,
      size: 2608,  
      year_built: 1950,  
      price: 12200,
      listing_type: "house",
    })
      
    listing_9.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/9.125-marina/125-marina.jpg"), filename: "125-marina.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/9.125-marina/125-marina-1.jpg"), filename: "125-marina-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/9.125-marina/125-marina-2.jpg"), filename: "125-marina-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/9.125-marina/125-marina-3.jpg"), filename: "125-marina-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/9.125-marina/125-marina-4.jpg"), filename: "125-marina-4.jpg"}
      ])

    #10
    listing_10 = Listing.create!({
      owner_id: 2,
      status: "active",
      deal_type: "rent",
      description:  "Spacious & updated Edwardian home built in 1901 on a tree lined street w/a fantastic Pacific Heights location. The main floor offers a grand entry foyer w/a gracious living & separate formal & sunny dining room.",
      zip: 94115,
      state: "CA",
      city: "San Francisco",
      address: "2011 Lyon St",
      lat: 37.78953, 
      lng: -122.44622,
      bedroom: 6,
      bathroom: 5,
      size: 3735,  
      year_built: 1901,  
      price: 15000,
      listing_type: "house",
    })

    listing_10.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/10.2011-lyon/2011-lyon.jpg"), filename: "2011-lyon.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/10.2011-lyon/2011-lyon-1.jpg"), filename: "2011-lyon-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/10.2011-lyon/2011-lyon-2.jpg"), filename: "2011-lyon-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/10.2011-lyon/2011-lyon-3.jpg"), filename: "2011-lyon-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/10.2011-lyon/2011-lyon-4.jpg"), filename: "2011-lyon-4.jpg"}
      ])

    #11
    listing_11 = Listing.create!({
      owner_id: 1,
      status: "active",
      deal_type: "rent",
      description:  "Gorgeous, Furnished Executive Home Rooftop Hot Tub Sweeping Bay Views.
      Enjoy postcard views from every window of this fully furnished, 2200 square foot Victorian home perched on scenic steps surrounded by Bay views and gardens.",
      zip: 94133,
      state: "CA",
      city: "San Francisco",
      address: "440 Vallejo",
      lat: 37.79895, 
      lng: -122.40468,
      bedroom: 3,
      bathroom: 2,
      size: 3200,  
      year_built: 1920,  
      price: 9450,
      listing_type: "apartment",
    })

    listing_11.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/11.440-vallejo/440-vallejo.jpg"), filename: "440-vallejo.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/11.440-vallejo/440-vallejo-1.jpg"), filename: "440-vallejo-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/11.440-vallejo/440-vallejo-2.jpg"), filename: "440-vallejo-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/11.440-vallejo/440-vallejo-3.jpg"), filename: "440-vallejo-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/11.440-vallejo/440-vallejo-4.jpg"), filename: "440-vallejo-4.jpg"}
      ])


    #12
    listing_12 = Listing.create!({
      owner_id: 2,
      status: "active",
      deal_type: "rent",
      description:  "Luxury 3 BR/ 2.5 BA condo at Millennium Tower, one of the most luxurious condominium building in San Francisco. Features floor to ceiling windows on the living room, stainless steel appliances in the kitchen.",
      zip: 94105,
      state: "CA",
      city: "San Francisco",
      address: "301 Mission St",
      lat: 37.790529829495654, 
      lng: -122.3961641020766,
      bedroom: 3,
      bathroom: 3,
      size: 1583,  
      year_built: 2010,  
      price: 1498000,
      listing_type: "apartment",
    })

    listing_12.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/12.301-mission/301-mission.jpg"), filename: "301-mission.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/12.301-mission/301-mission-1.jpg"), filename: "301-mission-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/12.301-mission/301-mission-2.jpg"), filename: "301-mission-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/12.301-mission/301-mission-3.jpg"), filename: "301-mission-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/12.301-mission/301-mission-4.jpg"), filename: "301-mission-4.jpg"}
      ])

    
    #13
    listing_13 = Listing.create!({
      owner_id: 3,
      status: "active",
      deal_type: "sale",
      description:  "One Steuart Lane was designed by world-renown architects Skidmore, Owings & Merrill. The community is designed as a timeless connection between the city and the water. ",
      zip: 94105,
      state: "CA",
      city: "San Francisco",
      address: "1 Steuart St",
      lat: 37.79182289078685,
      lng: -122.39156254354381,
      bedroom: 2,
      bathroom: 3,
      size: 1979,  
      year_built: 2021,  
      price: 3995000,
      listing_type: "apartment",
    })

    listing_13.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/13.1-steuart/1-steuart.jpg"), filename: "1-steuart.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/13.1-steuart/1-steuart-1.jpg"), filename: "1-steuart-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/13.1-steuart/1-steuart-2.jpg"), filename: "1-steuart-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/13.1-steuart/1-steuart-3.jpg"), filename: "1-steuart-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/13.1-steuart/1-steuart-4.jpg"), filename: "1-steuart-4.jpg"}
      ])


    #14
    listing_14 = Listing.create!({
      owner_id: 4,
      status: "active",
      deal_type: "sale",
      description:  "Unique and rare custom build home in one of SF best neighborhoods. Build and carried for by one family since 1999. Perfect for an entertainment, quality lifestyle, extended families.",
      zip: 94121,
      state: "CA",
      city: "San Francisco",
      address: "261 17th Ave",
      lat: 37.78324374974115, 
      lng: -122.47663385703603,
      bedroom: 5,
      bathroom: 4,
      size: 3560,  
      year_built: 1998,  
      price: 3495000,
      listing_type: "house",
    })
    
    listing_14.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/14.261-17th/261-17th.jpg"), filename: "261-17th.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/14.261-17th/261-17th-1.jpg"), filename: "261-17th-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/14.261-17th/261-17th-2.jpg"), filename: "261-17th-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/14.261-17th/261-17th-3.jpg"), filename: "261-17th-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/14.261-17th/261-17th-4.jpg"), filename: "261-17th-4.jpg"}
      ])


    #15
    listing_15 = Listing.create!({
      owner_id: 3,
      status: "active",
      deal_type: "rent",
      description:  "Welcome to your sixteenth floor two bedroom two bathroom apartment of dreams! Complete with beautiful fully fitted kitchen, marble bathrooms, and to top it off a full range of services that Ritz Carlton do so very very splendidly well. ",
      zip: 94104,
      state: "CA",
      city: "San Francisco",
      address: "690 Market St",
      lat: 37.78855046412792, 
      lng: -122.403234885872,
      bedroom: 2,
      bathroom: 2,
      size: 1200,  
      year_built: 2008,  
      price: 7475,
      listing_type: "apartment",
    })

    listing_15.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/15.690-market/690-market.jpg"), filename: "690-market.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/15.690-market/690-market-1.jpg"), filename: "690-market-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/15.690-market/690-market-2.jpg"), filename: "690-market-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/15.690-market/690-market-3.jpg"), filename: "690-market-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/15.690-market/690-market-4.jpg"), filename: "690-market-4.jpg"}
      ])

    #16
    listing_16 = Listing.create!({
      owner_id: 4,
      status: "active",
      deal_type: "rent",
      description:  "Luxurious Blu in SoMaSoFi! The Blu is a boutique building located near Downtown, Yerba Buena and South Beach. Designer Finishes, Amenities, SF Views & Location! ",
      zip: 94107,
      state: "CA",
      city: "San Francisco",
      address: "631 Folsom St",
      lat: 37.784899763475686, 
      lng: -122.39687193005173,
      bedroom: 2,
      bathroom: 2,
      size: 1070,  
      year_built: 2015,  
      price: 4600,
      listing_type: "apartment",
    })

    listing_16.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/16.631-folsom/631-folsom.jpg"), filename: "631-folsom.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/16.631-folsom/631-folsom-1.jpg"), filename: "631-folsom-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/16.631-folsom/631-folsom-2.jpg"), filename: "631-folsom-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/16.631-folsom/631-folsom-3.jpg"), filename: "631-folsom-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/16.631-folsom/631-folsom-4.jpg"), filename: "631-folsom-4.jpg"}
      ])

    #17
    listing_17 = Listing.create!({
      owner_id: 3,
      status: "active",
      deal_type: "sale",
      description:  "Welcome to your urban sanctuary! This quiet and spacious 2 bed, 2 bath condo is located at the intersection of Mission Bay and the vibrant SOMA district. Original and historic brick and timber elements give NYC loft vibes",
      zip: 94107,
      state: "CA",
      city: "San Francisco",
      address: "310 Townsend St",
      lat: 37.77704618549261, 
      lng: -122.3956233933019,
      bedroom: 2,
      bathroom: 2,
      size: 1070,  
      year_built: 2006,  
      price: 960000,
      listing_type: "apartment",
    })

    listing_17.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/17.310-townsend/310-townsend.jpg"), filename: "310-townsend.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/17.310-townsend/310-townsend-1.jpg"), filename: "310-townsend-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/17.310-townsend/310-townsend-2.jpg"), filename: "310-townsend-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/17.310-townsend/310-townsend-3.jpg"), filename: "310-townsend-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/17.310-townsend/310-townsend-4.jpg"), filename: "310-townsend-4.jpg"}
      ])

    #18
    listing_18 = Listing.create!({
      owner_id: 4,
      status: "active",
      deal_type: "sale",
      description:  "Perched atop Telegraph Hill's north slope, this three-story residence offers 4 private outdoor spaces, 3 bedrooms, 3.5 baths, gated 2-car parking, and an extra storage room.",
      zip: 94133,
      state: "CA",
      city: "San Francisco",
      address: "165 Francisco St",
      lat: 37.8052924240977, 
      lng: -122.40755639010536,
      bedroom: 3,
      bathroom: 3,
      size: 2090,  
      year_built: 1988,  
      price: 960000,
      listing_type: "apartment",
    })

    listing_18.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/18.165-francisco/165-francisco.jpg"), filename: "165-francisco.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/18.165-francisco/165-francisco-1.jpg"), filename: "165-francisco-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/18.165-francisco/165-francisco-2.jpg"), filename: "165-francisco-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/18.165-francisco/165-francisco-3.jpg"), filename: "165-francisco-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/18.165-francisco/165-francisco-4.jpg"), filename: "165-francisco-4.jpg"}
      ])

    #19
    listing_19 = Listing.create!({
      owner_id: 3,
      status: "active",
      deal_type: "rent",
      description:  "Two stories 3 BR 2 BA penthouse apartment with views, right on the edge of the Financial District and Chinatown. Located in a well-maintained mixed-use building. First floor has kitchen and living room area.",
      zip: 94108,
      state: "CA",
      city: "San Francisco",
      address: "883 Sacramento St",
      lat: 37.79320914026504, 
      lng: -122.40718251470767,
      bedroom: 3,
      bathroom: 2,
      size: 1500,  
      year_built: 1990,  
      price: 6650,
      listing_type: "apartment",
    })

    listing_19.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/19.883-sacramento/883-sacramento.jpg"), filename: "883-sacramento.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/19.883-sacramento/16.jpg"), filename: "883-sacramento-16.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/19.883-sacramento/2.jpg"), filename: "883-sacramento-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/19.883-sacramento/4.jpg"), filename: "883-sacramento-4.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/19.883-sacramento/8.jpg"), filename: "883-sacramento-8.jpg"}
      ])

    #20
    listing_20 = Listing.create!({
      owner_id: 4,
      status: "active",
      deal_type: "rent",
      description:  "This newly renovated apartment has 2 bedrooms, 2 bathroom and an extra large walk-in closet / home office space. Situated right on Polk and Cedar Street.",
      zip: 94109,
      state: "CA",
      city: "San Francisco",
      address: "1037 Polk St",
      lat: 37.78670419902299, 
      lng: -122.42011386816822,
      bedroom: 2,
      bathroom: 2,
      size: 2100,  
      year_built: 1950,  
      price: 6400,
      listing_type: "apartment",
    })
    listing_20.photos.attach([
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/20.1037-polk/1037-polk.jpg"), filename: "1037-polk.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/20.1037-polk/1037-polk-1.jpg"), filename: "1037-polk-1.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/20.1037-polk/1037-polk-2.jpg"), filename: "1037-polk-2.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/20.1037-polk/1037-polk-3.jpg"), filename: "1037-polk-3.jpg"},
      {io: URI.open("https://home-zillow-dev.s3.us-west-2.amazonaws.com/20.1037-polk/1037-polk-4.jpg"), filename: "1037-polk-4.jpg"}
      ])

    puts "Done!"
  end