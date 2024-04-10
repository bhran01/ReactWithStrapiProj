import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <table border="1">
                    <tr>
                        <td>
                            <Aside>Left Aside</Aside>
                        </td>
                        <td>
                            <Outlet/>
                        </td>
                        <td>
                            <Aside>Right Aside</Aside>
                        </td>
                    </tr>
                </table>
            </main>
            <Footer />
        </>
    )
}
