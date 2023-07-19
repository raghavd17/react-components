import React from "react";
import style from "./_label.module.scss";

const Label = () => {
  console.log(" inside label compoent ");
  return (
    <main className="p-4">
      <h5 className="text-red-500 mb-4 text-5xl">Label Default Component </h5>
      
        <sections> 
          <div className="cluster" >
          <label className={`${style.label}`}>Label Default</label>
          <label className={`${style.label} ${style.value}`}>Label Value</label>
          <label className={`${style.label} ${style.primary}`}>Label Primary</label>
          <label className={`${style.label} ${style.secondary}`}>Label Secondary</label>
          <label className={`${style.label} ${style.success}`}>Label Success</label>
          <label className={`${style.label} ${style.warning}`}>Label Warning</label>
          <label className={`${style.label} ${style.error}`}>Label Warning</label>
          <label className={`${style.label} ${style.dark}`}>Label Dark</label>
          <label className={`${style.label} ${style.light}`}>Label Light</label>
          </div>
        </sections>

        <hr />
        <sections> 
          <h5 className="mb-4">Label with size</h5>
          <div className="cluster">
          <label className={`${style.label} ${style.xxs}`}>Label xxs</label>
          <label className={`${style.label} ${style.xs} ${style.label_value}`}>Label xs</label>
          <label className={`${style.label} ${style.sm} ${style.primary}`}>Label sm</label>
          <label className={`${style.label} ${style.md} ${style.secondary}`}>Label md</label>
          <label className={`${style.label} ${style.lg} ${style.success}`}>Label lg</label>
          <label className={`${style.label} ${style.xl} ${style.warning}`}>Label xl</label>
          <label className={`${style.label} ${style.xxl} ${style.error}`}>Label xxl</label>
          </div>
        </sections>
    <hr />
        <sections className="mt-24"> 
        <h5 className="mb-4">Label with Variants</h5>
          <div className="cluster" >
          <label className={`${style.label} ${style.tag}`}>Label Default</label>
          <label className={`${style.label} ${style.tag} ${style.primary}`}>Label Primary</label>
          <label className={`${style.label} ${style.tag} ${style.secondary}`}>Label Secondary</label>
          <label className={`${style.label} ${style.tag} ${style.success}`}>Label Success</label>
          <label className={`${style.label} ${style.tag} ${style.warning}`}>Label Warning</label>
          <label className={`${style.label} ${style.tag} ${style.error}`}>Label Warning</label>
          <label className={`${style.label} ${style.tag} ${style.dark}`}>Label Dark</label>
          <label className={`${style.label} ${style.tag} ${style.light}`}>Label Light</label>
          </div>
        </sections>
        <hr />
      
      <div className="cluster">
        <sections className="cluster">
        <div className="separated">
          <label className={`${style.label} ${style.dark}`}>Feb</label>
          
          <label className={`${style.label} ${style.dark}`}>14</label>
          
          <label className={`${style.label} ${style.dark}`}>2022</label>
        </div>

        <div>
          <label className={`${style.label} ${style.tag}`}>Feb</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag}`}>14</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag}`}>2022</label>
        </div>

        
        <div>
          <label className={`${style.label} ${style.tag} ${style.primary}`}>Feb</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.primary}`}>14</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.primary}`}>2022</label>
        </div>

        <div>
          <label className={`${style.label} ${style.tag} ${style.secondary}`}>Feb</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.secondary}`}>14</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.secondary}`}>2022</label>
        </div>

        <div>
          <label className={`${style.label} ${style.tag} ${style.success}`}>Feb</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.success}`}>14</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.success}`}>2022</label>
        </div>

        <div>
          <label className={`${style.label} ${style.tag} ${style.warning}`}>Feb</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.warning}`}>14</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.warning}`}>2022</label>
        </div>

        <div>
          <label className={`${style.label} ${style.tag} ${style.error}`}>Feb</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.error}`}>14</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.error}`}>2022</label>
        </div>

        <div>
          <label className={`${style.label} ${style.tag} ${style.dark}`}>Feb</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.dark}`}>14</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.dark}`}>2022</label>
        </div>
        <div>
          <label className={`${style.label} ${style.tag} ${style.light}`}>Feb</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.light}`}>14</label>
          <span className="separator"></span>
          <label className={`${style.label} ${style.tag} ${style.light}`}>2022</label>
        </div>
        </sections>
      </div>
      
     
    </main>
  );
};

export default Label;
