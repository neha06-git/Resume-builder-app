import React, { useEffect, useState, useRef, forwardRef } from 'react';
import { AtSign,Linkedin,GitHub, Phone, Paperclip, Calendar, MapPin } from 'react-feather';
// import styles from './Resume.module.css';

// const Resume = forwardRef((props,ref) => {
    

//     const information = props.information;
//     const sections = props.sections;
//     const containerRef = useRef();
    
//     const [columns, setColumns] = useState([[

//     ],[]]);
//     const [source,setSource] = useState("");
//     const [target,setTarget] = useState("");

//     const getFormattedDate = (value) => {
//         if(!value) return "";
//         const date = new Date(value);
//         // console.log(date);
//         return `${date.getDate()}/${
//             date.getMonth() + 1 
//          }/${date.getFullYear()}`;
    
//     };
    

//     const info={
//         workExp:information[sections.workExp],
//         summary:information[sections.summary],
//         project:information[sections.project],
//         achievements:information[sections.achievements],
//         academic:information[sections.academic],
//         basicInfo:information[sections.basicInfo],
//         other:information[sections.other],
//     };

//     const sectionDiv = {
//         [sections.summary]: (
//             <div
//               key={"summary"}
//               draggable
//               onDragOver={() => setTarget(info.summary?.id)}
//               onDragEnd={() => setSource(info.summary?.id)}
//               className={`${styles.section} ${
//                 info.summary?.sectionTitle ? "" : styles.hidden
//               }`}
//             >
//               <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
//               <div className={styles.content}>
//                 <p className={styles.overview}>{info.summary?.detail}</p>
//               </div>
//             </div>
//           ),
//         [sections.workExp]: (
//           <div
//             key={"workexp"}
//             draggable
//             onDragOver={() => setTarget(info.workExp?.id)}
//             onDragEnd={() => setSource(info.workExp?.id)}
//             className={`${styles.section} ${
//               info.workExp?.sectionTitle ? "" : styles.hidden
//             }`}
//           >
//             <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
//             <div className={styles.content}>
//               {info.workExp?.details?.map((item) => (
//                 <div className={styles.item} key={item.title}>
//                   {item.title ? (
//                     <p className={styles.title}>{item.title}</p>
//                   ) : (
//                     <span />
//                   )}
//                   {item.companyName ? (
//                     <p className={styles.subTitle}>{item.companyName}</p>
//                   ) : (
//                     <span />
//                   )}
//                   {item.certificationLink ? (
//                     <a className={styles.link} href={item.certificationLink}>
//                       <Paperclip />
//                       {item.certificationLink}
//                     </a>
//                   ) : (
//                     <span />
//                   )}
//                   {item.startDate && item.endDate ? (
//                     <div className={styles.date}>
//                       <Calendar /> {getFormattedDate(item.startDate)}-
//                       {getFormattedDate(item.endDate)}
//                     </div>
//                   ) : (
//                     <div />
//                   )}
//                   {item.location ? (
//                     <p className={styles.date}>
//                       <MapPin /> Remote
//                     </p>
//                   ) : (
//                     <span />
//                   )}
//                   {item.points?.length > 0 ? (
//                     <ul className={styles.points}>
//                       {item.points?.map((element, index) => (
//                         <li className={styles.point} key={element + index}>
//                           {element}
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <span />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ),
//         [sections.project]: (
//           <div
//             key={"project"}
//             draggable
//             onDragOver={() => setTarget(info.project?.id)}
//             onDragEnd={() => setSource(info.project?.id)}
//             className={`${styles.section} ${
//               info.project?.sectionTitle ? "" : styles.hidden
//             }`}
//           >
//             <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
//             <div className={styles.content}>
//               {info.project?.details?.map((item) => (
//                 <div className={styles.item}>
//                   {item.title ? (
//                     <p className={styles.title}>{item.title}</p>
//                   ) : (
//                     <span />
//                   )}
//                   {item.link ? (
//                     <a className={styles.link} href={item.link}>
//                       <Paperclip />
//                       {item.link}
//                     </a>
//                   ) : (
//                     <span />
//                   )}
//                   {item.github ? (
//                     <a className={styles.link} href={item.github}>
//                       <GitHub />
//                       {item.github}
//                     </a>
//                   ) : (
//                     <span />
//                   )}
//                   {item.overview ? (
//                     <p className={styles.overview}>{item.overview} </p>
//                   ) : (
//                     <span />
//                   )}
//                   {item.points?.length > 0 ? (
//                     <ul className={styles.points}>
//                       {item.points?.map((element, index) => (
//                         <li className={styles.point} key={element + index}>
//                           {element}
//                         </li>
//                       ))}
//                     </ul>
//                   ) : (
//                     <span />
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ),
//         [sections.academic]: (
//           <div
//             key={"academic"}
//             draggable
//             onDragOver={() => setTarget(info.academic?.id)}
//             onDragEnd={() => setSource(info.academic?.id)}
//             className={`${styles.section} ${
//               info.academic?.sectionTitle ? "" : styles.hidden
//             }`}
//           >
//             <div className={styles.sectionTitle}>
//               {info.academic?.sectionTitle}
//             </div>
//             <div className={styles.content}>
//               {info.academic?.details?.map((item) => (
//                 <div className={styles.item}>
//                   {item.title ? (
//                     <p className={styles.title}>{item.title}</p>
//                   ) : (
//                     <span />
//                   )}
//                   {item.college ? (
//                     <p className={styles.subTitle}>{item.college}</p>
//                   ) : (
//                     <span />
//                   )}
//                   {item.startDate && item.endDate ? (
//                     <div className={styles.date}>
//                       <Calendar /> {getFormattedDate(item.startDate)} -
//                       {getFormattedDate(item.endDate)}
//                     </div>
//                   ) : (
//                     ""
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         ),
//         [sections.achievements]: (
//           <div
//             key={"achievements"}
//             draggable
//             onDragOver={() => setTarget(info.achievements?.id)}
//             onDragEnd={() => setSource(info.achievements?.id)}
//             className={`${styles.section} ${
//               info.achievements?.sectionTitle ? "" : styles.hidden
//             }`}
//           >
//             <div className={styles.sectionTitle}>
//               {info.achievements?.sectionTitle}
//             </div>
//             <div className={styles.content}>
//               {info.achievements?.points?.length > 0 ? (
//                 <ul className={styles.numPoints}>
//                   {info.achievements?.points?.map((element, index) => (
//                     <li className={styles.point} key={element + index}>
//                       {element}
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <span />
//               )}
//             </div>
//           </div>
//         ),
       
