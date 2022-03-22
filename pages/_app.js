//Lo que importe aqui... toda la aplicacion puede acceder
//para el manejo de
//styles
//configuration
//...

// import App from 'next/app'
//este es el estilo que aplicaremos en nuestro diseño
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '../global.css'


function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}


export default MyApp