
import lfs from '../images/Projects/lfs.jpg'
import chatbot from '../images/Projects/chatbot.png'
import skindisease from '../images/Projects/skindisease.jpg'
import plastic from '../images/Projects/uwplasticdetection.png'
import recipefinder from '../images/Projects/recipefinder.png'
import cbir from '../images/Projects/CBIR.png'


const projectData = [
    {
        title:"Skin Disease Classification",
        techstack:"CNN | Keras | Image Processing",
        details:"Proposed a CNN model with less parameters to classify skin disease into 4 categories. Paper is published on this research work.",
        image:skindisease
    },
    {
        title:"Underwater Plastic Detection",
        techstack:"YOLOv2 | Keras | Object Detection",
        details:"Created a underwater plastic detection on images using YOLOv2 model. ",
        image:plastic
    },
    {
        title:"Parallel CBIR System",
        techstack:"Pyspark | Alluxio | Skimage",
        details:"A fast parallel Content Based Image Retrieval System using distributed computation. Big data framework like Apache spark is used.",
        image:cbir
    },
    {
        title:"Linux From Scratch 10.0",
        techstack:"Linux | Endevour OS",
        details:"Built a simple Linux operating system using Endeavor OS as host system. It works on the command line interface",
        image:lfs
    },
    {
        title:"Healthcare Chatbot using Transformer ",
        techstack:"Tensorflow | Python | NLP",
        details:"A simple chatbot for health related question made using Transformer. Data was collected from various sources for creating Dataset.",
        image:chatbot
    },
    {
        title:"Recipe Finder",
        techstack:"HTML | CSS | Javascript | PHP ",
        details:"Created a website where people can find various recipes based on ingredients obtained at home during the lockdown and also post new recipes.",
        image:recipefinder
    },
    
    
];

export default projectData;