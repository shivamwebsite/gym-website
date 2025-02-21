import React from 'react'
import "./profile.css"
import { FaGlobe } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { GrUserExpert } from "react-icons/gr";
import { FaAward } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";

function Profile() {
    return (
        <>
            <div className="profilebody">
            <header class="profileedit">
                <img align="right" src="shiv.jpeg" alt="error" />
                <h1 class="profiletopheader">SHIVAM PRASAD SHAW</h1>
                <div class="bottomheader">DOB:-06/05/2002</div>
                <div class="bottomheader">Address:-24/1 Dr.H.K.Chaterjee Lane,Ghusuri Howrah -711107</div>
                <div class="bottomheader">Gmail Id:-shivamshaw878@gmail.com</div>
                <div class="bottomheader">Contact No. :-9903119703</div>
            </header>
            <section>
                <div class="profilehead">
                    <h1><span className='profilelogo1'><FaGlobe /></span> CAREER OBJECTIVE</h1>
                </div>
                <div class="para">
                    <p>A Motivated Individual With In-Depth Knowledge Of Languages And Development Tools, Seeking Position In A
                        Growth-Oriented Company Where I Can Use My Skills To The Advantage Of The Company While Having The Scope
                        To Develop My Own Skills. </p>
                </div>
            </section>
            <section>
                <div class="profilehead">
                    <h1><span className='profilelogo'><FaUserGraduate /></span> EDUCATION HISTORY</h1>
                </div>
                <div className='table'>To see the Education History do it in Desktop Mode</div>
                <table>
                    <thead>
                        <tr>
                            <th class="box1">INSTIITUTE</th>
                            <th class="box2">DEGREE</th>
                            <th class="box3">PASSING YEAR</th>
                            <th class="box4">BOARD/UNIVERSITY</th>
                            <th class="box5">SUBJECT</th>
                            <th class="box6">MARKS OBTAINED</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="bo1"><a href="https://www.nit.ac.in/" target="_blank">Narula Institute Of Technology<br />(NIT)</a></td>
                            <td class="bo2">B.Tech</td>
                            <td class="bo3">2026</td>
                            <td class="bo4">MAKAUT<br />(Maulana Abul Kalam Azad University And Technolog)</td>
                            <td class="bo5">CSBS<br />(Computer Science And Bussiness System)</td>
                            <td class="bo6">98%</td>
                        </tr>
                        <tr>
                            <td class="bo1"><a href="http://stdenis.in/" target="_blank">St.Denis School<br />(St.DS)</a></td>
                            <td class="bo2">12th</td>
                            <td class="bo3">2021</td>
                            <td class="bo4">ISC<br />(Indian School Certificate)</td>
                            <td class="bo5">PCM<br />(Physics,Chemistry,Math,Computer,English)</td>
                            <td class="bo6">78%</td>
                        </tr>
                        <tr>
                            <td class="bo1"><a href="https://rosebudschoolliluah.in/" target="_blank">Rose Bud School<br />(RBL)</a></td>
                            <td class="bo2">10th</td>
                            <td class="bo3">2019</td>
                            <td class="bo4">ICSE<br />(Indian Certificate of Secondary Education)</td>
                            <td class="bo5">PCM<br />(Physics,Chemistry,Math,Computer,English)</td>
                            <td class="bo6">75%</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section>
                <div class="profilehead">
                    <h1><span className='profilelogo'><GrUserExpert /></span> PROFESSIONAL SKILLS</h1>
                </div>
                <div class="para">

                    <ol>
                        <img align="right" src="shiv.jpeg" alt="error" />
                        <br />
                        <li>Financial Modelling From EDX.</li>
                        <li>Artificial Intelligence And Machine Learning Course From TCS.</li>
                        <li>Data Analaytics From COURSERA.</li>
                        <li>Programming In Python,C,C++,Java.</li>
                        <li>Ms.Excel Course From TS-Computex.</li>
                        <li>Data Science Course From NPTEL.</li>
                        <br />
                    </ol>
                </div>
            </section>
            <section>
                <div class="profilehead">
                    <h1><span className='profilelogo'><FaAward /></span> ACHIEVEMENTS</h1>
                </div>
                <div class="para">
                    <ul>
                        <ol>
                            <img align="left" src="shiv.jpeg" alt="error" />
                            <li>Won 1st Position In Inter School Carrom Competition.</li>
                            <li>Participated In Smart India Hackathon.</li>
                            <li>Participated In Inter College Chess Competition.</li>
                            <li>Participated In Summer Education Camp At Guru Nanak Institute Of Technolog,Bangkok.</li>
                            <li>Participated In Inter School Cricket Championship.</li>
                            <li>Won 1st Position In Inter School Football Competition.</li>
                            <br />
                        </ol>
                    </ul>
                </div>
            </section>
            <section>
                <div class="profilehead">
                    <h1><span className='profilelogo'><HiUserGroup /></span> REFERENCES</h1>
                </div>
                <div className='profilecontactdetails'>
                    <div class="profilefix">
                        <div class="para1">
                            <img src=" shiv.jpeg" alt="error" />
                        </div>
                        <div class="profilespan">Maitreyi Ray Kanjilal (Principal)</div>
                        <div class="profilespan">033 2563777</div>
                        <div class="profilespan">info@nit.ac.in</div>
                    </div>
                    <div class="profilefix">
                        <div class="para1">
                            <img src=" shiv.jpeg" alt="error" />
                        </div>
                        <div class="profilespan">Ricky Gupta (Principal)</div>
                        <div class="profilespan">9830445410</div>
                        <div class="profilespan">st.denis183@gmail.com</div>
                    </div>
                    <div class="profilefix">
                        <div class="para1">
                            <img src=" shiv.jpeg" alt="error" />
                        </div>
                        <div class="profilespan">Josha Vimcett (Principal)</div>
                        <div class="profilespan">8448449773</div>
                        <div class="profilespan">rblschool_1967@yahoo.com</div>
                    </div>
                </div>
            </section>
            <footer className='profilefooter'>
                <a href="/contact" target="_blank"> <h1>Contact Me</h1></a>
                <span class="profilesocial"><span><FaInstagram /></span>
                    <span ><FaFacebook /></span>
                    <span><FaTwitter /></span>
                    <span><IoLogoWhatsapp /></span></span>
            </footer>
            </div>
        </>
    )
}

export default Profile