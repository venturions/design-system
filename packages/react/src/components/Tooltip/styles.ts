import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

const slideUpAndFade = keyframes({
  from: { opacity: 0, transform: 'translateX(-2px)' },
  to: { opacity: 1, transform: 'translateX(0)' },
})

const slideRightAndFade = keyframes({
  from: { opacity: 0, transform: 'translateX(-2px)' },
  to: { opacity: 1, transform: 'translateX(0)' },
})
const slideDownAndFade = keyframes({
  from: { opacity: 0, transform: 'translateX(-2px)' },
  to: { opacity: 1, transform: 'translateX(0)' },
})
const slideLeftAndFade = keyframes({
  from: { opacity: 0, transform: 'translateX(-2px)' },
  to: { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  padding: '$3 $4',
  gap: '8px',
  background: '$gray900',
  borderRadius: '5px',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  fontFamily: '$inter',
  color: '$gray100',

  userSelect: 'none',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  textAlign: 'center',

  '&[data-state="delayed-open"][data-side="top"]': {
    animation: `${slideDownAndFade} 200ms ease-out`,
  },
  '&[data-state="delayed-open"][data-side="right"]': {
    animation: `${slideLeftAndFade} 200ms ease-out`,
  },
  '&[data-state="delayed-open"][data-side="bottom"]': {
    animation: `${slideUpAndFade} 200ms ease-out`,
  },
  '&[data-state="delayed-open"][data-side="left"]': {
    animation: `${slideRightAndFade} 200ms ease-out`,
  },

  span: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '$sm',
    lineHeight: '140%',

    textAlign: 'center',
    letterSpacing: '-0.09px',

    color: '$gray100',
  },
})
export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '10px',

  width: '16px',
  height: '8px',
})
