import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as myinfo from './Styled/Mypage.main.Info';
import TopNav from '../TopNav/TopNav.main';
import profileimg from '../../Assets/img/Group 36.png';
import settingicon from '../../Assets/img/Vector.png';

function MypageInfo() {
  const userName = localStorage.getItem('user-name');
  const candyNumber = localStorage.getItem('candy!');
  const candyNum = parseInt(candyNumber, 10);
  console.log('캔디 갯수:', candyNum);
  console.log(userName);
  const navigate = useNavigate();
  const NavClick = (e, type) => {
    e.preventDefault();
    navigate(`${type}`);
  };

  return (
    <myinfo.TotalWrapper>
      <myinfo.ProfileWrapper>
        <myinfo.ProfilefixingWrapper>
          <myinfo.ProfilefixingButton
            src={settingicon}
            onClick={(e) => {
              NavClick(e, '/mypage/infochange');
            }}
          ></myinfo.ProfilefixingButton>
        </myinfo.ProfilefixingWrapper>
        <myinfo.ProfileRealWrapper>
          <myinfo.ProfileImg src={profileimg}></myinfo.ProfileImg>
          <myinfo.ProfileTextWrapper>
            <myinfo.userNameWrapper>
              <myinfo.userName>{userName}</myinfo.userName>
              <myinfo.userName2>님</myinfo.userName2>
            </myinfo.userNameWrapper>
            <myinfo.candyNumberWrapper>
              <myinfo.candyNumber>{candyNumber}</myinfo.candyNumber>
              <myinfo.candy>CANDY</myinfo.candy>
            </myinfo.candyNumberWrapper>
          </myinfo.ProfileTextWrapper>
        </myinfo.ProfileRealWrapper>
      </myinfo.ProfileWrapper>
      <myinfo.rightWrapper>
        <myinfo.candyButton
          onClick={(e) => {
            NavClick(e, '/mypage/candy');
          }}
        >
          캔디 충전하기
        </myinfo.candyButton>
        <myinfo.myItemButton
          onClick={(e) => {
            NavClick(e, '/chattingroom');
          }}
        >
          나의 아이템 모아보기
        </myinfo.myItemButton>
      </myinfo.rightWrapper>
    </myinfo.TotalWrapper>
  );
}

export default MypageInfo;
