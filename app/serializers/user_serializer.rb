class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password, :formatted_created_at

  def formatted_created_at
    self.object.created_at.strftime("%B %-d, %Y")
  end

end
