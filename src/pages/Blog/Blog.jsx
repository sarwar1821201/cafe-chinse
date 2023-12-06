import React, { useRef } from 'react';
import useTitle from '../../hooks/useTitle';
import { PDFExport } from '@progress/kendo-react-pdf';


const Blog = () => {

  const targetRef= useRef();

    useTitle('Blogs')
     
    const handleDownloadpdf = () => {
        console.log('pdf download koro')
        targetRef.current.save();
    };

    // https://stackoverflow.com/questions/67594179/export-react-page-to-pdf

    return (

        <div>

          <PDFExport ref={targetRef}  > 

          <div className="bg-slate-100 p-10 mb-6 rounded-lg mx-6 mt-6">
          <h5 className="text-gray-700 text-4xl font-bold mb-6">
          Tell us the differences between uncontrolled and controlled components?. 
          </h5>
          <p className="text-justify">
          In React, the terms "controlled components" and "uncontrolled components" refer to how the state of form elements is managed:
            <br></br>
          Controlled Components:
          <br></br>
        State Management: The state of the form elements is controlled by React using state variables.
       <br></br>
Example: The value of an input field is set by the state, and changes are handled by React event handlers.
          </p>
        </div>

        <div className="bg-slate-100 p-10 mb-6 rounded-lg mx-6 mt-6">
          <h5 className="text-gray-600 text-4xl font-bold mb-6">
          How to validate React props using PropTypes?
          </h5>
          <p className="text-justify">
          React is a JavaScript library used for building user interfaces, and
            it provides a way to validate component props using PropTypes.
            PropTypes is a typechecking library that allows developers to define
            the expected data types and values of component props.
          </p>
         
         </div>

         <div className="bg-slate-100 p-10 mb-6 rounded-lg mx-6 mt-6">
          <h5 className="text-gray-600 text-4xl font-bold mb-6">
          Tell us the difference between nodejs and express js.
          </h5>
          <p className="text-justify">
            <h3 className='text-yellow-700 text-3xl'>Node.js:</h3>
            Description: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server side, outside of a web browser.
            <br />
            <ul > <span className='text-yellow-700 text-3xl'> Features:</span> 
                <li>Asynchronous and event-driven: Node.js uses an event-driven, non-blocking I/O model, which makes it efficient and well-suited for handling concurrent connections.</li>
                <li>Single-threaded: Although Node.js is single-threaded, it can handle concurrent operations efficiently through events and callbacks.</li>
                <li>Large module ecosystem: Node.js has a vast ecosystem of open-source libraries and packages available through npm (Node Package Manager).</li>
            </ul>
              <br />
            <h3 className='text-yellow-700 text-3xl'>Express js:</h3>
            Description: Express.js is a web application framework for Node.js. It simplifies the process of building robust, scalable, and maintainable web applications by providing a set of features for web and mobile applications.

            <ul > <span className='text-yellow-700 text-3xl'> Features:</span> 
            <li>Middleware: Express.js uses middleware functions that have access to the request and response objects. Middleware functions can perform tasks such as authentication, logging, and more.</li>
            <li>Routing: Express.js provides a simple and effective way to define routes for handling HTTP requests.</li>
            <li>Template engines: Express.js supports various template engines, like EJS, Pug, and Handlebars, making it flexible for rendering dynamic content on the server side.</li>

            </ul>

          </p>
         
         </div>

         
        <div className="bg-slate-100 p-10 mb-6 rounded-lg mx-6 mt-6">
          <h5 className="text-gray-600 text-4xl font-bold mb-6">
          What is a custom hook, and why will you create a custom hook?
          </h5>
          <p className="text-justify">
          A custom hook in React is a JavaScript function whose name starts with "use" and that may call other hooks. Custom hooks allow you to reuse stateful logic across multiple components in a React application. They are a way to extract component logic into a reusable function, enabling better code organization, sharing of logic, and creating more maintainable and modular components.
          </p>
         
         </div>

          </PDFExport>
            


         <div className="card-actions justify-center mb-2 ">
    <button onClick={handleDownloadpdf} className="btn btn-primary">Download PDF</button>
  </div>


        </div>
    );
};

export default Blog;