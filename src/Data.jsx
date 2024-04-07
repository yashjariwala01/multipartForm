import student from './assets/student.jpg';
import professional from './assets/professional.jpeg';
import teacher from './assets/teacher.jpeg';
import somethingelse from './assets/somethingelse.png';
import parent from './assets/parent.jpg';
import other from './assets/other.jpeg';
import mathslevel from './assets/mathslevel.jpg';
import maths from './assets/maths.jpeg';
import learning from './assets/learning.jpeg';
import explorer from './assets/explorer.jpeg';
import brainexcercise from './assets/brainexcercise.jpeg';
import learner from './assets/learnerAnimated.jpeg';
import arithmetic from './assets/arithmetic.png';
// import BasicOfAlgebra from './assets/Basic-of-Algebra.png';
import algebra from './assets/algebra.png';
import intermediateAlgebra from './assets/intermediatealgebra.jpg';
import calculus from './assets/calculus.jpeg';

export const data={
    introduction : {
      title:'which describes you best',
      subtitle:'This will help us personalize your experience.',
      label:'intro',
      introOptions : [
        {avatar:student,description:'Student or soon to be enrolled'},
        {avatar:professional,description:'Professional pursuing a career'},
        {avatar: parent,description:'Parent of a school-age child'},
        {avatar: learner,description:'Lifelong learner'},
        {avatar: teacher,description:'Teacher'},
        {avatar:other,description:'Other'}
      ],
    },
    LearningStyle : {
      title:'which are you most interested in?',
      subtitle:"Choose just one, This will help us to get you started (but won't limit your experience).",
      label:'LearningStyle',
      LearningOptions : [
        {avatar:learning,description:'Learning specific skills to advance my career'},
        {avatar:explorer,description: "exploring new topics I'm interested in "},
        {avatar:maths,description:'refreshing my maths foundations'},
        {avatar:brainexcercise,description:'excercing my brain to stay sharp'},
        {avatar:somethingelse,description:'something else'}
      ],
    },
    ContinueStep1 : {
      title:"You're in right place" ,
      subtitle:"Brilliant get's you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in maths, science and computer science.", 
    },
    MathLevel : {
      label:'MathsLevel',
      data:[
        { image: arithmetic, topic: 'Arithmetic', level: 'Introductory' },
        { image: algebra, topic: 'Basic Algebra', level: 'Foundational' },
        { image: intermediateAlgebra, topic: 'Intermediate Algebra', level: 'Intermediate' },
        { image: calculus, topic: 'Calculus', level: 'Advanced' }
      ]
    },
    ContinueStep2 : {
      title:"You're on your way!" ,
      subtitle:`"Through its engaging and well-structured courses, Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real-world problem-solving situations."`,
    },
    PathOption:{
      label: 'path',
      data : [
        {
          level: 'Foundational Math',
          description: "Build your foundational skills in algebra, geometry, and probability.",
          image: '../assets/images.png',
          mostPopular: true
        },
        {
          level: 'Mathematical Thinking',
          description: "Build your foundational skills in algebra, geometry, and probability.",
          image: '../assets/images.png',
          mostPopular: false
        }
      ]
    }

}