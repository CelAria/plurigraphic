import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import direct from '../images/noun_direction_2020945.png'
import delegate from '../images/noun_exchange_1995148.png'
import distract from '../images/noun_up_2020965.png'
import delay from '../images/noun_Waiting Room_1754105.png'

const Box = ({title, copy, bgcolor, icon}) => (
  <div className='box' style={{backgroundColor: bgcolor}}>
    <div className="text">
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
    <div className="image">
      <img src={icon}/>
    </div>
    <div className="practicelink">
      <button>Practice Scenario</button> 
    </div>
  </div>
)


const IndexPage = () => (
  <Layout>
    <h1>Bystander Intevertion Strategies</h1>
    <div className="boxes-container">
      <Box title="Distract" copy="Create a distraction on behalf of the person who is uncomfortable. Consider dancing between them and the perpetrator, and making a type of barrier between your body and theirs. Consider asking the person who is agressing a question to distract them such as “hey! Do you know who the DJ is?” or “Wow! This is great huh?”. The ultimate goal is to give space to the person who is uncomfortable so that they can escape. " bgcolor="#f7c760" icon={distract} />
      <Box title="Direct" copy="Speak directly to the person who is making someone uncomfortable. Approach them calmly with a smile and positive attitude. Consider statements such as “Hey, I know you want everyone to have a good time tonight, but I think you are making someone uncomfortable, and should give more space on the dancefloor.” Always state the behaviour that needs to change, and what outcome you want to see. " bgcolor="#b0f97f" icon={direct}/>
      <Box title="Delegate" copy="Ask for help. Consider contacting a member of security or staff, telling them about the behaviour and asking for them to talk directly to the perpetrator, or to watch them from now on. Consider phrase “Hello! This person is being harassed. Can you help?” " bgcolor="#c6a2e5" icon={delegate}/>
      <Box title="Delay" copy="Wait until an appropriate time to make an intervention. If someone is giving you a bad vibe but you are not sure that they are bothering anyone, consider delaying an intervention until you can do a check-in with someone they target, or after you’ve observed their behaviour for a little while and observe them harassing someone. Remember though that harassment can often happen fast! Don’t delay checking in with someone who you think may need help. 
" bgcolor="#91ecff" icon={delay}/>
    </div>
  </Layout>
)

export default IndexPage