//         [sections.other]: (
//           <div
//             key={"other"}
//             draggable
//             onDragOver={() => setTarget(info.other?.id)}
//             onDragEnd={() => setSource(info.other?.id)}
//             className={`${styles.section} ${
//               info.other?.sectionTitle ? "" : styles.hidden
//             }`}
//           >
//             <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
//             <div className={styles.content}>
//               <p className={styles.overview}>{info?.other?.detail}</p>
//             </div>
//           </div>
//         ),
//       };


   
// const swapSourceTarget = (source, target) => {
//     if (!source || !target) return;
//     const tempCol = [[...columns[0]], [...columns[1]]];

//     let sourceRowIndex = tempCol[0].findIndex((item) => item === source);
//     let sourceColIndex = 0;
//     if (sourceRowIndex < 0) {
//       sourceColIndex = 1;
//       sourceRowIndex = tempCol[1].findIndex((item) => item === source);
//     }

//     let targetRowIndex = tempCol[0].findIndex((item) => item === target);
//     let targetColIndex = 0;
//     if (targetRowIndex < 0) {
//       targetColIndex = 1;
//       targetRowIndex = tempCol[1].findIndex((item) => item === target);
//     }

//     const tempSource = tempCol[sourceColIndex][sourceRowIndex];
//     tempCol[sourceColIndex][sourceRowIndex] =
//       tempCol[targetColIndex][targetRowIndex];

//     tempCol[targetColIndex][targetRowIndex] = tempSource;

