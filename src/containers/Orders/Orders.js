import React,{Component} from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';


class Orders extends Component{


componentDidMount(){
  this.props.onFetchOrder();
}

    render(){
        let orders=<Spinner />;
        if(!this.props.loading){
            orders=this.props.orders.map(order=>(
                <Order 
                key={order.id}
                ingredients={order.ingredients}
                price={order.price}/>
            ))
        }
        return(
            <div>
              {orders}
                
            </div>
        );
    }
}

const mapStateToProps=state=>{
    return{
        orders:state.orders.orders,
        loading:state.orders.loading
    }
};

const mapDispatchToProps=dispatch=>{
    return{

onFetchOrder:()=>dispatch(actions.fetchOrder())
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(WithErrorHandler(Orders,axios));