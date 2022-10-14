class Campsite < ApplicationRecord
    has_many :amenities, dependent: :destroy
    has_many :reviews, dependent: :destroy
    has_many :visits,  dependent: :destroy
    has_many :users, through: :visits
    belongs_to :type

    validates :name, :description, :type_id, :lat, :long, presence: true
end
