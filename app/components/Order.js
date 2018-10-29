import React from 'react';

class Order extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            values:
            [{key:'name', displayName: 'Name', value: ''},
            {key:'surname', displayName: 'Surname', value: ''},
            {key:'phone', displayName: 'Phone number', value: ''},
            {key:'email', displayName: 'Email address', value: ''},
            {key:'street', displayName: 'Street name', value: ''},
            {key:'buildingNumber', displayName: 'Building number', value: ''},
            {key:'city', displayName: 'City', value: ''},
            {key:'postCode', displayName: 'Post code', value: ''}]
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);        
    }    

    handleChange(i, event) {
        let values = [...this.state.values];        
        values[i].value = event.target.value;
        this.setState({ values });
     }

    createForm(){
        return this.state.values.map((el, i) => (            
            <div key={el.key} className="form-group">
            <label htmlFor={el.key}>{el.displayName}:</label>
            <input 
                className="form-control"
                autoComplete='off'
                placeholder={el.displayName}
                id={el.key}
                type="text"
                value={el.value||''}
                onChange={this.handleChange.bind(this, i)}                
            />
        </div>   
        ))
    }

    handleSubmit(event) {
        event.preventDefault();

        const messageArray = this.state.values
            .filter((item)=> item.value)
            .map((item) => (`${item.displayName}: ${item.value}`)
        );
            
        alert(`Customer data:\n${messageArray.join('\n')}`);
    }

    handleClearForm(){        
        let values = [...this.state.values].map((value) => {
            value.value = '';
            return value;
        });
                
        this.setState({ values });
    }

    render(){
        return(
            <div className='container'>
                 <form onSubmit={this.handleSubmit}>                        
                        {
                            this.createForm()
                        }                        
                        <input className="btn btn-success pull-right" type="submit" value="Submit" />
                        <button className="btn btn-default pull-right" type="button" onClick={this.handleClearForm}>Clear form</button>
                </form>                
            </div>
        );
    }
}

export default Order;