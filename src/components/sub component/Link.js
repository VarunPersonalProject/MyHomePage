import React, { useRef, useState } from "react";
import "./SubComponent.css";
import { OverlayPanel } from "primereact/overlaypanel";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import ApiWrapper from "../../services/ApiWrapper";

const key = "link",
  _apiWrapper = new ApiWrapper();

export default function Link() {
  const popOver = useRef(),
    [link, setLinks] = useState(_apiWrapper.getStorage(key) || []),
    [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <span onClick={(_) => popOver.current.toggle(_)} className="Link">
        Link
        <OverlayPanel className="PopUp" ref={popOver}>
          <AddNewButton
            onClick={() => {
              setIsVisible(true);
            }}
          />
          <br />
          {link.map((element, index) => (
            <LinkControl key={index} name={element.name} url={element.url} />
          ))}
        </OverlayPanel>
      </span>
      <MyDialog
        visible={isVisible}
        onHide={() => {
          setIsVisible(false);
          _apiWrapper.setStorage(key, link);
        }}
        link={link}
        setLinks={setLinks}
      />
    </div>
  );
}

function AddNewButton({ onClick }) {
  return (
    <div className="LinkControl">
      <span onClick={onClick} className="InnerLink">
        Add New
      </span>
    </div>
  );
}

function oGetURL(url) {
  let oURL,
    sHTTP = "http";
  try {
    oURL = new URL(url.startsWith(sHTTP) ? url : `${sHTTP}://${url}`);
  } catch (eResponse) {
    oURL = {};
  }
  return oURL;
}

function LinkControl({ name, url }) {
  let oURL = oGetURL(url);

  return (
    <div className="LinkControl">
      <img
        src={`https://icons.duckduckgo.com/ip2/${oURL["hostname"] || ""}.ico`}
        alt="Logo"
        style={{ width: "16px", height: "16px", marginRight: ".5rem" }}
      />
      <span
        onClick={(_) => window.open(oURL["href"] || "", "_blank")}
        className="InnerLink"
      >
        {name}
      </span>
    </div>
  );
}

function MyDialog({ visible, onHide, setLinks, link }) {
  const [name, setName] = useState(""),
    [url, setURL] = useState("");
  return (
    <Dialog
      header="Add New"
      visible={visible}
      onHide={() => {
        setURL("");
        setName("");
        onHide();
      }}
    >
      <div className="Dialog">
        <InputText
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          value={name}
        />
        <InputText
          onChange={(e) => setURL(e.target.value)}
          placeholder="URL"
          value={url}
        />
        <Button
          label="Submit"
          link
          onClick={() => {
            if (name && url) {
              link.push({
                name: name,
                url: url,
              });
              setLinks(link);
              setURL("");
              setName("");
            }
            onHide();
          }}
        />
      </div>
    </Dialog>
  );
}
