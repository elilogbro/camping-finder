class TypeSerializer < ActiveModel::Serializer
  attributes :id, :capitalized_name

  def capitalized_name
    self.object.name.upcase
  end
end
