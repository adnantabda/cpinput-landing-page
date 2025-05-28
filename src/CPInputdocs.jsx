// src/components/CodeBlock.jsx
import { useEffect, useState, useRef } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // You can change theme

const CodeBlock = ({ language = "python", children }) => {
    const codeRef = useRef();

    useEffect(() => {
        hljs.highlightElement(codeRef.current);
    }, [children]);

    return (
        <pre className="">
            <code ref={codeRef} className={`language-${language} `}>
                {children}
            </code>
        </pre>
    );
};

const CpinputDocs = () => {
    const codeRef = useRef();
    const [activeTab, setActiveTab] = useState('overview');
    const [apiKey, setApiKey] = useState('');
    const [copied, setCopied] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 font-sans">
            {/* Header */}
<header className="border-b border-gray-700 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src="logo.png" alt="" />
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent text-white">
                CPInput
            </h1>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
            <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
            <button
                onClick={() => setActiveTab('overview')}
                className={`px-1 py-2 ${activeTab === 'overview' ? 'text-[#00B89C] border-b-2 border-[#00B89C]' : 'text-gray-400 hover:text-white'}`}
            >
                Overview
            </button>
            <button
                onClick={() => setActiveTab('setup')}
                className={`px-1 py-2 ${activeTab === 'setup' ? 'text-[#00B89C] border-b-2 border-[#00B89C]' : 'text-gray-400 hover:text-white'}`}
            >
                Setup
            </button>
            <button
                onClick={() => setActiveTab('gemini')}
                className={`px-1 py-2 ${activeTab === 'gemini' ? 'text-[#00B89C] border-b-2 border-[#00B89C]' : 'text-gray-400 hover:text-white'}`}
            >
                API KEY
            </button>
            <button
                onClick={() => setActiveTab('examples')}
                className={`px-1 py-2 ${activeTab === 'examples' ? 'text-[#00B89C] border-b-2 border-[#00B89C]' : 'text-gray-400 hover:text-white'}`}
            >
                Examples
            </button>
        </nav>

        {/* GitHub button - hidden on mobile */}
        <a
            href="https://github.com/adnantabda/cpinput"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg items-center space-x-2 transition-colors"
        >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Star on GitHub</span>
        </a>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 py-4 px-4">
                <div className="flex flex-col space-y-4">
                    <button
                        onClick={() => {
                            setActiveTab('overview');
                            setIsMobileMenuOpen(false);
                        }}
                        className={`px-1 py-2 text-left ${activeTab === 'overview' ? 'text-[#00B89C] border-b-2 border-[#00B89C]' : 'text-gray-400 hover:text-white'}`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab('setup');
                            setIsMobileMenuOpen(false);
                        }}
                        className={`px-1 py-2 text-left ${activeTab === 'setup' ? 'text-[#00B89C] border-b-2 border-[#00B89C]' : 'text-gray-400 hover:text-white'}`}
                    >
                        Setup
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab('gemini');
                            setIsMobileMenuOpen(false);
                        }}
                        className={`px-1 py-2 text-left ${activeTab === 'gemini' ? 'text-[#00B89C] border-b-2 border-[#00B89C]' : 'text-gray-400 hover:text-white'}`}
                    >
                        API KEY
                    </button>
                    <button
                        onClick={() => {
                            setActiveTab('examples');
                            setIsMobileMenuOpen(false);
                        }}
                        className={`px-1 py-2 text-left ${activeTab === 'examples' ? 'text-[#00B89C] border-b-2 border-[#00B89C]' : 'text-gray-400 hover:text-white'}`}
                    >
                        Examples
                    </button>
                    <a
                        href="https://github.com/adnantabda/cpinput"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors justify-center"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>Star on GitHub</span>
                    </a>
                </div>
            </div>
        )}
    </div>
