<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	
	<title>Steven Harley</title>
	<meta name="description" content="Contact information for Steven Harley" />
	<meta name="author" content="Steven Harley">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="apple-mobile-web-app-capable" content="yes">
	<link rel="shortcut icon" href="/favicon.ico">
	<link rel="stylesheet" href="/static/styles/css/base.css">
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script type="text/javascript" src="/static/scripts/js/smharley.js"></script>
	<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	<style type="text/css">
	</style>
</head>
<body>
	<header>
		<h1>Steven Harley: Web Developer</h1>
	</header>
	<div class="wrap">
		<figure>
			<img src="/static/img/steven-playing-jenga.png" alt="Steven playing jenga" />
		</figure>
		<hgroup>
			<h2>hi, i’m a front-end developer.</h2>
			<h3>i like coding html/css/js/php & am an aspiring web designer.</h3> 
		</hgroup>
	</div>
	<div class="wrap">
		<div class="content">
			<div class="dribbble">
				<h2>stuff i&rsquo;m working on:</h2>
				<ol class="dbbb">
				<?php
				 
					require 'dribbble.php';
					$dribbble = new Dribbble();
					$perpage='8';
					
					function time_ago($date,$time) {
						$days = abs(ceil((strtotime($date)-strtotime("now"))/86400));
							if ($days > 0)  $timepast = $days." days";
							if ($days == 1)  $timepast = $days." day";
						$hours = abs(ceil((strtotime($time)-strtotime("now"))/3600));
							if ($days == 0) $timepast = "about ".$hours." hours";
							if ($hours == 1) $timepast = "about ".$hours." hour";
						$minutes = abs(ceil((strtotime($time)-strtotime("now"))/60))-($hours*60);
							if ($hours == 0) $timepast = $minutes." minutes";
							if ($minutes == 1) $timepast = $minutes." minute";
						return $timepast;
					}
					
					try {
					    $my_shots = $dribbble->get_player_shots('smharley', 1, $perpage);
					    foreach ($my_shots->shots as $shot) {
					    
					    	$date = $shot->created_at;
					    	$datepieces = explode(" ", $date);
					    	
					    	date_default_timezone_set('America/Halifax');
					    	
					        echo '<li>
					        	  		<a href="' . $shot->url . '" onclick="_gaq.push([\'_trackEvent\', \'Links\', \'Social\', \'Dribbble\']);"><img src="' . $shot->image_teaser_url . '" alt="' . $shot->title . '" /></a>
					        	  		<a href="' . $shot->url . '" class="over " onclick="_gaq.push([\'_trackEvent\', \'Links\', \'Social\', \'Dribbble\']);">	
											<strong>' . $shot->title . '</strong>
											<em>' . time_ago($datepieces[0],$datepieces[1]) . '</em>
										</a>
					        	  </li>';
					    }
					}
					catch (DribbbleException $e) {
					    echo 'Error: ' . $e->getMessage();
					}
				?>
				</ol>
				<h2>my contact info:</h2>
				<ul class="contact">
					<li>twitter&nbsp;&ndash;&nbsp;
						<a href="http://twitter.com/smharley/" class="twitter" onclick="_gaq.push(['_trackEvent', 'Links', 'Social', 'Twitter']);">
							@smharley
						</a>
					</li>
					<li>dribbble&nbsp;&ndash;&nbsp;
						<a href="http://dribbble.com/smharley" class="dribbble" onclick="_gaq.push(['_trackEvent', 'Links', 'Social', 'Dribbble']);">
							@smharley
						</a>
					</li>
					<li>linkedin&nbsp;&ndash;&nbsp;
						<a href="http://www.linkedin.com/in/smharley" class="linkedin" onclick="_gaq.push(['_trackEvent', 'Links', 'Social', 'LinkedIn']);">
							smharley
						</a>				
					</li>
					<li>email&nbsp;&ndash;&nbsp;
						<a href="mailto:me@smharley.com" class="email" onclick="_gaq.push(['_trackEvent', 'Links', 'Social', 'Email']);">
							me@smharley.com
						</a>
					</li>
				</ul>
			</div>
		</div>
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