import React, {Component} from 'react';
import Auxiliaries from '../../../hoc/Auxiliaries/Auxiliaries'
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    //this could be a function component , doesn't have to be a class
render(){
    const ingredientSummary = Object.keys(this.props.ingredients)
    .map( igKey => {
        return (
            <li key={igKey}>
              <span style={{textTransform: 'capitalize'}}> {igKey}</span> : {this.props.ingredients[igKey]} 
                 </li> )
})
    return(
         <Auxiliaries>
        <h3> Order Summary</h3>
        <p> A delicious burger with the following ingredients: </p>
        <ul>
           {ingredientSummary} 
        </ul>
        <p> <strong> Total Price {this.props.price.toFixed(2)} </strong> </p>
        <p> Continue to Checkout..</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceled}> CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}> CONTINUE</Button>
    </Auxiliaries>
    );

}
}
export default OrderSummary;