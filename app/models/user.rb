class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :visits,  dependent: :destroy
    has_many :campsites, through: :visits

    validates :username, uniqueness: true
    validates :name, :username, presence: true

    has_secure_password
end
