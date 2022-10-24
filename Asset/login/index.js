$(document).ready(function() {
	$('#login').on('click', function() {
		$("#login_form").show();
		$("#register_form").hide();
	});

	$('#register').on('click', function() {
		$("#register_form").show();
		$("#login_form").hide();
	});

	$('#butsave').on('click', function() {
		$("#butsave").attr("disabled", "disabled");
		var fullname = $('#fullname').val();
		var username = $('#username').val();
		var password = $('#password').val();
		if(fullname!="" && username!="" && password!="" ){
			$.ajax({
				url: "Asset/login/save.php",
				type: "POST",
				data: {
					type: 1,
					fullname: fullname,
					username: username,
					password: password						
				},
				cache: false,
				success: function(dataResult){
					var dataResult = JSON.parse(dataResult);
					if(dataResult.statusCode==200){
						$("#butsave").removeAttr("disabled");
						$('#form_reg').find('input:text').val('');
						Swal.fire({
							position: 'top',
							icon: 'success',
							title: 'Registration Complete',
							showConfirmButton: false,
							timer: 1500
						  })
        				setInterval(function(){
							$("#login_form").show();
							$("#register_form").hide();
        				},1500)			
					}
					else if(dataResult.statusCode==201){
						Swal.fire({
							icon: 'error',
							text: 'Username already registered',
						  }).then(function(isConfirm){
							if(isConfirm){
								$("#butsave").removeAttr("disabled");
							}
						  })
					}
					
				}
			});
		}
		else{
			  Swal.fire({
				icon: 'error',
				text: 'Please fill all the field !',
			  }).then(function(isConfirm){
				if(isConfirm){
					$("#butsave").removeAttr("disabled");
				}
			  })
		}
	});

	$('#butlogin').on('click', function() {
		var username = $('#user_log').val();
		var password = $('#password_log').val();

		var nama = document.getElementById('user_log').value;
        localStorage.setItem( 'username', nama );
		
		if(username!="" && password!="" ){
			$.ajax({
				url: "Asset/login/save.php",
				type: "POST",
				data: {
					type:2,
					username: username,
					password: password						
				},
				cache: false,
				success: function(dataResult){
					var dataResult = JSON.parse(dataResult);
					if(dataResult.statusCode==200){
						let timerInterval
        Swal.fire({
          icon: 'success',
          title: 'Login Success',
		  text: 'keren',
          html:
			'<h2><b>Welcome back, '+ nama +'<br> </b></h2>'+
            'Pindah halaman dalam <strong></strong> detik.',
          timer: 5000,
          showConfirmButton: false,
          iconColor: '#0d6efd',
          didOpen: () => {
            
            timerInterval = setInterval(() => {
              Swal.getHtmlContainer().querySelector('strong')
                .textContent = (Swal.getTimerLeft() / 1000)
                  .toFixed(0)
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        })
        setInterval(function(){
			location.href = "Asset/game/game.php"
        },5000)				
					}
					else if(dataResult.statusCode==201){
							Swal.fire({
								icon: 'error',
								text: 'Invalid Username or Password !',
							})
					}
					
				}
			});
		}
		else{
			Swal.fire({
				icon: 'error',
				text: 'Please fill all the field !',
			  })
		}
	});
});

