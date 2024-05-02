import React from 'react';
import { useNavigation } from 'react-router-dom';

const Submitbutton = ({ label }) => {
    // Initialize navigation hook from react-router-dom
    const navigation = useNavigation();
    
    // Determine if the form is currently submitting
    const isSubmitting = navigation.state === 'submitting';
    
    return (
        <div>
            <button
                type="submit"
                className="btn btn-primary btn-block my-2"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    // Display loading spinner and "Sending" text when submitting
                    <>
                        <span className="loading loading-spinner">Sending</span>
                    </>
                ) : (
                    // Display provided label or default to "Submit"
                    label || 'Submit'
                )}
            </button>
        </div>
    );
};

export default Submitbutton;
