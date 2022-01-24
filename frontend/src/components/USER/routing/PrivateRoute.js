import { Redirect, Route } from 'react-router-dom'; 

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
       <Route
        {...rest}
        render = {
            (props) => 
               localStorage.getItem("authToken") ?(
                   <component {...props}/>
               ) : (
                   <Redirect to="/login"/>
               )    
            
        }
       />
    )
}

export default PrivateRoute