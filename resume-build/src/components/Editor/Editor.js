import React, { useEffect, useState } from 'react';
import { X } from 'react-feather';
import InputControl from '../InputControl/InputControl';
import styles from './Editor.module.css';

function Editor(props) {
    const sections = props.sections;
    const information = props.information;
    const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(sections)[0]);
    const [activeInformation,setActiveInformation]=useState(
        information[sections[Object.keys(sections)[0]]]
    );
    const  [activeDetailIndex, setActiveDetailIndex] = useState(0); 
    const [sectionTitle,setSectionTitle] = useState(
        sections[Object.keys(sections)[0]]
    );
    const [values,setValues] = useState({
        name: activeInformation?.detail?.name || "",
        title: activeInformation?.detail?.title || "",
        linkedin: activeInformation?.detail?.linkedin || "",
        github: activeInformation?.detail?.github || "",
        phone: activeInformation?.detail?.phone || "",
        email: activeInformation?.detail?.email || "",
    });
    const handlePointUpdate = (value,index) => {
        const tempValues = {...values};
        if(!Array.isArray(tempValues.points))tempValues.points = [];
        tempValues.points[index]=value;
        setValues(tempValues);
    };



    const workExpBody=(
    <div className={styles.detail}>
       <div className={styles.row}>
        <InputControl 
          Label="Title"
          placeholder="Enter your work title eg. Frontend Developer"
          value={values.title}
          onChange={(e)=> setValues((prev) => ({...prev, title: e.target.value }))
        }
        />
         <InputControl 
          Label="Company Name"
          placeholder="Enter your company name eg. Amazon"
          value={values.companyName}
          onChange={(e)=> setValues((prev) => ({...prev, companyName: e.target.value }))
        }
        />
       </div>
       <div className={styles.row}>
        <InputControl 
          Label="Certificate Link"
          placeholder="Enter your certificate link"
          value={values.certificationLink}
          onChange={(e)=> setValues((prev) => ({...prev, certificationLink: e.target.value }))
        }
          
        />
         <InputControl 
          Label="Location"
          placeholder="Enter location eg. Remote"
          value={values.location}
          onChange={(e)=> setValues((prev) => ({...prev, location: e.target.value }))
        }
        />
       </div>
       <div className={styles.row}>
        <InputControl 
          Label="Start Date"
          type="date"
          placeholder="Enter start date of your work"
          value={values.startDate}
          onChange={(e)=> setValues((prev) => ({...prev, startDate: e.target.value }))
        }
        />
         <InputControl 
          Label="End Date"
          type="date"
          placeholder="Enter end date of your work"
          value={values.endDate}
          onChange={(e)=> setValues((prev) => ({...prev, endDate: e.target.value }))
        }
        />
       </div>
       <div className={styles.column}>
        <label>Enter your work description</label>
        <InputControl placeholder="Point 1" 
        value={values.points?values.points[0] : ""}
        onChange={(e) => handlePointUpdate(e.target.value,0)}
        />
        <InputControl placeholder="Point 2" 
        value={values.points?values.points[1] : ""}
        onChange={(e) => handlePointUpdate(e.target.value,1)}
        />
        <InputControl placeholder="Point 3" 
        value={values.points?values.points[2] : ""}
        onChange={(e) => handlePointUpdate(e.target.value,2)}
        />

       </div>
    </div>
    );
    const projectBody=(
        <div className={styles.detail}>
           <div className={styles.row}>
            <InputControl 
              Label="Title"
              placeholder="Enter your project title eg. ChatBot App"
              value={values.title}
              onChange={(e)=> setValues((prev) => ({...prev, title: e.target.value }))
            }
            />
            </div>
            <InputControl 
              Label="Overview"
              placeholder="Enter one line basic description"
              value={values.overview}
              onChange={(e)=> setValues((prev) => ({...prev, overview: e.target.value }))
            }
            />
           <div className={styles.row}>
            <InputControl 
              Label="Deployed Link"
              placeholder="Enter deployed link of your project"
              value={values.link}
              onChange={(e)=> setValues((prev) => ({...prev, link: e.target.value }))
            }
            />
             <InputControl 
              Label="GitHub Link"
              placeholder="Enter github link of your project"
              value={values.github}
              onChange={(e)=> setValues((prev) => ({...prev, github: e.target.value }))
            }
            />
           </div>
          <div className={styles.column}>
            <label>Enter your project description</label>
            <InputControl placeholder="Point 1" 
            value={values.points ? values.points[0] : ""}
            onChange={(e) => handlePointUpdate(e.target.value,0)}
            />
            <InputControl placeholder="Point 2" 
            value={values.points ? values.points[1] : ""}
            onChange={(e) => handlePointUpdate(e.target.value,1)}
            />
            <InputControl placeholder="Point 3" 
            value={values.points ? values.points[2] : ""}
            onChange={(e) => handlePointUpdate(e.target.value,2)}
            />
    
           </div>
        </div>
        );
    
        const academicBody=(
            <div className={styles.detail}>
               <div className={styles.row}>
                <InputControl 
                  Label="Title"
                  placeholder="Enter your title eg. BCA"
                  value={values.title}
                  onChange={(e)=> setValues((prev) => ({...prev, title: e.target.value }))
                }
                />
                </div>
                <InputControl 
                  Label="College/School Name"
                  placeholder="Enter name of your college/school"
                  value={values.college}
                  onChange={(e)=> setValues((prev) => ({...prev, college: e.target.value }))
                }
                />
               <div className={styles.row}>
                <InputControl 
                  Label="Start Date"
                  type="date"
                  placeholder="Enter start date"
                  value={values.startDate}
                  onChange={(e)=> setValues((prev) => ({...prev, startDate: e.target.value }))
                }
                />
                 <InputControl 
                  Label="End Date"
                  type="date"
                  placeholder="Enter end date"
                  value={values.endDate}
                  onChange={(e)=> setValues((prev) => ({...prev, endDate: e.target.value }))
                }
                />
               </div>
             
            </div>
            );
            
                const basicInfoBody=(
                    <div className={styles.detail}>
                       <div className={styles.row}>
                        <InputControl 
                          Label="Name"
                          placeholder="Enter your full Name eg. John Doe"
                          value={values.name}
                          onChange={(e)=> setValues((prev) => ({...prev, name: e.target.value }))
                        }
                        />
                        </div>
                        <InputControl 
                          Label="Title"
                          placeholder="Enter your title eg. Frontend Developer"
                          value={values.title}
                          onChange={(e)=> setValues((prev) => ({...prev, title: e.target.value }))
                        }
                        />
                       <div className={styles.row}>
                        <InputControl 
                          Label="Linkedin Link"
                          placeholder="Enter your linkedin profile link"
                          value={values.linkedin}
                          onChange={(e)=> setValues((prev) => ({...prev, linkedin: e.target.value }))
                        }
                        />
                         <InputControl 
                          Label="GitHub Link"
                          placeholder="Enter your github profile link"
                          value={values.github}
                          onChange={(e)=> setValues((prev) => ({...prev, github: e.target.value }))
                        }
                        />
                       </div>
                       <div className={styles.row}>
                        <InputControl 
                          Label="Email address"
                          placeholder="Enter your email address"
                          value={values.email}
                          onChange={(e)=> setValues((prev) => ({...prev, email: e.target.value }))
                        }
                        />
                         <InputControl 
                          Label="Phone Number"
                          placeholder="Enter your phone number"
                          value={values.phone}
                          onChange={(e)=> setValues((prev) => ({...prev, phone: e.target.value }))
                        }
                        />
                       </div>
                      
                    </div>
                    );
                    const achievementsBody=(
                         <div className={styles.detail}>
                          <div className={styles.column}>
                            <label>List of your achievements</label>
                            <InputControl placeholder="Point 1" 
                            value={values.points ? values.points[0] : ""}
                            onChange={(e) => handlePointUpdate(e.target.value,0)}
                            />
                            <InputControl placeholder="Point 2" 
                            value={values.points ? values.points[1] : ""}
                            onChange={(e) => handlePointUpdate(e.target.value,1)}
                            />
                            <InputControl placeholder="Point 3" 
                            value={values.points ? values.points[2] : ""}
                            onChange={(e) => handlePointUpdate(e.target.value,2)}
                            />
                            <InputControl placeholder="Point 4" 
                            value={values.points ? values.points[3] : ""}
                            onChange={(e) => handlePointUpdate(e.target.value,3)}
                            />
                           </div>
                           </div>
                        );
                        const summaryBody=(
                        
                            <div className={styles.detail}>
                              
                              <InputControl 
                              Label="Profile Summary"
                              placeholder="Enter your objectives/summary" 
                              value={values.summary}
                              onChange={(e)=> setValues((prev) => ({...prev, summary: e.target.value }))
                            }
                              />
                              
                             </div>
                         
                          );
                          const otherBody=(
                        
                            <div className={styles.detail}>
                              
                              <InputControl 
                              Label="Other"
                              placeholder="Enter any additional detail..." 
                              value={values.other}
                              onChange={(e)=> setValues((prev) => ({...prev, other: e.target.value }))
                            }
                              />
                              
                             </div>
                         
                          );
            

    const generateBody=()=>{
     switch(sections[activeSectionKey]){
        case sections.basicInfo:
            return basicInfoBody;
        case sections.summary:
            return summaryBody;
        case sections.workExp:
            return workExpBody;
        case sections.project:
            return projectBody;
        case sections.academic:
            return academicBody;
        case sections.achievements:
            return achievementsBody;
        case sections.other:
            return otherBody;
            default:
                return null;

     }
    };

    const handleSubmit = () => {
        switch(sections[activeSectionKey]){

            
            case sections.basicInfo:
               {
                const tempDetail={
                 name:values.name,
                 title:values.title,
                 linkedin:values.linkedin,
                 github:values.github,
                 email:values.email,
                 phone:values.phone,
                }
                 props.setInformation(prev=>({
                    ...prev,
                    [sections.basicInfo]
                 : {...prev[sections.basicInfo],
                    detail:tempDetail,
                    sectionTitle,
                },
             }));
                 break;
            }
            case sections.summary:
                        {
                         const tempDetail = values.summary;
                         props.setInformation(prev=>({
                             ...prev,
                             [sections.summary]
                          : {...prev[sections.summary],
                             detail:tempDetail,
                             sectionTitle,
                         },
                      }));
                          break;
                         }
          
            case sections.workExp: {
                const tempDetail = {
                  certificationLink: values.certificationLink,
                  title: values.title,
                  startDate: values.startDate,
                  endDate: values.endDate,
                  companyName: values.companyName,
                  location: values.location,
                  points: values.points,
                };
                const tempDetails = [...information[sections.workExp]?.details];
                tempDetails[activeDetailIndex] = tempDetail;
        
                props.setInformation((prev) => ({
                  ...prev,
                  [sections.workExp]: {
                    ...prev[sections.workExp],
                    details: tempDetails,
                    sectionTitle,
                  },
                }));
                break;
                }
                case sections.project:
               {
                const tempDetail={
                 link:values.link,
                 title:values.title,
                 overview:values.overview,
                 github:values.github,
                 points:values.points,
                }

                const tempDetails = [...information[sections.project]?.details]
                tempDetails[activeDetailIndex]=tempDetail;

                 props.setInformation(prev=>({
                    ...prev,
                    [sections.project]
                 : {...prev[sections.project],
                    details:tempDetails,
                    sectionTitle,
                },
             }));
                 break;
                }
                case sections.academic:
               {
                const tempDetail={
                 
                 title:values.title,
                 startDate:values.startDate,
                 endDate:values.endDate,
                 college:values.college,
                
                }

                const tempDetails = [...information[sections.academic]?.details]
                tempDetails[activeDetailIndex]=tempDetail;
                 props.setInformation(prev=>({
                    ...prev,
                    [sections.academic]
                 : {...prev[sections.academic],
                    details:tempDetails,
                    sectionTitle,
                },
             }));
                 break;
                }
                case sections.achievements:
                    {
                     const tempPoints= values.points;
                    
                      props.setInformation(prev=>({
                         ...prev,
                         [sections.achievements]
                      : {...prev[sections.achievements],
                        points:tempPoints,
                         sectionTitle,
                     },
                  }));
                      break;
                     }
                
                     
                         case sections.other:
                            {
                             const tempDetail = values.other;
                             props.setInformation(prev=>({
                                 ...prev,
                                 [sections.other]
                              : {...prev[sections.other],
                                 detail:tempDetail,
                                 sectionTitle,
                             },
                          }));
                              break;
                             }
                         
    
         
    
         }
         
    };
    
