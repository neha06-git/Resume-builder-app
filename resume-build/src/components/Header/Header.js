import React  from 'react';
// import { Link, Router } from 'react-router-dom';
// // import {useNavigate} from 'react-router-dom';
import resumeSVG from '../../assets/resume.svg';
import styles from './Header.module.css';
// import resumeGenerate from '../Section/resumeGenerate';

const Header = () => {
    // const [isAuth, setIsAuth] = useState(true);
    // if(!isAuth){
    //     return <Router to="../Section/resumeGenerate.js"/>
    // }
//   const navigate = useNavigate();
//   const navigateSection = () => {
//     navigate('../Section/resumeGenerate');
//   }
  return (
    <div className={styles.container}>
        <div>
        <p className={styles.mainheading}>
          Resume Builder
        </p>
          <br></br>
          <span className={styles.heading}> Make your own customized resume </span>
            
        
        <p className={styles.subheading}>
          It's Free!
          <span> Just take a few seconds...</span>
          <span>
          {/* <Router>
          <Link to="/resumeGenerate.js">
          <button className={styles.btn}>
           Generate Your Resume
          </button>
          </Link>
          </Router> */}
          {/* <button className={styles.btn} onClick={() => setIsAuth(false)}>
           Generate Your Resume
          </button> */}
          {/* <button className={styles.btn}>
           Generate Your Resume
          </button> */}
          </span>
        </p>
    </div>
    <div className={styles.right}>
        <img src={resumeSVG} alt='Resume' />
    </div>
    <div className={styles.section}>
    
    </div>
</div>

      

  )
}

export default Header;
