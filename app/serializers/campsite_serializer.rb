class CampsiteSerializer < ActiveModel::Serializer
  attributes :id, :type_id, :description, :short_description, :price, :elevation, :name, :coordinates

  belongs_to :type
  has_many :amenities
  has_many :reviews

  def coordinates
    [self.object.lat.to_f, self.object.long.to_f]
  end

  def short_description
    self.object.description[0..200]...
  end

end
