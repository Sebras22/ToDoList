import React from 'react';

const ResumeNote = ({note:{title, description}}) => {
    return (
        <div>
            <div> {title}, {description} </div>
        </div>
    );
};

export default ResumeNote;