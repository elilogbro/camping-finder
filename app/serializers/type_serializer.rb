class TypeSerializer < ActiveModel::Serializer
  attributes :name

  has_many :campsites
end
