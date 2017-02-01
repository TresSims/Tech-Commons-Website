@echo off

set /p title="Enter Title: "
set /p body="Input the body: "
set /p date="Input the date: "

(
@echo ^<div class="col-sm-6 move"^>
@echo ^<div class="panel panel-primary"^>
@echo ^<div class="panel-heading"^>
@echo ^<h3^>%title%^</h3^>
@echo ^<small^>%date%^</small^>
@echo ^</div^>
@echo ^<div class="panel-body"^>
@echo ^<p^>%body%^</p^>
@echo ^</div^>
@echo ^</div^>
@echo ^</div^>
) > blog.txt
