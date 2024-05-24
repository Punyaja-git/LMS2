
if (document.readyState === 'loading') {
  // console.log(window.innerWidth);
    if(window.innerWidth<768){
    
    $('#sign-in-box').addclassName('none');
  }
  else{
    $('#sign-in-box').removeclassName('none');
  }
} else {
  console.log('Window has finished loading.');
}
window.onload = function() {
$('#sign-in-box').removeclassName('none');
}

          
$(document).ready(function () {
    if (localStorage.getItem("accept_cookie_academy")) {
      //localStorage.removeItem("accept_cookie_academy");
    }else{
      window.cookieconsent.initialise({
          ookie: {
            domain : "/",
            name: "cookie_consent",
          },
          palette:{
            popup:  { background: "#e8ecf7"  },
            button: { background: "#181818"},
          },
          content:{
            message: 'This website uses cookies to personalize content and analyse traffic in order to offer you a better experience.',
            href: 'https://My school.ova.gov.in/index.php/home/cookie_policy',
            target: '_blank',
          },
          elements: {
            dismiss: '<a aria-label="dismiss cookie message" onclick="cookieAccept();" tabindex="0" className="cc-btn cc-dismiss">Got it!</a>',
          }
      });
    }
  });
  $('.filters ul li').click(function(){
    $('.filters ul li').removeClass('active');
    $(this).addClass('active');
    
    var data = $(this).attr('data-filter');
    $grid.isotope({
      filter: data
    })
  });
  
  var $grid = $(".grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
      columnWidth: ".all"
    }
  })

  function cookieAccept() {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("accept_cookie_academy", true);
      localStorage.setItem("accept_cookie_time", "02/08/2024");
      $('#cookieConsentContainer').fadeOut(1200);
    }
  }

  $(document).ready(function () {
  // Initialize variables
  var currentSlide = 0;
  var slides = $(".card.images");
  var totalSlides = slides.length;
  
  // Function to show the current slide and update arrow button states
  function showSlide() {
      slides.hide();
      for (var i = currentSlide; i < currentSlide + 3; i++) {
          $(slides[i % totalSlides]).show();
      }
      updateArrowStates();
  }

  // Function to update arrow button states
  function updateArrowStates() {
      // Disable the next arrow when on the last image
      if (currentSlide === totalSlides - 1) {
          $(".carousel-arrow.next").prop("disabled", true);
      } else {
          $(".carousel-arrow.next").prop("disabled", false);
      }

      // Disable the previous arrow when on the first image
      if (currentSlide === 0) {
          $(".carousel-arrow.prev").prop("disabled", true);
          } else {
              $(".carousel-arrow.prev").prop("disabled", false);
          }
      }

      // Function to go to the next slide
      function nextSlide() {
          currentSlide = (currentSlide + 1) % totalSlides;
          showSlide();
      }

      // Function to go to the previous slide
      function prevSlide() {
          currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
          showSlide();
      }

      // Show the initial slides
      showSlide();

      // Attach click event handlers to the buttons
      $(".carousel-arrow.next").click(nextSlide);
      $(".carousel-arrow.prev").click(prevSlide);
  });


  $(document).ready(function() {
      // Resolve "Cannot set properties of null (setting 'onclick')"
      // Check if the element exists before assigning onclick
      var scrollToTopButton = document.getElementById("scroll-to-top");
      if (scrollToTopButton) {
          scrollToTopButton.onclick = function() {
              window.scrollTo({ top: 0, behavior: "smooth" });
          };
      }
    
      // Resolve "Cannot read properties of null (reading 'style')"
      // Ensure that any elements you access properties on exist in the DOM
      $(window).scroll(function() {
          var scrollToTopButton = document.getElementById("scroll-to-top");
          if (scrollToTopButton) {
              if ($(document).scrollTop() > 20) {
                  scrollToTopButton.style.display = "block";
              } else {
                  scrollToTopButton.style.display = "none";
              }
          }
      });
  });


  

      if (document.readyState === 'loading') {
          startCounters();
      }
  
      function startCounters() {
          // Select all counter elements
          var $counters = $('.counter');
  
          // Initialize each counter
          $counters.each(function (index, counterElement) {
              // console.log(index+'-'+$(counterElement).text())
              var from = 1;
              var to = $(counterElement).text();
              var duration = 1000;
              var decimalPlaces = 0; // Set the desired number of decimal places
  
              $({ Counter: from }).animate(
                  { Counter: to },
                  {
                      duration: duration,
                      easing: 'swing',
                      step: function () {
                          // Round the counter to the specified decimal places
                          var roundedValue = this.Counter.toFixed(decimalPlaces);
                          // console.log(roundedValue);
                          $(counterElement).text(roundedValue);
                      }
                  }
              );
          });
      }
  
      window.addEventListener("scroll", function() {
          const sidebar = document.querySelector(".sidebar");
          const scrollY = window.scrollY;
          const offsetTop = 100; // Adjust the offset as needed
  
          if (scrollY > offsetTop) {
              sidebar.style.top = (scrollY - offsetTop) + "px";
          } else {
              sidebar.style.top = "0";
          }
      });
  
  
      // JavaScript for smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();
  
              const targetId = this.getAttribute('href').substring(1);
              const targetElement = document.getElementById(targetId);
  
              if (targetElement) {
                  window.scrollTo({
                      top: targetElement.offsetTop,
                      behavior: 'smooth'
                  });
              }
          });
      });
  

      $(document).ready(function() {
          showNotification();
          //setInterval(function(){ showNotification(); }, 60000);// 20000, 24hr-1440000, 12hr-720000, 1min-60000
      });
  
      function showNotification() {
          if (!Notification) {
              $('body').append('<h4 style="color:red">*Browser does not support Web Notification</h4>');
              return;
          }
          if (Notification.permission !== "granted") {
              Notification.requestPermission();
  
          } else {
              $.ajax({
                  url: "https://My school.ova.gov.in/index.php/home/notificationShow",
                  type: "POST",
                  success: function(data, textStatus, jqXHR) {
                      var data = jQuery.parseJSON(data);
                      if (data.result == true) {
                          var data_notif = data.notif;
  
                          for (var i = data_notif.length - 1; i >= 0; i--) {
                              var theurl = data_notif[i]['url'];
                              var notifikasi = new Notification(data_notif[i]['title'], {
                                  icon: data_notif[i]['icon'],
                                  body: data_notif[i]['msg'],
                              });
                              notifikasi.onclick = function() {
                                  window.open(theurl);
                                  notifikasi.close();
                              };
                              setTimeout(function() {
                                  notifikasi.close();
                              }, 5000);
                          };
                      } else {}
                  },
                  error: function(jqXHR, textStatus, errorThrown) {}
              });
          }
      };
  
      function handleWishList(elem) {
  
          $.ajax({
              url: 'https://My school.ova.gov.in/index.php/home/handleWishList',
              type: 'POST',
              data: {
                  course_id: elem.id
              },
              success: function(response) {
                  if (!response) {
                      window.location.replace("index.php/login.html");
                  } else {
                      if ($(elem).hasclassName('active')) {
                          $(elem).removeclassName('active')
                      } else {
                          $(elem).addclassName('active')
                      }
                      $('#wishlist_items').html(response);
                  }
              }
          });
      }
  
      function handleCartItems(elem) {
          url1 = 'index.php/home/handleCartItems.html';
          url2 = 'index.php/home/refreshWishList.html';
          $.ajax({
              url: url1,
              type: 'POST',
              data: {
                  course_id: elem.id
              },
              success: function(response) {
                  $('#cart_items').html(response);
                  if ($(elem).hasclassName('addedToCart')) {
                      $('.big-cart-button-' + elem.id).removeclassName('addedToCart')
                      $('.big-cart-button-' + elem.id).text("Add To Cart");
                  } else {
                      $('.big-cart-button-' + elem.id).addclassName('addedToCart')
                      $('.big-cart-button-' + elem.id).text("Added to cart");
                  }
                  $.ajax({
                      url: url2,
                      type: 'POST',
                      success: function(response) {
                          $('#wishlist_items').html(response);
                      }
                  });
              }
          });
      }
  
      function handleEnrolledButton() {
          $.ajax({
              url: 'https://My school.ova.gov.in/index.php/home/isLoggedIn',
              success: function(response) {
                  if (!response) {
                      window.location.replace("index.php/login.html");
                  }
              }
          });
      }

 
      $(document).ready(function(){
      $('.single-item').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    touchThreshold: 1000,
  });
  });
  

  function blink_text() {
      $('.blink').fadeOut(500);
      $('.blink').fadeIn(500);
  }
  setInterval(blink_text, 1000);
  var videoElement = document.getElementById('kyc_player');
  var audio;
  // Add click event listener to the video element
  videoElement.addEventListener('click', function() {
      if (videoElement.paused) {
              videoElement.play();
              playAudio();
          } else {
              videoElement.pause();
              if (audio) {
                  audio.pause();
              }
          }
  });
  videoElement.controls = false;
 

  
  function switch_language(language) {
      $.ajax({
          url: 'https://My school.ova.gov.in/index.php/home/site_language',
          type: 'post',
          data: {language : language},
          success: function(response) {
              setTimeout(function(){ location.reload(); }, 500);
          }
      });
  }

  function showAjaxModal(url)
  {
      // SHOWING AJAX PRELOADER IMAGE
      jQuery('#modal_ajax .modal-body').html('<div style="text-align:center;margin-top:200px;"><img src="assets/images/preloader.html" /></div>');
  
      // LOADING THE AJAX MODAL
      jQuery('#modal_ajax').modal('show', {backdrop: 'true'});
  
      // SHOW AJAX RESPONSE ON REQUEST SUCCESS
      $.ajax({
          url: url,
          success: function(response)
          {
              jQuery('#modal_ajax .modal-body').html(response);
          }
      });
  }
 
  

  
  
  
 
  function confirm_modal(delete_url)
  {
      jQuery('#modal-4').modal('show', {backdrop: 'static'});
      document.getElementById('delete_link').setAttribute('href' , delete_url);
  }

  
 
  
  

  function async_modal() {
      const asyncModal = new Promise(function(resolve, reject){
          $('#modal-4').modal('show');
          $('#modal-4 .btn-yes').click(function(){
              resolve(true);
          });
          $('#modal-4 .btn-cancel').click(function(){
              resolve(false);
          });
      });
      return asyncModal;
  }

  function toggleRatingView(course_id) {
    $('#course_info_view_'+course_id).toggle();
    $('#course_rating_view_'+course_id).toggle();
    $('#edit_rating_btn_'+course_id).toggle();
    $('#cancel_rating_btn_'+course_id).toggle();
  }
  
  function publishRating(course_id) {
      var review = $('#review_of_a_course_'+course_id).val();
      var starRating = 0;
      starRating = $('#star_rating_of_course_'+course_id).val();
      if (starRating > 0) {
          $.ajax({
              type : 'POST',
              url  : 'https://My school.ova.gov.in/index.php/home/rate_course',
              data : {course_id : course_id, review : review, starRating : starRating},
              success : function(response) {
                  location.reload();
              }
          });
      }else{
  
      }
  }
  function toggleRatingViewPackage(package_id) {
    $('#package_info_view_'+package_id).toggle();
    $('#package_rating_view_'+package_id).toggle();
    $('#edit_rating_btn_'+package_id).toggle();
    $('#cancel_rating_btn_'+package_id).toggle();
  }
  
  function publishRatingPackage(package_id) {
      var review = $('#review_of_a_package_'+package_id).val();
      var starRating = 0;
      starRating = $('#star_rating_of_package_'+package_id).val();
      if (starRating > 0) {
          $.ajax({
              type : 'POST',
              url  : 'https://My school.ova.gov.in/index.php/home/rate_package',
              data : {package_id : package_id, review : review, starRating : starRating},
              success : function(response) {
                  location.reload();
              }
          });
      }else{
  
      }
  }

        // Wait for the DOM content to be fully loaded
        document.addEventListener("DOMContentLoaded", function() {
            // Find the element by its ID
            var button = document.getElementById('myButton');

            // Check if the element exists
            if (button) {
                // Set the onclick event handler
                button.onclick = function() {
                    // Your onclick function logic here
                    console.log('Button clicked!');
                };
            } else {
                // Log an error or handle the case where the element doesn't exist
                console.error("Button with ID 'myButton' not found.");
            }
        });
   
            document.addEventListener('DOMContentLoaded', function() {
                // Your JavaScript code here
                var element = document.getElementById('yourElementId');
                if (element) {
                    element.onclick = function() {
                        // Your event handler logic here
                    };
                } else {
                    console.error("Element with ID 'yourElementId' not found.");
                }
            });
      
          
            var Comm100API=Comm100API||{};(function(t){function e(e){var a=document.createElement("script"),c=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=e+t.site_id,c.parentNode.insertBefore(a,c)}t.chat_buttons=t.chat_buttons||[],t.chat_buttons.push({code_plan:"76a1ffe8-89a5-4a9b-bad6-c36361b6b544",div_id:"comm100-button-76a1ffe8-89a5-4a9b-bad6-c36361b6b544"}),t.site_id=40000070,t.main_code_plan="76a1ffe8-89a5-4a9b-bad6-c36361b6b544",e("https://vue.comm100.com/livechat.ashx?siteId="),setTimeout(function(){t.loaded||e("https://standby.comm100vue.com/livechat.ashx?siteId=")},5e3)})(Comm100API||{})
        
            // Wait for the document to be fully loaded
            $(document).ready(function() {
                // Initialize ConveyThis
                conveythis.init({source_language_id: 703, languages: [{"id":"703","active":true},{"id":"807","active":false},{"id":"736","active":false},{"id":"713","active":false},{"id":"785","active":false}]});
        
                // Initialize nestable plugin if needed
                // Example: $(document).ready(function() {
                //     $('#nestable-container').nestable();
                // });
            });
       
        


$(document).ready(function () {
    if (localStorage.getItem("accept_cookie_academy")) {
      //localStorage.removeItem("accept_cookie_academy");
    }else{
      window.cookieconsent.initialise({
          ookie: {
            domain : "/",
            name: "cookie_consent",
          },
          palette:{
            popup:  { background: "#e8ecf7"  },
            button: { background: "#181818"},
          },
          content:{
            message: 'This website uses cookies to personalize content and analyse traffic in order to offer you a better experience.',
            href: 'https://My school.ova.gov.in/index.php/home/cookie_policy',
            target: '_blank',
          },
          elements: {
            dismiss: '<a aria-label="dismiss cookie message" onclick="cookieAccept();" tabindex="0" class="cc-btn cc-dismiss">Got it!</a>',
          }
      });
    }
  });

  function cookieAccept() {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("accept_cookie_academy", true);
      localStorage.setItem("accept_cookie_time", "02/08/2024");
      $('#cookieConsentContainer').fadeOut(1200);
    }
  }


    //bb
    document.getElementById("user-form").addEventListener("submit", function(event) {
   
    });
        $(document).ready(function () {
                // Generate captcha on page load
                generateCaptcha();
                // Handle captcha refresh button click
                $("#refresh-captcha").click(function () {
                    generateCaptcha();
                    $("#captcha-input").val("");
                });
            // Handle form submit
            $("#user-form").submit(function (event) {
                event.preventDefault();
                var email = document.getElementById('user-login-email').value;
                var password = document.getElementById('user-login-password').value;
                // Basic email validation
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Invalid email format');
                    return false;
                }
                if (password.length < 8) {
                    alert('Password should contain minimum 8 characters');
                    return false;
                }
                // At least one uppercase letter
                if (!/[A-Z]/.test(password)) {
                    alert('Password should contain at least one uppercase letter');
                    return false;
                }
                // At least one lowercase letter
                if (!/[a-z]/.test(password)) {
                    alert('Password should contain at least one lowercase letter');
                    return false;
                }
                // At least one digit
                if (!/\d/.test(password)) {
                    alert('Password should contain at least one lowercase letter');
                    return false;
                }
                // At least one special character
                if (!/[^A-Za-z\d]/.test(password)) {
                    alert('Password should contain at least one special character');
                    return false;
                }
            
                // Validate captcha
                var captchaInput = $("#captcha-input").val();
                var captchaCode = sessionStorage.getItem("captchaCode");
                if (captchaInput != captchaCode) {
                
                    alert('Invalid captcha code. Please try again.','','warning');
                    generateCaptcha();
                    $("#captcha-input").val("");
                    return;
                }
                var password = document.getElementById("user-login-password").value;
                // Hash the password using CryptoJS (SHA-512)
                var hashedPassword = CryptoJS.SHA512(password).toString();
                document.getElementById("hashed-password").value = hashedPassword; // Set the hashed password value to the hidden field
                // Clear the actual password field for security
                document.getElementById("user-login-password").value = "";
                // Optionally, you can also clear any previous error message
                document.getElementById("password-error").textContent = "";
                // Form submission continues as usual
        $('#user-form').unbind('submit').submit();
      });
      // Define the function generateCaptcha()
      function generateCaptcha() {
        // Get the canvas element with ID captcha and create an instance of its canvas rendering context
        var a = $("#captcha")[0],
            b = a.getContext("2d");
              
          // Clear the canvas
          b.clearRect(0, 0, a.width, a.height);
        
          // Define the string of characters that can be included in the captcha
          var f = "ABCDEFGHJKMNOPQRSTUVWXYZabcdefghjkmnopqrstuvwxyz023456789",
              e = "",
              g = -20,
              h = 20,
              i = h - g,
              j = 20,
              k = 30,
              l = k - j;
        
          // Generate each character of the captcha
          for (var m = 0; m < 6; m++) {
            // Select random letter from the pool to be part of the captcha
            var n = f.charAt(Math.floor(Math.random() * f.length));
            e += n;
            
            // Set up the text formatting
            b.font = j + Math.random() * l + "px Arial";
            b.textAlign = "center";
            b.textBaseline = "middle";
            
            // Set the color of the text
            b.fillStyle = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        
            // Add the character to the canvas
            var o = g + Math.random() * i;
            b.translate(20 + m * 30, a.height / 2);
            b.rotate(o * Math.PI / 180);
            b.fillText(n, 0, 0);
            b.rotate(-1 * o * Math.PI / 180);
            b.translate(-(20 + m * 30), -1 * a.height / 2);
          }
        
          // Set the captcha code in session storage
          sessionStorage.setItem("captchaCode", e);
      }
    })

     
  function toggoleForm(form_type) {
    if (form_type === 'admin') {
      $('#admin_form').show();
      $('#user_form').hide();
    }else if (form_type === 'user') {
      $('#admin_form').hide();
      $('#user_form').show();
    }
  }

    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
        console.log('User signed out.');
        });
    }

    function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
        console.log('User signed out.');
        });
    }


