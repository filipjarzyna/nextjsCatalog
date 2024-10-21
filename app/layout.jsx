import Navbar from '@components/navbar/Navbar'
import '@styles/global.css'

export const metadata = {
    title: "Sklep Hiuart",
    description: 'Sprzedaz czesci samochodowych'
}


const RootLayout = ({ children }) => {
    return (
        <html lang="pl">
            <body className='bg-black text-white font-sans'>
                <Navbar/>
                <main className=''>
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout