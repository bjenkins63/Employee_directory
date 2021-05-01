import React from 'react';

export default class StaffLinks extends React.Component {
    state = {
        loading: true,
        people: []
    };


    async componentDidMount () {
    const url = "https://api.randomuser.me/?results=12";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({people: data.results, loading: false})
    }

    render() {
        if (this.state.people.loading) {
          return <div>loading...</div>;
        }
        if (!this.state.people.length) {
          return <div>didn't get a person</div>;
        }    

   return (
        <div>
          {this.state.people.map(person => (
            <div key={person.uuid}>
                <td img src={person.picture.medium}/>
                <td>{person.name.first}</td>
                <td>{person.name.last}</td>
                <td>{person.email}</td>
                <td>{person.phone}</td>          
            </div>
        ))
    }
        </div>
   );
  }
}