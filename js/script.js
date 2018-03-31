
		var link    = document.querySelector(".button-search");
		var popup   = document.querySelector(".form-search"); 
		
		
		var form    = popup.querySelector("form-search");
		var Datein  = popup.querySelector("[name=Date-in]");
		var DateOut = popup.querySelector("[name=Date-out]");
		
		link.addEventListener("click", function (evt) 
		{ evt.preventDefault();  
	
		if (popup.classList.contains('modal-show'))  
		{	popup.classList.remove('modal-show'); } 	
		else 
		{
			popup.classList.add('modal-show');
		};
			Datein.focus();			
		});
		
		
		window.addEventListener("keydown", function (evt) 
		{
		if (evt.keyCode === 27) 
		{
			evt.preventDefault();
		if (popup.classList.contains("modal-show")) 
			{
				popup.classList.remove("modal-show");
			}
		}
		});
	
