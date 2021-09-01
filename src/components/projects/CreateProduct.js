import React,{ Component,useState } from 'react';
// import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'; 
// import Select from './Select';
// import Select from "react-select";
import CustomSelect from './Select'
// import { Category } from '@material-ui/icons';
import {createProductAction} from '..//../store/actions/productActions';

// const colorOptions = [
//     { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
//     { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
//     { value: 'purple', label: 'Purple', color: '#5243AA' },
//     { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
//     { value: 'orange', label: 'Orange', color: '#FF8B00' },
//     { value: 'yellow', label: 'Yellow', color: '#FFC400' },
//     { value: 'green', label: 'Green', color: '#36B37E' },
//     { value: 'forest', label: 'Forest', color: '#00875A' },
//     { value: 'slate', label: 'Slate', color: '#253858' },
//     { value: 'silver', label: 'Silver', color: '#666666' },
//   ];

import FileUploader from '../layout/FileUploader'
const [file, setFile] = useState(null);

 const handleChange123 = function loadFile(e) {
      if (e.target.files.length > 0) {
        const file = URL.createObjectURL(e.target.files[0]);
        setFile(file);
      }
    };
const options = [
    { value: 'vine', label: 'Вино' },
    { value: 'champagne', label: 'Шампанское' },
    { value: 'vodka', label: 'Водка' }
  ]

class CreateProject extends Component {
    state = {
        selectOptions: [],
        cartItems:[],
        title: '',      
        Category:'',
        Region:'',
        Manufacturer:'',
        Brand:'',
        Fortress:'',
        Colour:'',
        Sugar:'',
        Grape:'',
        Serving_temperature:'',
        Vintage:'',
        Products_webpage:'',
        content: '',
        description:'',
        delivery:'',
        img:'',
        name:'',
        picture:'',
        price:0,
        sizes:[],
        defaultQty:0,
        
    }

    handleChange = (e) => {
        
        this.setState({
            [e.target.id]: e.target.value
        })
        // handleChange123(e);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('state from CREATEPRODUCT',this.state);
        this.props.createProductAction(this.state)
        this.props.history.push('/products');
        
        
       
    }
    


     onChangeInput=(value,e)=> {
        // console.log(e.target.Category)
        // const setCategory=e.target.value.toString()
        this.state.Category=value
        // console.log('Value of Category',typeof(valueString))
        // console.log('Category=',this.props.Category)
        this.state.selectOptions=this.state.Category.value

        // this.setState({selectOptions: options})
        // console.log('this is selected options',this.state.selectOptions)
        // this.setState({
        //     [e.target.id]: e.target.valueString
        // })
        
        
        
    }


    //-------------------------------------------------------------------------
    

    

   
    //------------------------------------------------------------------------
    
    render() {
        const { auth } = this.props;

        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="container">
                
                <form className="white" onSubmit={this.handleSubmit}>
                  
                  
                  
                  
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div >
                    
                        <label htmlFor="Category">Category</label>
                        {/* <Select options={colourOptions} type="text" id="Category" onChange={this.handleChange} /> */}
                        <CustomSelect options={options}  onChange={this.onChangeInput} /> 

                    </div>
                  
                    <br/>
                    <br/>
                  

                  
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange} />
                    </div>
                    
                    <br/>
                    <br/>
                    
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>

                    
{/*                     
                    <FileUploader/> */}

                {/* <input type="file" onChange={this.handleChange} id="upload" accept="image/*" />
                    <label htmlFor="upload">
                        <div>
                        <img alt="uploadImage" src={file} />

                        </div>
                    </label> */}



                    <div className="input-field">
                        <label htmlFor="picture">IMAGE LINK</label>
                        <input type="text" id="picture" onChange={this.handleChange} />
                    </div>
                    
                    <br/>
                    <br/>
                    

                    <div className="input-field">
                        <label htmlFor="name">name</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    
                    <br/>
                    <br/>

                    <div className="input-field">
                        <label htmlFor="price">price</label>
                        <input type="number" id="price" onChange={this.handleChange} />
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="default qty">default qty</label>
                        <input type="number" id="default qty" onChange={this.handleChange} />
                    </div>
                    <br/>
                    <br/>
                    
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Project</button>
                    </div>



                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        createProductAction: (product) => dispatch(createProductAction(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);