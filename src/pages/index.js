import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import direct from '../images/direct.svg'
import delegate from '../images/delegate.svg'
import distract from '../images/distract.svg'
import delay from '../images/delay.svg'

const Answer = ({ title, answer, explanation, isTrue }) => (
  <div>
    <label className="answer">
      <input
        type="radio"
        name={title}
        className="answer"
        value={answer}
      />
      <div>
        <span>{answer}</span>
        <div className={`explanation ${isTrue ? 'isTrue' : null}`}>
          {explanation}
        </div>
      </div>
    </label>
  </div>
)


const Box = ({ title, copy, bgcolor, icon, question, A1, A2, A3 }) => (
  <div className='box' style={{backgroundColor: bgcolor}}>
    <div className="text">
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
    <div className="image">
      <img src={icon}/>
    </div>
    <div className="question">
      <h3>Practice Scenario</h3>
      <h4>{question}</h4> 
      <Answer title={title} answer={A1.answer} explanation={A1.explanation} isTrue={A1.isTrue} />
      <Answer title={title} answer={A2.answer} explanation={A2.explanation} isTrue={A2.isTrue} />
      <Answer title={title} answer={A3.answer} explanation={A3.explanation} isTrue={A3.isTrue} />
    </div>
  </div>
)


const IndexPage = () => (
  <Layout> 
    <header>
      <h1>Bystander Intervertion for the Dancefloor</h1>
      <div>
      <p>What’s worse than being harassed when you’re trying to let loose on the dancefloor? Being harassed when surrounded by a bunch of bystanders who see what’s happening, but do nothing to help. To the surprise of no one, dancefloors- with their dim lights, mood-altering music, and plethora of intoxicants, are often a breeding ground for harassment. We love the magical escape from everyday life that dancefloors provide, but that means adapting our bystander intervention for new social environments. So keep on dancing!</p>
      <p>Read about different Intervention strategies on the left, and then practise your learning with the Practise Scenarios on the right! </p>    
    </div>
    </header>
    <div className="boxes-container">
      <Box 
        title="Distract"
        copy="Create a distraction on behalf of the person who is uncomfortable. The goal is to interrupt the incident between them and the harasser. Consider dancing between the target and the harasser, possibly making a type of barrier between their bodies. If this is not possible, consider asking the person a question or striking up a conversation to distract from the incident such as “hey! Do you know who the DJ is?” or “Wow! This music sure is great huh? Have you seen this DJ before?”. The ultimate goal is to give space to the person who is uncomfortable so that they can leave the uncomfortable situation if they choose. Tap into your experiences to make a distraction or another type of intervention that may be more appropriate. "
        bgcolor="#f7c760"
        icon={distract} 
        question="You see someone being chat up by a stranger at the bar. From their body language it appears they are uncomfortable. What should you do?"
        A1={{
          answer: "Wait to see if the situation will escalate", 
          explanation: "It is not advised to wait and see if a situation will escalate before you intervene if there are other appropriate and casual interventions you could take immediately.",
          isTrue: false
        }}
        A2={{
          answer: "Make up an excuse to go talk to the person who seems uncomfortable- tell them you really like their shoes! Take them aside and ask them where they got their shoes, possibly slipping in a question about if they’re being bothered by the person talking to them while you’re at it.",
          explanation: "Asking a question is a great way to interrupt the interaction between the target and the harasser and also gives you an opportunity to check-in with the person and ask if they are bothered by the situation. If they say they are being bothered, consider helping them with another intervention such as “direct” or “delegate”",
          isTrue: true
        }}
        A3={{
          answer: "Go up to the harasser and the target, and tell the harasser that they are causing problems and making people uncomfortable, and that they should leave the target alone and go home.",
          explanation: "It is not advised to approach a situation where the target has not consented to a direct action. It is possible that by speaking on behalf of the target without knowing what their true feelings are, or if they want something done about it, that you could put them in danger or escalate the situation. ",
          isTrue: false
        }}
      />
      <Box
        title="Direct"
        copy="Direct is a direct conversation with the person who is harassing. After you have confirmed with the target that they would like you talk to the harasser on their behalf, speak directly to the harasser. Approach them calmly with a smile and positive attitude, in a manner that will not escalate the situation. Consider statements such as “Hey, I know you want everyone to have a good time tonight, but I think you are making someone uncomfortable, and should give more space on the dancefloor.” Always state the specific behaviours that needs to change, and what outcome you want to see. Clearing state the behaviour you would like to see “leave more space”, “stop touching” or “dance over there”. Consider having this conversation near to security if you can, so that if the harasser gives you a threatening response, the security can step in. Again, interventions will not always be supported by security, so it is important to direct your interventions from experience. Direct can also be used when you witness something that is blatantly unacceptable such as grabbing or groping, overt racism, or other clearly unacceptable behaviour. In these circumstances it is an appropriate response to directly say: “Leave them alone,” “That’s inappropriate,” “That’s disrespectful” or “That’s not OK."
        bgcolor="#b0f97f"
        icon={direct}
        question="A friend of yours is being chat up by a stranger. You take a break and go to the bathroom, and when you come back out your friend is targeted again. They confirm to you that they are uncomfortable and would like something done. What should you do?"
        A1={{
        answer:"Take your friend and leave the bar",
        explanation: "Although this will immediately solve the problem, the goal of intervention is not to feel like you have the same access to space as everyone else does! Consider trying an intervention before leaving.",
        isTrue: false
        }}
        A2={{ 
        answer: "Give your friend some space to figure out the situation",
        explanation: "Leaving your friend alone can make them vulnerable to being harassed again. Check-in with them and present them with the different options for intervention that you could do: distract, direct, delegate or delay.",
        isTrue: false
        }}
        A3={{
        answer: "Ask your friend if they would like you to talk to the aggressor on their behalf. Approach the aggressor with a smile and a friendly attitude and say “Hey! I’m sure you want everyone to have a good time tonight and didn’t mean to make anyone uncomfortable. Can you please give my friend space? They are uncomfortable.",    
        explanation: "Since you and your friend have already tried evading the harasser with a distraction, the next intervention is to talk directly to them and ask them to stop their behaviour. Remember to be cautious when directly responding to the harasser, as it may escalate the situation. Before you talk directly to the harasser ask yourself questions: Am I safe from harm? Is the person being harassed safe from harm? Does it seem unlikely the situation will escalate? If you do not feel safe consider using the “delegate” intervention instead.",
        isTrue: true
        }}
      />
      
      <Box
        title="Delegate"
        copy="Ask for help. Consider contacting a member of security or staff, telling them about the behaviour or harassment and asking for them to talk directly to the perpetrator, or to watch them from now on. Consider phrase “Hello! This person is being harassed. Can you help? Delegate is also useful when you have witnessed a situation and feel that others should help keep an eye on someone potentially predatory. In advanced situations where you are concerned for your safety or the safety of others, you should also delegate to management and security and directly state the behaviour and that you want the harasser to be removed from the event. If the first member of staff you talk to isn’t responsive, consider asking a different member of staff as well."
        bgcolor="#c6a2e5"
        icon={delegate}
        question="You see someone aggressively shoving a person at the bar. You hear their voices start to raise. What do you do?"
        A1={{
        answer: "Wait for someone who is physically stronger than you to step in and stop the situation",
        explanation: "Do not wait and watch the situation unfold when you could use the “delegate” intervention.",
        isTrue: false
        }}
        A2={{
        answer: "Approach the aggressor and directly ask them to stop",
        explanation: "As you have already seen the person begin to get aggressive, you have no reason to believe they will be receptive to what you have to say. It is not a good idea to confront them personally at this point as it could be dangerous for you or those around you.",
        isTrue: false
        }}
        A3={{
          answer: "Go straight to security and say “someone is getting aggressive on the dancefloor [at this location] Please can you go check-up on them right away”",
          explanation: "In this circumstance, where you have seen someone begin to get aggressive, it is a good idea to alert security or a member of staff even before a physical altercation happens, to ensure it will not escalate. Delegating a scenario to staff or security directly is recommended as soon as a situation begins to turn aggressive or hostile.",
          isTrue: true
        }}/>

      <Box
        title="Delay"
        copy="Wait until an appropriate time to make an intervention. If someone is giving you a bad vibe but you are not sure that they are bothering anyone, consider delaying an intervention until you can do a check-in with someone they target, or after you’ve observed their behaviour for a see them harassing someone, or someone who appears uncomfortable. Remember still that harassment can often happen fast! Don’t delay checking in with someone who you think may need help."
        bgcolor="#91ecff"
        icon={delay}
        question="You see someone who you think might be uncomfortable. You check-in with them and they say they’re fine. Still, you think the person who was talking to them might be exhibiting predatory behaviour. What do you do?"
        A1={{
        answer: "Delay and watch the situation, to confirm that you should check-in again later and see if the person has changed their mind",
        explanation: "In this case, the target has not expressed interest in you intervening, even though you think the harasser might be exhibiting predatory behaviour. Delay intervening until later, and if they have continued to harass the target, check in with the target again to see if they would like you to intervene.",
        isTrue: true
        }}
        A2={{
        answer: "Talk to the aggressor when you have a chance, and tell them their behaviour is predatory",
        explanation: "It is not advised to approach a situation where the target has not consented to a direct action. It is possible that by speaking on behalf of the target without knowing what their true feelings are, or if they want something done about it, that you could put them in danger or escalate the situation.",
        isTrue: false
        }}
        A3={{
        answer: "Carry on with your night, as the target has confirmed they don’t want an intervention",
        explanation: "Instead of moving on completely, consider keeping an eye on the harasser or letting a member of staff know that they should keep an eye on them (delegate the intervention to staff), in-case they try to target others.",
        isTrue: false
        }}
      /> 
    </div>
  </Layout>

)

export default IndexPage
