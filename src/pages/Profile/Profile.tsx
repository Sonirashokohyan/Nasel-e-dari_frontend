import React from 'react'
import { FaStar,FaBook , FaBookOpen } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { ProfilePic } from '@shared/Images/Image';
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { IoIosShareAlt } from "react-icons/io";


import styled from 'styled-components';

const MainDiv = styled.main`
width: 100%;
height: 90vh;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-wrap:wrap;
  padding:1rem;
  gap:1rem;
`;

const ShareDiv = styled.div`
  position:absolute;
  top:5px;
  left:5px;
  padding:0.5rem;
  background-color:rgb(185, 194, 216);
  border-radius:10px;
  font-size:1.5rem;
  color:rgb(24, 83, 221);
  cursor:pointer;
  &:hover{
    background-color:rgb(204, 213, 233);
  }
`;
const EditDiv = styled.div`
  position:absolute;
  top:5px;
  right:5px;
  padding: 0.5rem;
    background-color:rgb(185, 194, 216);
    font-size:1.5rem;
border-radius:10px;
  color:rgb(24, 83, 221);
  cursor:pointer;
  &:hover{
    background-color:rgb(204, 213, 233);
  }

`;

const LeftDivStyle = styled.div`
  position:relative;  
  width:50%;
  display:flex;
  flex-direction:column;
  border:2px solid green;
  border-radius:10px;
`;


const ProfileDivStyle = styled.div`
  display:flex;
  align-items:center;
  gap:1rem;
  padding-inline: 2rem;
  padding-block: 4rem 1rem;
  border-bottom:2px solid green;
`;

const ImageDiv = styled.div`
  overflow: hidden;
  border-radius:50%;
  width:6rem;
  height:6rem;
  & img{
  height:100%;
  width:100%;
  object-fit: center;}
`;

const ProfileInfo = styled.div`
  display:flex;
  flex-direction: column;
  & h3{
  font-size:1.2rem;
  color:black;
  }
  & p{
    color:gray;
    font-size:.9rem;
  }
    & span{
    color:blue;
    font-size:.9rem;
    }
`;
const Statistics = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin-block:.5rem;
`;

const StatisticsStyles = styled.div`
  display:flex;
  width:45%;
  padding:.5rem;
  border:2px solid green;
    border-radius:5px;
  gap:.5rem;
`;


const RightDiv = styled.div`
  display:flex;
  width:30%;
  flex-direction:column;
  border:2px solid green;
  border-radius:10px;
  overflow:hidden;
  height:80%;
  & h3 {
    text-align:center;
    border-bottom:2px solid green;
    padding:.5rem;
  }
    & div{
      border-bottom:2px solid green;
      padding:.5rem;
    }
`;
const Page = () => {
  return (
    <MainDiv>
        <LeftDivStyle>
          <ShareDiv><IoIosShareAlt/></ShareDiv>
          <EditDiv><HiOutlinePencilSquare/></EditDiv>
            <ProfileDivStyle>
              <ImageDiv>
                <img src={ProfilePic}  alt="user profile" />
              </ImageDiv>
              <ProfileInfo>
                <h3>Bozorg Omid Shokohyan</h3>
                <p>Bozorg_47</p>
                <span>Joined 17 March</span>
              </ProfileInfo>
            </ProfileDivStyle>
            <div>
                <h4 style={{paddingLeft:"3%",paddingTop:"1rem"}}>Statistics</h4>
                <Statistics>
                    <StatisticsStyles>
                        <div><FaStar/></div>
                        <div>
                          <span>0</span>
                          <span>Day Streak</span>
                        </div>

                    </StatisticsStyles>
                    <StatisticsStyles>
                        <div><AiFillLike/></div>
                        <div>
                          <span>0%</span>
                          <span>Percentage</span>
                        </div>
                    </StatisticsStyles>
                </Statistics>
                <Statistics>
                <StatisticsStyles>
                        <div><FaBookOpen/></div>
                        <div>
                          <span>0</span>
                          <span>Unit</span>
                        </div>
                    </StatisticsStyles>
                    <StatisticsStyles>
                        <div><FaBook/></div>
                        <div>
                          <span>0</span>
                          <span>Lesson</span>
                        </div>
                    </StatisticsStyles>
                </Statistics>
            </div>
        </LeftDivStyle>
        <RightDiv>
            <h3>Last lessons</h3>
            <div><span>Unit 1 , Lesson 1 , 99%</span></div>
        </RightDiv>
    </MainDiv>
  )
}

export  {Page}