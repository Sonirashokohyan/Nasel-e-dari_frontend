
import ProfileInfo from "@shared/components/ProfilePageComponents/ProfileInfo";
import Statistics from "@shared/components/ProfilePageComponents/Statistics";
import Lessons from "@shared/components/ProfilePageComponents/Lessons";
import IconButton from "@shared/components/ProfilePageComponents/IconButton";
import { IoIosShareAlt } from "react-icons/io";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { ImageDivProfiePage, LeftDivProfilePage, MainDivProfilePage, ProfileDivProfilePage, ProfilePageDiv } from "@shared/styled/ProfilePageStyled";
import ProfilePic from '../../shared/Images/profile.png'
import Footer from "@widgets/Footer";


const Page = () => {
  return (
    <ProfilePageDiv>
    <MainDivProfilePage>
      <LeftDivProfilePage>
        <IconButton icon={<IoIosShareAlt />} position="left" />
        <IconButton icon={<HiOutlinePencilSquare />} position="right" />
        <ProfileDivProfilePage>
            <ImageDivProfiePage >
              <img src={ProfilePic} alt="user-profile" />
            </ImageDivProfiePage>
          <ProfileInfo />
        </ProfileDivProfilePage>
        <Statistics />  
      </LeftDivProfilePage>
      <Lessons />
    </MainDivProfilePage>
    <Footer/>
    </ProfilePageDiv>
  );
};

export { Page };

















// import React from 'react'
// import { FaStar, FaBook, FaBookOpen } from "react-icons/fa";
// import { AiFillLike } from "react-icons/ai";
// import { ProfilePic } from '@shared/Images/Image';
// import { HiOutlinePencilSquare } from "react-icons/hi2";
// import { IoIosShareAlt } from "react-icons/io";


// import styled from 'styled-components';

// const MainDiv = styled.main`
// width: 100%;
// height: 90vh;
//   display:flex;
//   align-items:center;
//   justify-content:center;
//   padding:1rem;
//   gap:1rem;
//   @media (max-width: 700px) {
//     padding: .3rem;
//     gap: .5rem;
//   }
//   @media (max-width: 500px) {
//     flex-direction: column;
//     gap:1rem;
//     padding: 1rem;
//     padding-top: 4rem;
//   }
// `;

// const ShareDiv = styled.div`
//   position:absolute;
//   top:7px;
//   left:7px;
//   padding:0.5rem;
//   background-color:rgb(185, 194, 216);
//   border-radius:10px;
//   font-size:1.5rem;
//   color:rgb(24, 83, 221);
//   cursor:pointer;
//   &:hover{
//     background-color:rgb(204, 213, 233);
//   }
//   @media (max-width: 1000px) {
//     padding: .3rem;
//     font-size: 1.2rem;
//   }
// `;
// const EditDiv = styled.div`
//   position:absolute;
//   top:7px;
//   right:7px;
//   padding: 0.5rem;
//     background-color:rgb(185, 194, 216);
//     font-size:1.5rem;
// border-radius:10px;
//   color:rgb(24, 83, 221);
//   cursor:pointer;
//   &:hover{
//     background-color:rgb(204, 213, 233);
//   }
//   @media (max-width: 1000px) {
//     padding: .3rem;
//     font-size: 1.2rem;
//   }

// `;

// const LeftDivStyle = styled.div`
//   position:relative;  
//   width:50%;
//   display:flex;
//   flex-direction:column;
//   border:2px solid green;
//   border-radius:10px;
//   @media (max-width: 1000px) {
//     width: 60%;
//   }
//   @media (max-width: 500px) {
//     width: 90%;
//   }
// `;


// const ProfileDivStyle = styled.div`
//   display:flex;
//   align-items:center;
//   gap:1rem;
//   padding-inline: 2rem;
//   padding-block: 4rem 1rem;
//   border-bottom:2px solid green;
//   @media (max-width: 1000px) {
//     gap: .5rem;
//     padding-inline: 1rem;
//     padding-block: 3rem 1rem;
//   }
//   @media (max-width: 700px) {
//     flex-direction: column;
//     padding-block: .5rem;
//   }
// `;

// const ImageDiv = styled.div`
//   overflow: hidden;
//   border-radius:50%;
//   width:6rem;
//   height:6rem;
//   & img{
//   height:100%;
//   width:100%;
//   object-fit: center;}
//   @media (max-width: 1000px) {
//     width: 5rem;
//     height: 5rem;
//   }
//   @media (max-width: 700px) {
//     width: 4rem;
//     height: 4rem;
//   }
// `;

