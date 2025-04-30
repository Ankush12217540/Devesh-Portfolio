import { motion } from 'framer-motion';
import { styles } from '../styles';
import { PCCanvas } from './canvas';
import { Typewriter } from 'react-simple-typewriter';
import { avatar } from '../assets';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Left Accent Line */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-6`}>
        <div className="flex flex-col justify-start items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-md" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-purple-400 via-purple-500 to-indigo-600" />
        </div>

        {/* Main Text */}
        <div className="flex flex-col gap-4">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey there, I'm <span className="text-violet-500">Devesh</span>
          </h1>
          <p className={`${styles.heroSubText} text-gray-300`}>
            Passionate Developer with skills in
          </p>

          <p className="text-xl sm:text-2xl font-semibold text-red-500">
            <Typewriter
              words={['Android Development', 'Web Development', 'Database (MySQL)']}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={2000}
            />
          </p>
        </div>
      </div>

      {/* Animated Avatar (Uncomment if needed) */}
      {/* <motion.div
        className="absolute right-8 top-[100px] hidden sm:flex items-center justify-end"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={avatar}
          alt="Avatar"
          className="w-72 h-72 rounded-full object-cover shadow-lg border-4 border-violet-500"
        />
      </motion.div> */}

      {/* 3D Canvas */}
      <PCCanvas />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
