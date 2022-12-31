import React from 'react'
import ReactDOM from 'react-dom/client'
import { SkillsPage } from 'skills-page'
import { DependenciesContext } from 'dependenciescontext'

const SKILLS_RANGE = [
  "Proficient", "Competent", "Novice"
]

const Skills = [
  {
      "Name": "Python",
      "Years": 7,
      "Percentage": 95,
      "Type": SKILLS_RANGE[0]
  },
  {
      "Name": "C",
      "Years": 3,
      "Percentage": 90,
      "Type": SKILLS_RANGE[0]
  },
  {
      "Name": "Java",
      "Years": 3,
      "Percentage": 60,
      "Type": SKILLS_RANGE[1]
  },
  {
      "Name": "Javascript",
      "Years": 4,
      "Percentage": 70,
      "Type": SKILLS_RANGE[1]
  },
  {
    "Name": "React",
    "Years": 1,
    "Percentage": 30,
    "Type": SKILLS_RANGE[2]
  },
  {
    "Name": "PostgreSQL",
    "Years": 1,
    "Percentage": 30,
    "Type": SKILLS_RANGE[2]
  },
  {
    "Name": "Machine Learning",
    "Years": 2,
    "Percentage": 50,
    "Type": SKILLS_RANGE[1]
  },
  {
    "Name": "Data Analytics",
    "Years": 2,
    "Percentage": 50,
    "Type": SKILLS_RANGE[1]
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DependenciesContext.Provider value={{Skills}}>
      <SkillsPage />
    </DependenciesContext.Provider>
  </React.StrictMode>,
)