// const ProfileInfo = styled.div`
//   display:flex;
//   flex-direction: column;
//   gap:.5rem;
//   & h3{
//   font-size:1.2rem;
//   color:black;
//   margin: 0;
//   }
//   & p{
//     color:gray;
//     font-size:.9rem;
//     margin: 0;
//   }
//     & span{
//       color: rgb(11, 105, 220);
//           font-size:.9rem;
//     }
//     @media (max-width: 1000px) {
//       gap: .3rem;
//       & h3{
//         font-size: .9rem;
//       }
//       & p{
//         font-size: .7rem;
//       }
//       & span{
//         font-size: .7rem;
//       }
//   }
//   @media (max-width: 700px) {
//     text-align: center;
//     gap:.1rem;
//   }
// `;


// const BottomStyles = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding-block: 2rem;
//   @media (max-width: 700px) {
//     padding-block: .5rem;
//   }
// `;

// const Statistics = styled.div`
//   display:flex;
//   align-items:center;
//   justify-content:space-around;
//   margin-block:.5rem;
//   flex-wrap: wrap;
  
// `;

// const StatisticsStyles = styled.div`
//   display:flex;
//   align-items: center;
//   width:46%;
//   padding:.5rem;
//   border:2px solid green;
//     border-radius:5px;
//   gap:.3rem;
//   & span{
//     color: rgb(11, 105, 220);
//     font-size: 1.2rem;
//   }
//   & div{
//     display: flex;
//     align-items: center;
//     gap: .2rem;
//     & p{
//       margin: 0;
//       font-size: .9rem;
//     }
//   }
  
//   @media (max-width: 700px) {
//     width: 90%;
//     margin-bottom: .5rem;
//     padding: .3rem;
//   }
// `;


// const RightDiv = styled.div`
//   display:flex;
//   width:30%;
//   flex-direction:column;
//   border:2px solid green;
//   border-radius:10px;
//   overflow:hidden;
//   height:70%;
//   & h3 {
//     text-align:center;
//     border-bottom:2px solid green;
//     padding:.7rem 1rem;
//   }
//     & div{
//       border-bottom:1px solid green;
//       padding:.5rem 1rem ;
//     }
//     @media (max-width: 1000px) {
//     font-size: .8rem;
//   }
//   @media (max-width: 1000px) {
//     width: auto;
//   }
//   @media (max-width: 500px) {
//     width: 90%;
//   }
// `;


// const Page = () => {
//   return (
//     <MainDiv>
//       <LeftDivStyle>
//         <ShareDiv><IoIosShareAlt /></ShareDiv>
//         <EditDiv><HiOutlinePencilSquare /></EditDiv>
//         <ProfileDivStyle>
//           <ImageDiv>
//             <img src={ProfilePic} alt="user profile" />
//           </ImageDiv>
//           <ProfileInfo>
//             <h3>Bozorg Omid Shokohyan</h3>
//             <p>Bozorg_47</p>
//             <span>Joined 17 March</span>
//           </ProfileInfo>
//         </ProfileDivStyle>
//         <BottomStyles>
//           <h4 style={{ paddingLeft: "3%", paddingTop: "1rem" }}>Statistics</h4>
//           <Statistics>
//             <StatisticsStyles>
//               <span><FaStar /></span>
//               <div>
//                 <p>0</p>
//                 <p>Day Streak</p>
//               </div>

//             </StatisticsStyles>
//             <StatisticsStyles>
//               <span><AiFillLike /></span>
//               <div>
//                 <p>0%</p>
//                 <p>Percentage</p>
//               </div>
//             </StatisticsStyles>
//           </Statistics>
//           <Statistics>
//             <StatisticsStyles>
//               <span><FaBookOpen /></span>
//               <div>
//                 <p>0</p>
//                 <p>Unit</p>
//               </div>
//             </StatisticsStyles>
//             <StatisticsStyles>
//               <span><FaBook /></span>
//               <div>
//                 <p>0</p>
//                 <p>Lesson</p>
//               </div>
//             </StatisticsStyles>
//           </Statistics>
//         </BottomStyles>
//       </LeftDivStyle>
//       <RightDiv>
//         <h3>Last lessons</h3>
//         <div>Unit 1 , Lesson 1 , 99%</div>
//       </RightDiv>
//     </MainDiv>
//   )
// }

// export { Page }