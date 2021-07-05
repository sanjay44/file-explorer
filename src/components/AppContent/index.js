import React from 'react';
import Header from '../Header';
import './styles.css';
import FolderIcon from '../../assets/images/folder-icon.svg';


/**
  The Application should support these features 
   - Create new folder
   - Create new file
   - Search files & folders
   - Rename files & folders
   - Delete files & folders
   - Show File explorer left panel showing hierarchy of files
   - Route using breadcrumbs


  Few must-have features
   - Add Night mode with ability to switch
   - Add proper accessibility to operate using keyboard navigation
   - Change View (list or flex-box) for folder & file items
  

  Some advanced features
   - Copy files & folders by drag and drop
   - Duplicate files & folders with content
   - Trash bin support
   - Select multiple files & folders to copy or move
   - Move files from side bar
 */





const AppContent = () => {
  return (
    <div className="app-content-wrapper">
      <Header />

      <div style={{ display: "flex", margin: "20px" }}>
        <div className="item-wrapper">
          <img className="item-icon" src={FolderIcon} alt="folder" />
          <p className="item-name">documents-react-file</p>
        </div>
        <div className="item-wrapper">
          <img className="item-icon" src={FolderIcon} alt="folder" />
          <p className="item-name">documents-react-file</p>
        </div>
        <div className="item-wrapper">
          <img className="item-icon" src={FolderIcon} alt="folder" />
          <p className="item-name">documents-react-file</p>
        </div>
        <div className="item-wrapper">
          <img className="item-icon" src={FolderIcon} alt="folder" />
          <p className="item-name">documents-react-file</p>
        </div>
      </div>
      
    </div>
  );
};

export default AppContent;
