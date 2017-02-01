@echo off

:start
set /p blog="Are you making a blog post?(y/n): "

IF /I "%blog%" == "y" (
  GOTO makeBlogPost
)

set /p item="Are you making a new item?(y/n): "
IF /I "%item%" == "y" (
  GOTO makeNewItem
)

goto end

:makeBlogPost
set /p title="Enter Title: "
set /p body="Input the body: "
set /p date="Input the date: "

@echo -^> Making file blog%title%.txt
echo. 2>AddToBlogHTML/blog%title%.txt
@echo -^> Done.
@echo -^> Making file index%title%.txt
echo. 2>AddToIndexHTML/index%title%.txt
@echo -^> Done.

@echo -^> Populating file blog%title%.txt
(
@echo ^<div class="col-sm-6 move"^>
@echo   ^<div class="panel panel-primary"^>
@echo     ^<div class="panel-heading"^>
@echo       ^<h3^>%title%^</h3^>
@echo       ^<small^>%date%^</small^>
@echo     ^</div^>
@echo     ^<div class="panel-body"^>
@echo       ^<p^>%body%^</p^>
@echo     ^</div^>
@echo   ^</div^>
@echo ^</div^>
) > AddToBlogHTML/blog%title%.txt
@echo -^> Done.

@echo -^> Populating file index%title%.txt
(
@echo ^<div class="intro card"^>
@echo     ^<div class="card-head"^>
@echo         ^<h4^>%title%^</h4^>
@echo     ^</div^>
@echo     ^<div class="card-body"^>
@echo         ^<p^>
@echo             %body%
@echo         ^</p^>
@echo     ^</div^>
@echo ^</div^>
) > AddToIndexHTML/index%title%.txt
@echo -^> Done.


GOTO end

:makeNewItem

set /p itemName="What is the items name?: "
set /p pageName="What is the page name?(exclude .html, no spaces): "
set /p types="what are they filter types? (separate by spaces): "
set /p imageName="What is the image name? (and extension): "
set /p rentalType="What is they rental type?: "
set /p rentalDuration="What is the rental duration?: "
set /p rentalEligability="Who is eligable to rent this?: "
set /p locations="Where can this item be rented from?: "
set /p description="What is a description of this item?: "
set /p cost="What is the cost of this item?: "

@echo -^> Making file itemGrid%pageName%.txt
echo. 2>AddToTechLendHTML/itemGrid%pageName%.txt
@echo -^> Done.
@echo -^> Making file itemList%pageName%.txt
echo. 2>AddToTechLendHTML/itemList%pageName%.txt
@echo -^> Done.
@echo -^> Making file %pageName%.html
echo. 2>%pageName%.html
@echo -^> Done.
@echo -^> Making file js%pageName%.txt
echo. 2>AddToTechLendJS/js%pageName%.txt
@echo -^> Done.

