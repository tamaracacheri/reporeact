import { Component } from 'react';

class TitleComponent extends Component {
    constructor(){
        super()
        this.state = {
            title: 'Almacen de Bebidas'
        }
    }
    render() { 
        return <div>
            <h1>{this.state.title}</h1>
        </div>;
    }
}
 
export default TitleComponent;