import { forwardRef } from 'react';
import clx from 'classnames';

const Layout = forwardRef(({ className = '', children, ...props }, ref) => {
    return (
        <main ref={ref} className={clx('flex flex-col mt-20', className)} {...props}>
            {children}
        </main>
    )
});

export default Layout