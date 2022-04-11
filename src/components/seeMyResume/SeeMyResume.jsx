import "./seeMyResume.scss";
import { RiCloseLine } from "react-icons/ri";

export default function SeeMyResume() {
  const closeModal = () => {
    document.getElementById("modalShow").style.display = "none";
  };

  return (
    <>
      <div className="darkBG" onClick={closeModal}>
        <div className="centered">
          <div className="modal">
            <div className="modalHeader">
              <h5 className="heading">Billy Pr&eacute;sum&eacute; - Resume</h5>
            </div>
            <button className="closeBtn" onClick={closeModal}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className="modalContent">
              <iframe
                title="Resume"
                src={require("../../assets/resume.pdf")}
                alt="Resume"
                allowTransparency="true"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
