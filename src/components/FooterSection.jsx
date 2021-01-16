import youtube from '../img/youtube.svg';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import twitter from '../img/twitter.svg';

const FooterSection = () => {
    return (<div id='footer' className='footer'><div className='footer-section'>
    <div className="footer-company">
        <ul><li><h4>COMPANY</h4></li>
        <li>Our Services</li>
        <li>Contacts</li>
        <li>Gallery</li></ul>
    </div>
    <div className="footer-contact">
        <ul><li><h4>CONTACT</h4></li>
        <li><span>summerwood@summergroup.com</span></li>
        <li>(033) 123456</li></ul>
        <div className="social-links">
            <img src={youtube} alt=""/>
            <img src={twitter} alt=""/>
            <img src={instagram} alt=""/>
            <img src={facebook} alt=""/></div>     
    </div>
    <div className="footer-address">
        <ul>
            <li><h4>ADDRESS</h4></li><li>Main Street</li>
        <li>74115 State</li></ul>
    </div>
</div> </div>);
}
 
export default FooterSection;