// import styles from '../../styles/Chart.module.css'
import { Typography } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "./ProgressProvider";

export default function Chart ({isDarkTheme}){
  let path='';
  let trail='';
  let text='';
  isDarkTheme===false ? [path='#00a982',trail='#ceddd1',text='#005945'] : [path='#00a982',trail='#6b6b6b',text='#00c99a']
  const max = 100;
  const vray = 90;
  const photoshop = 70;
  const autocad = 80;
  return (
    <div style={{margin: "auto" , height:"auto",display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
      <Example label="3DS MAX">
        <ProgressProvider valueStart={0} valueEnd={max}>
          {value => <CircularProgressbar value={value} text={`${value}%`} styles={{path:{stroke: path} , trail:{stroke: trail}, text: { fill: text,fontSize: '27px'}}} />}
        </ProgressProvider>
      </Example>
      <Example label="Vray render engine">
        <ProgressProvider valueStart={0} valueEnd={vray}>
          {value => <CircularProgressbar value={value} text={`${value}%`} styles={{path:{stroke: path},trail:{stroke: trail}, text: { fill: text,fontSize: '27px'}}} />}
        </ProgressProvider>
      </Example>
      <Example label="AutoCAD 2D">
        <ProgressProvider valueStart={0} valueEnd={autocad}>
          {value => <CircularProgressbar value={value} text={`${value}%`} styles={{path:{stroke: path} ,trail:{stroke: trail},  text: { fill: text,fontSize: '27px'}}} />}
        </ProgressProvider>
      </Example>
      <Example label="Adobe Photoshop">
        <ProgressProvider valueStart={0} valueEnd={photoshop}>
          {value => <CircularProgressbar value={value} text={`${value}%`} styles={{path:{stroke: path} ,trail:{stroke: trail},  text: { fill: text,fontSize: '27px'}}} />}
        </ProgressProvider>
      </Example>
    </div>
  );
};

function Example(props) {
  return (
    <>
       <div>
        <Typography color= "textColor.superDark" sx={{width:"fit-content",margin:"20px auto", fontSize:"18px",fontWeight:"50px"}}>{props.label}</Typography>
        <div style={{ width: "160px" }}>{props.children}</div>
        </div>
    </>
  );
}
