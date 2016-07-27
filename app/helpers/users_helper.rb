module UsersHelper
    
    def title_icon
       if @user.profile.title == "Mr." 
           "<i class='fa fa-male'></i>".html_safe
       elsif @user.profile.title == "Miss." || @user.profile.title == "Mrs."
           "<i class='fa fa-female'></i>".html_safe
        elsif  @user.profile.title == "Dr."  
           "<i class='fa fa-medkit'></i>".html_safe
       end
    end
    
    
    
end

