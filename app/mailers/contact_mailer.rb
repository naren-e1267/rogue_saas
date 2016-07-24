class ContactMailer < ActionMailer::Base 
   default to:"naren.e1267@gmail.com"
   
   def contact_email(name, email, body)
       @name = name
       @email = email
       @body = body
       
       mail(from:email, subject: "From contact form")
   end
    
end