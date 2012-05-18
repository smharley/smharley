<!doctype html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"><![endif]-->
<!--[if IE 7]>   <html class="no-js lt-ie9 lt-ie8" lang="en"><![endif]-->
<!--[if IE 8]>   <html class="no-js lt-ie9" lang="en"><![endif]-->
<!--[if gt IE 8]><!--><html lang="en"><!--<![endif]-->
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<title>Steven Harley</title>
	<meta name="description" content="Contact information for Steven Harley" />
	<meta name="author" content="Steven Harley">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<link rel="shortcut icon" href="/favicon.ico">
	<link rel="stylesheet" href="<?php echo '//static.'.$_SERVER['SERVER_NAME'].$D; ?>/styles/css/base.css">
	<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript" src="<?php echo '//static.'.$_SERVER['SERVER_NAME'].$D; ?>/scripts/js/smharley.js">
	</script>
	<!--[if lt IE 9]><script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<style type="text/css">
	</style>
</head>
<body>
	<header>
		<h1>Steven Harley: Web Developer</h1>
	</header>
	<div class="wrap">
		<figure>
			<img src="<?php echo '//static.'.$_SERVER['SERVER_NAME'].$D; ?>/images/steven-playing-jenga.png" alt="Steven playing jenga" />
		</figure>
		<hgroup>
			<h2>Hi, I’m a front-end developer.</h2>
			<h3>I like coding HTML/CSS/JS/PHP & am an aspiring web designer.</h3> 
		</hgroup>
	</div>
	<div class="wrap content">
		<div class="dribbble">
			<h2>Stuff I&rsquo;m working on:</h2>
			<ol class="dbbb">
				<?php
				 
					require 'dribbble.php';
					$dribbble = new Dribbble();
					$perpage='8';
											
					try {
					    $my_shots = $dribbble->get_player_shots('smharley', 1, $perpage);
					    foreach ($my_shots->shots as $shot) {
					    
					    	$date = $shot->created_at;
					    	$datepieces = explode(" ", $date);
					    	
					    	date_default_timezone_set('America/Halifax');
							echo	
						'<li>
					<a href="' . $shot->url . '" onclick="_gaq.push([\'_trackEvent\', \'Links\', \'Social\', \'Dribbble\']);"><img src="' . $shot->image_url . '" alt="' . $shot->title . '" /></a>
					<a href="' . $shot->url . '" class="over " onclick="_gaq.push([\'_trackEvent\', \'Links\', \'Social\', \'Dribbble\']);">	
						<strong>' . $shot->title . '</strong>'
/* 							<em>' . time_ago($datepieces[0],$datepieces[1]) . '</em> */
					. '</a>
				</li>
				';
					    }
					}
					catch (DribbbleException $e) {
					    echo 'Error: ' . $e->getMessage();
					}
				?>
			
			</ol>
			<a href="//dribbble.com/smharley" class="all">View all →</a>
		</div>
		<h2>My contact info:</h2>
		<ul class="contact">
			<li>
				<a href="//twitter.com/smharley/" class="twitter" onclick="_gaq.push(['_trackEvent', 'Links', 'Social', 'Twitter']);">
					Twitter
				</a>
			</li>
			<li>
				<a href="//dribbble.com/smharley" class="dribbble" onclick="_gaq.push(['_trackEvent', 'Links', 'Social', 'Dribbble']);">
					Dribbble
				</a>
			</li>
			<li>
				<a href="//linkedin.com/in/smharley" class="linkedin" onclick="_gaq.push(['_trackEvent', 'Links', 'Social', 'LinkedIn']);">
					LinkedIn
				</a>				
			</li>
			<li>
				<a href="mailto:me@smharley.com" class="email" onclick="_gaq.push(['_trackEvent', 'Links', 'Social', 'Email']);">
					Email
				</a>
			</li>
		</ul>
	</div>
	<script type="text/javascript">
	
		 var _gaq = _gaq || [];
		 _gaq.push(['_setAccount', 'UA-16693491-1']);
		 _gaq.push(['_trackPageview']);
	
		 (function() {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		 })();
	
	</script>
</body>
</html>