</header>

        {activeTab === "overview" && (
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Convert Input statements to <span className="text-[#00B89C]">clean input code</span> instantly
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Powered by regex templates or Google Gemini 2.0 Flash for high-accuracy parsing
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => setActiveTab('setup')}
                                    className="bg-[#00B89C] hover:bg-[#00A99C] text-white px-6 py-3 rounded-lg font-medium transition-colors"
                                >
                                    Get Started
                                </button>
                                <a
                                    href="https://github.com/adnantabda/cpinput"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                    Star on GitHub
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 backdrop-blur-sm">
                                <div className="flex space-x-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="overflow-x-auto">
                                    <pre className="text-sm text-gray-300">
                                        <CodeBlock language="python" >

                                            {`// Example: Convert problem statement to Python input code
const problemStatement = [
"The first line contains an integer t",
"Each of the next T lines contains two integers"
];


// Using Gemini AI (higher accuracy)
const geminiCode = await generateWithGoogle( 
"python",
"YOUR_API_KEY"
);


t = int(input())
for _ in range(T):
a, b = map(int, input().split())
                                                `}

                                        </CodeBlock>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )}
            {/* Main Content */}
            <main className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Overview Section */}
                {activeTab === 'overview' && (
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-white">Overview</h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-lg bg-indigo-500/20 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold">Smart Parsing</h3>
                                </div>
                                <p className="text-gray-300">
                                    Automatically converts natural language problem statements into clean, efficient input parsing code for competitive programming.
                                </p>
                            </div>

                            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-lg bg-purple-500/20 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold">Dual Parsing</h3>
                                </div>
                                <p className="text-gray-300">
                                    Parse based on fast regex templates for common patterns or Gemini AI for complex, ambiguous problem statements.
                                </p>
                            </div>

                            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-lg bg-green-500/20 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold">Privacy Focused</h3>
                                </div>
                                <p className="text-gray-300">
                                    Works completely offline with regex templates. Gemini API calls are made directly from your Code or browser to Google's servers.
                                </p>
                            </div>

                            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <div className="p-2 rounded-lg bg-yellow-500/20 mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold">Customizable</h3>
                                </div>
                                <p className="text-gray-300">
                                    Easily extend the regex templates or modify the AI prompts to suit your specific needs.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
                            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 mb-6 md:mb-0">
                                    <img
                                        src="extension-screenshot.png"
                                        alt="SmartInputParser workflow"
                                        className="rounded-lg border border-gray-700"
                                    />
                                </div>
                                <div className="md:w-1/2 md:pl-8">
                                    <ol className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center mr-3 mt-0.5">
                                                <span className="text-xs font-bold">1</span>
                                            </div>
                                            <p className="text-gray-300">
                                                <span className="font-semibold">Goto Problem Statement:</span> Choose the problem You Want to solve
                                            </p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center mr-3 mt-0.5">
                                                <span className="text-xs font-bold">2</span>
                                            </div>
                                            <p className="text-gray-300">
                                                <span className="font-semibold">Click Generate Input Code:</span> Click on the button below the problem Tag
                                            </p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center mr-3 mt-0.5">
                                                <span className="text-xs font-bold">3</span>
                                            </div>
                                            <p className="text-gray-300">
                                                <span className="font-semibold">Select Language:</span> The Extension first tries to match against known input patterns
                                            </p>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 h-6 w-6 rounded-full bg-indigo-500 flex items-center justify-center mr-3 mt-0.5">
                                                <span className="text-xs font-bold">4</span>
                                            </div>
                                            <p className="text-gray-300">
                                                <span className="font-semibold">Clean Output:</span> Returns pure code without comments or markdown formatting
                                            </p>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4">Comparison</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-700">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Feature</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Regex Parser</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Gemini API</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-700">
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">Accuracy</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">Medium (65% common cases)</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">High (95%+ cases)</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">Speed</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">Instant</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">~1-10 seconds</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">Offline Support</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">✅ Yes</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">❌ Requires API</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">Customization</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">Edit templates.js</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">Modify prompt</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">Best For</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">Standard inputs, contests</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">Complex/ambiguous problems</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                )}

                {/* Setup Section */}
                {activeTab === 'setup' && (
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-white">Setup</h2>

                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
                            <h3 className="text-xl font-semibold mb-4">Installation and Usage</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-medium mb-2 text-gray-200">1. Fork and clone the Repository</h4>
                                    <div className="bg-gray-900 rounded-lg p-4 relative">
                                        <button
                                            onClick={() => copyToClipboard('git clone git@github.com:adnantabda/CPInput.git')}
                                            className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs flex items-center"
                                        >
                                            {copied ? 'Copied!' : 'Copy'}
                                        </button>
                                        <pre className="text-sm text-gray-300 overflow-x-auto">
                                            <code>git clone git@github.com:adnantabda/CPInput.git</code>
                                        </pre>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-medium mb-2 text-gray-200">2. Install Dependencies</h4>
                                    <div className="bg-gray-900 rounded-lg p-4 relative">
                                        <button
                                            onClick={() => copyToClipboard(`npm install`)}
                                            className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs flex items-center"
                                        >
                                            {copied ? 'Copied!' : 'Copy'}
                                        </button>
                                        <pre className="text-sm text-gray-300 overflow-x-auto">
                                            <code>npm install</code>
                                        </pre>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-medium mb-2 text-gray-200">3. Set Up Your API KEY</h4>
                                    <p className="mt-2 ml-2">
                                        <a href="https://ai.google.dev/gemini-api/docs/api-key" target="_blank" className="text-indigo-400 hover:underline">Create Google Gemini API Key</a> </p>
                                    <div className="bg-gray-900 rounded-lg p-4 relative">
                                        <button
                                            onClick={() => copyToClipboard(`https://ai.google.dev/gemini-api/docs/api-key`)}
                                            className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs flex items-center"
                                        >
                                            {copied ? 'Copied!' : 'Copy'}
                                        </button>
                                        <pre className="text-sm text-gray-300 overflow-x-auto">
                                            <code>https://ai.google.dev/gemini-api/docs/api-key</code>
                                        </pre>
                                    </div>
                                </div>

                                                                <div>
                                    <h4 className="text-lg font-medium mb-2 text-gray-200">4. Build the dist Folder</h4>
                                    <div className="bg-gray-900 rounded-lg p-4 relative">
                                        <button
                                            onClick={() => copyToClipboard(`npm run build`)}
                                            className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs flex items-center"
                                        >
                                            {copied ? 'Copied!' : 'Copy'}
                                        </button>
                                        <pre className="text-sm text-gray-300 overflow-x-auto">
                                            <code>npm run build</code>
                                        </pre>
                                    </div>
                                </div>

                                                                <div>
                                    <h4 className="text-lg font-medium mb-2 text-gray-200">5. Load the Extention</h4>
                                    <div className="bg-gray-900 rounded-lg p-4 relative">
                                        <pre className="text-sm text-gray-300 overflow-x-auto">
  Go to <code>chrome://extensions</code>, click <strong>Load unpacked</strong>, and select the <code>dist</code> folder you built in Step 4.
  <br />
  This will load the extension  you're good to go and can start using it immediately.

                                        </pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4">Regex Templates</h3>
                            <p className="text-gray-300 mb-4">
                                The regex parser handles common input patterns in competitive programming problems. Here are some examples:
                            </p>

                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-700">
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Pattern</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Example Input</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Generated Code</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-700">
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">Single integer</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">"The first line contains integer N"</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300"><code>N = int(input())</code></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">Multiple integers</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">"The line contains two integers A and B"</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300"><code>A, B = map(int, input().split())</code></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">Array of integers</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">"The second line contains N integers"</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300"><code>arr = list(map(int, input().split()))</code></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">Test cases</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">"The first line contains T test cases"</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300"><code>T = int(input())\nfor _ in range(T):</code></td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">2D matrix</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">"Next N lines contain M integers each"</td>
                                            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300"><code>matrix = [list(map(int, input().split())) for _ in range(N)]</code></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mt-6 bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                                <h4 className="text-lg font-medium mb-2 text-gray-200">Extending Templates</h4>
                                <p className="text-gray-300 mb-4">
                                    You can add your own regex patterns by editing the <code className="bg-gray-700 px-1 py-0.5 rounded">templates.js</code> file:
                                </p>
                                <div className="bg-gray-900 rounded-lg p-4 relative">
                                    <button
                                        onClick={() => copyToClipboard(`{
  regex: /contains (\\d+) floats? (.*)/i,
  code: '$1_floats = list(map(float, input().split())) // $2'
}`)}
                                        className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs flex items-center"
                                    >
                                        {copied ? 'Copied!' : 'Copy'}
                                    </button>
                                    <pre className="text-sm text-gray-300 overflow-x-auto">
<CodeBlock language="javascript">{`{
  regex: /contains (\\d+) floats? (.*)/i,
  code: '$1_floats = list(map(float, input().split())) // $2'
}`}</CodeBlock>
                                    </pre>
                                </div>
                                <p className="mt-2 text-sm text-gray-400">
                                    View all templates in the <a href="https://github.com/adnantahir/smartinputparser/blob/main/src/templates.js" className="text-indigo-400 hover:underline">GitHub repository</a>
                                </p>
                            </div>
                        </div>
                    </section>
                )}

                {/* API AI Section */}
                {activeTab === 'gemini' && (
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-white">Gemini AI Integration</h2>

                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
                            <h3 className="text-xl font-semibold mb-4">Getting an API Key</h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-medium mb-2 text-gray-200">1. Visit Google AI Studio</h4>
                                    <a
                                        href="https://aistudio.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-indigo-400 hover:underline"
                                    >
                                        https://aistudio.google.com
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>

                                <div>
                                    <h4 className="text-lg font-medium mb-2 text-gray-200">2. Create API Key</h4>
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 bg-gray-700 p-2 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                        <p className="text-gray-300">
                                            Navigate to API keys section and create a new key. This will be used to authenticate your requests.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-medium mb-2 text-gray-200">3. Configure in Your Project</h4>
                                    <div className="bg-gray-900 rounded-lg p-4 relative">
                                        <button
                                            onClick={() => copyToClipboard(`import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "API_KEY"});
export async function generateWithGoogle(lines, lang) {
  const response = await ai.models.generateContent({
//   Rest of the code .....`)}
                                            className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs flex items-center"
                                        >
                                            {copied ? 'Copied!' : 'Copy'}
                                        </button>
                                        <pre className="text-sm text-gray-300 overflow-x-auto">
<CodeBlock language="javascript">{`import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "API_KEY"});

export async function generateWithGoogle(lines, lang) {
  const response = await ai.models.generateContent({
//   Rest of the code .....
`}</CodeBlock>
                                        </pre>
                                    </div>
<p className="text-sm ml-4 text-gray-400 mt-4">
  <strong>Note:</strong> Goto generateCode.js inside the src and  Replace the string that says <code>API_KEY</code> with your actual API key.
  <br />
  The API key is used only in the browser and locally  it is never stored or sent to any server.
  <br />
  For added safety, you can also use a <code>.env</code> file.
</p>

                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
                            <h3 className="text-xl font-semibold mb-4">Advanced Configuration</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-lg font-medium mb-2 text-gray-200">Customizing the AI Prompt</h4>
                                    <p className="text-gray-300 mb-4">
                                        You can modify the system instruction passed to Gemini for different behavior:
                                    </p>
                                    <div className="bg-gray-900 rounded-lg p-4 relative">
                                        <button
                                            onClick={() => copyToClipboard(`const response = await ai.models.generateContent({
  model: "gemini-2.0-flash",
  contents: \`Convert this \${lines} to \${lang} code\`,
  config: {
    systemInstruction: \`You are an expert at generating input parsing code.
      Return only pure code without comments or explanations.
      Use efficient methods suitable for competitive programming.\`,
    temperature: 0.1,
    topP: 0.95,
    maxOutputTokens: 512,
  },
});`)}
                                            className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs flex items-center"
                                        >
                                            {copied ? 'Copied!' : 'Copy'}
                                        </button>
                                        <pre className="text-sm text-gray-300 overflow-x-auto">
                                    
<CodeBlock language="javascript">{`import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "API_KEY"});

export async function generateWithGoogle(lines, lang) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: ,
      config: {
      systemInstruction: ,
      temperature: 0.1,
      topP: 0.95,
      maxOutputTokens: 512,
    },
  });
  
  let cleanCode = ,
  return cleanCode;
}
`}</CodeBlock>
                                        </pre>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-medium mb-2 text-gray-200">Parameters</h4>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-700">
                                            <thead>
                                                <tr>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Parameter</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Description</th>
                                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Recommended Value</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-700">
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">temperature</td>
                                                    <td className="px-4 py-3 text-sm text-gray-300">Controls randomness (lower = more deterministic)</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">0.1 - 0.3</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">topP</td>
                                                    <td className="px-4 py-3 text-sm text-gray-300">Nucleus sampling threshold</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">0.9 - 0.95</td>
                                                </tr>
                                                <tr>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-white">maxOutputTokens</td>
                                                    <td className="px-4 py-3 text-sm text-gray-300">Maximum length of generated response</td>
                                                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-300">512</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4">Rate Limits & Usage</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center mr-3 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-300">
                                        <span className="font-semibold">Use Free Tier:</span> 60 requests per minute (check Google's current limits)
                                    </p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center mr-3 mt-0.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-300">
                                        <span className="font-semibold">Current Rule:</span> Use Gemini for complex cases and Fallback to regex for standard patterns
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Examples Section */}
                {activeTab === 'examples' && (
                    <section>
                        <h2 className="text-3xl font-bold mb-8 text-white">Examples</h2>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Standard Input</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Problem Statement</h4>
                                        <div className="bg-gray-900 rounded-lg p-3">
                                            <p className="text-gray-300 text-sm">
                                                The first line contains an integer T denoting the number of test cases.<br />
                                                Each test case contains two integers N and K on a single line.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Generated Python Code</h4>
                                        <div className="bg-gray-900 rounded-lg p-3 relative">
                                            <button
                                                onClick={() => copyToClipboard(`T = int(input())\nfor _ in range(T):\n    N, K = map(int, input().split())`)}
                                                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs flex items-center"
                                            >
                                                {copied ? 'Copied!' : 'Copy'}
                                            </button>
                                            <pre className="text-sm text-gray-300 overflow-x-auto">
                                                <CodeBlock language="python">{`T = int(input())
for _ in range(T):
    N, K = map(int, input().split())`}</CodeBlock>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Array Input</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Problem Statement</h4>
                                        <div className="bg-gray-900 rounded-lg p-3">
                                            <p className="text-gray-300 text-sm">
                                                The first line contains integer N.<br />
                                                The second line contains N space-separated integers.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Generated Python Code</h4>
                                        <div className="bg-gray-900 rounded-lg p-3 relative">
                                            <button
                                                onClick={() => copyToClipboard(`N = int(input())\narr = list(map(int, input().split()))`)}
                                                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs flex items-center"
                                            >
                                                {copied ? 'Copied!' : 'Copy'}
                                            </button>
                                            <pre className="text-sm text-gray-300 overflow-x-auto">
<CodeBlock language="python" >{`N = int(input())
arr = list(map(int, input().split()))`}</CodeBlock>                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Matrix Input</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Problem Statement</h4>
                                        <div className="bg-gray-900 rounded-lg p-3">
                                            <p className="text-gray-300 text-sm">
                                                The first line contains two integers R and C.<br />
                                                The next R lines each contain C space-separated integers representing the matrix.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Generated Python Code</h4>
                                        <div className="bg-gray-900 rounded-lg p-3 relative">
                                            <button
                                                onClick={() => copyToClipboard(`R, C = map(int, input().split())\nmatrix = [list(map(int, input().split())) for _ in range(R)]`)}
                                                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs flex items-center"
                                            >
                                                {copied ? 'Copied!' : 'Copy'}
                                            </button>
                                            <pre className="text-sm text-gray-300 overflow-x-auto">
                                            <CodeBlock language="python" >{`R, C = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(R)]`}</CodeBlock>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                                <h3 className="text-xl font-semibold mb-4">Complex Input (Gemini AI)</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Problem Statement</h4>
                                        <div className="bg-gray-900 rounded-lg p-3">
                                            <p className="text-gray-300 text-sm">
                                                The input consists of multiple test cases. Each test case begins with a line containing three values: a string identifier, followed by two floating-point numbers representing coordinates. The test cases continue until a line containing only "END" is encountered.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-400 mb-1">Generated Python Code</h4>
                                        <div className="bg-gray-900 rounded-lg p-3 relative">
                                            <button
                                                onClick={() => copyToClipboard(`while True:\n    line = input().strip()\n    if line == "END":\n        break\n    id, x, y = line.split()\n    x = float(x)\n    y = float(y)`)}
                                                className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-gray-300 px-2 py-1 rounded text-xs flex items-center"
                                            >
                                                {copied ? 'Copied!' : 'Copy'}
                                            </button>
                                            <pre className="text-sm text-gray-300 overflow-x-auto">
                                                <CodeBlock language="python">{`while True:
    line = input().strip()
    if line == "END":
        break
    id, x, y = line.split()
    x = float(x)
    y = float(y)`}</CodeBlock>
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-gray-900/50 border-t border-gray-800 py-12 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center space-x-2">
                                <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                                    <img src="logo.png" alt="" />

                                </div>
                                <h2 className="text-xl font-bold bg-clip-text text-transparent text-white">
                                    CPInput
                                </h2>
                            </div>
                            <p className="text-gray-400 mt-2 text-sm">
                                Generate Input Code, Code the logic
                            </p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Resources</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white text-sm">Documentation</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/adnantahir/smartinputparser" className="text-gray-400 hover:text-white text-sm">GitHub</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-gray-400 hover:text-white text-sm">Examples</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Community</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <a href="https://github.com/adnantabda/cpinput/issues" className="text-gray-400 hover:text-white text-sm">Issues</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/adnantabda/cpinput/pulls" className="text-gray-400 hover:text-white text-sm">Contribute</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} CPInput. All rights reserved.
                        </p>
                        <div className="mt-4 md:mt-0 flex space-x-6">
                            <a href="https://github.com/adnantabda/cpinput" className="text-gray-400 hover:text-white">
                                <span className="sr-only">GitHub</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CpinputDocs;