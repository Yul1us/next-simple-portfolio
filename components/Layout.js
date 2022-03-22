import NavBar from './NavBar'
//Head permite cambiar los titulos de nuestra pagina
// import Head from 'next/head'
import {useEffect} from 'react'
import {useRouter} from 'next/router'

//bara de progreso
import NProgress from 'nprogress'

const Layout = ({ children }) => {

    const router = useRouter();


    //useEfect se dispara cada vez que hay un cambio -> , [] 
    useEffect(() => {

        const handleRouteChange = (url) => {
            console.log(url);
            NProgress.start();
        }

        // console.log('Cargo...')
        //crea un evento y se queda escuchando los cambios...
        //Nota hay que desactivarlos ya que se puede generar un ciclo infinito de eventos escuchando...
        //ya que son increme((ntales...
        // router.events.on('routeChangeStart',url => console.log(url))
        router.events.on('routeChangeStart',handleRouteChange)

        router.events.on('routeChangeComplete',() => NProgress.done() );

        //apagar los eventos de escucha...
        return () => {
            router.events.off('routeChangeStart',handleRouteChange)
        }
    }, [])
    
    return (
        // export const Layout = (props) => {
        <>
            {/* <Head>
                <title>My Portfolio</title> */}
                <NavBar />

                {/* cuerpo principal */}
                <main className='container py-4'>
                    {children}
                </main>
            {/* </Head> */}
            <footer className='bg-dark text-light text-center'>
                <div className='container p-4'>
                    <h1>&copy; Julio Aguero Portfolio</h1>
                    <p>2000 - {new Date().getFullYear()} </p>
                    <p>All rights Reserverd.</p>

                </div>
            </footer>
        </>

    )
}

export default Layout;