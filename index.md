<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="/style.css" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
    <title>MBJ Holdings, LLC</title>
  </head>
  <body>
    <div class="container">
      <div id="header">
        <img id="logo" src="/img/main_img.jpg" alt="">
    </div>
      <div class="nav" id="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#ourwork">Our Work</a>
        <a href="#contact">Contact</a>
      </div>
      <div class="home" id="home">
        <div id="slideshow">
        <img class="pictures" src="/img/img_2.jpg" />
        <img class="pictures" src="/img/img_3.jpg" />
        <img class="pictures" src="/img/img_4.jpg" />
      
<button id="left" class="w3-button w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
<button id="right" class="w3-button w3-display-right" onclick="plusDivs(+1)">&#10095;</button>
</div>
      </div>
      <div class="about" id="about">
        <h2>Full Service Home Resoration</h2><p>MBJ Holdings, LLC was established in March 2006 as a woman-owned and minority-owned property preservation and eviction services company. Our purpose is to help improve the community by providing the highest quality of construction and REO field maintenance services at fair market competitive prices while maintaining professionalism and integrity for our clients to the relationships with our subcontractors. We pride ourselves in our response time, accessibility, and communication backed by grade A work. </p>
      </div>
      <div class="ourwork" id="ourwork"></div>
      <div class="contact" id="contact">
        <h2>Contact Us!</h2>
        <div id="container-2">
          <form action="action_page.php">
        
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name..">
        
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name..">

        
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
        
            <input type="submit" value="Submit">
        
          </form>
        </div>
      </div>
    </div>

    <script src="/app.js"></script>
  </body>
</html>
