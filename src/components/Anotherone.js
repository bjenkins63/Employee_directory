import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  async getUsersData(){
    const res = await axios.get('https://api.randomuser.me/?results=12')
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [{  
      Header: 'Photo',  
      accessor: 'picture.medium',
     }
     ,{  
      Header: 'First Name',  
      accessor: 'name.first' ,
      }
     
     ,{  
     Header: 'Last Name',  
     accessor: 'name.last' ,
     }
     ,{  
     Header: 'Email',  
     accessor: 'email',
     },
     {  
      Header: 'Phone',  
      accessor: 'phone',
      },
  ]
    return (
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
   />
    )
  }
}