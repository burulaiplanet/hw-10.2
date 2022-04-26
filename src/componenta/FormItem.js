
import './Form.css'
function FormItem(props){
return(
    <div className="lists">
 
<div>{props.name}</div>
<div>{props.email}</div>
<div>{props.phone}</div>
    </div>

)

}

export default FormItem