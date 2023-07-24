import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle]=useState({
    //     backgroundColor:'white',
    //     color:'black'
    // });
    let myStyle={
        color:props.mode==='dark'?'white':'#042743',
        backgroundColor: props.mode ==='dark'?'#042743':'white',
        border: '2px solid',
        borderColor: props.mode === 'dark' ?'white' : '#042743'
    }
  return (
    <>
    <div className='text-center' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 className='mb-4'>About Us</h1>
    </div>
    
    <div className='container p-0 border-0 w-75' style={myStyle}>
        
    <div className="accordion" id="accordionExample">
        <div className="accordion-item">
            <h2 className="accordion-header border-0" style={myStyle}>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
            <strong>What is TextUtils?</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a comprehensive text manipulation and processing software designed to assist users with various text-related tasks. hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            <strong>How do I install TextUtils?</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
            You can download the latest version of TextUtils from our official website and follow the installation prompts..
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
            <strong>Is TextUtils compatible with all operating systems?</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
            Currently, TextUtils is available for Windows, macOS, and Linux. We are working on expanding our compatibility to other platforms.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4" style={myStyle}>
            <strong>What kind of text manipulations can I perform with TextUtils?</strong>
            </button>
            </h2>
            <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
            With TextUtils, you can perform operations such as find & replace, text sorting, regex searches, text encoding conversions, and many more.
            </div>
            </div>
        </div>

        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5" style={myStyle}>
            <strong>Is there a limit to the size of the text file I can upload?</strong>
            </button>
            </h2>
            <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
            The standard version of TextUtils supports files up to 50MB. For larger files, consider using TextUtils Pro.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6" style={myStyle}>
            <strong>How do I report bugs or issues?</strong>
            </button>
            </h2>
            <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
            Please visit our 'Support' section on the website and submit a detailed description of the issue you're facing.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7" style={myStyle}>
            <strong>Is there a mobile version of TextUtils available?</strong>
            </button>
            </h2>
            <div id="collapse7" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
            As of now, TextUtils is only available for desktop platforms. However, we're constantly exploring options to expand our availability.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8" style={myStyle}>
            <strong>How do I update to the latest version?</strong>
            </button>
            </h2>
            <div id="collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
            You'll receive a notification within the software when an update is available. Click on 'Update Now' to initiate the process.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9" style={myStyle}>
            <strong>Are my text files stored on your servers?</strong>
            </button>
            </h2>
            <div id="collapse9" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
            No, TextUtils processes all text locally on your machine, ensuring the privacy and security of your data.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10" style={myStyle}>
            <strong>Is there a trial period for TextUtils?</strong>
            </button>
            </h2>
            <div id="collapse10" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={myStyle}>
            <div className="accordion-body">
            Yes, we offer a 15-day free trial for new users. After the trial, you can decide to purchase a license or continue with a limited free version.
            </div>
            </div>
        </div>
        </div>        
        </div>
    </>
  )
}
