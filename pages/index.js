//Para poder usar el componente Layout
import Layout from '../components/Layout'
import {skills, experences, proyects} from '../profile'
import Link from 'next/link'

// console.log(skills);
// console.log(experences);
const Index = () => (
    <Layout>
        {/* Header Card */}
        <header className='row'>
            <div className='col-md-12'>
                <div className='card card-body bg-secondary text-white'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src='foto_julio_02.jpg' alt='image' className='img-fluid'/>
                        </div>
                        <div className='col-md-8'>
                            <h1>Julio Aguero</h1>
                            <h3>FullStack Developer</h3>                            
                            <p>
                                A lo largo de mas de 20 años he desempeñado varios cargos que tienen que ver con el desarrollo de software para las organizaciones empresariales para las que fui contratado, 
                                A pesar de ser Ingeniero Electrónico en computación, lo que me apasiona es resolver problemas a través de aplicaciones de software. Comencé con lenguajes como VB 6.0, VB.Net, SQL y actualmente me encuentro en proyectos en la blockchain + WEB3 + WEB2 desarrollando aplicaciones con Solidity + JavaScript + C#, en 360°, Creando Tokens fungibles y no fungibles NFT en estandares ERC-20, ERC-721 entre otros, soluciones completas con Frontend modernas o en el Backend y API's. 
                                Con esto estoy pasando de entornos Desktops a entornos multiplataforma y en la web2 y ahora con Smart Contract (DEFI), Tokenización a la Web3 en bases de datos descentralizadas. También soy administrador de bases de datos MS SQL con una amplia experticia en otros motores de bases de datos.
                                Dentro de las aplicaciones más relevantes que he desarrollado están sistemas: administrativos, financieros, contables, crediticios, nóminas, sistemas de pesaje con balanzas camioneras, sistemas para el sector de la medicina, entre otros...
								En fin, el plan actual es conquistar la WEB3 en el mundo Blockchain, bajo el nombre del proyecto SIMON 360 el cual es un ERP en el cual le he dedicado a crecer durante los últimos años.
                            </p>
                            <a href='/hireme'>Hire me</a>
                        </div>

                    </div>

                </div>
            </div>

        </header>

        {/* Secund Secction */}
        <div className='row'>
            <div className='col-md-4'>
                <div className='card bg-light'>
                    <div className='card-body'>
                        <h1>Skills</h1>

                        {
                            // se debe colocar toda esta parte en un solo <div>...todo</div>
                            skills.map(({skill, percentage}, i) => (
                                <div className='py-3' key={i}>
                                    <h5>{skill}</h5>
                                    <div className='progress'>
                                        <div 
                                            className='progress-bar' 
                                            role='progressbar' 
                                            style={{ width: `${percentage}%`}}
                                            aria-valuenow='50'
                                            aria-valuemin='0'
                                            aria-valuemax='100'
                                        >
                                        </div>
            
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>

            <div className='col-md-8'>
                <div className='card bg-light'>
                    <div className='card-body'>
                        <h1>Experience</h1>
                        <ul>
                            {
                                experences.map(({title, description, from, to}, index) => (
                                    <li key={index}>
                                        <h3>{title}</h3>
                                        <h5>{from} - {to}</h5>
                                        <p>
                                           {description}
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                        
                        <Link href='/experences'>
                            <a className='btn btn-light'>
                                Know More
                            </a>
                        </Link>

                    </div>
                </div>

            </div>

        </div>

        {/* Porfolio */}
        <div className='row'>
            <div className='col-md-12'>
                <div className='card card-body bg-dark'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1 className='text-center text-light'>Portfolio</h1>
                        </div>

                        {
                            proyects.map(({name, description, image}, index) => (
                                <div className='col-md-4  p-2' key={index}>
                                    <div className='card h-100'>
                                        <div className='overflow'>
                                            {/* img-fluid -> para que no se salga del contenedor */}
                                            <img src={`/${image}`} alt={`image${index}`} className='img-fluid card-img-top' />
                                        </div>
                                        <div className='card-body'>
                                            <h3>{name}</h3>
                                            <p>{description}</p>
                                            <Link href='/'>
                                                <a>Know More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    
                    
                    <div className='text-center mt-4'>
                        <Link href='/portfolio'>
                            <a className='btn btn-outline-light'> More Proyects </a>
                        </Link>
                    </div>
                

                </div>
            </div>

        </div>

    </Layout>
    
)

export default Index;
