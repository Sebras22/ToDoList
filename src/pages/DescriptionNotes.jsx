import React from "react";

const DescriptionNotes = ({ note: { title, description } }) => {
  return (
    <div>
      <div>
        {title}, {description} CECI EST LA PAGE AVEC PLEIN D'INFO.
      </div>
    </div>
  );
};

export default DescriptionNotes;