//     setColumns(tempCol);
//   };

// useEffect(() => {
//     swapSourceTarget(source, target);
//   }, [source]);

// useEffect(()=>{
//   const container = containerRef.current;
//   if(!props.activeColor || !container) return;
//   container.style.setProperty("--color",props.activeColor);
  
// }, [props.activeColor]);

//   return (
    
//     <div ref={ref}>
//         <div ref={containerRef} className={styles.container}>
//       <div className={styles.header}>
//       <p className={styles.heading}>{info.basicInfo?.detail?.name}</p>
//       <p className={styles.subHeading}>{info.basicInfo?.detail?.title}</p>

//       <div className={styles.links}>
//         {
//             info.basicInfo?.detail?.email ? (
//             <a className={styles.link} type="email"><AtSign />
//              info.basicInfo?.detail?.email
//             </a>
//         ):<span />}
//         {
//             info.basicInfo?.detail?.phone ? (
//             <a className={styles.link}><Phone />
//              {info.basicInfo?.detail?.phone}
//             </a>
//         ):<span />}
//         {
//             info.basicInfo?.detail?.linkedin ? (
//             <a className={styles.link}><Linkedin />
//              {info.basicInfo?.detail?.linkedin}
//             </a>
//         ) : <span />}
//          {
//             info.basicInfo?.detail?.github ? (
//             <a className={styles.link}>< GitHub/>
//              {info.basicInfo?.detail?.github}
//             </a>
//         ): <span /> }
   
     
//       </div>
//       </div>

//       <div className={styles.main}>
//         <div className={styles.col-1}>
//             {
//                 columns[0].map(item=>sectionDiv[item])
//             }
//         </div>
//         <div className={styles.col-2}>
//         {
//                 columns[1].map(item=>sectionDiv[item])
//             }
//         </div>
        
//       </div>
//     </div>
//     </div>
//   );
// });

// export default Resume;
import styles from "./Resume.module.css";

