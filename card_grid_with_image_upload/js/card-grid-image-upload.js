$( document ).ready(function() {

	////////////////////////////////////////////////////
	//Image upload /////////////////////////////////////
	////////////////////////////////////////////////////
	

	//Set image into the card
	$(".input-file-upload").change(function(e){
		
	    if ($(e.target).prop('files')[0]) {
	    	
	    	var image = $(e.target).prop('files')[0];

	    	var tgt = e.target;    

	        var reader = new FileReader();

	        //Optional for ajax call (commented)
	        var imagen = $(e.target).prop('files')[0];
 
	        reader.onload = function (e) {

	        	//Set image
	        	$(tgt).parent().find('img').attr('src', e.target.result);
	        	
	        	//Enable Delete button
				$(tgt).parent().parent().parent().find('.delete-image').removeClass('disable-delete');

				//*************************************************************************
				//*************************************************************************
				//Optional: Ajax call to send image to backend in string (base64) format
				/*var formData = new FormData();
	            formData.append('image', image);

	            $.ajax({
	    		    url : "/saveImageURL",
	    		    type: "POST",
	    		    data: formData,
	                enctype: 'multipart/form-data',
	                processData: false, 
	                contentType:false,
	    		    success: function() { 
	    		    	console.log('Image saved successfully');
	    		    },

	    		    error: function ()
	    		    {
						console.log('Oops! Error saving image');
	    		    }
	    		});*/
	    		//*************************************************************************
	    		//*************************************************************************

	        }

	        reader.readAsDataURL($(e.target).prop('files')[0]);
	    }

	});
	
	//Delete selected image and restore generic (placehold.it)
	$(".delete-image").click(function(e){

		//Add generic image
		$(e.target).parent().parent().find('img').attr('src', "http://placehold.it/150x150");

		//Disable Delete button
		$(e.target).parent().addClass('disable-delete');

	});    
	
	
});