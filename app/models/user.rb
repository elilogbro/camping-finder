class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :visits,  dependent: :destroy
    has_many :campsites, through: :visits

    validates :password, length: { minimum: 6 }
    validates :username, uniqueness: true
    validates :name, :password, :username, presence: true

    has_secure_password
end