@echo -^> Populating file itemGrid%pageName%.txt
(
  @echo ^<div class = "Item filter %types% %pageName%"^>
  @echo ^<img src="Images\products\%imageName%" class="img-responsive" /^>
  @echo ^<div class = "item-name"^>%itemName%^</div^>
  @echo ^<ul class="item-info"^>
  @echo ^<li^>^<a href="#" data-toggle="tooltip" data-placement="right" title="Rental Type"^>^<span class="glyphicon glyphicon-info-sign"^>^</span^>^</a^>%rentalType%^</li^>
  @echo ^<li^>^<a href="#" data-toggle="tooltip" data-placement="right" title="Rental Duration"^>^<span class="glyphicon glyphicon-info-sign"^>^</span^>^</a^>%rentalDuration%^</li^>
  @echo ^<li^>^<a href="#" data-toggle="tooltip" data-placement="right" title="Rental Eligability"^>^<span class="glyphicon glyphicon-info-sign"^>^</span^>^</a^>%rentalEligability%^</li^>
  @echo ^<li^>^<a href="#" data-toggle="tooltip" data-placement="right" title="Locations"^>^<span class="glyphicon glyphicon-info-sign"^>^</span^>^</a^>%locations%^</li^>
  @echo ^</ul^>
  @echo ^</div^>
) > AddToTechLendHTML/itemGrid%pageName%.txt
@echo -^> Done.
@echo -^> Populating file itemList%pageName%.txt
(
@echo ^<tr class="filter %types% %pageName%"^>
@echo     ^<td^>^<img src="Images\products\%imageName%" class="img-responsive" /^> %itemName%^</td^>
@echo     ^<td^>%rentalDuration%^</td^>
@echo     ^<td^> %rentalEligability% ^</td^>
@echo     ^<td^>%locations%^</td^>
@echo ^</tr^>
) > AddToTechLendHTML/itemList%pageName%.txt
@echo -^> Done.
@echo -^> Populating file %pageName%.html
(
@echo ^<html^>

@echo ^<head^>
@echo     ^<title^>Technology Commons^</title^>
@echo     ^<meta charset="UTF-8"^>
@echo     ^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>
@echo     ^<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"^>^</script^>
@echo     ^<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"^>^</script^>
@echo     ^<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"^>
@echo     ^<link rel="stylesheet" href="..\css\style.css"^>
@echo     ^<link rel="icon" type="image/png" href="http://imgur.com/z9p4kx5.png"^>

@echo     ^<script src="../JS/scripts.js"^>^</script^>
@echo ^</head^>

@echo ^<body^>
@echo     ^<a href="javascript:" id="return-to-top"^>^<span class="glyphicon glyphicon-circle-arrow-up" style="z-index:2000"^>^</span^>^</a^>
@echo     ^<div class="nav jumbotron"^>
@echo         ^<div class="Title"^>
@echo             ^<a href="../index.html" class="head"^>^<h2^>Technology Commons^</h2^>^</a^>
@echo         ^</div^>
@echo         ^<div class="navigation"^>

@echo             ^<div class="nav-Item"^>
@echo                 ^<a href="../blog.html" class="head"^>^<h3^>^<span class="glyphicon glyphicon-book"^>^</span^> Blog^</h3^>^</a^>
@echo             ^</div^>

@echo             ^<div class="nav-Item"^>
@echo                 ^<div class="dropcontainer"^>
@echo                     ^<div class="dropdown"^>
@echo                         ^<button class="btn btn-ucf1 dropdown-toggle" type="button" data-toggle="dropdown"^>^<h3^>^<span class="glyphicon glyphicon-off"^>^</span^> Student Services^</h3^>
@echo     ^<span class="caret"^>^</span^>^</button^>
@echo                         ^<ul class="dropdown-menu"^>
@echo                             ^<li^>^<a tabindex="-1" href="../computerlabs.html"^>Computer Labs^</a^>^</li^>
@echo                             ^<div class="dropdown-divider"^>^</div^>
@echo                             ^<li^>^<a tabindex="-1" href="https://ucf.service-now.com/ucfit"^>UCF IT Support Center^</a^>^</li^>
@echo                             ^<div class="dropdown-divider"^>^</div^>
@echo                             ^<li class="dropdown-submenu"^>
@echo                                 ^<a class="test" tabindex="-1" href="../ssd.html"^>Student Support Desk ^<span class="caret"^>^</span^>^</a^>
@echo                                 ^<ul class="dropdown-menu"^>

@echo                                     ^<li^>^<a tabindex="-1" href="../repairs"^>Support ^& Repair^</a^>^</li^>
@echo                                     ^<li^>^<a tabindex="-1" href="../techlend.html"^>Technology Checkout^</a^>^</li^>
@echo                                     ^<li^>^<a tabindex="-1" href="../printing.html"^>Printing^</a^>^</li^>
@echo                                 ^</ul^>
@echo                             ^</li^>
@echo                         ^</ul^>
@echo                     ^</div^>
@echo                 ^</div^>
@echo             ^</div^>

@echo             ^<div class="nav-Item"^>
@echo                 ^<a href="../index.html" class="head"^>^<h3^>^<span class="glyphicon glyphicon-home"^>^</span^> Home^</h3^>^</a^>
@echo             ^</div^>
@echo         ^</div^>
@echo     ^</div^>

@echo     ^<div class="header-image" style="margin-top: -2.2em;"^>
@echo         ^<center^>
@echo             ^<img src="..\Images\Classroom1440.jpg" /^>
@echo         ^</center^>
@echo     ^</div^>

@echo     ^<div class="container" id="body-div"^>

@echo         ^<div class="body-head-gaurd"^>
@echo             ^<div class="body-head"^>
@echo                 ^<h2^>%itemName%^</h2^>
@echo             ^</div^>
@echo         ^</div^>

@echo         ^<div class="col-lg-3"^>
@echo             ^<div class="sidebar card"^>
@echo                 ^<a href="..\techlend.html" style="color: #0269C2"^>^<h3 style="font-size: 24px;"^>^<b^>^&larr; ^&nbsp; Back To All Technology^</b^>^</h3^>^</a^>
@echo             ^</div^>
@echo             ^<div class="card"^>
@echo                 ^<div class="card-head"^>
@echo                     ^<h3^>Quick Info^</h3^>
@echo                 ^</div^>
@echo                 ^<br /^>
@echo                 ^<ul class="item-info"^>
@echo                     ^<li^>^<span class="glyphicon glyphicon-info-sign"^>^</span^> %rentalType%^</li^>
@echo                     ^<li^>^<span class="glyphicon glyphicon-hourglass"^>^</span^> %rentalDuration%^</li^>
@echo                     ^<li^>^<span class="glyphicon glyphicon-user"^>^</span^> %rentalEligability%^</li^>
@echo                     ^<li^>^<span class="glyphicon glyphicon-home"^>^</span^> %locations%^</li^>
@echo                     ^<li^>^<span class="glyphicon glyphicon-usd"^>^</span^> %cost%^</li^>
@echo                 ^</ul^>
@echo             ^</div^>
@echo             ^</div^>

@echo         ^<div class="col-lg-9"^>
@echo             ^<div class="card"^>
@echo                 ^<div class="card-head"^>
@echo                     ^<img src="..\Images\products\%imageName%" class="img-responsive item-img"^>
@echo                     ^<div class="item-title"^>%itemName%
@echo                     ^</div^>
@echo                 ^</div^>
@echo                 ^<div class="card-body"^>
@echo                     ^<p class="tech-commons-para"^>%description%^</p^>
@echo                 ^</div^>
@echo             ^</div^>
@echo         ^</div^>

@echo     ^</div^>

@echo     ^<footer class="footer"^>

@echo         ^<div class="container footer-container"^>
@echo             ^<div class="row"^>
@echo                 ^<div class="col-lg-4 footer-help"^>
@echo                     ^<div class="footer-help-head"^>
@echo                         ^<a href="#"^>^<h3^>Support Links^</h3^>^</a^>
@echo                     ^</div^>
@echo                     ^<div class="background-help"^>^</div^>
@echo                     ^<div class="footer-help-content"^>
@echo                         ^<ul class="content"^>
@echo                             ^<li^>^<a href="https://extranet.cst.ucf.edu/PWSelfReset/pages/NidCheck.aspx"^>NID Reset^</a^>^</li^>
@echo                             ^<li^>^<a href="http://www.cst.ucf.edu/wp-content/uploads/Download-Microsoft-Office.pdf"^>Download MS Office^</a^>^</li^>
@echo                             ^<li^>^<a href="http://www.cst.ucf.edu/about/telecommunications/network-services/wireless-for-students-faculty-and-staff/"^>Connect to UCF Wireless^</a^>^</li^>
@echo                             ^<li^>^<a href="http://doodle.com/poll/zp5wqtkxrew77n67"^>Signup for Adobe Classes^</a^>^</li^>
@echo                             ^<li^>^<a href="reservation.html"^>Reserve a Room^</a^>^</li^>
@echo                         ^</ul^>
@echo                     ^</div^>
@echo                 ^</div^>
@echo                 ^<div class="col-lg-4 footer-tech"^>
@echo                     ^<div class="footer-tech-head"^>
@echo                         ^<a href="#"^>^<h3^>Technology Commons^</h3^>^</a^>
@echo                     ^</div^>
@echo                     ^<div class="background-tech"^>^</div^>
@echo                     ^<div class="footer-tech-content"^>
@echo                         ^<ul class="content"^>
@echo                             ^<li^>^<a href="ssd.html"^>Student Support Desk^</a^>^</li^>
@echo                             ^<li^>^<a href="techII.html"^>Tech Commons II^</a^>^</li^>
@echo                             ^<li^>^<a href="techI.html"^>Tech Commons I^</a^>^</li^>
@echo                             ^<li^>^<a href="cbI.html"^>Classroom I^</a^>^</li^>
@echo                             ^<li^>^<a href="http://cstore.ucf.edu/"^>Technology Product Center^</a^>^</li^>
@echo                         ^</ul^>
@echo                     ^</div^>
@echo                 ^</div^>

@echo                 ^<div class="col-lg-4 footer-cst"^>
@echo                     ^<div class="footer-cst-head"^>
@echo                         ^<a href="#"^>^<h3^>CS ^& T^</h3^>^</a^>
@echo                     ^</div^>
@echo                     ^<div class="background-cst"^>^</div^>
@echo                     ^<div class="footer-cst-content"^>
@echo                         ^<ul class="content"^>
@echo                             ^<li^>^<a href="http://www.cst.ucf.edu/service-desk/about-the-service-desk/"^>Service Desk^</a^>^</li^>
@echo                             ^<li^>^<a href="http://www.cst.ucf.edu/service-desk/service-desk-help-for-students/"^>Student Help^</a^>^</li^>
@echo                             ^<li^>^<a href="http://www.cst.ucf.edu/service-desk/service-desk-help-for-facultystaff/"^>Faculty/Staff Help^</a^>^</li^>
@echo                             ^<li^>^<a href="http://www.cst.ucf.edu/submit-a-ticket/"^>Submit a Ticket^</a^>^</li^>
@echo                         ^</ul^>
@echo                     ^</div^>
@echo                 ^</div^>
@echo             ^</div^>

@echo             ^<center^>

@echo                 ^<div class="social"^>
@echo                     ^<span class="social-img"^>^<a href="https://www.facebook.com/UCFTechCommons"^>^<img src="..\Images\Social\facebook.png" class = "img-fluid social-footer"/^>^</a^>^</span^>
@echo                     ^<span class="social-img"^>^<a href="https://twitter.com/ucftechcommons"^>^<img src="..\Images\Social\twitter.png" class = "img-fluid social-footer"/^>^</a^>^</span^>
@echo                     ^<span class="social-img"^>^<a href="mailto:ssd@ucf.edu"^>^<span class="glyphicon glyphicon-envelope"^>^</span^>^</a^>
@echo                     ^</span^>
@echo                     ^<span class="social-img" id="hiring"^>^<a href="work.html"^>^<span class = "glyphicon glyphicon-user"^>^</span^>^</a^>
@echo                     ^</span^>
@echo                 ^</div^>

@echo                 ^<div class="copy"^>
@echo                     techcommons@ucf.edu ^&bull; ^(407^) 823-HELP ^&bull; Copyright Tech Commons 2016
@echo                 ^</div^>
@echo             ^</center^>
@echo         ^</div^>

@echo     ^</footer^>

@echo ^</body^>

@echo ^</html^>
) > %pageName%.html
@echo -^> Done.
@echo -^> Populating file js%pageName%.txt
(
@echo $^(".%pageName%"^).click^(function^(^) {
@echo     window.location.href = "productPages\\%pageName%.html";
@echo }^);
) > AddToTechLendJS/js%pageName%.txt
@echo -^> Done.

goto end

:end
set /p again="Start over?(y/n): "
IF /I "%again%" == "y" (
  goto start
)
