class ChecklistSerializer < ActiveModel::Serializer
  attributes :id, :title, :instructions, :due_date, :rating

  has_one :user 
end

