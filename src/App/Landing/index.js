import React from 'react';
import './landing.css';


export default function () {
  return (
    <div className="project-description">
      <section>
        <h2>Challenge Overview</h2>
        <p>Imagine you are part of a team building out a new web application. In this application there will be many screens and workflows that will need to utilize many of the same components, one of them being a dropdown selector. The dropdown may be used for navigation, form input, filtering and more. The requirements for the dropdown go beyond the capabilities of the standard forms offered with out of the box with HTML. Rather than building a new dropdown component for every instance it’s needed in the app, you are tasked to build out a reusable version.</p>

        <h3>Requirements:</h3>
        <ul>
          <li>The dropdown component may be used for navigation, form input, filtering and more, so it is important the content can be flexible.</li>
          <li>You may use the technology and framework of your choice but it should go beyond basic HTML forms (bonus points, but definitely not required, for using Angular)</li>
          <li>Please include comments in your submission, instructions on how to execute, and an overview of your approach and why you chose the technologies and implementation you did as well as any assumptions made.</li>
        </ul>
      </section>

      <section>
        <h2>Project Description & Instructions</h2>
        <p>This challenge has been contructed with React and utilizes a few dependencies for basic functionality such as history tracking, dom manipulation, routing, and ID generation. I chose this framework and the associated technologies because it the JavaScript framework that I am the most comfortable with and it allows you to build your application in an extremely modular way. I also take advantage of a few eslint development dependencies to help keep my code clean and consise. I have found that I like AirBnbs eslint config for react along with jsx-a11y for accessibility.</p>
        <p>On the topic of accessibility, there are certainly a large number of features that could be added to these modules to assist visually impaired or keyboard users. I decided to keep the scope of this project a bit smaller as to not obstruct the core functionality during your review.</p>
        <p>There are three sections of this application for you to explore. The first is the page you are currently viewing. It contains an overview of the challenge as given to me, this description, and breakdowns of the primary Dropdown component, and the Navigation component (since it appears on all pages).</p>
        <p>As you continue to explore the form and filter examples, you will find additional breakdowns of those components on their respective pages.</p>
        <p><strong>Thank you</strong> for taking the time to review my application, and I look forward to hearing from you!</p>

        <h3>Components</h3>

        <h4>Dropdown</h4>
        <p>This the primary reusable component for the challenge. It generates its options from the data prop, tracks the currently selected option value and title with state, and passes that option back to the parent component via the method it is passed through the onDropdownChange prop.</p>
        <p>This component has three main functions to support. Each has a description below:</p>

        <dl>
          <dt>toggleDropdown</dt>
          <dd>Our dropdown has a button that can handle an onclick function that calls this. This function simply prevents any default button actions from bubbling up, sets the isOpen state to the opposite of its current boolean value, and sets the currentTitle to the defaultTitle Prop for context.</dd>
          <dt>handleSelection</dt>
          <dd>When one of our list items generated from the data object are selected, this function takes the value and title of that item and stores them in state. It also closes the dropdown by changing the isOpen state to false, and passes the selected value to the parent component with props.onDropdownChange.</dd>
          <dt>handleDocumentClick</dt>
          <dd>This is a simple function that is called whenever the document is clicked. It checks to see if the dropdown is open, if the click was on the dropdown or any of its children. If the conditions are met, it will toggle the dropdown off in order to mimic basic HTML select behavior.</dd>
          <dt>setRef</dt>
          <dd>Sets a reference point to compare click targets against for use by handleDocumentClick.</dd>
          <dt>Lifecycle Methods</dt>
          <dd>componentDidMount and componentWillUnmount respectivly will begin or end listening for click events and will call handleDocumentClick while active.</dd>
        </dl>

        <h4>Props & Descriptions</h4>
        <dl>
          <dt>data (required)</dt>
          <dd>The component takes a data prop that should be an array of objects. The component will generate its options from this data prop.</dd>
          <dt>defaultTitle (optional)</dt>
          <dd>This is just a string to stand in as the initially displayed title and is also used when the dropdown is open to provide context.</dd>
          <dt>onDropdownChange (required)</dt>
          <dd>The component also takes an onDropdownChange prop that should be a method. The component needs this prop so that it can pass its selected value back to the parent component, where it can be used in whichever way the parent requires.</dd>
        </dl>

        <h4>Navigation</h4>
        <p>The navigation component is the first use case you will notice in the project. You will actually use it to navigate between this project desciption, and the other two use cases.</p>
        <p>This component returns an instance of the Dropdown component, and feeds in the page names and URLs via the data prop. It also passes in a handleDropdownChange method, which when called will take the returned value from CustomDropdown and push it into history which updates React Router (v4), changing the URL and page/component displayed.</p>
      </section>
    </div>
  );
}
