import * as React from 'react'
import { HorizontalSliderStylesProps } from './types'

/*
 *Creation of a custom style hook to avoid using a third party library.
 */
export function useSimpleSliderStyles({
  size,
  currentSlide
}: HorizontalSliderStylesProps) {
  const uniqueId = React.useRef(
    'slider' + Math.random().toString(36).substr(2, 9)
  )
  const style = React.useRef(document.createElement('style'))
  const classes = React.useRef({
    card: `${uniqueId.current}-card`,
    flexBox: `${uniqueId.current}-flexbox`,
    root: `${uniqueId.current}-root`
  })

  React.useEffect(() => {
    const currentStyle = style.current
    document.getElementsByTagName('head')[0].appendChild(currentStyle)
    return () => {
      document.getElementsByTagName('head')[0].removeChild(currentStyle)
    }
  }, [])

  React.useEffect(() => {
    const currentClasses = classes.current
    const translatePixel = (size.element + size.margin) * currentSlide
    style.current.innerHTML = `
.${currentClasses.card} {
  width: ${size.element}px;
  margin-right: ${size.margin}px;
  cursor: pointer;
}

.${currentClasses.root} {
  overflow: hidden;
}

.${currentClasses.flexBox} {
  transition: transform .3s ease-in-out;
  transform: translate(-${translatePixel}px);
  display: flex;
}`
  }, [classes, currentSlide, size.element, size.margin])

  return classes.current
}
