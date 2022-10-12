class CampsiteSerializer < ActiveModel::Serializer
  attributes :id, :type_id, :short_description, :price, :elevation, :name, :coordinates

  belongs_to :type

  def coordinates
    [self.object.lat.to_f, self.object.long.to_f]
  end

  def short_description
    self.object.description[0..200]...
  end
end