const handleAddNew = () => {
    const details = activeInformation?.details;
    if (!details) return;
    const lastDetail = details.slice(-1)[0];
    if (!Object.keys(lastDetail).length) return;
    details?.push({});

    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));
    setActiveDetailIndex(details?.length - 1);
  };


const handleDelete = (index) => {
    const details = activeInformation?.details
      ? [...activeInformation?.details]
      : "";
    if (!details) return;
    details.splice(index, 1);
    props.setInformation((prev) => ({
      ...prev,
      [sections[activeSectionKey]]: {
        ...information[sections[activeSectionKey]],
        details: details,
      },
    }));

    setActiveDetailIndex((prev) => (prev === index ? 0 : prev - 1));
  };
    
    useEffect(()=>{
       const activeInfo =  information[sections[activeSectionKey]]
      setActiveInformation(activeInfo);
      setSectionTitle(sections[activeSectionKey]);
      setActiveDetailIndex(0);
      setValues({
       
        name: activeInfo?.detail?.name || "",
        overview: activeInfo.details ? activeInfo.details[0]?.overview || "" : "",
        link: activeInfo.details ? activeInfo.details[0]?.link || "" : "",
        certificationLink: activeInfo.details ? activeInfo.details[0]?.certificationLink || "" : "",
        companyName: activeInfo.details ? activeInfo.details[0]?.companyName || "" : "",
        location: activeInfo.details ? activeInfo.details[0]?.location || "" : "",
        startDate: activeInfo.details ? activeInfo.details[0]?.startDate || "" : "",
        endDate: activeInfo.details ? activeInfo.details[0]?.endDate || "" : "",
        points: activeInfo.details ? activeInfo.details[0]?.points  ? [...activeInfo.details[0]?.points]  
        : ""
        : activeInfo?.points
        ?[...activeInfo.points]
        : "",
        title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo?.detail?.title || "",
        linkedin: activeInfo?.detail?.linkedin || "",
        github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo?.detail?.github || "",
        phone: activeInfo?.detail?.phone || "",
        email: activeInfo?.detail?.email || "",
        summary: typeof activeInfo?.detail!== "object" ?activeInfo.detail : "",
        other: typeof activeInfo?.detail!== "object" ?activeInfo.detail : "",

        
      });

    },[activeSectionKey]);

    useEffect(()=>{
        setActiveInformation(information[sections[activeSectionKey]]);
    }, [information]);

    useEffect(()=>{
      const details=activeInformation?.details
      if(!details) return;

      const activeInfo = information[sections[activeSectionKey]];
      setValues({
        overview: activeInfo.details[activeDetailIndex]?.overview || "",
        link: activeInfo.details[activeDetailIndex]?.link || "",
        certificationLink:
          activeInfo.details[activeDetailIndex]?.certificationLink || "",
        companyName: activeInfo.details[activeDetailIndex]?.companyName || "",
        location: activeInfo.details[activeDetailIndex]?.location || "",
        startDate: activeInfo.details[activeDetailIndex]?.startDate || "",
        endDate: activeInfo.details[activeDetailIndex]?.endDate || "",
        points: activeInfo.details[activeDetailIndex]?.points || "",
        title: activeInfo.details[activeDetailIndex]?.title || "",
        linkedin: activeInfo.details[activeDetailIndex]?.linkedin || "",
        github: activeInfo.details[activeDetailIndex]?.github || "",
        college: activeInfo.details[activeDetailIndex]?.college || "",
      });
    },[activeDetailIndex]);

    
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            {Object.keys(sections)?.map((key) =>( 
        <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
          {sections[key]}
          </div>
          ))}
      </div>
       <div className={styles.body}>
          <InputControl Label="Title" placeholder="Enter the section title" 
            value={sectionTitle}
            onChange={(e) => setSectionTitle(e.target.value)}
          />
            <div className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div
                  className={`${styles.chip} ${
                    activeDetailIndex === index ? styles.active : ""
                  }`}
                  key={item.title + index}
                  onClick={() => setActiveDetailIndex(index)}
                >
                  <p>
                    {sections[activeSectionKey]} {index + 1}
                  </p>
                  <X
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(index);
                    }}
                  />
                </div>
              ))
            : ""}
          {activeInformation?.details &&
          activeInformation?.details?.length > 0 ? (
            <div className={styles.new} onClick={handleAddNew}>
              +New
            </div>
          ) : (
            ""
          )}
        </div>
           {generateBody()}
           <button onClick={handleSubmit}>Save</button>
       </div>
    </div>
  );
}

export default Editor;
