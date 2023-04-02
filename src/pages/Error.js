import {useRouteError} from 'react-router-dom';

export const Error=()=>{
    const error=useRouteError()
    console.log(error)
    return(
        <div>
            <h1>oops something went wrong....</h1>
            <h2>{error.data}</h2>
        </div>
    )
}