jQuery(document).ready(function(){
	function onSignIn(googleUser) {
		var profile = googleUser.getBasicProfile();
		console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
		console.log('Name: ' + profile.getName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
	$("#otp_verify").click(function(){
		var data = $("#register_form").serialize();
	    $.ajax({
            type:'POST',
            url:'https://My school.ova.gov.in/Login/register',
            data:data,
            cache:false,
            success:function(data){
				if(data==201){
					alert("Invalid OTP. Please try again !");
				}
				else{
					location.reload();
				}
            },
            error:function(jqXHR , reason, ex){
				console.log(jqXHR.responseText);
			}
        });
    });
	$("#signup").click(function(){
		var first_name=$("#first_name").val();
		var last_name=$("#last_name").val();
		var type=$("#type").val();
		var registration_mobile=$(".registration_mobile").val();
        var country=$("#country").val();
		var state=$("#state").val();
	
		var registration_email=$(".registration_email").val();
		var registration_password=$(".registration_password").val();
		if(first_name !="" && last_name!="" && type!="" && registration_mobile!="" && state!=""
	 && registration_email!="" && registration_password !=""){
			$.ajax({
                type:'POST',
                url:'https://My school.ova.gov.in/index.php/home/get_otp',
                data:{
                    mobile:registration_mobile
                },
                cache:false,
                success:function(data){
					//alert(data);
					$(".register-form").show();
					$(".otp-form").show();
					$(".login-form").hide();
					$(".register-section").hide();
                }
            });
		}else{
		    alert("Please fill all the field !");
		}
	});
})


    document.getElementById("user-form").addEventListener("submit", function(event) {
   
    });
        $(document).ready(function () {
                // Generate captcha on page load
                generateCaptcha();
                // Handle captcha refresh button click
                $("#refresh-captcha").click(function () {
                    generateCaptcha();
                    $("#captcha-input").val("");
                });
            // Handle form submit
            $("#user-form").submit(function (event) {
                event.preventDefault();
                var email = document.getElementById('user-login-email').value;
                var password = document.getElementById('user-login-password').value;
                // Basic email validation
                var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('Invalid email format');
                    return false;
                }
                if (password.length < 8) {
                    alert('Password should contain minimum 8 characters');
                    return false;
                }
                // At least one uppercase letter
                if (!/[A-Z]/.test(password)) {
                    alert('Password should contain at least one uppercase letter');
                    return false;
                }
                // At least one lowercase letter
                if (!/[a-z]/.test(password)) {
                    alert('Password should contain at least one lowercase letter');
                    return false;
                }
                // At least one digit
                if (!/\d/.test(password)) {
                    alert('Password should contain at least one lowercase letter');
                    return false;
                }
                // At least one special character
                if (!/[^A-Za-z\d]/.test(password)) {
                    alert('Password should contain at least one special character');
                    return false;
                }
            
                // Validate captcha
                var captchaInput = $("#captcha-input").val();
                var captchaCode = sessionStorage.getItem("captchaCode");
                if (captchaInput != captchaCode) {
                
                    alert('Invalid captcha code. Please try again.','','warning');
                    generateCaptcha();
                    $("#captcha-input").val("");
                    return;
                }
                var password = document.getElementById("user-login-password").value;
                // Hash the password using CryptoJS (SHA-512)
                var hashedPassword = CryptoJS.SHA512(password).toString();
                document.getElementById("hashed-password").value = hashedPassword; // Set the hashed password value to the hidden field
                // Clear the actual password field for security
                document.getElementById("user-login-password").value = "";
                // Optionally, you can also clear any previous error message
                document.getElementById("password-error").textContent = "";
                // Form submission continues as usual
        $('#user-form').unbind('submit').submit();
      });
      // Define the function generateCaptcha()
      function generateCaptcha() {
        // Get the canvas element with ID captcha and create an instance of its canvas rendering context
        var a = $("#captcha")[0],
            b = a.getContext("2d");
              
          // Clear the canvas
          b.clearRect(0, 0, a.width, a.height);
        
          // Define the string of characters that can be included in the captcha
          var f = "ABCDEFGHJKMNOPQRSTUVWXYZabcdefghjkmnopqrstuvwxyz023456789",
              e = "",
              g = -20,
              h = 20,
              i = h - g,
              j = 20,
              k = 30,
              l = k - j;
        
          // Generate each character of the captcha
          for (var m = 0; m < 6; m++) {
            // Select random letter from the pool to be part of the captcha
            var n = f.charAt(Math.floor(Math.random() * f.length));
            e += n;
            
            // Set up the text formatting
            b.font = j + Math.random() * l + "px Arial";
            b.textAlign = "center";
            b.textBaseline = "middle";
            
            // Set the color of the text
            b.fillStyle = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        
            // Add the character to the canvas
            var o = g + Math.random() * i;
            b.translate(20 + m * 30, a.height / 2);
            b.rotate(o * Math.PI / 180);
            b.fillText(n, 0, 0);
            b.rotate(-1 * o * Math.PI / 180);
            b.translate(-(20 + m * 30), -1 * a.height / 2);
          }
        
          // Set the captcha code in session storage
          sessionStorage.setItem("captchaCode", e);
      }
      
      
    })
