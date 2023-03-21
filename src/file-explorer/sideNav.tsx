import React, { useState } from "react";
import "./sideNav.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function SideNav() {
  const [filename, setFilename] = useState("");
  const [files, setFiles] = useState([""]);
  const [foldername, setFoldername] = useState("");
  const [folders, setFolders] = useState([""]);
  const [inputVisible, setInputVisible] = useState(false);
  const [folderVisible, setfolderVisible] = useState(false);
  const handleFileCreate = (event: any) => {
    if (event.key === "Enter") {
      setFiles([...files, filename]);
      setFilename("");
      setInputVisible(false);
    }
  };
  const handleFolderCreate = (event: any) => {
    if (event.key === "Enter") {
      setFolders([...folders, foldername]);
      setFoldername("");
      setfolderVisible(false);
    }
  };

  const createFile = () => {
    setInputVisible(true);
  };

  const createFolder = () => {
    setfolderVisible(true);
  };
  return (
    <div className="sidenav">
      <p>
        File Explorer &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="bi bi-file-earmark-fill" onClick={createFile}></i>
        &nbsp;&nbsp;
        <i className="bi bi-folder-fill" onClick={createFolder}></i>
      </p>
      {inputVisible && (
        <>
          <i className="bi bi-file-earmark-fill"></i>
          <input
            type="text"
            value={filename}
            onChange={(event) => setFilename(event.target.value)}
            onKeyPress={handleFileCreate}
            onBlur={() => {
              setInputVisible(false);
            }}
            autoFocus
          />
        </>
      )}

      {folderVisible && (
        <>
          <i className="bi bi-folder-fill"></i>
          <input
            type="text"
            value={foldername}
            onChange={(event) => setFoldername(event.target.value)}
            onKeyPress={handleFolderCreate}
            onBlur={() => {
              setfolderVisible(false);
            }}
            autoFocus
          />
        </>
      )}

      {folders.length > 0 &&
        folders.map((item, index) => (
          <li className="bi bi-folder-fill" key={index}>
            {item}
          </li>
        ))}

      {files.length > 0 &&
        files.map((item, index) => (
          <li className="bi bi-file-earmark-fill" key={index}>
            {item}
          </li>
        ))}

      {/* {files.length >= 1 &&
        files.map((item, index) => (
          <li className="bi bi-file-earmark-fill" key={index}>
            {item}
          </li>
        ))} */}

      {/* {folders.map((item, index) => (
        <li className="bi bi-folder-fill" key={index}>
          {item}
        </li>
      ))} */}
    </div>
  );
}

export default SideNav;
