import React from 'react'
import Styles from "../styles/hi.module.css"

export default function index() {
  return (
    
    <div className={Styles.body}>
<div className={Styles.title}>
      <h1>한현동의 이것저것</h1>
    </div>

    <div className={Styles.menu}>
      <ul>
        <li>
        </li>
        <li>
          <a href="#">나의 소개</a>
        </li>
          <ul>
              <ul>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
                <li>
                </li>
                <li class="last">
                </li>
              </ul>
            
            <li class="sub">
                <ul>
                  <li>
                  </li>
                  <li>
                  </li>
                  <li >
                    </li>
                  <li>
                    </li>
                    <li>
                      </li>
                      <li class="last">
                        </li>
              </ul>
            </li>
          </ul>
        
        <li>
          <a href="site.html">사이트 모음</a>
        </li>
 
        <li >
        </li>
        <li >
          </li>
          <li >
              <a href="revew.html">게임추천</a>
            </li>
  
        <li class="last">
          <a href="weater.html">날씨</a>
        </li>
        
      </ul>
      
    </div>

    <p><span>이름:한현동 </span><br></br>
           태어난날:1999 0327 <br></br>
           전화번호:0106661xxxx <br></br>
           소프트웨어 공학부 <br></br>
           좋아하는것:게임,유튜브<br></br>
        </p>
        <label>
            <span>Comment</span><textarea placeholder="저에게 하고싶은말을 남겨주세요"></textarea>
        </label>
        <label>
            <a href="javascript:alert('감사합니다')"><span></span><input type="submit" value="submit"  /> </a>
        </label>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <footer class="footer">
      <div class="container"> </div>
        <p class="text-muted">
          &copy; Copyright 2023 - 중부대학교 소프트웨어공학부 한현동
        </p>
        </footer> 
      
        
    </div>
        

    
  );
}