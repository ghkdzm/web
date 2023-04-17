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



      <div className={Styles.st}
>
<a href="https://ko-kr.facebook.com/"><img src="images/f.png" alt=""/></a>
</div>

<div className={Styles.st}
>
      <a href="https://www.google.com"><img src="images/g.jpg" alt=""/></a>
    </div>
    <div className={Styles.st}
>
      <a href="https://www.youtube.com/?gl=KR&hl=ko"
        ><img src="images/y.jpg" alt=""
      /></a>
    </div>

    <div className={Styles.st}
>
      <a href="https://www.naver.com/"><img src="images/n.jpg" alt=""/></a>
    </div>

    <div className={Styles.st}
>
      <a href="https://www.instagram.com/?hl=ko"
        ><img src="images/i.jpg" alt=""
      /></a>
    </div>

    <div className={Styles.st}
>
      <a href="http://www.joongbu.ac.kr/"><img src="images/j.jpg" alt=""/></a>
    </div>

  

    <div className={Styles.st}
>
    <a href="https://namu.wiki/w/%EB%82%98%EB%AC%B4%EC%9C%84%ED%82%A4:%EB%8C%80%EB%AC%B8"
      ><img src="images/nm.jpg" alt=""
    /></a>

</div>
</div>

        );
      }