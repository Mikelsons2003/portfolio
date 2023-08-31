function App() {
  return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-96">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-800">Mike Tyson</h1>
            <p className="text-sm text-gray-600">Web Developer</p>
          </div>
          <div className="mt-4">
            <div className="mb-2">
              <span className="text-gray-500">Email:</span>
              <a href="mailto:miketyson@example.com" className="text-blue-600 ml-1">miketyson@example.com</a>
            </div>
            <div className="mb-2">
              <span className="text-gray-500">GitHub:</span>
              <a href="https://github.com/miketyson" className="text-blue-600 ml-1" target="_blank" rel="noopener noreferrer">github.com/miketyson</a>
            </div>
            <div className="mb-2">
              <span className="text-gray-500">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/miketyson" className="text-blue-600 ml-1" target="_blank" rel="noopener noreferrer">linkedin.com/in/miketyson</a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-700">Welcome to my portfolio. Here, you can find information about my projects and skills.</p>
          </div>
        </div>
      </div>
  );
}

export default App;