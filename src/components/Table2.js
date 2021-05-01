import  { Component } from 'react'

class Table extends Component{
    constructor(props){
        super(props)
        this.state = {
            users:[],
            isLoading:false,
            isError:false
        }
        this.onSort = this.onSort.bind(this)

    }

    async componentDidMount(){
        this.setState({isLoading:true})

        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if(response.ok){
            const users = await response.json()
            console.log(users)
            this.setState({users,isLoading:false})
        }else{
            this.setState({isError:true,isLoading:false})
            }
        }
        onSort(event, sortKey){
    
            const data = this.state.data;
            data.sort((a,b) => a[sortKey].localeCompare(b[sortKey]))
            this.setState({data})
          }

        renderTableHeader = () => {
            return Object.keys(this.state.users[0]).map(attr => <th key={attr}
                style={{
                    borderBottom: 'solid 3px blue',
                    background: 'green',
                    fontSize: '16px',
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                {attr.toUpperCase()}
            </th>
            
                )
        }

        renderTableRows = () => {
            return this.state.users.map(user => {
                return(
                    <tr key={user.id}                 
                    style={{
                        borderBottom: 'solid 2px blue',
                        background: 'grey',
                        fontSize: '12px',
                        color: 'white',
                      }}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.website}</td>

                    </tr>
                )
            })
        }
        
    render(){
        const {users,isLoading,isError} = this.state

        if(isLoading){
            return <div>Loading...</div>
        }
        if(isError){
            return <div>Error...</div>
        }

        return users.length > 0 
        ? (
            <table>
                <thead>
                    <tr>
                        {this.renderTableHeader()}
        
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableRows()}
                </tbody>

            </table>
        ):(
            <div>No Users</div>
        )                
    }
}

export default Table;