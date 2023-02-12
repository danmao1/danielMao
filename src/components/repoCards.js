import React from "react";
import RepoCard from "react-repo-card";

function Repo() {
  return (
    <div>

      <div className="repo">

        <div style={{ width: "20%" }}>
              <RepoCard  username="danmao1" repository="2048" />
    
 
        </div>
        <div style={{ width: "20%" }}>

            <RepoCard  username="danmao1" repository="FaceEmotion_Detector_ML" />        
        </div>
        <div style={{ width: "20%" }}>
              <RepoCard  username="danmao1" repository="Python_in_Spanish" />
    
 
        </div>
        <div style={{ width: "20%" }}>
            <RepoCard  username="oss-slu" repository="Seeing-is-Believing" />
        </div>
        
      </div>
    </div>
  );
}

export default Repo;
