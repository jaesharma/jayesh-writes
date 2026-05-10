import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-8">About Me</h1>
      
      <div className="space-y-6 text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl">
        <p>
          I'm <strong>Jayesh</strong>, a developer driven by the intersection of clean code and meaningful design. I believe software should be as delightful to use as it is robustly engineered.
        </p>

        <p>
          This platform, <strong>non-caffeinated-musings</strong>, is my digital home. It's a space where I document my technical journey, share progress on my projects, and explore ideas that excite me.
        </p>

        <h2 className="text-xl font-bold mt-12 mb-4">The Principles</h2>
        <p>
          My work is guided by a few core beliefs:
        </p>

        <ul className="list-disc pl-5 space-y-4">
          <li>
            <strong>Simplicity First.</strong> Complexity is a cost. I strive for the most straightforward solution that effectively solves the problem.
          </li>
          <li>
            <strong>Detail Matters.</strong> Whether it's the kerning of a font or the efficiency of a database query, the small things define the quality of the whole.
          </li>
          <li>
            <strong>Public Learning.</strong> Sharing knowledge is the best way to solidify it. I write to think better and help others along the way.
          </li>
        </ul>

        <div className="pt-8 border-t border-gray-300 dark:border-gray-700">
          <p className="font-bold mb-4">Let's connect.</p>
          <p>
            I'm always open to interesting conversations and potential collaborations. The best way to reach me is via <a href="mailto:sjay05305@gmail.com" className="font-medium text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700 hover:border-gray-900 dark:hover:border-gray-100 transition-colors pb-0.5">email</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;