const Resume = forwardRef((props, ref) => {
  const information = props.information;
  const sections = props.sections;
  const containerRef = useRef();

  const [columns, setColumns] = useState([[], []]);
  const [source, setSource] = useState("");
  const [target, setTarget] = useState("");

  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievements: information[sections.achievements],
    academic: information[sections.academic],
    basicInfo: information[sections.basicInfo],
    summary: information[sections.summary],
    other: information[sections.other],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.summary]: (
        <div
          key={"summary"}
          draggable
          onDragOver={() => setTarget(info.summary?.id)}
          onDragEnd={() => setSource(info.summary?.id)}
          className={`${styles.section} ${
            info.summary?.sectionTitle ? "" : styles.hidden
          }`}
        >
          <div className={styles.sectionTitle}>{info.summary?.sectionTitle}</div>
          <div className={styles.content}>
            <p className={styles.overview}>{info.summary?.detail}</p>
          </div>
        </div>
      ),
    [sections.workExp]: (
      <div
        key={"workexp"}
        draggable
        onDragOver={() => setTarget(info.workExp?.id)}
        onDragEnd={() => setSource(info.workExp?.id)}
        className={`${styles.section} ${
          info.workExp?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={styles.content}>
          {info.workExp?.details?.map((item) => (
            <div className={styles.item} key={item.title}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.companyName ? (
                <p className={styles.subTitle}>{item.companyName}</p>
              ) : (
                <span />
              )}
              {item.certificationLink ? (
                <a className={styles.link} href={item.certificationLink}>
                  <Paperclip />
                  {item.certificationLink}
                </a>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)}-
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                <div />
              )}
              {item.location ? (
                <p className={styles.date}>
                  <MapPin /> Remote
                </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        draggable
        onDragOver={() => setTarget(info.project?.id)}
        onDragEnd={() => setSource(info.project?.id)}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={styles.content}>
          {info.project?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.link ? (
                <a className={styles.link} href={item.link}>
                  <Paperclip />
                  {item.link}
                </a>
              ) : (
                <span />
              )}
              {item.github ? (
                <a className={styles.link} href={item.github}>
                  <GitHub />
                  {item.github}
                </a>
              ) : (
                <span />
              )}
              {item.overview ? (
                <p className={styles.overview}>{item.overview} </p>
              ) : (
                <span />
              )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.academic]: (
      <div
        key={"academic"}
        draggable
        onDragOver={() => setTarget(info.academic?.id)}
        onDragEnd={() => setSource(info.academic?.id)}
        className={`${styles.section} ${
          info.academic?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.academic?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.academic?.details?.map((item) => (
            <div className={styles.item}>
              {item.title ? (
                <p className={styles.title}>{item.title}</p>
              ) : (
                <span />
              )}
              {item.college ? (
                <p className={styles.subTitle}>{item.college}</p>
              ) : (
                <span />
              )}
              {item.startDate && item.endDate ? (
                <div className={styles.date}>
                  <Calendar /> {getFormattedDate(item.startDate)} -
                  {getFormattedDate(item.endDate)}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.achievements]: (
      <div
        key={"achievements"}
        draggable
        onDragOver={() => setTarget(info.achievements?.id)}
        onDragEnd={() => setSource(info.achievements?.id)}
        className={`${styles.section} ${
          info.achievements?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.achievements?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.achievements?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.achievements?.points?.map((elem, index) => (
                <li className={styles.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
   
    [sections.other]: (
      <div
        key={"other"}
        draggable
        onDragOver={() => setTarget(info.other?.id)}
        onDragEnd={() => setSource(info.other?.id)}
        className={`${styles.section} ${
          info.other?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info?.other?.detail}</p>
        </div>
      </div>
    ),
  };

  const swapSourceTarget = (source, target) => {
    if (!source || !target) return;
    const tempCol = [[...columns[0]], [...columns[1]]];

    let sourceRowIndex = tempCol[0].findIndex((item) => item === source);
    let sourceColIndex = 0;
    if (sourceRowIndex < 0) {
      sourceColIndex = 1;
      sourceRowIndex = tempCol[1].findIndex((item) => item === source);
    }

    let targetRowIndex = tempCol[0].findIndex((item) => item === target);
    let targetCoIndex = 0;
    if (targetRowIndex < 0) {
      targetCoIndex = 1;
      targetRowIndex = tempCol[1].findIndex((item) => item === target);
    }

    const tempSource = tempCol[sourceColIndex][sourceRowIndex];
    tempCol[sourceColIndex][sourceRowIndex] =
      tempCol[targetCoIndex][targetRowIndex];

    tempCol[targetCoIndex][targetRowIndex] = tempSource;

    setColumns(tempCol);
  };

  useEffect(() => {
    setColumns([
      [sections.summary, sections.workExp, sections.academic],
      [sections.project, sections.achievements, sections.other],
      
    ]);
  }, []);

  useEffect(() => {
    swapSourceTarget(source, target);
  }, [source]);

  useEffect(() => {
    const container = containerRef.current;
    if (!props.activeColor || !container) return;

    container.style.setProperty("--color", props.activeColor);
  }, [props.activeColor]);

  return (
    <div ref={ref}>
      <div ref={containerRef} className={styles.container}>
        <div className={styles.header}>
          <p className={styles.heading}>{info.basicInfo?.detail?.name}</p>
          <p className={styles.subHeading}>{info.basicInfo?.detail?.title}</p>

          <div className={styles.links}>
            {info.basicInfo?.detail?.email ? (
              <a className={styles.link} type="email">
                <AtSign /> {info.basicInfo?.detail?.email}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.phone ? (
              <a className={styles.link}>
                <Phone /> {info.basicInfo?.detail?.phone}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.linkedin ? (
              <a className={styles.link}>
                <Linkedin /> {info.basicInfo?.detail?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.github ? (
              <a className={styles.link}>
                <GitHub /> {info.basicInfo?.detail?.github}
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.col1}>
            {columns[0].map((item) => sectionDiv[item])}
          </div>
          <div className={styles.col2}>
            {columns[1].map((item) => sectionDiv[item])}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Resume;
