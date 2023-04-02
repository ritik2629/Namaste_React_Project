import React from "react";

export class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, data: [] };
    console.log("child-constructor" );
  }

  async componentDidMount() {
    console.log("child-componentDidMount"  ); //useEffect thing works here
    const data=await fetch('https://api.github.com/users/ritik2629')
    const json = await data.json()
    this.setState({data:json})
    console.log(json)

   this.timer= setInterval(()=>{
      console.log('Namstey OP')
    },1000)
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
    clearInterval(this.timer)
  }

  render() {
    console.log("child-render" );
    const {avatar_url,name,location}=this.state.data
    return (
      <div>
        <img src={avatar_url} alt="" />
        <h2>name : {name}</h2>
        <p>location : {location}</p>
      </div>
    );
  }
}
