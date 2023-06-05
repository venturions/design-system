import { TooltipArrow, TooltipContent } from './styles'
import { ComponentProps, ReactNode } from 'react'
import { Provider, Portal, Trigger, Root } from '@radix-ui/react-tooltip'

export interface TooltipProps extends ComponentProps<typeof Root> {
  content: string | ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <Provider>
      <Root {...props}>
        <Trigger asChild>{children}</Trigger>
        <Portal>
          <TooltipContent>
            <TooltipArrow />
            {content}
          </TooltipContent>
        </Portal>
      </Root>
    </Provider>
  )
}

Tooltip.displayName = 'Tooltip'
