// src/pages/Contact.jsx
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Contact
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
          Feel free to reach out on social platforms.
        </p>

        {/* Social links */}
        <div className="mb-8 flex flex-wrap items-center gap-4">

          <a
            href="https://github.com/Chiragbais8482"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-800 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/chirag-bais-3a278931a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200 dark:hover:bg-blue-900"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>

          {/* Download Resume from Google Drive */}
          <a
            href="https://drive.google.com/file/d/1pj4rqiPEuNVUVBwYklcfTsZmsjIInWg3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-sm font-medium text-green-700 hover:bg-green-100 dark:border-green-900 dark:bg-green-950 dark:text-green-200 dark:hover:bg-green-900"
          >
            <span>Download Resume</span>
          </a>

          <div className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
            <Mail className="h-4 w-4" />
            <span>chiragbais8482@gmail.com</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
