class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :name
      t.string :email
      t.text :comment
      
      
      t.timestamps
    end
    # change_table :contacts do |t|
    #   t.rename :comment, :comments
    # end
    
  end
end
