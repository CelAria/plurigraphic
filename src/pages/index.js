import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import direct from '../images/noun_direction_2020945.png'
import delegate from '../images/noun_exchange_1995148.png'
import distract from '../images/noun_up_2020965.png'
import delay from '../images/noun_Waiting Room_1754105.png'


const Box = ({title, copy, bgcolor, icon, question, A1, A2, A3}) => (
  <div className='box' style={{backgroundColor: bgcolor}}>
    <div className="text">
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
    <div className="image">
      <img src={icon}/>
    </div>
    <div className="question">
      <h4>{question}</h4> 
      <p>{A1}</p>
      <p>{A2}</p>
      <p>{A3}</p>
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
      <Box title="Distract" copy="Create a distraction on behalf of the person who is uncomfortable. Consider dancing between them and the perpetrator, and making a type of barrier between your body and theirs. Consider asking the person who is agressing a question to distract them such as “hey! Do you know who the DJ is?” or “Wow! This is great huh?”. The ultimate goal is to give space to the person who is uncomfortable so that they can escape. " bgcolor="#f7c760" icon={distract} 
      question="You’re at a club. A friend of yours is being chat up by a stranger and gives you a look that signals they are uncomfortable. What should you do?"
      A1="wait out the situation" A2="make up an excuse to go and talk to your friend and pull them away such as “I need to go get air, come with me” " A3="go and talk to the aggressor and ask them a question. “Hey! Do you know what the name of the DJ is?” or “Hey, do you know if this bar takes debit?” or “Hey, do you know where the bathroom is?”
      "/>
      <Box title="Direct" copy="Speak directly to the person who is making someone uncomfortable. Approach them calmly with a smile and positive attitude. Consider statements such as “Hey, I know you want everyone to have a good time tonight, but I think you are making someone uncomfortable, and should give more space on the dancefloor.” Always state the behaviour that needs to change, and what outcome you want to see. " bgcolor="#b0f97f" icon={direct}
      question="A friend of yours is being chat up by a stranger. You take a break and go to the bathroom, and when you come back out your friend is targeted again. What should you do?" 
      A1="give your friend some space to figure out the situation
      " A2="take your friend and leave the bar" A3="approach the aggressor with a smile and a friendly attitude and say “Hey! I’m sure you don’t mean to get in the way but I’m visiting my friend right now and we’d like to go dance now” "
      />
      <Box title="Delegate" copy="Ask for help. Consider contacting a member of security or staff, telling them about the behaviour and asking for them to talk directly to the perpetrator, or to watch them from now on. Consider phrase “Hello! This person is being harassed. Can you help?” " bgcolor="#c6a2e5" icon={delegate}
      question="You see someone aggressively shoving a person at the bar. You hear their voices start to raise. What do you do? "
      A1="wait to see if the situation escalates" A2="approach them and ask them to stop" A3="go to security and say “someone is getting agressive on the dancefloor. Please can you go check-up on them?”
      "/>
      <Box title="Delay" copy="Wait until an appropriate time to make an intervention. If someone is giving you a bad vibe but you are not sure that they are bothering anyone, consider delaying an intervention until you can do a check-in with someone they target, or after you’ve observed their behaviour for a little while and observe them harassing someone. Remember though that harassment can often happen fast! Don’t delay checking in with someone who you think may need help.
" bgcolor="#91ecff" icon={delay}
    question="You see someone who you think might be uncomfortable. You check-in with them and they say they’re fine. What do you do?"
    A1="Delay and watch the situation, to confirm that you should check-in again later" A2="Talk to the aggressor and tell him to leave the target alone" A3="Ignore the Situation" />
    </div>
  </Layout>

)

export default IndexPage
