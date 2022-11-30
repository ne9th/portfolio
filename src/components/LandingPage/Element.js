import React, {useRef} from 'react'
import { Link } from 'react-router-dom';
import { motion as m, useScroll, useTransform } from 'framer-motion';

export default function Element({project}) {

    let ref = useRef();
    let { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, 100 * project.speed])

  return (
    
        <m.div
            initial={{opacity: 1}}
            animate={{opacity: 1}}
            style={{y:y}}
            whileHover={{
                scale: 1.1
            }}
            transition={{ duration: 0.3}}
            className="home-project"
            key={project.id}
            >

            {/* cover images */}
            <Link to={`/${project.type_path}/${project.id}`}>
                <img ref={ref} src={project.cover_img} alt="" />
            </Link>

            {/* details on hover */}
            {/* <div className="hover-container d-flex flex-column justify-content-center">
                <h4 className='f-pinyon'>{project.title}</h4>
                <p className='f-prompt'>{project.type} 	• {project.date}</p>
            </div> */}
            
        </m.div>
  )
}
