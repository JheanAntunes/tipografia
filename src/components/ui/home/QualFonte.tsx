import React from 'react'

// eslint-disable-next-line react/display-name
const QualFonte = React.forwardRef<
    HTMLSpanElement,
    React.ComponentProps<'span'>
>(({ children, className, ...props }, ref) => {
    return (
        <span className="text-sm leading-none" {...props} ref={ref}>
            {children}
        </span>
    )
})

export default QualFonte
