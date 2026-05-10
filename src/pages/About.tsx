import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-8 tracking-tighter">About Me</h1>
      
      <div className="space-y-6 text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
        <p>
          I'm <span className="text-slate-900 dark:text-white font-black">Jayesh</span>, a developer driven by the intersection of clean code and meaningful design. I believe software should be as delightful to use as it is robustly engineered.
        </p>

        <p>
          This platform, <span className="text-primary-600 dark:text-primary-400 font-bold">jayesh.writes</span>, is my digital home. It's a space where I document my technical journey, share progress on my projects, and explore ideas that excite me.
        </p>

        <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-12 mb-4 tracking-tight">The Principles</h2>
        <p>
          My work is guided by a few core beliefs:
        </p>

        <ul className="space-y-4">
          <li className="flex gap-4">
            <span className="text-primary-500 font-black italic">01.</span>
            <span><strong className="text-slate-800 dark:text-zinc-200">Simplicity First.</strong> Complexity is a cost. I strive for the most straightforward solution that effectively solves the problem.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-primary-500 font-black italic">02.</span>
            <span><strong className="text-slate-800 dark:text-zinc-200">Detail Matters.</strong> Whether it's the kerning of a font or the efficiency of a database query, the small things define the quality of the whole.</span>
          </li>
          <li className="flex gap-4">
            <span className="text-primary-500 font-black italic">03.</span>
            <span><strong className="text-slate-800 dark:text-zinc-200">Public Learning.</strong> Sharing knowledge is the best way to solidify it. I write to think better and help others along the way.</span>
          </li>
        </ul>

        <div className="pt-12">
          <p className="font-bold text-slate-900 dark:text-white mb-4">Let's connect.</p>
          <p>
            I'm always open to interesting conversations and potential collaborations. The best way to reach me is via <a href="mailto:sjay05305@gmail.com" className="text-primary-600 dark:text-primary-400 font-black hover:underline underline-offset-4">email</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
