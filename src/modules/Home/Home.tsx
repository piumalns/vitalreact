import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {homeActions} from './ducks/index'
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { connect } from "react-redux";
import {Button} from 'react-bootstrap';

interface StateProps {
  home: any
}

interface DispatchProps {
  homeActions: any
}



class Home extends Component {
  constructor(props:any) {
    super(props);
    this.state = {
      age:false,
      select : 0,
      selectname:'',
    };
  }

  render() {
    const handleRandomUser= () => {
      const {homeActions, home, age} :any = this.props;
    
      homeActions.getProducts();
      homeActions.getAge(home?.allProducts?.data?.payload?.results[0]?.name?.first)
    }

    const handleAgeView =  () => {
      const {selectname}:any = this.state;
      const {homeActions, age,home} :any = this.props;
      
      homeActions.getAge(home?.allProducts?.data?.payload?.results[0]?.name?.first)
      this.setState({age:true});
    }

    const handleClick = (o :any) => {
      const {home} :any = this.props;
      this.setState({select:o.value});
      this.setState({selectname:home?.age?.data?.payload?.results})
    };
    const {home}: any = this.props;
    const { select, selectname} : any = this.state;
    return ( 
      <div>
        <div>
        <Button style={{margin:'10px'}} variant="primary" onClick={handleRandomUser}>
        Search Rondom Peaple
      </Button>
      <Button disabled={!home?.allProducts?.data?.payload?.results} style={{margin:'10px'}} variant="primary" onClick={handleAgeView}>
        Calculate Age
      </Button>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', margin:'10pz'}}>
        {home?.allProducts?.data?.payload?.results.map((data:any, index:number) => {
          return (
            <div>
              <ProfileCard  select={select} handleClick={handleClick} age={home?.age?.data?.payload?.age} data={data}/>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state :any) {
  return {
    home: state.Home,
    age:state.Home.age
  };
}
function mapDispatchToProps(dispatch :any) {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
  };
}

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(Home)
