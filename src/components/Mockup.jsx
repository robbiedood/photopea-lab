import { useEffect } from "react";

const photopeaUrl = "https://www.photopea.com#%7B%22files%22:%5B%22https://www.photopea.com/api/img2/pug.png%22%5D,%22environment%22:%7B%7D%7D"


const Mockup = () => {

  var frame;
  
  useEffect(() => {
    frame = document.getElementById("photopea");
    console.log(frame);
  }, []);
  
  function runScript(){
    var script = "app.activeDocument.activeLayer.translate(20,20);";
    frame.contentWindow.postMessage(script, "*");
  }
  
  return (
    <div className="h-5/6">
          <iframe
            id="photopea"
            src={photopeaUrl}
            style={{ width: '100%', height: '100%', border: 'none'}}
          >
          </iframe>
          <button 
            className="bg-slate-400 block" 
            onClick={runScript}>
              Move The Image!
          </button>
    </div>

  );
};

export default Mockup;