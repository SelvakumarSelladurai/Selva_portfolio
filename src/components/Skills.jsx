import { motion } from 'framer-motion';
import { 
  FaPython, FaHtml5, FaCss3Alt, FaJs, FaCloud, FaJava, FaChartBar 
} from "react-icons/fa";
import { 
  SiMysql, SiGooglecloud, SiTensorflow, SiAdobe, SiUnity 
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdDesignServices, MdShowChart } from "react-icons/md";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center rounded-full py-3 px-6 cursor-pointer absolute"
      whileHover={{ scale: 2.5 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl w-full text-center pt-10">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div 
          className="flex items-center justify-center rounded-full p-8 cursor-pointer" 
          whileHover={{ scale: 2.5 }}
        >
        </motion.div>

        <Skill name={<FaPython fontSize="55" color="#3472A6" />} x="-5vw" y="-10vw" />
        <Skill name={<FaHtml5 fontSize="55" color="#e34c26" />} x="-20vw" y="2vw" />
        <Skill name={<FaCss3Alt fontSize="55" color="#1572B6" />} x="20vw" y="6vw" />
        <Skill name={<FaJs fontSize="55" color="#f7df1e" />} x="0vw" y="12vw" />
        <Skill name={<SiTensorflow fontSize="55" color="#ff6f00" />} x="-20vw" y="-15vw" />
        <Skill name={<GiArtificialIntelligence fontSize="55" color="#7f21f5" />} x="15vw" y="-12vw" />
        <Skill name={<FaCloud fontSize="55" color="#00c6ff" />} x="12vw" y="-5vw" />
        <Skill name={<FaJava fontSize="55" color="#007396" />} x="0vw" y="-20vw" />
        <Skill name={<SiMysql fontSize="55" color="#00758f" />} x="20vw" y="20vw" />
        <Skill name={<SiUnity fontSize="55" />} x="5vw" y="20vw" />
        <Skill name={<MdDesignServices fontSize="55" color="#ff4081" />} x="-10vw" y="20vw" />

        {/* Power BI & Tableau replaced with generic chart icons */}
        <Skill name={<FaChartBar fontSize="55" color="#f2c811" />} x="25vw" y="-10vw" />
        <Skill name={<MdShowChart fontSize="55" color="#e97627" />} x="-25vw" y="-10vw" />

        {/* GenAI with label */}
        <Skill 
          name={
            <div className="flex flex-col items-center justify-center">
              <GiArtificialIntelligence fontSize={55} color="#7f21f5" />
              <span className="text-sm mt-1 font-semibold">GenAI</span>
            </div>
          } 
          x="0vw" 
          y="25vw" 
        />
      </div>
    </>
  );
};

export default Skills;
