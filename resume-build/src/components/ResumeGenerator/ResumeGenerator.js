import React, { useEffect, useState, useRef} from 'react';
import ReactToPrint from 'react-to-print';
import { Download } from 'react-feather';
import Editor from '../Editor/Editor';
import Resume from '../Resume/Resume';
import styles from './ResumeGenerator.module.css';

const ResumeGenerator = () => {
  const colors = ["#241e1e", "#F55353", "#0de48a", "#47B5FF","#581299", "#db0ee2"];
  const sections = {
    basicInfo: "Basic Info",
    summary: "Profile Summary",
    workExp: "Work Experiance",
    project: "Projects",
    academic: "Academic",
    achievements: "Achievements",
    other: "Other"

  };
  
  const resumeRef = useRef();
  const [activeColor,setActiveColor]=useState(colors[0])
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id:sections.basicInfo,
      sectionTitle:sections.basicInfo,
      detail: {},
    },
    [sections.summary]: {
      id:sections.summary,
      sectionTitle:sections.summary,
      detail: "",
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
   
    [sections.project]: {
      id:sections.project,
      sectionTitle:sections.project,
      details: [],
    },
    [sections.academic]: {
      id:sections.academic,
      sectionTitle:sections.academic,
      details: [],
    },
    [sections.achievements]: {
      id:sections.achievements,
      sectionTitle:sections.achievements,
      points: [],
    },
    [sections.other]: {
      id:sections.other,
      sectionTitle:sections.other,
      detail: "",
    },
  });

  // useEffect(()=>{
  //   console.log(resumeInformation);
  // }, [resumeInformation]);
  return (
    <div  className={styles.container}>
      <h2 className={styles.heading}>
        Create Your Resume
      </h2>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {
            colors.map( (item) => (
              <span
                key={item}
                style={{backgroundColor: item }}
                className={`${styles.color} ${activeColor===item?styles.active:""}`}
                onClick={()=>setActiveColor(item)}
              />
            ))}
          
        </div>
        <ReactToPrint
          trigger={() => {
            
            return ( <button>Download <Download /> 
            </button>);
          }}
          content={() => resumeRef.current}
        />
        
       
      </div>
      <div className={styles.main}>
        <Editor 
        sections={sections} 
        information={resumeInformation} 
        setInformation={setResumeInformation}
        />
        <Resume 
        ref={resumeRef}
        sections={sections}
        information={resumeInformation}
        activeColor={activeColor}
        />
      </div>

    </div>
  )
}

export default ResumeGenerator;
