function removeAllDisabledStyles(context) {
  var doc = context.document
  var selection = context.selection

  var loop = selection.objectEnumerator()
  while (item = loop.nextObject()) {
    var fills = item.style().fills()
    var fills = fills.objectEnumerator()
    var fillIndex = 0;
    while (fill = fills.nextObject()) {
      if (!fill.isEnabled()) {
        item.style().removeStyleFillAtIndex(fillIndex)
      }
      fillIndex++
    }

    var borders = item.style().borders()
    var borders = borders.objectEnumerator()
    var borderIndex = 0;
    while (border = borders.nextObject()) {
      if (!border.isEnabled()) {
        item.style().removeStyleBorderAtIndex(borderIndex)
      }
      borderIndex++
    }

    var shadows = item.style().shadows()
    var shadows = shadows.objectEnumerator()
    var shadowIndex = 0;
    while (shadow = shadows.nextObject()) {
      if (!shadow.isEnabled()) {
        item.style().removeStyleShadowAtIndex(shadowIndex)
      }
      shadowIndex++
    }

    var innerShadows = item.style().innerShadows()
    var innerShadows = innerShadows.objectEnumerator()
    var innerShadowIndex = 0;
    while (innerShadow = innerShadows.nextObject()) {
      if (!innerShadow.isEnabled()) {
        item.style().removeStyleInnerShadowAtIndex(innerShadowIndex)
      }
      innerShadowIndex++
    }
  }

  // Refresh UI
  doc.currentPage().deselectAllLayers()
  selectionCount = selection.count()
  for (var i = 0; i < selection.count(); i++) {
    var layer = selection.objectAtIndex(i)
    layer.select_byExpandingSelection(true, true);
  }
}
