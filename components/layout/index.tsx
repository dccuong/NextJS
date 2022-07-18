import React from 'react'
import { LayoutProps } from '../../models/layouts'
import Header from '../Header'



const Layout = ({ children }: LayoutProps) => {
    return (
        <div>

            <header className="sticky top-0 ..."><Header /></header>


            <main className="p-4">
                <p className="mb-6">{children}</p>
            </main>
        </div>)
}

export default Layout