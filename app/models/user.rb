# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    # create password getter and setter, 
    #defines authenticate method on user, User#authenticate(password)
    has_secure_password 
  
    has_many :listings,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Listing

    has_many :favorites,
    foreign_key: :owner_id,
    class_name: :Favorite,
    dependent: :destroy

    has_many :listings_favorited,
    through: :favorites,
    source: :listing
    
    # attr_reader :password  #don't need anymore
  
    validates :username, :email, :session_token, presence: true, uniqueness: true
    validates :username, length: { in: 3..30 }, format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
    validates :email, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :password, length: { in: 3..255 }, allow_nil: true
  
    before_validation :ensure_session_token
  
  # replace everything!!!!!
    def self.find_by_credentials(credential, password)
     
    
      if URI::MailTo::EMAIL_REGEXP.match(credential)
        user = User.find_by(email: credential)
      else
        user = User.find_by(username: credential)
      end
  
      if user && user.authenticate(password)
        return user
      else
        return nil
      end
  end
  
  
  # don't need anymore (passwords)
  
  # def password=(password)
  #   @password=password
  #   self.password_digest = BCrypt::Password.create(password)
  # end
  
  # def is_password?(password)
  #   bcrypt_object = BCrypt::Password.new(self.password_digest)
  #   bcrypt_object.is_password?(password)
  # end
  
  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save!
    self.session_token
  end
  
  
    private
  
    def generate_unique_session_token
        token = SecureRandom::urlsafe_base64
        if User.exists?(session_token: token)
            token = SecureRandom::urlsafe_base64
        end
        token
    end
  
    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end
  
  end
