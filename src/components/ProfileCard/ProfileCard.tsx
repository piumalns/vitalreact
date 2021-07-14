import { Component } from 'react';
import "./ProfileCard.css";
import defaultImg from "../../assets/images/temp_avatar.png";
import moment from 'moment'

interface Props {
  data: any;
  age:number;
  handleClick: any;
  select:number;
}

class ProfileCard extends Component<Props> {
  constructor(props:any) {
    super(props);
    this.state = {
      personAge : 0,
    };
  }
  componentDidMount(){
    const {data} : any = this.props;
  }
  render() {
    const {id, picture, dob, location, name}: any = this.props.data;
    const {handleClick, select, selectname} :any = this.props;
    return (
        <div onClick={() => handleClick(id)} style={{ boxShadow:"5px 5px 25px rgba(0, 0, 0, .5)",width:'300px', margin:'20px'}}>
          <img src={picture ? picture?.large:defaultImg} />
          <div style={{margin:'8px'}}>
          <h6> <span>Name :</span> {name?.title} {name?.first} {name?.last}</h6>
          <h6> <span>City :</span> {location?.city}</h6>
          <div  >
            <h6> <span>Dob :</span> {moment(dob?.date).format("DD/MM/YYYY")}</h6>
          </div>
          <h6> <span>Age :</span>  {select == id.value ? <span>{dob?.age}</span>: null} </h6>
          </div>
        </div>  
    ) 
  }
}


export default ProfileCard;
