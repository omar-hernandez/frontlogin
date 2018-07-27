import React, { Component } from 'react';
import axios from 'axios'

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            nombre: "",
            ciudad: "",
            descripcion:"" 
        }
    }

    onInputChange = (e) =>{
        if (e.target.name=='nombre'){
            this.setState({
                nombre: e.target.value
            })
        }else if(e.target.name == 'ciudad'){
            this.setState({
                ciudad: e.target.value
            })
        }else{
                this.setState({
                    descripcion: e.target.value
            })
        }
    }

    onSubmit=(e)=>{
        //evita que recargue la pagina
        e.preventDefault()
        let json ={
            nombre:this.state.nombre,
            ciudad:this.state.ciudad,
            descripcion:this.state.descripcion
        }
        axios.post('https://entradasfinal.herokuapp.com/api/createExperto',json)
        .then(experto=>{
            experto.send(alert("bien"))
        })
        .catch(err=>console.log("error"))
    }
    


    render(){
        console.log(this.state)
        return (
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">Nombre del despacho</label>
                <input type="text" name="nombre" class="form-control" ia-describedby="emailHelp" placeholder="Enter name"
                value={this.state.nombre}
                onChange={this.onInputChange}>
                </input>
              </div>
              <div className="form-group">
                <label for="exampleInputdescripcion1">Ciudad</label>
                <input type="text" name="ciudad" class="form-control" placeholder="Mail"
                value={this.state.ciudad}
                onChange={this.onInputChange}>
                </input>
              </div>
              <div className="form-group">
                <label for="exampleInputdescripcion1">Descripcion</label>
                <input type="text" name="descripcion" class="form-control" placeholder="descripcion"
                value={this.state.descripcion}
                onChange={this.onInputChange}>
                </input>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        );
      }

}

export default Register;