import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Raspberry Pi Wearable Reader for Visually Impaired Users',
        projectDesc: 'Built a wearable assistive device that captures printed text and converts it into audio output. The project focused on real-time image processing, OCR, and text-to-speech integration.',
        tags: ['Python', 'OpenCV', 'Raspberry Pi'],
        code: '',
        demo: '',
        image: one
    },
    {
        id: 2,
        projectName: 'Real-Time Motor Control with Cloud Connectivity',
        projectDesc: 'Developed an industrial automation setup using ESP32 and TI C2000 MCUs with Red Lion HMI. Implemented PWM/ADC based control and enabled remote monitoring using Arduino IoT Cloud.',
        tags: ['Embedded C', 'ESP32', 'MATLAB & Simulink'],
        code: '',
        demo: '',
        image: two
    },
    {
        id: 3,
        projectName: 'Voice-Activated EV Control with Obstacle Detection',
        projectDesc: 'Designed a smart EV prototype with voice control via Bluetooth HC-05 and ultrasonic obstacle detection for autonomous braking. Built a custom PCB to improve system reliability.',
        tags: ['Arduino', 'Embedded C', 'Proteus'],
        code: '',
        demo: '',
        image: three
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
