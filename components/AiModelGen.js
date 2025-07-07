import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LuComputer, LuImage, LuLoader2, LuPlay, LuShare, LuSparkles, LuTextCursorInput, LuGlobe2, LuCpu, LuActivity, LuHome, LuHash, LuListOrdered } from "react-icons/lu";

const AiModelGen = ({ botData }) => {
  const [prompt, setPrompt] = useState({});
  const [elapsedTime, setElapsedTime] = useState(0);
  const [output, setOutput] = useState('');
  const [textOutput, setTextOutput] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [errorOccured, setErrorOccured] = useState(false);

  // Destructuring botData
  const { name, description,avatar, stats, cost, hardware, outputTime, apiEndpoint, inputFields, outputField } = botData;

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setPrompt(prevState => ({ ...prevState, [id]: value }));
  };

  
  const handleImageInputChange = (e, id) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setPrompt(prevState => ({
          ...prevState,
          [id]: base64String
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  
  useEffect(() => {
    let interval;
    if (isLoading) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 100);
      }, 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isLoading]);

  const fetchData = async () => {
    setErrorOccured(false);
    setElapsedTime(0);

    try {
      setIsLoading(true);
      setShowButton(false);
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(prompt),
      });
      const data = await response.json();
      if (outputField['type'] === 'image') {
        const base64Image = await getBase64Image(data[0]);
        setOutput(base64Image);
      } else if (outputField['type'] === 'text') {
        console.log(data);
        setTextOutput(JSON.stringify(data.join(" ")));
      }

    } catch (error) {
      console.error('Error fetching data:', error);
      setErrorOccured(true);
    } finally {
      setIsLoading(false);
      setShowButton(true);
    }
  };

  // Image conversion method
  const getBase64Image = async (url) => {
    console.log(url);
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  return (
    <>
      <div style={{ margin: "0 auto", marginTop: '25vh', width: '80%' }}>
        <Link href="/ai">
          <div style={{ background: '#101010e0', display: 'flex', border: '1px solid #4b4b4b', color: '#4b4b4b', width: 'fit-content', alignItems: 'center', padding: '0.2rem 0.5rem', borderRadius: '1.7rem', marginBottom: '3rem' }}>
            <LuHome size={20}></LuHome>
            <h1 style={{ fontSize: 20, fontWeight: 500, marginLeft: '0.5rem' }}>Back to All Models</h1>
          </div>
        </Link>
        <div style={{ display: 'flex', width: '100%', alignItems: 'center' }}>
          <div style={{ overflow:'hidden',background: '#ffffff29', borderRadius: '1rem', height: '4rem', display: 'flex', boxShadow: '0 0 7rem #e0c1ff', justifyContent: 'center', color: 'white', border: '1px solid #80808029', alignItems: 'center', width: '4rem', margin: 'auto 0', marginRight: '1rem' }}>
            {/* <LuImage size={30}></LuImage> */}
            <img style={{ height: '100%' }} src={"../modelavatar/" + botData['avatar']} />
          </div>
          <div>
            <h1 style={{ color: 'white', fontWeight: 500 }}>{name}</h1>
            <p style={{ color: 'white', margin: '1vh 0' }}>{description}</p>
          </div>
        </div>

        {/* MODEL COMPONENT */}
        <div style={{ marginTop: '5vh', minHeight: '40vh' }}>

          {/* Stats Container */}
          <div className="modelStatisticContainer">
            {stats.map((stat, index) => (
              <div key={index} className="modelStatsBox" style={{ color: stat.color, borderColor: stat.color }}>
                <stat.icon size={16}></stat.icon>
                <h1>{stat.label}</h1>
              </div>
            ))}
          </div>

          {/* FUNCTIONS ABOVE CONTAINER */}
          <div className="modelFunctionContainer">
            <div className="modelFunction">
              <LuPlay size={20}></LuPlay>
              <h1>Playground</h1>
            </div>
            <div className="modelFunction" style={{ color: 'grey' }}>
              <LuSparkles size={20}></LuSparkles>
              <h1 onClick={() => alert('API COMING SOON')}>API</h1>
            </div>
            <div onClick={() => navigator.share({ title: document.title, url: window.location.href }).then(() => console.log('Shared successfully')).catch((error) => console.error('Error sharing:', error))} className="modelFunction" style={{ color: 'grey' }}>
              <LuShare size={20}></LuShare>
              <h1>Share</h1>
            </div>
          </div>

{/* INPUT OUTPUT BOX */}
<div className="modelPageBoxContainer">
  <div className="modelPageInputBox">
    <h1>Input</h1>

    {inputFields.map((field, index) => (
      <div key={index}>
        {field.type === 'select' ? (
          <>
            <div className="modelLabelDiv">
              <LuListOrdered size={20}></LuListOrdered>
              <h1>{field.type}</h1>
              <h1 style={{color:'white'}}>{field.label}</h1>
            </div>
            <select id={field.id} className="modelPromptInput" value={prompt[field.id]} onChange={handleInputChange}>
              {field.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </>
        ) : field.type === 'image' ? (
          <>
            <div className="modelLabelDiv">
              <LuImage size={20}></LuImage>
              <h1>{field.type}</h1>
              <h1 style={{color:'white'}}>{field.label}</h1>
            </div>
            <input type="file"  style={{display:'none'}} accept="image/*" id={field.id} onChange={(e) => handleImageInputChange(e, field.id)} />
            {/* <input type='text' id={field.id} placeholder={`Enter ${field.label}`} value={prompt[field.id]} autoComplete="false" aria-autocomplete="none" className="modelPromptInput" onChange={handleInputChange} /> */}
            {prompt[field.id] && <img src={prompt[field.id]} alt="Selected" style={{ width: '40%',marginTop:'3rem', display:'flex', borderRadius:'1rem' }} />}
            <input type="button" className="modelPage_btn1" style={{margin:'2vh 0'}} value={"Upload Image {"+field.label+"}"} onClick={() => { document.getElementById(field.id).click() }} />


          </>
        ) : (
          <>
            <div className="modelLabelDiv">
              {field.type === 'number' ? (
                <LuHash size={20}></LuHash>
              ) : (
                <LuTextCursorInput size={20}></LuTextCursorInput>
              )}
              <h1>{field.datatype}</h1>
              <h1 style={{color:'white'}}>{field.label}</h1>
            </div>
            <input type={field.type} id={field.id} placeholder={`Enter ${field.label}`} value={prompt[field.id]} autoComplete="false" aria-autocomplete="none" className="modelPromptInput" onChange={handleInputChange} />
          </>
        )}
      </div>
    ))}


              {showButton && !isLoading && <button className="modelPage_btn1" onClick={fetchData}>SUBMIT</button>}
              {!showButton && isLoading && <button className="modelPage_btn2">Processing..</button>}
            </div>
            {/* OUTPUT */}
            <div className="modelPageOutputBox">
              <h1>Output</h1>
              <div className="modelStatsBox" style={{ margin: '3vh 0' }}>
                <h1>Time Elapsed {(elapsedTime / 1000).toFixed(1)} s</h1>
              </div>
              {errorOccured && <h1 style={{ color: '#ca6a6a', lineHeight: '1.24', fontSize: '1rem', fontWeight: '430', border: '1px solid #ff5f5f', width: 'fit-content', padding: '0 0.4rem', borderRadius: '1rem', margin: '2vh 0', background: '#ef000026' }}>AI Model Couldn't process your Request!</h1>}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem 2rem' }}>
                {isLoading && <div style={{ animation: 'spincircle 0.6s infinite linear', display: 'flex' }}>
                  <LuLoader2 color="white" size={20}></LuLoader2>
                </div>}
              </div>
              {!output && !textOutput &&
                <div className="modelOuputPlaceholder">
                  Output will be visible here
                </div>
              }
              {(outputField['type'] == "text") && textOutput && !isLoading &&
                <div className="modelOuputText">
                  <p>{textOutput}</p>
                </div>
              }
              {(outputField['type'] == "image") && output && !isLoading && (
                <div>
                  <img src={output} alt="cluster ai arena" style={{ height: '30rem', width: '30rem', color: 'transparent', background: '#161616', borderRadius: '0.5rem', objectFit: 'cover', border: '1px solid #393939', margin: '6vh 0' }} />
                  {output && <a href={output} download> <button className="modelPage_btn1" style={{ margin: '0' }}>DOWNLOAD</button></a>}

                </div>
              )}
            </div>
          </div>

          {/* FUNCTIONS below CONTAINER */}
          <div className="modelFunctionContainer" style={{ marginTop: '5rem' }}>
            <div className="modelFunction">
              <LuComputer size={20}></LuComputer>
              <h1>Run Time & Cost</h1>
            </div>
          </div>
          <h1 style={{ fontSize: '1.4rem', color: 'grey', fontWeight: '200' }}>This model costs approximately {cost} to run, but this varies depending on your inputs. Model runs on {hardware}, and generates the output in around {outputTime}.</h1>

        </div>
      </div>
    </>
  );
};

export default AiModelGen;
