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
    Listing.create!({
      owner_id: 1,
      status: "active",
      deal_type: "sale",
      description:  "Great starter home in the Bayview neighboor with 3 beds and 1 bath on upper level - updated kitchen and bathroom, lower level consist one large family room and second bath.",
      zip: 94124,
      state: "CA",
      city: "San Francisco",
      address: "1826 Keith St",
      lat: 37.79352054026415, 
      lng: -122.40412603039728, 
      bedroom: 3,
      bathroom: 1,
      size: 1101,  
      year_built: 1955,  
      price: 1999999,
      listing_type: "house"
    })
    
    #2
    Listing.create!({
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
      #3
    Listing.create!({
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
      #4
    Listing.create!({
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
      #5
    Listing.create!({
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

    #6
    Listing.create!({
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

    #7
    Listing.create!({
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

    #8
    Listing.create!({
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

    #9
    Listing.create!({
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
    #10
    Listing.create!({
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

    #11
    Listing.create!({
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
    #12
    Listing.create!({
      owner_id: 2,
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
    
      #13



    puts "Done!"
  end