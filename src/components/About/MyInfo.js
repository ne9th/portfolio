import React from 'react';

export const MyInfo = () => {
  return (
    <div className='info'>
        <img/>
        <div className="education">
            <div className='info-text'> 
                <h3><span>A Little Bit About:</span><br/>my education</h3>
                <p>I finished my combined Computer Science and Design bachelor’s degree at Northeastern University in May 2022. Throughout my 4 years of college, I spent 1.5 years commuting and 2 years online (due to the pandemic). The journey was definitely not easy, but I’m glad I made it!</p>
            </div>
            <div className='info-img'>
                <img/>
            </div>
        </div>
        <div className="experience">
            <div className='info-text'> 
                <h3><span>A Little Bit About:</span><br/>my experience</h3>
                <p>In my first year of college, I worked as a graphic designer at my school. I made my first poster in Keynote...(since my previous design experience at the time was all done on my phone) Thankfully, my last poster there was made in Photoshop.
                <br/><br/>
                Fast forward to fall 2021, I worked full-time as a frontend web developer at a biotech startup and part-time as a UX/UI designer at a Northeastern student-led product development studio. To learn more about these experiences, please feel free to check out my <a href="https://www.linkedin.com/in/monineathheng/" target="_blank" className='f-pinyon secondary-btn'>LinkedIn!</a>
                </p>
            </div>
            <div className='info-img'>
                <img/>
            </div>
        </div>
        <div className="skills">
            <div className='info-text'> 
                <h3><span>A Little Bit About:</span><br/>my skills</h3>
                <p>The programming languages that I’ve worked with include: Java, Python, Ruby, JavaScript, TypeScript, HTML5, and CSS3. I also have experience with React V6, Framer Motion, Bootstrap V5.2, TailwindCSS, and Material-UI. 
                <br/><br/>
                As for design, I’ve worked with Illustrator, InDesign, Photoshop, XD, Figma, and Balsamiq. I hope this website showcases my design style/skills well. I still have a lot to learn, but I'm so excited for this journey!
                </p>
            </div>
            <div className='info-img'>
                <img/>
            </div>
        </div>
        <div className="me">
            <div className='info-text'> 
                <h3><span>A Little Bit About:</span><br/>me :D</h3>
                <p>I was born and raised in Cambodia. I moved to the US when I was in middle school. I speak Khmer, English, and a bit of Korean. I love music. So much. It's like a second home to me. I also love Studio Ghibli movies, crafts, photography, and cloudy (not gloomy) days! 
                <br/><br/>
                After graduation, I decided to come to Cambodia to spend as much time as I could with my family before going back to start the official adult life :) So, hello from Phnom Penh!
                </p>
            </div>
            <div className='info-img'>
                <img/>
            </div>
        </div>
    </div> 
  )
}
