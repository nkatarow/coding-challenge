import React from 'react';
import './landing.css';


export default function () {
  return (
    <div className="project-description">
      <section>
        <h2>Project Description</h2>
        <p>Imagine you are part of a team building out a new web application. In this application there will be many screens and workflows that will need to utilize many of the same components, one of them being a dropdown selector. The dropdown may be used for navigation, form input, filtering and more. The requirements for the dropdown go beyond the capabilities of the standard forms offered with out of the box with HTML. Rather than building a new dropdown component for every instance it’s needed in the app, you are tasked to build out a reusable version.</p>

        <h3>Requirements:</h3>
        <ul>
          <li>The dropdown component may be used for navigation, form input, filtering and more, so it is important the content can be flexible.</li>
          <li>You may use the technology and framework of your choice but it should go beyond basic HTML forms (bonus points, but definitely not required, for using Angular)</li>
          <li>Please include comments in your submission, instructions on how to execute, and an overview of your approach and why you chose the technologies and implementation you did as well as any assumptions made.</li>
        </ul>
      </section>

      <section>
        <h2>Component Breakdowns</h2>

        <h3>CustomDropdown</h3>
        <p>This the primary reusable component for this challenge. It generates its options from the data prop, tracks the currently selected option with state, and passes that option back to the parent component via the method it is passed via the onDropdownChange prop.</p>

        <h4>Props & Descriptions</h4>
        <dl>
          <dt>data (required)</dt>
          <dd>The component takes a data prop that should be an array of objects. The component will generate its options from this data prop.</dd>
          <dt>onDropdownChange (required)</dt>
          <dd>The component also takes an onDropdownChange prop that should be a method. The component needs this prop so that it can pass its selected value back to the parent component, where it can be used in whichever way the parent requires.</dd>
        </dl>

        <h3>Navigation</h3>
        <p>The navigation component is the first use case you will notice in the project. You will actually use it to navigate between this project desciption, and the other two use cases.</p>
        <p>This component returns an instance of the CustomDropdown component, and feeds in the page names and URLs via the data prop. It also passes in a handleDropdownChange method, which when called will take the returned value from CustomDropdown and push it into history which updates React Router (v4), changing the URL and page/component displayed.</p>

        <h3>Form</h3>
        <p>The form component returns a form, an instance of the CustomDropdown component, a submit button, the currently selected option from the dropdown, and the value of that dropdown on submission.</p>
        <p>This component has two methods: handleDropdownChange and formSubmit. The first sets the currently selected option from the dropdown into state, which is then used to display the selected option inline. The second prevents the default form submission event, and again sets the formSubmitted state to true. When this state is true, another set of text appears displaying the selected dropdown option.</p>

        <h3>Filter</h3>
        <p>The final use case component, filter, returns an instance of the CustomDropdown component and an unordered list containing test data with titles and arrays of categories.</p>
        <p>When this dropdown changes, this component runs a method that sets the state to the currently selected option.</p>
        <p>If the currently set state is an empty string, all pieces of data are displayed in the unordered list. Otherwise, the component will loop through the dataset, and add any object that has matching categories to a new array which will be used to display an updated and filtered list of data.</p>
      </section>
    </div>
  );
}
