import React from "react";
import styles from "./HowWork.module.css";

export const HowWorks = () => {
  let classes = ["apply-process-area apply-bg pt-150 pb-150", styles.Work];
  classes = classes.join(" ");
  return (
    <div className={classes}>
      <div className="container">
        {/* <!-- Section Tittle --> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-tittle white-text text-center">
              <span>Apply process</span>
              <h2> How it works</h2>
            </div>
          </div>
        </div>
        {/* <!-- Apply Process Caption --> */}
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="single-process text-center mb-30">
              <div className="process-ion">
                <span className="flaticon-search"></span>
              </div>
              <div className="process-cap">
                <h5>1. Search a job</h5>
                <p>
                  Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                  tempor incididunt ut laborea.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-process text-center mb-30">
              <div className="process-ion">
                <span className="flaticon-curriculum-vitae"></span>
              </div>
              <div className="process-cap">
                <h5>2. Apply for job</h5>
                <p>
                  Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                  tempor incididunt ut laborea.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="single-process text-center mb-30">
              <div className="process-ion">
                <span className="flaticon-tour"></span>
              </div>
              <div className="process-cap">
                <h5>3. Get your job</h5>
                <p>
                  Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                  tempor incididunt ut laborea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
