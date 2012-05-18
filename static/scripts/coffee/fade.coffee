getElm = (eID) ->
  document.getElementById eID
show = (eID) ->
  getElm(eID).style.display = "block"
hide = (eID) ->
  getElm(eID).style.display = "none"
setOpacity = (eID, opacityLevel) ->
  eStyle = getElm(eID).style
  eStyle.opacity = opacityLevel / 100
  eStyle.filter = "alpha(opacity=" + opacityLevel + ")"
fade = (eID, startOpacity, stopOpacity, duration) ->
  speed = Math.round(duration / 100)
  timer = 0
  if startOpacity < stopOpacity
    i = startOpacity

    while i <= stopOpacity
      setTimeout "setOpacity('" + eID + "'," + i + ")", timer * speed
      timer++
      i++
    return
  i = startOpacity

  while i >= stopOpacity
    setTimeout "setOpacity('" + eID + "'," + i + ")", timer * speed
    timer++
    i--
fadeIn = (eID) ->
  setOpacity eID, 0
  show eID
  timer = 0
  i = 1

  while i <= 100
    setTimeout "setOpacity('" + eID + "'," + i + ")", timer * 5
    timer++
    i++
fadeOut = (eID) ->
  timer = 0
  i = 100

  while i >= 1
    setTimeout "setOpacity('" + eID + "'," + i + ")", timer * 50
    timer++
    i--
  setTimeout "hide('" + eID + "')", 5533310