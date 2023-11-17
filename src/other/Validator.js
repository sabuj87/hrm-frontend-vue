export class Validator {
  

    validated(data) {
        var $ = require("jquery");
        var error = ""

  


        for (let i = 0; i < data.length; i++) {
          

            if (data[i].type) {




                if (data[i].type == "required" ) {
                   

         
                    if (data[i].value == "" || data[i].value == null) {
                        

                        error = "This filed is required !"
                        $('#' + data[i].field).css("display","block")
                        $('#' + data[i].field).html(error)


          


                    }



                }

                if (data[i].type == "required|length") {


                    if (data[i].value == "" || data[i].value == null ) {
        
                        error = "This filed is required !"
                        $('#' + data[i].field).css("display","block")
                        $('#' + data[i].field).html(error)


                       

                  


                    }




                    else if (data[i].size) {


                        if (data[i].value.length < data[i].size) {

                            error = "Minimum Password length will be " + data[i].size
                            $('#' + data[i].field).css("display","block")
                            $('#' + data[i].field).html(error)
                            

                            return error

                          

                        }


           

                    }



                }

                


                if (data[i].type == "required|email") {
                    
                    if (data[i].value == "" || data[i].value == null) {
                    
                        error = "This filed is required !"
                        $('#' + data[i].field).css("display","block")
                        $('#' + data[i].field).html(error)


                       

                  


                    }else if(!data[i].value.includes("@")){

                        
                        error = "Email is not valid !"
                        $('#' + data[i].field).css("display","block")
                        $('#' + data[i].field).html(error)




                    }
                    



                }

                







            }

        }

        return error


    }
}