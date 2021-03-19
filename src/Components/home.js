import videoUrl from '../assets/backVideo1.mp4'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import {useState, useEffect }from 'react';
import Portis from '@portis/web3';
import Web3 from 'web3';
import { D_APP_PORTIS_ID } from '../configs/todolist';



const HomePage = () => {
    

    const [toggle,setToggle] = useState(1)
    const menuToggle = ['showcase active','showcase']
    const toggleToggle = ['toggle active','toggle']
     const doingToggle = () => {
        if(toggle===0){
            setToggle(1)
        }else{
            setToggle(0)
        }
       
    }

    useEffect(()=>{
         const portis = new Portis(D_APP_PORTIS_ID, 'mainnet');
         const web3 = new Web3(portis.provider);

         web3.eth.getAccounts((error, accounts) => {
            console.log(accounts);
          });
    },[])

    return ( <div className="home-container">
        <section className={menuToggle[toggle]}>
            <header>
                <h2 className="logo">XTODO</h2>
                <div className={toggleToggle[toggle]} onClick={doingToggle}>

                </div>
                
                
            </header>
            <video src={videoUrl} muted loop autoPlay></video>
            <div className="overlay"></div>
            <div className="text">
                <h2>Hustle</h2>
                <h3>List all your tasks</h3>
                <p>Xtodo a secure blockchain based todo app</p>
                <a href="/">Write It Up</a>
            </div>
            <ul className="social">
                    <li><a href="/"><img src={facebook} alt=""/></a></li>
                    <li><a href="/"><img src={instagram} alt=""/></a></li>
                    <li><a href="/"><img src={twitter} alt=""/></a></li>
            </ul>
        </section>
        <div className="menu">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Account</a></li>
                <li><a href="/">ToDos</a></li>
                <li><a href="/">Motivation</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
    </div> );
}
 
export default HomePage;