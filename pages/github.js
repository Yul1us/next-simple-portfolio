import Layout from '../components/Layout';
import Error from './_error'

//cargar el Perfil desde:
//https://api.github.com/users/Yul1us
// const Github = (props) => {
//     console.log(props.user)
//     return (
//         <Layout>
//             <h1>Github</h1>
    
//         </Layout>
//     )
// }


//resibe los props o los parametros del servidor, que esta mas abajo.
const Github = ({user, statusCode}) => {
    console.log(user)

    if (statusCode) {
        return <Error statusCode = {statusCode}/>
        
    }

    return (
        <Layout>
            {/* <h1>Github</h1> */}
            {/* Creando los objetos */}
            {/* https://laideatech.net/simon/# */}
            <div className='row'>
                <div className='col-md-4 offset-md-4'>
                    <div className='card card-body text-center'>
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt='img_avatar_url'></img>
                        <p>{user.bio}</p>
                        <a href={user.blog} target='_blank' className='btn btn-outline-secondary my-2'> My Blog</a>
                        <a href={user.html_url} target='_blank' className='btn btn-outline-secondary ' >Go to Github</a>
                    </div>

                </div>

            </div>
    
        </Layout>
    )
}




//pide datos de forma extarna desde el servidor...
export async function getServerSideProps() {
    //peticion fetch
    const res = await fetch('https://api.github.com/users/Yul1us')
    const data = await res.json();
    
    console.log(data)
    console.log('Petition state:',res.status);
    const statusCode = res.status > 200 ? res.status : false;
    return  {
        props: {
            user: data,
            statusCode

        }
    }
}

export default Github;