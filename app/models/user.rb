class User < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :visits,  dependent: :destroy
    has_many :campsites, through: :visits
end
