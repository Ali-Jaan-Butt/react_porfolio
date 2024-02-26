import './App.css';
import fb from './images/facebook.png';
import ig from './images/instagram.png';
import li from './images/linkedin.png';
import mimg from './images/myimg.jpeg';
import tw from './images/twitter.png';
import wh from './images/whatsapp.png';
import yt from './images/youtube.png';
function App() {
  return (
    <div style={{backgroundColor:'aqua'}}>
      <header>
        <div id="name-intro">
          <h1>Muhammad Ali Jaan Butt</h1>
          <p id="intro-text">Data Scientist | Data Engineer | ETL Engineer | Machine Learning Expert | Deep Learning Expert | Python expert | Automation and Extraction expert | Django Expert</p>
        </div>
        <img src={mimg} alt="Profile Pic" id="profile-pic" />
      </header>
      <nav>
        <a href="#education">Educational History</a>
        <a href="#skills">Professional Skills</a>
        <a href="#projects">Professional Projects</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#ambitions">Life Ambitions</a>
        <a href="#efforts">Efforts for Country</a>
        <a href="#contact" id="contact-me">Contact Me</a>
      </nav>
      <section id="education">
    <h2>Educational History</h2>
    <table>
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Degree Title</th>
                <th>Passing Year</th>
                <th>Total Marks</th>
                <th>Obtained Marks</th>
                <th>Percentage</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Matric</td>
                <td>2019</td>
                <td>1100</td>
                <td>967</td>
                <td>88</td>
            </tr>
            <tr>
                <td>2</td>
                <td>FSc</td>
                <td>2021</td>
                <td>1100</td>
                <td>594</td>
                <td>54</td>
            </tr>
        </tbody>
    </table>
</section>
<section id="skills">
    <h2>Professional Skills</h2>
    <ol>
        <table>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Skills</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Web Scraping</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Web Automation</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>App Scraping and Automation</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Data Mining and data extraction</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Machine Learning</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>ETL</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Data Science and AI</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Python expert</td>
                </tr>
            </tbody>
        </table>
    </ol>
</section>
<section id="projects">
    <h2>Professional Projects</h2>
    <ol>
        <table>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Project Title</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>ETL on b2b-hygiene website</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Scraping Amazon</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Devops Automation using ansible in AWS</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Automatic visa booking bot</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Training ML model on uci repository</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Drone camera image detection</td>
                </tr>
            </tbody>
        </table>
    </ol>
</section>

<section id="hobbies">
    <h2>Hobbies</h2>
    <ul>
        <table>
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Hobbies</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Poetry</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Singing</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Programming</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Web Series</td>
                </tr>
            </tbody>
        </table>
    </ul>
</section>
<section id="ambitions">
    <h2>Life Ambitions</h2>
    <ul>
        <li><h3 style={{textAlign:'left'}}>Achieved:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Ambitions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Good Grades in Secondary education</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Having Multiple Skills</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Earning on behalf of skills</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Teaching Programming</td>
                    </tr>
                </tbody>
            </table>
        </li>
        <li><h3 style={{textAlign:'left'}}>Struggling:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Ambitions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Earn more</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Make my parents proud of me</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Buy a Supra mk4</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Be superior among others</td>
                    </tr>
                </tbody>
            </table>
        </li>
    </ul>
</section>
<section id="efforts">
    <h2>Efforts for Country</h2>
    <ul>
        <li><h3 style={{textAlign:'left'}}>Succeeded:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Efforts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Passed Pakistan Air Force tests to server Country</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Education</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Paying tax</td>
                    </tr>
                </tbody>
            </table>
        </li>
        <li><h3 style={{textAlign:'left'}}>Struggling:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Efforts</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Encouraging Data Science and AI in Pakistan</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Serve my country with knowledge</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Will try to pass CSS exam</td>
                    </tr>
                </tbody>
            </table>
        </li>
    </ul>
</section>

<footer>
    <h3 id="contact">Contact: aliwsservices@gmail.com</h3>
    <a href="https://api.whatsapp.com/send?phone=923201540500&text=Hello,%20How%20are%20you%3F"><img src={wh} alt="" height="20" /></a>
    <a href="https://www.facebook.com/profile.php?id=100036854552588&mibextid=AEUHqQ"><img src={fb} alt="" height="20" /></a>
    <a href="https://www.instagram.com/ali_jaan_butt?igsh=OGQ5ZDc2ODk2ZA=="><img src={ig} alt="" height="20" /></a>
    <a href="https://www.youtube.com/@Code_Tech404"><img src={yt} alt="" height="20" /></a>
    <a href="https://www.linkedin.com/in/ali-jaan-75ab02253/"><img src={li} alt="" height="20" /></a>
    <a href="https://twitter.com/leee_jaan"><img src={tw} alt="" height="20" /></a>
</footer>
    </div>
  );
}

export default App;