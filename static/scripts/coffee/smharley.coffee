$ ->
  wth = $("body").width() * 0.96
  if wth < 995 and wth > 536
    fit()
  else if wth > 995
    $("hgroup").css "width", "71.93877551%"
  else
    $("hgroup").css "width", "100%"
  $(window).resize ->
    wth = window.innerWidth * 0.96
    if wth < 995 and wth > 536
      fit()
    else if wth > 995
      $("hgroup").css "width", "71.93877551%"
    else
      $("hgroup").css "width", "100%"
      
fit = ->
  $("hgroup").css "width", ((window.innerWidth * 0.96) - 286) / (window.innerWidth * 0.96) * 100 + "%"