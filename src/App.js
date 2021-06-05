import React from "react";
import {Cards,Chart,Countrypicker} from "./components";
import styles from "./App.module.css";
import {fetchData} from "./api";
import coronaimage from "./images/image.png";
class App extends React.Component
{
    state={
        data:{},
        country:'',
    }
    async  componentDidMount(){
        const fetchedData=await fetchData();
        this.setState({data:fetchedData});
    }
    handlecountrychange =async(country)=>{
        const fetcheddata=await fetchData(country);
        this.setState({data:fetcheddata,country:country});
    }
   render(){
    const {data,country}=this.state; 
    return (
    <div className={styles.container}>
        <img className={styles.image} src={coronaimage} alt="COVID-19"/>
   <Cards
   data={data}
   />
   <Countrypicker handlecountrychange={this.handlecountrychange}/>
   <Chart data={data}
   country={country}/>
   
    </div>);
   }
}
export default App;