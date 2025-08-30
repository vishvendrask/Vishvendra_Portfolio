import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'Angular', icon: '🅰️' },
        { name: 'Redux', icon: '🔄' },
        { name: 'Material-UI', icon: '🎨' },
        { name: 'Vue.js', icon: '💚' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript', icon: '📜' },
        { name: 'Bootstrap', icon: '🎯' }
      ]
    },
    {
      name: 'Backend & APIs',
      skills: [
        { name: 'Node.js', icon: '🟢' },
        { name: 'PHP', icon: '🐘' },
        { name: 'RESTful APIs', icon: '🔌' }
      ]
    },
    {
      name: 'Databases',
      skills: [
        { name: 'MySQL', icon: '🐬' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'PostgreSQL', icon: '🐘' }
      ]
    },
    {
      name: 'Mobile Development',
      skills: [
        { name: 'Android (Java/Kotlin)', icon: '🤖' },
        { name: 'React Native', icon: '📱' },
        { name: 'Android Studio', icon: '🛠️' }
      ]
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { name: 'Git', icon: '📝' },
        { name: 'GitHub', icon: '🐙' },
        { name: 'Bitbucket', icon: '🪣' },
        { name: 'Postman', icon: '📮' },
        { name: 'VS Code', icon: '💻' },
        { name: 'Visual Studio', icon: '🪟' }
      ]
    },
    {
      name: 'Other',
      skills: [
        { name: 'Agile/Scrum', icon: '🔄' },
        { name: 'Micro-Frontend Architecture', icon: '🏗️' },
        { name: 'Performance Optimization', icon: '⚡' }
      ]
    }
  ];

  return (
    <section id="skills" className="relative mx-auto mt-10 flex h-full flex-col rounded-3xl py-20 md:px-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#374151_1px,transparent_1px)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
            My Skills
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-balance">
            The Secret{' '}
            <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">
              Sauce
            </span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className="group p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-colorfull/10 hover:border-colorfull/30 transition-all duration-200"
                    style={{
                      animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`
                    }}
                  >
                    <span className="text-base">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Skills Marquee */}
        <div className="mt-16 overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] flex-row">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row [animation-direction:reverse]">
              {skillCategories.flatMap(category => category.skills).map((skill, index) => (
                <span
                  key={`${skill.name}-${index}`}
                  className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-base">{skill.icon}</span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
              {skillCategories.flatMap(category => category.skills).map((skill, index) => (
                <span
                  key={`${skill.name}-${index}-duplicate`}
                  className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 bg-white/80 dark:bg-gray-800/80 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-base">{skill.icon}</span>
                  <span>{skill.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
