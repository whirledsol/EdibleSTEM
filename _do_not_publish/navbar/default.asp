<!DOCTYPE html>
<html lang="en">
	<head>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">

		<script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		
		<style>
			.navbar-brand{
				font-size:4em;
				visibility:hidden;
				display:block;
			}
			
			.navbar-brand.placeholder{
				overflow-x:visible;
			}
			.navbar-brand.overflow{
				position:absolute;
				top:10px;
				left:10px;
				visibility:visible;
				z-index:9000;
			}
			.navbar-brand.overflow img{
				position:absolute;
				width:100%;
				top:0;
				left:0;
				margin-top:-40px; /* TODO */
				z-index:-1;
			}
			.navbar{
				position:fixed !important;
				width:100%;
				border-radius:0px !important;
				
				/* TODO */
				/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fefefe+26,d8ffd6+100 */
				background: #fefefe; /* Old browsers */
				background: -moz-linear-gradient(-45deg,  #fefefe 26%, #d8ffd6 100%); /* FF3.6+ */
				background: -webkit-gradient(linear, left top, right bottom, color-stop(26%,#fefefe), color-stop(100%,#d8ffd6)); /* Chrome,Safari4+ */
				background: -webkit-linear-gradient(-45deg,  #fefefe 26%,#d8ffd6 100%); /* Chrome10+,Safari5.1+ */
				background: -o-linear-gradient(-45deg,  #fefefe 26%,#d8ffd6 100%); /* Opera 11.10+ */
				background: -ms-linear-gradient(-45deg,  #fefefe 26%,#d8ffd6 100%); /* IE10+ */
				background: linear-gradient(135deg,  #fefefe 26%,#d8ffd6 100%); /* W3C */
				filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefefe', endColorstr='#d8ffd6',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
-webkit-box-shadow: 0px 10px 14px -4px rgba(0,0,0,0.24);
-moz-box-shadow: 0px 10px 14px -4px rgba(0,0,0,0.24);
box-shadow: 0px 10px 14px -4px rgba(0,0,0,0.24);
			}
			/* TODO */
			.pageContent{
				padding-top:52px;
			}
			
			body{
				font-size:14px;
			}
			@media (max-width:768px){
				body{
				font-size:12px;
				}
				.navbar-brand.overflow{
					visibility:hidden;
				}
				.navbar-brand.placeholder{
					visibility:visible;
				}
			}
		</style>
		
		
	</head>
	<body>
		<nav class="navbar navbar-default">
		  <div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
			  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			  </button>
			  <!-- /* TODO */ -->
			  <a class="navbar-brand overflow" href="#">VIIAD
			  <!-- /* TODO */ -->
			  <img src="http://previews.123rf.com/images/enjoylife25/enjoylife250803/enjoylife25080300024/2642406-fresh-basil-leaf-isolated-on-a-white-background-Stock-Photo-tulsi.jpg"/></a>
			  <a class="navbar-brand placeholder" href="#">VIIAD</a>
			</div>

			<!-- Collect the nav links, forms, and other content for toggling -->
			<div class="collapse navbar-collapse" id="navbar-collapsed-content">
			  <ul class="nav navbar-nav">
				<li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
				<li><a href="#">Link</a></li>
				<li class="dropdown">
				  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
				  <ul class="dropdown-menu">
					<li><a href="#">Action</a></li>
					<li><a href="#">Another action</a></li>
					<li><a href="#">Something else here</a></li>
					<li role="separator" class="divider"></li>
					<li><a href="#">Separated link</a></li>
					<li role="separator" class="divider"></li>
					<li><a href="#">One more separated link</a></li>
				  </ul>
				</li>
			  </ul>
			  <form class="navbar-form navbar-left" role="search">
				<div class="form-group">
				  <input type="text" class="form-control" placeholder="Search">
				</div>
				<button type="submit" class="btn btn-default">Submit</button>
			  </form>
			  <ul class="nav navbar-nav navbar-right">
				<li><a href="#">Link</a></li>
				<li class="dropdown">
				  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
				  <ul class="dropdown-menu">
					<li><a href="#">Action</a></li>
					<li><a href="#">Another action</a></li>
					<li><a href="#">Something else here</a></li>
					<li role="separator" class="divider"></li>
					<li><a href="#">Separated link</a></li>
				  </ul>
				</li>
			  </ul>
			</div><!-- /.navbar-collapse -->
		  </div><!-- /.container-fluid -->
		</nav>
		
		<div class="pageContent">
		<div class="container">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet mattis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur ipsum est, eu pharetra erat gravida eget. Donec suscipit porttitor tellus, sit amet egestas metus consectetur in. Duis gravida felis sed ipsum iaculis, sed varius dolor dapibus. Sed gravida lacus et sollicitudin tincidunt. Curabitur id dignissim erat.

		Vivamus malesuada, velit id posuere interdum, risus libero commodo urna, non molestie nulla nisi a orci. Maecenas dapibus justo eget auctor commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam luctus purus eget massa auctor auctor. Proin ut facilisis neque, et faucibus nisi. Quisque at nibh sit amet ante pretium blandit in sed nibh. Proin sit amet lacus in nulla venenatis fermentum. Vivamus dignissim vitae arcu quis vulputate. Nunc ut diam eget neque auctor porttitor non eget sapien. Integer in pharetra urna. Proin in velit ac nulla rutrum euismod ut id risus.

		Praesent sit amet vehicula felis. Praesent maximus erat augue, eu condimentum tortor consectetur sed. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu malesuada nibh, a mollis felis. Mauris lobortis quis purus et laoreet. Vivamus vel metus velit. Integer pulvinar quis odio ac condimentum. Praesent facilisis neque auctor malesuada accumsan.

		Mauris sed commodo quam, in volutpat felis. Nullam mollis, nulla vel scelerisque dignissim, mi felis porttitor turpis, nec semper est nunc in odio. Aenean mi eros, aliquam ac lobortis ut, sodales at justo. Proin porta pulvinar turpis, cursus tincidunt ipsum lacinia at. Mauris ut nulla ut erat tincidunt porttitor a nec felis. Pellentesque varius tempor mi. Pellentesque quis accumsan leo. Aliquam auctor, augue bibendum facilisis congue, lacus tortor ullamcorper sapien, in viverra enim diam sed augue. Nunc feugiat risus id nunc condimentum, eu accumsan mauris pretium.

		Nullam aliquet metus eu congue cursus. Phasellus fermentum id nunc sed malesuada. Integer vitae vestibulum augue. Proin luctus ligula nec est congue, porttitor luctus enim condimentum. Pellentesque viverra lacus vel turpis euismod iaculis. Vestibulum nisi nunc, condimentum ac facilisis et, facilisis vel odio. Mauris sed lectus fermentum dolor placerat vehicula vel id enim. Mauris bibendum eros nec purus tincidunt posuere. Aenean arcu est, tincidunt sit amet mi ut, laoreet feugiat ligula.
		
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet mattis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur ipsum est, eu pharetra erat gravida eget. Donec suscipit porttitor tellus, sit amet egestas metus consectetur in. Duis gravida felis sed ipsum iaculis, sed varius dolor dapibus. Sed gravida lacus et sollicitudin tincidunt. Curabitur id dignissim erat.

		Vivamus malesuada, velit id posuere interdum, risus libero commodo urna, non molestie nulla nisi a orci. Maecenas dapibus justo eget auctor commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam luctus purus eget massa auctor auctor. Proin ut facilisis neque, et faucibus nisi. Quisque at nibh sit amet ante pretium blandit in sed nibh. Proin sit amet lacus in nulla venenatis fermentum. Vivamus dignissim vitae arcu quis vulputate. Nunc ut diam eget neque auctor porttitor non eget sapien. Integer in pharetra urna. Proin in velit ac nulla rutrum euismod ut id risus.

		Praesent sit amet vehicula felis. Praesent maximus erat augue, eu condimentum tortor consectetur sed. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu malesuada nibh, a mollis felis. Mauris lobortis quis purus et laoreet. Vivamus vel metus velit. Integer pulvinar quis odio ac condimentum. Praesent facilisis neque auctor malesuada accumsan.

		Mauris sed commodo quam, in volutpat felis. Nullam mollis, nulla vel scelerisque dignissim, mi felis porttitor turpis, nec semper est nunc in odio. Aenean mi eros, aliquam ac lobortis ut, sodales at justo. Proin porta pulvinar turpis, cursus tincidunt ipsum lacinia at. Mauris ut nulla ut erat tincidunt porttitor a nec felis. Pellentesque varius tempor mi. Pellentesque quis accumsan leo. Aliquam auctor, augue bibendum facilisis congue, lacus tortor ullamcorper sapien, in viverra enim diam sed augue. Nunc feugiat risus id nunc condimentum, eu accumsan mauris pretium.

		Nullam aliquet metus eu congue cursus. Phasellus fermentum id nunc sed malesuada. Integer vitae vestibulum augue. Proin luctus ligula nec est congue, porttitor luctus enim condimentum. Pellentesque viverra lacus vel turpis euismod iaculis. Vestibulum nisi nunc, condimentum ac facilisis et, facilisis vel odio. Mauris sed lectus fermentum dolor placerat vehicula vel id enim. Mauris bibendum eros nec purus tincidunt posuere. Aenean arcu est, tincidunt sit amet mi ut, laoreet feugiat ligula.	
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet mattis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur ipsum est, eu pharetra erat gravida eget. Donec suscipit porttitor tellus, sit amet egestas metus consectetur in. Duis gravida felis sed ipsum iaculis, sed varius dolor dapibus. Sed gravida lacus et sollicitudin tincidunt. Curabitur id dignissim erat.

		Vivamus malesuada, velit id posuere interdum, risus libero commodo urna, non molestie nulla nisi a orci. Maecenas dapibus justo eget auctor commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam luctus purus eget massa auctor auctor. Proin ut facilisis neque, et faucibus nisi. Quisque at nibh sit amet ante pretium blandit in sed nibh. Proin sit amet lacus in nulla venenatis fermentum. Vivamus dignissim vitae arcu quis vulputate. Nunc ut diam eget neque auctor porttitor non eget sapien. Integer in pharetra urna. Proin in velit ac nulla rutrum euismod ut id risus.

		Praesent sit amet vehicula felis. Praesent maximus erat augue, eu condimentum tortor consectetur sed. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu malesuada nibh, a mollis felis. Mauris lobortis quis purus et laoreet. Vivamus vel metus velit. Integer pulvinar quis odio ac condimentum. Praesent facilisis neque auctor malesuada accumsan.

		Mauris sed commodo quam, in volutpat felis. Nullam mollis, nulla vel scelerisque dignissim, mi felis porttitor turpis, nec semper est nunc in odio. Aenean mi eros, aliquam ac lobortis ut, sodales at justo. Proin porta pulvinar turpis, cursus tincidunt ipsum lacinia at. Mauris ut nulla ut erat tincidunt porttitor a nec felis. Pellentesque varius tempor mi. Pellentesque quis accumsan leo. Aliquam auctor, augue bibendum facilisis congue, lacus tortor ullamcorper sapien, in viverra enim diam sed augue. Nunc feugiat risus id nunc condimentum, eu accumsan mauris pretium.

		Nullam aliquet metus eu congue cursus. Phasellus fermentum id nunc sed malesuada. Integer vitae vestibulum augue. Proin luctus ligula nec est congue, porttitor luctus enim condimentum. Pellentesque viverra lacus vel turpis euismod iaculis. Vestibulum nisi nunc, condimentum ac facilisis et, facilisis vel odio. Mauris sed lectus fermentum dolor placerat vehicula vel id enim. Mauris bibendum eros nec purus tincidunt posuere. Aenean arcu est, tincidunt sit amet mi ut, laoreet feugiat ligula.	
		</div>
		</div>
		
		
		
	</body>
</html>
