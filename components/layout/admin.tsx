import React from 'react'
import { LayoutProps } from '../../models/layouts'

const LayoutAdmin = ({ children }: LayoutProps) => {
    return (
        <div>
            <div className="min-h-screen flex">
                <nav className="w-56 flex-none  bg-slate-500 ">
                    Sidebar
                </nav>


                <main className="flex-1 min-w-0 overflow-auto ...">
                    {children}
                </main>
            </div>
        </div >
    )
}

export default LayoutAdmin
