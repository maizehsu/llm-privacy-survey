import Navbar from "../components/navbar";

export default function Home() {
  const privacyConcerns = [
    {
      platform: "Twitter",
      comment:
        "LLM tools often raise concerns about the privacy of user data. We need more transparency and control over how our data is used.",
    },
    {
      platform: "Facebook",
      comment:
        "LLM tools are a great way to generate text, but we need to be careful about how we use them. We should be cautious about sharing sensitive information in code examples or snippets.",
    },
    {
      platform: "Instagram",
      comment:
        "LLM tools are a great way to generate text, but we need to be careful about how we use them. We should be cautious about sharing sensitive information in code examples or snippets.",
    },
    {
      platform: "Reddit",
      comment:
        "I recently used an LLM tool and noticed that it was collecting and storing my text data. It's important to understand how this data is being used and protected.",
    },
    {
      platform: "GitHub",
      comment:
        "Privacy is a major concern when using LLM tools for code generation. We should be cautious about sharing sensitive information in code examples or snippets.",
    },
    {
      platform: "LinkedIn",
      comment:
        "LLM tools are a great way to generate text, but we need to be careful about how we use them. We should be cautious about sharing sensitive information in code examples or snippets.",
    },
    {
      platform: "TikTok",
      comment:
        "I recently used an LLM tool and noticed that it was collecting and storing my text data. It's important to understand how this data is being used and protected.",
    },
  ];

  // Randomly split the privacyConcerns into separate arrays
  const shuffledConcerns = privacyConcerns.sort(() => Math.random() - 0.5);
  const numPages = 3; // Number of webpages to display the cases
  const casesPerPage = Math.ceil(shuffledConcerns.length / numPages);
  const pages = [];

  for (let i = 0; i < numPages; i++) {
    const startIdx = i * casesPerPage;
    const endIdx = startIdx + casesPerPage;
    const casesForPage = shuffledConcerns.slice(startIdx, endIdx);
    pages.push(casesForPage);
  }

  return (
    <Navbar>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-gray-100">
          LLM Privacy Survey
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400">
          LLM Privacy Survey is a survey to collect information about the
          privacy concerns of LLM tools.
        </p>

        {/* Display the cases on different webpages */}
        {pages.map((cases, pageIndex) => (
          <div key={pageIndex} className="my-8">
            <h3 className="text-2xl font-semibold mb-2">
              User Case {pageIndex + 1}
            </h3>
            {cases.map((concern, index) => (
              <div key={index} className="mb-4">
                <p className="text-gray-600 dark:text-gray-400">
                  <span className="font-semibold">{concern.platform}: </span>
                  {concern.comment}
                </p>
              </div>
            ))}
          </div>
        ))}

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Chat{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Chat with Chatbot and see how much it can do to depict your image.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Upload{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Join our research by uploading masked llm chat history data! Don't worry, we use your data solely for research.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Blog{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about recent news in llm privacy through our blog page!
            </p>
          </a>


        </div>
      </main>
    </Navbar>
  );
}
