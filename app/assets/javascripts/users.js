$(document).ready(function () {
    
    Stripe.setPublicKey($('meta[name="stripe-key"]').attr("content"));
    
    $('#form-submit-btn').click(function(event){
        event.preventDefault();
        $('input[type=submit]').prop("disabled",true);
        
        var error= false;
        var ccNum = $('#card_number').val(),
            cvcNum = $('#card_code').val(),
            expMonth = $('#card_month').val(),
            expYear = $('#card_year').val();
            
        if(!error){
            Stripe.createToken({
                number: ccNum,
                cvc: cvcNum,
                exp_month: expMonth,
                exp_year: expYear
            }, stripeResponseHandler);
        }
        return false;
    }); //form submission
    
    function stripeResponseHandler(status,response) {
        //reference the form
        // var f = $("#new_user");
        console.log(response.error.message);
        var f = $('#payment-form');

    if (response.error) {
      // Show the errors on the form
      f.find('.payment-errors').text(response.error.message);
      f.find('button').prop('disabled', false);
    } else {
        
        //token from response
        var token = response.id;
        
        alert(token);
        
        //add above token to the form
        f.append('<input type="hidden" name="user[stripe_card_token]" value="'+token+'"/>');
        
        //submit form
        f.get(0).submit();
    }
    }
});