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

    Listing.create!({
      owner_id: 1,
      status: "active",
      deal_type: "for sale",
      description:  "Great starter home in the Bayview neighboor with 3 beds and 1 bath on upper level - updated kitchen and bathroom, lower level consist one large family room and second bath.",
      zip: 94124,
      state: "CA",
      city: "San Francisco",
      address: "1826 Keith St",
      lat: 37.79352054026415, 
      lng: -122.40412603039728, 
      bedroom: 3,
      bathroom: 2,
      size: 1101,  
      year_built: 1955,  
      price: 1999999,
      listing_type: "house"
    })

    Listing.create!({
      owner_id: 2,
      status: "active",
      deal_type: "for sale",
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


    puts "Done!"
  end