import Head from "next/head";
import { useEffect } from "react";
const waitlist = () =>{
    function updatePlaceholder() {
        var computeDropdown = document.getElementById("compute");
        var hardwareInput = document.getElementById("hardware");
  
        var placeholders = {
          "Supply Dataset": "What Type of Dataset are you interested in..",
          "Supply Compute": "Enter Hardware Specifications you can supply...",
          "Train AI Model": "Are you interested in inferencing or Training... "
        };
  
        hardwareInput.placeholder = placeholders[computeDropdown.value];
      }
  
    useEffect(() => {
        // Function to update placeholder based on selected option

        // Event listener for form submission
        const scriptURL = 'https://script.google.com/macros/s/AKfycbz9-yIT5YUre-IWyhVpBFyAkeuKthf9QMacfwCVY2Wfpl5M-NTh6eI3RyItpbV9_wHqyA/exec';
        const form = document.forms['early_access_form'];
    
        function handleSubmit(e) {
          e.preventDefault();
          fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert("Thank you! Your form has been submitted!"))
            .then(() => { window.location.reload(); })
            .catch(error => console.log('Error', error.message))
        }
    
        // Attach event listener to the form
        form.addEventListener('submit', handleSubmit);
    
        // Clean up the event listener on component unmount
        return () => {
          form.removeEventListener('submit', handleSubmit);
        };
      }, []);
    
    
    return(
    <>
    <Head>
    <title>Cluster Protocol- Join the Wailist </title>
    <meta name='description' content="Join Cluster Protocol by Signing up this form"></meta>
    <link type='image' rel='icon' href="assets/BRAND MARK/PNG/02_WHITE.png"></link>
    </Head>
    <form className="WaitlistForm" action="#" method="post" id="earlyAccessForm" name="early_access_form">
  <h2
    style={{
        fontFamily: "sephora",
        fontWeight: 100,
        textAlign: "center",
        fontSize: "2rem"
    }}
    >
    Get Early Access to Cluster Protocol
  </h2>
  <p>
    Express your interest by providing your details below, and we will contact
    you in the upcoming months when we initiate the network access for early
    users.
  </p>
  <label htmlFor="compute">Select Task:</label>
  <select id="compute" name="compute" onChange={()=>updatePlaceholder()}>
    <option value="Supply Dataset">Supply Dataset</option>
    <option value="Supply Compute">Supply Compute</option>
    <option value="Train AI Model">Train AI Model</option>
  </select>
  <label htmlFor="discord">Discord ID:</label>
  <input
    type="text"
    id="discord"
    name="discord"
    placeholder="Enter Discord Tag"
    required=""
    />
  <label htmlFor="twitter">Twitter ID:</label>
  <input
    type="text"
    id="twitter"
    name="twitter"
    placeholder="Enter Twitter ID"
    required=""
    />
  <label htmlFor="email">Email address:</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="Enter Email"
    required=""
    />
  <label htmlFor="hardware">Remarks:</label>
  <textarea
    id="hardware"
    name="hardware"
    placeholder="Describe your compute requirements - what type of hardware do you need to access?"
    rows={4}
    required=""
    defaultValue={""}
    />
  <label
    style={{ display: "flex", justifyContent: "flex-start", margin: "1rem 0" }}
    >
    <input
      type="checkbox"
      style={{ width: "5rem", height: "1rem" }}
      id="emailCheckbox"
      name="interestedInEmail"
      />{" "}
    Are you interested in receiving future updates and emails?
  </label>
  <input type="submit" className="heropageButton" style={{border:'1px solid rebeccapurple'}} defaultValue="Submit" id="submit" />
</form>
</>

)
}
export default waitlist;