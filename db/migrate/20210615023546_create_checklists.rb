class CreateChecklists < ActiveRecord::Migration[6.1]
  def change
    create_table :checklists do |t|
      t.string :title
      t.integer :user_id
      t.float :rating
      t.text :instructions
      t.text :due_date

      t.timestamps
    end
  end
end
