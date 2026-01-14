import React from "react";
import mainImg from "../Assets/chatImgs/jc-freeTrial-banner.webp";
import jazzcashimg from "../Assets/chatImgs/jazzcash_logo.webp";
import "../styles/landingjazzcash.css";
// import oops__icon from "../Assets/imgs/oops__icon.webp";


const LandingJazzCash = () => {

  return (
    <>
      <div className="JC--landing--page">
        <div className="JC--main--content">
          <img
            src={mainImg}
            alt="sports"
            width={345}
            height={333}
            className="lp-main-image"
          />
          <div className="lp-absolute-content">
            <div className="numberdiv">
              <p className="landingtext">Please enter your Jazz Cash Number</p>
              <form>
                <div className="jc--input-wraper">
                  <span>
                    <img
                      src={jazzcashimg}
                      width={60}
                      height={28}
                      alt="jazzcash"
                    />
                  </span>
                  <input
                    type="number"
                    placeholder="3XX - XXXXXXX"
                    className="numberinput"
                    max={10}
                  />
                </div>

                <p className="error">error message</p>
                <div
                  className="landingJC--default--btn"
                >
                  Continue
                </div>
              </form>
            </div>

            <div className="otpDiv">
              <div className="policytext">
                <div className="checkflex">
                  <input type="checkbox" />
                  <p>
                    By signing in, you agree to the{" "}
                    <a href="/terms-of-use" target="_blank">
                      Terms of Use
                    </a>{" "}
                    and{" "}
                    <a href="/privacy-policy" target="_blank">
                      Privacy Policy.
                    </a>
                  </p>
                </div>

                <div className="continue-text">
                  * Continue click krne se aap ke account se Rs. 1 kat jayega.
                  Yeh offer 24 hours ke liye valid hai jis ke baad automatically
                  Rs. 120/month inc. tax deduct honge.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingJazzCash;
