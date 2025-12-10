"use client";

import React from 'react'
import {Accordion, AccordionTab } from 'primereact/accordion'
import styles from '../mission-values.module.css'

const CustomAccordian = () => {

  const sections = [
    {
      id: 1,
      header: "Personalized, Engaging, Interactive Classrooms",
      content: "Core classes average 10-12 students. Within these intimate classroom communities, students and teachers develop genuine relationships that form the basis of the learning experience. We recognize that each student brings a unique array of strengths, challenges, interests, and skills to their learning experience. We challenge them, give them the help they need, and the space to develop as individuals."
    },
    {
      id: 2,
      header: "Classical Liberal Arts Education",
      content: "Our curriculum is a rigorous course of study designed to develop a broad foundation of knowledge and skills and prepare students for college success. Advanced Placement (AP) courses are offered across the curriculum and in fine arts. Robust programming in math, science, computer science, and humanities, and in the fine and performing arts, provides students a wide range of options. Above all in every discipline, we develop students’ logical thinking skills, clear communication skills, and creative problem-solving skills."
    },
    {
      id: 3,
      header: "Infused with Creativity",
      content: "The arts are alive at Griffin School. Student artwork blankets the walls of our hallways and the school bell is music selected by students and staff each day. We offer an extensive and diverse list of creative course offerings, which includes creative problem solving classes such as Engineering and 3D Design. You don’t have to be an artist to be a Griffin School student, but come ready to embrace creativity!"
    },
    {
      id: 4,
      header: "Diversity and Leadership",
      content: "We are committed to a diverse and inclusive school community, and we foster and maintain a culture in which each person is accepted, valued, and respected for who they are. Griffin students learn and live communitarian values: We emphasize civic responsibility and highlight student voices in school governance."
    }
  ]

  return (
    <>
        <Accordion className='missionAccordion'>
            {sections.map((section) => (
              <AccordionTab key={section.id} header={
                <div className={`${styles.missionAccordion} accordion`}>
                  <h6>{section.header}</h6>
                  <div className='accordionImg'>
                    <img src="/images/plus.svg" alt="plus" />
                  </div>                  
                </div>
              } pt={{
                headerAction : {className : "bg-[#F3F3F5]! border-x-0! border-t-0! pb-0! pt-2.5!"},
                headerIcon : {className : "hidden!"}
              }}>
                {section.content}
              </AccordionTab>
            ))}
        </Accordion>
    </>
  )
}

export default CustomAccordian